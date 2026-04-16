-- ═══════════════════════════════════════════════════════════════
-- PROMTI — Full Supabase Schema
-- Paste this entire file into your Supabase SQL Editor and run it.
-- ═══════════════════════════════════════════════════════════════

-- ─── 1. User Profiles ────────────────────────────────────────────
-- Extends auth.users (created automatically when user signs up)
create table if not exists public.profiles (
  id          uuid references auth.users(id) on delete cascade primary key,
  full_name   text,
  avatar_url  text,
  created_at  timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─── 2. Site Stats ───────────────────────────────────────────────
create table if not exists public.site_stats (
  id                serial primary key,
  base_user_count   int  default 2314,
  launch_date       date default '2025-01-15',
  daily_increment   numeric(4,2) default 2.3
);

-- Seed with one row
insert into public.site_stats (base_user_count, launch_date, daily_increment)
values (2314, '2025-01-15', 2.3)
on conflict do nothing;

-- View: compute live user count
create or replace view public.live_user_count as
select
  (base_user_count + floor(
    extract(epoch from (now() - launch_date::timestamptz)) / 86400 * daily_increment
  ))::int as count
from public.site_stats
limit 1;

-- ─── 3. Saved Prompts ────────────────────────────────────────────
create table if not exists public.saved_prompts (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references auth.users(id) on delete cascade not null,
  prompt_id   text not null,   -- references our static data slug
  category    text not null,
  title       text not null,
  content     text not null,
  created_at  timestamptz default now(),
  unique (user_id, prompt_id)
);

-- ─── 4. Prompt Copy Analytics ────────────────────────────────────
create table if not exists public.prompt_analytics (
  id          uuid primary key default gen_random_uuid(),
  prompt_id   text not null,
  category    text not null,
  platform    text default 'unknown',
  user_id     uuid references auth.users(id) on delete set null,
  created_at  timestamptz default now()
);

-- ─── 5. Waitlist ─────────────────────────────────────────────────
create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  name       text,
  created_at timestamptz default now()
);

-- ═══════════════════════════════════════════════════════════════
-- Row Level Security
-- ═══════════════════════════════════════════════════════════════

alter table public.profiles         enable row level security;
alter table public.saved_prompts    enable row level security;
alter table public.prompt_analytics enable row level security;
alter table public.waitlist         enable row level security;

-- Profiles: users can read/update their own
create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- Saved prompts: users manage their own
create policy "Users can view own saved prompts"
  on public.saved_prompts for select using (auth.uid() = user_id);
create policy "Users can insert own saved prompts"
  on public.saved_prompts for insert with check (auth.uid() = user_id);
create policy "Users can delete own saved prompts"
  on public.saved_prompts for delete using (auth.uid() = user_id);

-- Analytics: insert only
create policy "Anyone can insert analytics"
  on public.prompt_analytics for insert with check (true);

-- Waitlist: insert only
create policy "Anyone can join waitlist"
  on public.waitlist for insert with check (true);

-- Site stats: public read
create policy "Public can read stats"
  on public.site_stats for select using (true);

-- ═══════════════════════════════════════════════════════════════
-- Supabase Auth Email Settings (configure in Dashboard)
-- ═══════════════════════════════════════════════════════════════
-- 1. Go to Authentication → Email Templates → Confirm signup
-- 2. Set Subject: "Your PROMTI verification code"
-- 3. Set Body to include: <h2>{{ .Token }}</h2>
--    This makes Supabase send the 6-digit OTP code.
-- 4. In Authentication → Settings → enable "Email OTP"
-- 5. Set OTP expiry to 600 seconds (10 minutes)
-- ═══════════════════════════════════════════════════════════════
