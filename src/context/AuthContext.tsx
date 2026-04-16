"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AuthCtx = {
  user: User | null;
  loading: boolean;
  refresh: () => Promise<void>;
};

const Ctx = createContext<AuthCtx>({ user: null, loading: true, refresh: async () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]       = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    if (!supabase) { setLoading(false); return; }
    const { data } = await supabase.auth.getUser();
    setUser(data.user ?? null);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
    if (!supabase) return;
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return <Ctx.Provider value={{ user, loading, refresh }}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
