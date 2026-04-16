export type Prompt = {
  id: string;
  title: string;
  description: string;
  prompt: string;
  tags: string[];
  isPremium: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  prompts: Prompt[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "homework",
    name: "Homework & Study",
    description: "Tackle assignments, understand concepts, and study smarter",
    icon: "BookOpen",
    color: "#818cf8",
    prompts: [
      {
        id: "hw-1",
        title: "Write an Essay (Sounds Human)",
        description: "Natural, student-written essay that avoids AI patterns",
        prompt: `Write a [WORD COUNT]-word essay on: [TOPIC].

Write from the perspective of a [GRADE LEVEL] student who researched this topic for [TIME PERIOD].

Rules:
- Mix short and long sentences naturally — don't be formulaic
- Include 1-2 personal opinions or observations to feel authentic
- Use transition words casually, not mechanically
- Structure: hook intro → [N] body paragraphs → reflective conclusion
- Reference [SOURCE TYPE] for evidence
- Avoid bullet points — write in continuous prose
- Use 1-2 contractions (it's, doesn't) to sound human
- Tone: [academic but conversational / formal / reflective]

Topic: [PASTE YOUR TOPIC OR ASSIGNMENT INSTRUCTIONS]`,
        tags: ["essay", "writing", "academic", "homework"],
        isPremium: false,
      },
      {
        id: "hw-2",
        title: "Explain Any Concept Simply",
        description: "Break down complex topics into clear, easy explanations",
        prompt: `Explain [CONCEPT] to me as if I am a [GRADE LEVEL / AGE] student with no prior knowledge of this subject.

Use:
- A relatable real-world analogy (something from everyday life)
- Short sentences and simple vocabulary
- A step-by-step breakdown if it's a process
- One concrete example I can visualise

After the explanation, give me:
1. A one-sentence summary I can memorise
2. The most common mistake students make about this topic
3. One question I should be able to answer after understanding this

Topic: [TOPIC]`,
        tags: ["learning", "explanation", "study"],
        isPremium: false,
      },
      {
        id: "hw-3",
        title: "Create a Study Plan",
        description: "Build a personalised, realistic study schedule",
        prompt: `Create a detailed study plan for [SUBJECT / EXAM NAME].

My situation:
- Available time per day: [HOURS]
- Days until exam/deadline: [DAYS]
- Current understanding: [beginner / intermediate / advanced]
- Weak areas: [LIST YOUR WEAK TOPICS]
- Learning style: [visual / reading / practice problems / mixed]

Output format:
- Day-by-day schedule for the first week (with specific topics and time blocks)
- Weekly overview for remaining weeks
- Daily review habit (15-minute slot)
- Which topics to prioritise and why
- 3 resources to use for each weak area

Make it aggressive but realistic — I want to actually finish it.`,
        tags: ["study", "plan", "exam", "schedule"],
        isPremium: false,
      },
      {
        id: "hw-4",
        title: "Solve Maths Step by Step",
        description: "Get full working with explanations for any maths problem",
        prompt: `Solve this maths problem step by step. Show every single step — do not skip any working.

Problem: [PASTE PROBLEM HERE]

For each step:
1. State what you are doing and why
2. Show the full calculation
3. Check the result makes sense

At the end:
- Write the final answer clearly
- Explain the key concept this problem tests
- Give me a similar practice problem with the answer so I can check my understanding

If there are multiple methods, show the easiest one first, then mention the alternative.`,
        tags: ["maths", "problem-solving", "steps"],
        isPremium: true,
      },
      {
        id: "hw-5",
        title: "Summarise a Research Paper",
        description: "Extract the key points from any academic paper",
        prompt: `Read this academic paper/article and give me a structured summary.

[PASTE PAPER TEXT OR ABSTRACT HERE]

I need:
1. **Core argument** — What is the paper trying to prove? (2-3 sentences)
2. **Methodology** — How did they conduct the research?
3. **Key findings** — The 3-5 most important results
4. **Limitations** — What the authors admit the study cannot claim
5. **Relevance** — How does this connect to [YOUR TOPIC/ESSAY]?
6. **Quotable sentence** — One strong quote I can use directly (with page/section ref if available)

Write it so I can understand and use this paper without reading the full thing.`,
        tags: ["research", "summary", "academic"],
        isPremium: true,
      },
      {
        id: "hw-6",
        title: "Generate Flashcards",
        description: "Turn any notes into study-ready flashcard pairs",
        prompt: `Turn the following notes/text into [NUMBER] flashcard pairs for studying.

[PASTE YOUR NOTES HERE]

Format each card as:
FRONT: [Question or term — make it clear and unambiguous]
BACK: [Answer — concise, 1-3 sentences maximum]

Rules:
- Focus on definitions, causes/effects, key dates, formulas, and processes
- Make questions specific — not "What is important?" but "What caused X?"
- Order from basic to complex
- Include 5 "tricky" cards that test common misconceptions
- Add a memory tip on the back for the 5 hardest cards

Subject: [SUBJECT]
Exam type: [Multiple choice / written / oral]`,
        tags: ["flashcards", "revision", "memorisation"],
        isPremium: true,
      },
      {
        id: "hw-7",
        title: "Generate Quiz Questions",
        description: "Create practice questions at the right difficulty level",
        prompt: `Create a practice quiz for [TOPIC / CHAPTER].

Specifications:
- [NUMBER] multiple choice questions
- [NUMBER] short answer questions
- [NUMBER] extended response questions
- Difficulty level: [easy / medium / hard / mixed]
- Based on: [EXAM BOARD / SYLLABUS / TEXTBOOK CHAPTER]

For each question:
- Include the question
- For MCQ: 4 options with one correct answer
- Mark the correct answer with ✓
- Add a 1-sentence explanation of why it's correct

At the end, add 3 "exam technique tips" specific to this topic.`,
        tags: ["quiz", "practice", "exam prep"],
        isPremium: true,
      },
      {
        id: "hw-8",
        title: "Format Citations (APA, MLA, Harvard)",
        description: "Get perfectly formatted citations for any source",
        prompt: `Format these sources as citations in [APA 7th / MLA 9th / Harvard / Chicago] style.

Sources to format:
[PASTE YOUR SOURCES — include as much info as you have: author, title, year, publisher, URL, etc.]

For each source, provide:
1. The correctly formatted in-text citation (author, year)
2. The full reference list entry
3. A note if any information is missing that affects formatting

Also give me:
- The formatted references list in alphabetical order
- A reminder of the top 3 mistakes students make with [CITATION STYLE]`,
        tags: ["citations", "referencing", "academic"],
        isPremium: true,
      },
      {
        id: "hw-9",
        title: "Argue Both Sides of a Debate",
        description: "Build a full argument for AND against any position",
        prompt: `Build a balanced debate brief on: [TOPIC / MOTION].

Side A — FOR the motion:
- 3 strongest arguments (with evidence or reasoning)
- Best supporting statistic or real-world example for each
- Pre-empt the top 2 counterarguments and refute them

Side B — AGAINST the motion:
- 3 strongest arguments (with evidence or reasoning)
- Best supporting statistic or real-world example for each
- Pre-empt the top 2 counterarguments and refute them

At the end:
- Which side has the stronger logical case and why
- The single most important thing each side must prove to win
- 3 questions a judge or opponent is most likely to ask

Level: [high school / undergraduate / competitive debate / casual]`,
        tags: ["debate", "argument", "critical thinking", "essay"],
        isPremium: true,
      },
      {
        id: "hw-10",
        title: "Simplify Any Academic Text",
        description: "Turn dense jargon-filled passages into plain English",
        prompt: `Rewrite this academic/technical text so a [GRADE LEVEL / general reader / non-specialist] can fully understand it.

Original text:
[PASTE TEXT HERE]

Rules:
- Keep all key ideas — don't oversimplify to the point of being wrong
- Replace jargon with plain alternatives (if a technical term is unavoidable, define it in brackets)
- Break long sentences into 2-3 shorter ones
- Use active voice wherever possible
- Add a one-sentence summary at the start and end

Also give me:
- A list of every technical term used + a plain English definition
- One analogy that explains the core concept
- What this text is arguing or trying to prove (2 sentences)`,
        tags: ["simplify", "reading comprehension", "study"],
        isPremium: true,
      },
      {
        id: "hw-11",
        title: "Critical Analysis Framework",
        description: "Analyse any text, film, or artwork with academic depth",
        prompt: `Provide a critical analysis of [WORK TITLE] by [AUTHOR/CREATOR].

Type: [novel / film / poem / artwork / speech / theory / news article]
For assignment: [SUBJECT / COURSE / PURPOSE]
Focus: [theme / characterisation / narrative technique / ideology / historical context / visual language]

Analysis structure:
1. **Context** — when, why, and for whom this was created
2. **Central argument/theme** — what the work is "about" beneath the surface
3. **Key techniques** — 3 specific methods used and what effect they create
4. **Evidence** — 3 specific quotes/scenes/moments with close analysis
5. **Critical perspectives** — 2 different theoretical lenses (feminist / Marxist / post-colonial / psychoanalytic etc.)
6. **Limitations** — what the work fails to do or address
7. **Significance** — why this work matters in its field/time

Academic style. Cite specific moments, not general impressions.`,
        tags: ["analysis", "critical thinking", "literature", "essay"],
        isPremium: true,
      },
      {
        id: "hw-12",
        title: "Plan a Group Project",
        description: "Structure roles, timeline, and tasks for any group assignment",
        prompt: `Create a complete group project plan for: [PROJECT NAME / ASSIGNMENT BRIEF].

Group details:
- Number of members: [NUMBER]
- Individual strengths (if known): [LIST or "unknown"]
- Deadline: [DATE]
- Submission format: [presentation / report / prototype / performance]
- Assessment criteria: [PASTE RUBRIC or describe]

Deliver:
1. **Role assignments** — who does what (with rationale based on task, not just strengths)
2. **Milestone timeline** — backwards from deadline with buffer days
3. **Task breakdown** — every individual deliverable with owner and due date
4. **Collaboration tools** — what to use for documents / communication / tracking
5. **Meeting agenda template** — for weekly check-ins (15 minutes max)
6. **Conflict protocol** — what to do if someone isn't pulling their weight
7. **Final review checklist** — 48 hours before submission

Make it specific enough to copy and share with the group today.`,
        tags: ["group work", "project planning", "teamwork"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "frontend",
    name: "Frontend Development",
    description: "Build stunning UIs with React, CSS, Tailwind, and modern tools",
    icon: "Code2",
    color: "#38bdf8",
    prompts: [
      {
        id: "fe-1",
        title: "Build a React Component",
        description: "Generate a modern, production-ready React component",
        prompt: `You are a senior React developer who writes clean, production-grade code.

Build a [COMPONENT NAME] React component with the following requirements:

Functionality:
- [DESCRIBE WHAT IT SHOULD DO]
- [LIST KEY INTERACTIONS]

Props:
- [PROP 1]: [type] — [description]
- [PROP 2]: [type] — [description]

Technical requirements:
- TypeScript with proper types/interfaces
- Tailwind CSS for styling (or CSS Modules if specified: [STYLING CHOICE])
- Accessible — correct ARIA attributes, keyboard navigation
- Mobile responsive
- No external dependencies unless necessary

Include:
1. The component code
2. Usage example with all props
3. Notes on any edge cases I should handle`,
        tags: ["react", "component", "typescript"],
        isPremium: false,
      },
      {
        id: "fe-2",
        title: "Design a Responsive Layout",
        description: "Create responsive CSS/Tailwind layouts for any page",
        prompt: `Design a fully responsive layout for a [PAGE TYPE] page.

Layout requirements:
- Desktop: [DESCRIBE DESKTOP LAYOUT]
- Tablet: [DESCRIBE TABLET LAYOUT]
- Mobile: [DESCRIBE MOBILE LAYOUT]

Breakpoints: [Tailwind defaults / custom: specify]

Include:
- CSS Grid or Flexbox approach (recommend the best for this layout)
- Tailwind utility classes OR pure CSS (specify: [CHOICE])
- Smooth transitions between breakpoints
- No horizontal scroll on any screen size

Special requirements: [DARK MODE / RTL / PRINT STYLES / etc.]

Also provide: common pitfalls to avoid for this specific layout.`,
        tags: ["css", "responsive", "layout", "tailwind"],
        isPremium: false,
      },
      {
        id: "fe-3",
        title: "Create a Tailwind UI Component",
        description: "Get beautiful, copy-paste ready Tailwind components",
        prompt: `Create a [COMPONENT TYPE: card / button / modal / navbar / form / etc.] component using only Tailwind CSS classes.

Style:
- Theme: [dark / light / glassmorphism / neumorphism / minimal / bold]
- Color palette: [primary color / use project colors: specify]
- Border radius: [sharp / medium / rounded / pill]
- Shadow: [none / soft / strong]

Variants needed:
- Default state
- Hover state
- Active/pressed state
- [Disabled state if applicable]
- [Error state if applicable]

Output:
1. Full HTML + Tailwind classes (no custom CSS needed)
2. React/JSX version
3. Dark mode version using dark: prefix
4. Explain any non-obvious Tailwind choices`,
        tags: ["tailwind", "component", "design"],
        isPremium: false,
      },
      {
        id: "fe-4",
        title: "Audit Code for Performance",
        description: "Identify and fix frontend performance bottlenecks",
        prompt: `Audit this frontend code for performance issues and provide specific fixes.

[PASTE YOUR CODE HERE]

Analyse for:
1. Unnecessary re-renders (React.memo, useMemo, useCallback opportunities)
2. Large bundle size (code splitting, lazy loading)
3. Image optimisation issues
4. Expensive DOM operations
5. Memory leaks (event listeners not cleaned up, infinite loops)
6. Slow network requests (caching, debouncing, batching)

For each issue found:
- Severity: [critical / major / minor]
- Explanation: why this hurts performance
- Fix: the corrected code
- Metric impact: what this improves (LCP, FID, CLS, etc.)

Also give me a prioritised action list — fix these in order for maximum impact.`,
        tags: ["performance", "optimization", "react"],
        isPremium: true,
      },
      {
        id: "fe-5",
        title: "Accessibility (a11y) Review",
        description: "Review and fix accessibility issues in your UI code",
        prompt: `Review this UI code for accessibility (WCAG 2.1 AA compliance) and fix all issues.

[PASTE YOUR HTML/JSX HERE]

Check for:
1. Missing or incorrect ARIA labels/roles
2. Keyboard navigation (tab order, focus management, escape key)
3. Colour contrast ratios (flag anything below 4.5:1)
4. Screen reader experience (alt text, live regions, announcements)
5. Form accessibility (labels, error messages, required fields)
6. Focus indicators (visible focus rings)
7. Semantic HTML structure

Output:
- Issue list with WCAG criteria reference
- Corrected code for each issue
- Testing checklist (how to manually verify the fixes)
- Tools I can use to automate future checks`,
        tags: ["accessibility", "a11y", "WCAG"],
        isPremium: true,
      },
      {
        id: "fe-6",
        title: "Build CSS Animations",
        description: "Create smooth, modern animations and micro-interactions",
        prompt: `Create [ANIMATION TYPE] animations for [ELEMENT / INTERACTION].

Animation brief:
- What triggers it: [hover / click / scroll / page load / route change]
- What should animate: [position / opacity / scale / rotation / color / path]
- Feel: [snappy / smooth / bouncy / dramatic / subtle]
- Duration: [fast 150ms / medium 300ms / slow 600ms / custom]

Technique: [CSS keyframes / CSS transitions / Framer Motion / GSAP — specify]

Provide:
1. The animation code (CSS or JS)
2. Easing function recommendation and why
3. Performance tip (will-change, transform vs top/left, etc.)
4. Reduced motion version (prefers-reduced-motion media query)
5. Mobile performance consideration`,
        tags: ["animation", "css", "motion", "micro-interactions"],
        isPremium: true,
      },
      {
        id: "fe-7",
        title: "TypeScript Types Generator",
        description: "Generate TypeScript interfaces from JSON or API responses",
        prompt: `Generate TypeScript interfaces/types for this data.

[PASTE YOUR JSON, API RESPONSE, OR DESCRIPTION HERE]

Requirements:
- Create named interfaces (not inline types)
- Use proper union types for optional/nullable fields
- Add JSDoc comments explaining non-obvious fields
- Suggest whether to use interface vs type for each and why
- Handle nested objects as separate interfaces
- Handle arrays correctly
- Mark optional fields with ?
- Create utility types if useful (Partial, Pick, Omit variants)

Also provide:
- A type guard function for the main type
- Zod schema for runtime validation (if applicable)`,
        tags: ["typescript", "types", "interfaces"],
        isPremium: true,
      },
      {
        id: "fe-8",
        title: "Debug JavaScript Error",
        description: "Diagnose and fix any JavaScript or React error",
        prompt: `Debug this JavaScript/React error and explain the root cause.

Error message: [PASTE EXACT ERROR]
Stack trace: [PASTE STACK TRACE]
Code causing the error: [PASTE RELEVANT CODE]
Context: [What were you doing when it occurred? What did you expect?]
Environment: [Browser / Node / React version / etc.]

I need:
1. Root cause: what exactly is going wrong and why
2. The fix: corrected code with inline comments
3. Why your original code caused this: conceptual explanation
4. How to prevent this class of error in the future
5. Related errors to watch for`,
        tags: ["debugging", "javascript", "react", "error"],
        isPremium: true,
      },
      {
        id: "fe-9",
        title: "Write a Custom React Hook",
        description: "Reusable hooks that extract logic and keep components clean",
        prompt: `Write a custom React hook called use[NAME] that handles [WHAT IT DOES].

Functionality:
- [DESCRIBE THE LOGIC THIS HOOK SHOULD ENCAPSULATE]
- [INPUT PARAMETERS WITH TYPES]
- [WHAT IT RETURNS]

Technical requirements:
- TypeScript with proper generics if needed
- Handle loading, error, and success states
- Cleanup on unmount (event listeners, subscriptions, timers)
- Stable references (useMemo / useCallback where needed)
- Works with React 18 strict mode (no double-invocation side effects)

Include:
1. The hook code (fully typed)
2. Usage example in a component
3. What to do if the hook is used before the component mounts
4. Jest test for the core behaviour`,
        tags: ["react", "hooks", "typescript", "reusable"],
        isPremium: true,
      },
      {
        id: "fe-10",
        title: "SEO & Open Graph Meta Tags",
        description: "Complete meta tag setup for any page — search and social",
        prompt: `Write complete SEO and social meta tags for this page.

Page details:
- Title: [PAGE TITLE]
- Description: [WHAT THIS PAGE IS ABOUT — 2 sentences]
- URL: [FULL URL]
- Image: [URL of hero image — dimensions: 1200×630px recommended]
- Type: [website / article / product]
- Author (if article): [AUTHOR NAME]
- Published date (if article): [DATE]

Generate:
1. Standard HTML meta tags (title, description, robots, canonical)
2. Open Graph tags (og:title, og:description, og:image, og:url, og:type)
3. Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
4. JSON-LD structured data for [webpage / article / product]
5. Next.js 13+ metadata object (export const metadata = {...})

Also: 3 title variations under 60 characters for A/B testing.`,
        tags: ["SEO", "meta tags", "Open Graph", "Next.js"],
        isPremium: true,
      },
      {
        id: "fe-11",
        title: "Implement Dark Mode",
        description: "Complete dark mode system that persists and respects system preference",
        prompt: `Implement a complete dark mode system for a [React / Next.js / vanilla JS] app.

Current setup:
- Styling: [Tailwind / CSS variables / CSS modules / styled-components]
- State management: [React context / Zustand / Redux / none]
- SSR: [yes — Next.js / no — SPA]

Requirements:
- Respect system preference by default (prefers-color-scheme)
- Allow manual toggle (overrides system preference)
- Persist choice in localStorage
- No flash of wrong theme on page load (SSR-safe)
- Smooth transition between modes

Deliver:
1. Theme provider/context setup
2. useTheme hook (returns current theme + toggle function)
3. Toggle button component
4. CSS variable definitions for both modes
5. How to use dark: classes in Tailwind
6. How to prevent SSR theme flash (Next.js specific if applicable)`,
        tags: ["dark mode", "theming", "CSS variables", "UX"],
        isPremium: true,
      },
      {
        id: "fe-12",
        title: "Build a Form with Validation",
        description: "Complete form with real-time validation, errors, and submission",
        prompt: `Build a [FORM TYPE] form in React with full validation.

Fields needed:
[LIST EACH FIELD: name, type, required/optional, validation rules]

Example:
- email: string, required, must be valid email format
- password: string, required, min 8 chars, must contain uppercase and number
- phone: string, optional, must match [REGION] format

Validation library: [React Hook Form + Zod / Formik + Yup / custom]

Requirements:
- Real-time validation (on blur, not on submit)
- Error messages specific enough to be helpful (not just "invalid")
- Loading state on submit (disable button, show spinner)
- Success state (clear form or redirect)
- Accessible: errors announced to screen readers, labels linked to inputs

Also include:
- The Zod / Yup schema
- The submit handler (show me how to connect to an API)
- How to handle server-side validation errors (field-level)`,
        tags: ["forms", "validation", "react hook form", "UX"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "backend",
    name: "Backend & APIs",
    description: "Build robust APIs, databases, and server-side systems",
    icon: "Server",
    color: "#34d399",
    prompts: [
      {
        id: "be-1",
        title: "Design a REST API",
        description: "Architect clean, well-structured REST endpoints",
        prompt: `Design a complete REST API for [APPLICATION / FEATURE NAME].

Context:
- Application type: [SaaS / mobile app / internal tool / marketplace]
- Tech stack: [Node.js/Express / FastAPI / Django / etc.]
- Authentication: [JWT / OAuth / API key / session]

Resources needed: [LIST YOUR MAIN DATA ENTITIES]

For each resource, define:
- GET (list + single item)
- POST (create)
- PUT/PATCH (update)
- DELETE

Output format for each endpoint:
- Method + URL path
- Request body (JSON schema)
- Response body (JSON schema)
- Status codes (success + errors)
- Auth required: yes/no

Also provide:
- Versioning strategy (/api/v1/)
- Error response format (consistent structure)
- Rate limiting recommendations
- 3 non-obvious design decisions to consider`,
        tags: ["API", "REST", "backend", "architecture"],
        isPremium: false,
      },
      {
        id: "be-2",
        title: "Write a Database Schema",
        description: "Design normalised SQL schemas for any application",
        prompt: `Design a PostgreSQL database schema for [APPLICATION NAME / USE CASE].

Application overview:
[DESCRIBE WHAT YOUR APP DOES IN 2-3 SENTENCES]

Main entities needed: [LIST THEM]

For each table:
- Column names, types, constraints
- Primary and foreign keys
- Indexes (which columns to index and why)
- Timestamps (created_at, updated_at)

Additional requirements:
- [Soft deletes / hard deletes]
- [Multi-tenancy / single tenant]
- [Row level security needed: yes/no]

Output:
1. Complete CREATE TABLE SQL
2. ERD description (which tables relate to which)
3. 3 example queries that will be common in this app
4. Performance considerations for scale`,
        tags: ["database", "SQL", "PostgreSQL", "schema"],
        isPremium: false,
      },
      {
        id: "be-3",
        title: "Write API Authentication",
        description: "Implement secure JWT or session authentication",
        prompt: `Implement [JWT / session / OAuth] authentication for a [FRAMEWORK] application.

Requirements:
- Register: email + password
- Login: return access token + refresh token
- Protected routes middleware
- Token refresh endpoint
- Logout (invalidate tokens)
- Password reset flow

Tech stack: [Node.js + Express / FastAPI / etc.]
Database: [PostgreSQL / MongoDB / etc.]

Security requirements:
- Password hashing (bcrypt)
- Token expiry: access [15min] / refresh [7 days]
- Rate limiting on auth endpoints
- Brute force protection

Provide:
1. Complete working code for each piece
2. Database tables/models needed
3. Environment variables to configure
4. Security checklist — what I must NOT do`,
        tags: ["authentication", "JWT", "security", "auth"],
        isPremium: false,
      },
      {
        id: "be-4",
        title: "Optimise a Slow SQL Query",
        description: "Analyse and fix slow database queries",
        prompt: `Optimise this slow SQL query and explain what you changed.

Query: [PASTE YOUR QUERY]
Current execution time: [TIME]
Table sizes: [APPROXIMATE ROW COUNTS]
Current indexes: [LIST EXISTING INDEXES]

Analyse:
1. Query execution plan issues (N+1, full table scans, etc.)
2. Missing indexes
3. Inefficient JOINs or subqueries
4. Data type mismatches
5. Opportunities for query rewriting

Provide:
- Optimised query
- Indexes to add (with CREATE INDEX statements)
- Expected performance improvement
- EXPLAIN ANALYSE output interpretation
- Long-term schema changes to consider`,
        tags: ["SQL", "performance", "database", "query"],
        isPremium: true,
      },
      {
        id: "be-5",
        title: "Build a Webhook Handler",
        description: "Implement secure, reliable webhook receivers",
        prompt: `Build a webhook handler for [SERVICE: Stripe / GitHub / Twilio / etc.] in [FRAMEWORK].

Requirements:
- Verify webhook signature/secret
- Parse event types
- Idempotency (handle duplicate events)
- Queue processing for slow operations
- Error handling and retries
- Logging

Handle these specific events:
[LIST THE WEBHOOK EVENTS YOU NEED]

Code should include:
1. Signature verification middleware
2. Event router
3. Individual event handlers
4. Database update logic
5. Retry mechanism
6. Test payload examples`,
        tags: ["webhook", "integration", "backend"],
        isPremium: true,
      },
      {
        id: "be-6",
        title: "Docker Setup for Production",
        description: "Create production-ready Docker and docker-compose configs",
        prompt: `Create a production-ready Docker setup for my [APPLICATION TYPE] application.

Stack:
- App: [language/framework + version]
- Database: [PostgreSQL / MongoDB / etc.]
- Cache: [Redis / none]
- Reverse proxy: [Nginx / Traefik]

Requirements:
- Multi-stage build (minimal production image)
- Non-root user inside container
- Health checks
- Environment variable management
- Volume mounts for persistent data
- Network isolation

Provide:
1. Dockerfile (optimised, with explanations)
2. docker-compose.yml for production
3. docker-compose.dev.yml for local development
4. .dockerignore file
5. Deployment commands
6. Common issues and how to debug them`,
        tags: ["docker", "devops", "deployment"],
        isPremium: true,
      },
      {
        id: "be-7",
        title: "Implement Caching Strategy",
        description: "Add Redis caching to dramatically speed up your API",
        prompt: `Implement a caching strategy for [API / APPLICATION] using Redis.

Current performance issue: [DESCRIBE THE BOTTLENECK]
Cache target: [What data to cache and why]
Tech stack: [Node.js / Python / etc.]

Implement:
- Cache-aside pattern for [ENDPOINT / QUERY]
- TTL strategy per data type
- Cache invalidation on write/update
- Cache warming (if applicable)
- Cache bypass header for debugging

Code should include:
1. Redis client setup
2. Cache middleware/decorator
3. Invalidation logic
4. Monitoring (hit rate logging)
5. Fallback when Redis is down

Expected improvement: [CURRENT vs TARGET response time]`,
        tags: ["redis", "caching", "performance"],
        isPremium: true,
      },
      {
        id: "be-8",
        title: "Write Unit Tests",
        description: "Generate comprehensive unit tests for any function or module",
        prompt: `Write unit tests for this code using [Jest / Pytest / Vitest / etc.].

Code to test: [PASTE YOUR CODE]
Framework: [testing framework]

Write tests for:
1. Happy path (expected input → expected output)
2. Edge cases (empty input, max values, special characters)
3. Error cases (invalid input, network failure, null values)
4. Async behaviour (promises, callbacks)
5. Side effects (database calls, API calls — mock these)

Structure:
- describe() blocks for logical grouping
- Meaningful test names ("it should X when Y")
- Setup and teardown (beforeEach/afterEach)
- Mock strategy for external dependencies

Also: suggest what additional tests would increase confidence the most.`,
        tags: ["testing", "unit tests", "jest", "quality"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "content",
    name: "Content Creation",
    description: "Write blogs, scripts, newsletters, and copy that actually converts",
    icon: "PenLine",
    color: "#f472b6",
    prompts: [
      {
        id: "ct-1",
        title: "Write a Blog Post",
        description: "Full, SEO-optimised blog posts on any topic",
        prompt: `You are an expert content writer and SEO specialist.

Write a [WORD COUNT]-word blog post on: [TOPIC]

Target audience: [WHO ARE THEY? What do they care about?]
Publication: [blog name / website / personal brand]
Goal: [educate / entertain / convert / rank on Google]
Primary keyword: [KEYWORD]
Secondary keywords: [KEYWORD 2, KEYWORD 3]

Structure:
- SEO-optimised title (include primary keyword)
- Meta description (155 characters)
- Introduction with a hook (problem → promise)
- H2/H3 subheadings for each section
- Actionable conclusion with CTA
- Internal link placeholders: [LINK TO: topic]

Style: [conversational / authoritative / storytelling / data-driven]
Avoid: listicles that pad length, vague generalisations, corporate jargon`,
        tags: ["blog", "SEO", "writing", "content"],
        isPremium: false,
      },
      {
        id: "ct-2",
        title: "Write a YouTube Script",
        description: "Engaging video scripts with hooks and retention tactics",
        prompt: `Write a [DURATION]-minute YouTube video script on: [TOPIC]

Channel style: [educational / entertaining / documentary / tutorial / opinion]
Target audience: [DESCRIBE VIEWER]
Tone: [casual / energetic / calm / authoritative]

Script structure:
1. HOOK (first 30 seconds) — make them stay
2. Pattern interrupt (tease what's coming)
3. Introduction (quick, 30 seconds max)
4. Main content (broken into clear segments with timestamps)
5. CTAs placed naturally
6. Outro (subscribe + next video)

Include:
- [B-ROLL SUGGESTION] annotations for visuals
- Emphasis markers for important words
- Natural pause points (…)
- Transitions between segments

Also write: thumbnail text options + video title with CTR optimisation`,
        tags: ["youtube", "script", "video", "content"],
        isPremium: false,
      },
      {
        id: "ct-3",
        title: "Write a Newsletter Issue",
        description: "Engaging email newsletters readers actually open",
        prompt: `Write a newsletter issue for [NEWSLETTER NAME / TOPIC].

Audience: [WHO SUBSCRIBES AND WHY]
Frequency: [weekly / biweekly / monthly] issue
Theme of this issue: [TOPIC OR MAIN STORY]

Structure:
1. Subject line (3 options — test worthy)
2. Preview text (90 characters)
3. Personal opening (2-3 sentences, warm and human)
4. Main story (400-600 words) — the most valuable thing this week
5. Quick hits (3 bullet links with 1-line commentary each)
6. Closing (personal sign-off, what's coming next week)

Style guide:
- Write like a smart friend, not a company
- No exclamation spam
- One clear takeaway the reader can use today
- Reading time: under 5 minutes`,
        tags: ["newsletter", "email", "writing"],
        isPremium: false,
      },
      {
        id: "ct-4",
        title: "Write Landing Page Copy",
        description: "High-converting copy for any product landing page",
        prompt: `Write high-converting landing page copy for [PRODUCT/SERVICE].

Product details:
- What it is: [1-sentence description]
- Who it's for: [TARGET CUSTOMER]
- Main problem it solves: [PAIN POINT]
- Key differentiator vs competitors: [WHAT MAKES IT DIFFERENT]
- Price: [PRICE / FREE / FREEMIUM]
- Proof: [CUSTOMER COUNT / TESTIMONIALS / PRESS MENTIONS]

Copy needed:
1. Hero headline (3 options) — outcome-focused, not feature-focused
2. Subheadline (clarifies the headline)
3. Feature → Benefit conversions for [LIST 4 FEATURES]
4. Social proof section
5. FAQ (5 objection-busting questions + answers)
6. CTA button text (3 options — avoid "Submit" or "Click here")
7. Footer trust line

Tone: [bold / friendly / professional / technical]`,
        tags: ["copywriting", "landing page", "conversion"],
        isPremium: true,
      },
      {
        id: "ct-5",
        title: "Repurpose Content to Multiple Formats",
        description: "Turn one piece of content into 5+ different formats",
        prompt: `Take this content and repurpose it into multiple formats for different platforms.

Original content: [PASTE YOUR ARTICLE / VIDEO TRANSCRIPT / PODCAST NOTES]

Create:
1. LinkedIn post (150 words, professional, 3 key insights, subtle CTA)
2. Twitter/X thread (8-10 tweets, hook → value → CTA)
3. Instagram caption (engaging, 150 words, 5 relevant hashtags)
4. TikTok/Reels script (60 seconds, fast pace, hook in first 3 seconds)
5. Email newsletter version (300 words, personal tone)
6. Podcast talking points (3-minute segment outline)
7. Quote graphics (5 pullquotes from the content)

For each: adapt the tone, format, and depth for that platform's audience.`,
        tags: ["repurpose", "multi-platform", "content strategy"],
        isPremium: true,
      },
      {
        id: "ct-6",
        title: "Write Product Descriptions",
        description: "Compelling product copy that sells features as benefits",
        prompt: `Write product descriptions for [PRODUCT NAME] for [PLATFORM: Amazon / Shopify / App Store / B2B].

Product details:
- What it is: [DESCRIBE]
- Top 5 features: [LIST THEM]
- Target customer: [WHO BUYS THIS]
- Price point: [BUDGET / MID / PREMIUM]
- Main competitor: [COMPETITOR NAME]

Write:
1. Short description (50 words) — for cards and previews
2. Main description (200 words) — features as benefits
3. Bullet list (5 bullets, feature + benefit format)
4. SEO-optimised title with primary keyword
5. A/B test alternative title

Rule: never say "high-quality" or "state-of-the-art" — prove it instead.`,
        tags: ["ecommerce", "product", "copywriting"],
        isPremium: true,
      },
      {
        id: "ct-7",
        title: "Write an Email Sequence",
        description: "Automated email drip sequences that nurture leads",
        prompt: `Write a [NUMBER]-email welcome/onboarding sequence for [PRODUCT / SERVICE / NEWSLETTER].

Sequence goal: [WHAT ACTION DO YOU WANT SUBSCRIBERS TO TAKE BY EMAIL 5?]
Audience: [WHO ARE THEY WHEN THEY SIGN UP]

Email structure for each:
- Subject line (with open rate rationale)
- Preview text
- Email body (personalised, scannable, under 300 words)
- One clear CTA per email
- P.S. line (often the most read part)

Sequence arc:
- Email 1 (immediate): Welcome + deliver the promise
- Email 2 (day 2): Biggest quick win they can get
- Email 3 (day 4): Social proof / case study
- Email 4 (day 7): Address the #1 objection
- Email 5 (day 10): The offer / next step

Tone: [conversational / professional / excited]`,
        tags: ["email marketing", "automation", "nurture sequence"],
        isPremium: true,
      },
      {
        id: "ct-8",
        title: "Write Ad Copy (Google & Meta)",
        description: "Paid ad copy with high CTR for Google and Facebook ads",
        prompt: `Write ad copy for [PRODUCT/SERVICE] for [Google Search / Facebook / Instagram / LinkedIn].

Campaign details:
- Goal: [awareness / clicks / conversions / app installs]
- Budget indicator: [small / medium / scaling]
- Target audience: [describe demographics + interests]
- Landing page destination: [what happens after click]
- Unique selling point: [one-sentence differentiator]
- Offer/hook: [discount / free trial / guarantee / etc.]

For Google Search:
- 3 headlines (30 chars each)
- 2 descriptions (90 chars each)
- 5 callout extensions
- 3 sitelink extensions

For Meta (Facebook/Instagram):
- Primary text (hook in first line, 125 chars before cut-off)
- Headline (27 chars)
- Description (27 chars)
- 3 ad variations with different angles`,
        tags: ["ads", "Google", "Facebook", "paid media"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "social-media",
    name: "Social Media",
    description: "Grow your audience with scroll-stopping content for every platform",
    icon: "Share2",
    color: "#a78bfa",
    prompts: [
      {
        id: "sm-1",
        title: "Write a Viral LinkedIn Post",
        description: "Thought leadership posts with real engagement potential",
        prompt: `Write a LinkedIn post about [TOPIC] that will get genuine engagement.

My profile:
- Role/industry: [YOUR ROLE]
- Audience: [WHO FOLLOWS YOU]
- Goal: [build authority / get leads / grow following / share knowledge]

Post type: [personal story / unpopular opinion / lessons learned / industry insight / how-to]

Format rules:
- First line must stop the scroll (no "I'm excited to share")
- No LinkedIn cringe (no 🚀🙏 emoji spam)
- Short paragraphs (1-2 sentences max)
- Use line breaks for readability
- End with a question to drive comments
- 1-3 relevant hashtags (max)
- Word count: 150-300 words

Topic/story I want to share: [DESCRIBE YOUR IDEA OR EXPERIENCE]`,
        tags: ["LinkedIn", "thought leadership", "personal brand"],
        isPremium: false,
      },
      {
        id: "sm-2",
        title: "Write a Twitter/X Thread",
        description: "High-retention threads that grow followers",
        prompt: `Write a Twitter/X thread on [TOPIC] that will go viral in [NICHE].

Thread goal: [educate / entertain / build authority / drive traffic]
My audience: [DESCRIBE YOUR FOLLOWERS]
My angle: [what unique perspective do I have on this topic]

Thread structure:
- Tweet 1: The hook (bold claim, surprising fact, or compelling question — make them click)
- Tweets 2-8: Value delivery (one insight per tweet, each self-contained)
- Tweet 9: Summary / the big takeaway
- Tweet 10: CTA (follow / link / engagement question)

Rules:
- Each tweet under 240 characters (leave room for quote-tweets)
- No fluff tweets
- Number each tweet clearly (1/10, 2/10...)
- Use short sentences for mobile reading
- At least one data point or specific example per 3 tweets`,
        tags: ["twitter", "threads", "viral"],
        isPremium: false,
      },
      {
        id: "sm-3",
        title: "Instagram Caption + Hashtags",
        description: "Engaging captions with the right hashtag strategy",
        prompt: `Write an Instagram caption for a post about [TOPIC / WHAT THE POST SHOWS].

Account type: [personal brand / business / lifestyle / educational / product]
Audience: [WHO FOLLOWS YOU]
Tone: [casual / inspirational / witty / educational / authentic]
Goal: [more saves / comments / profile visits / link in bio clicks]

Caption structure:
1. Hook (first line — visible before "more") — make them stop
2. Body (2-4 sentences — value, story, or context)
3. CTA (specific: "Save this", "Comment below", "Link in bio")

Also provide:
- 3 different caption options with different angles
- 15-20 hashtags grouped by size: [5 large: 500k+] [5 medium: 50-500k] [5 small: under 50k] [5 niche-specific]
- Best time to post for [YOUR TIMEZONE]`,
        tags: ["instagram", "captions", "hashtags"],
        isPremium: false,
      },
      {
        id: "sm-4",
        title: "TikTok / Reels Script",
        description: "Fast-paced short video scripts optimised for completion rate",
        prompt: `Write a TikTok/Reels script for a [DURATION: 30s / 60s / 90s] video about [TOPIC].

Account niche: [YOUR NICHE]
Hook style: [controversial statement / surprising fact / "Did you know" / "POV:" / tutorial start]
Format: [talking head / voiceover / text on screen / trending sound]

Script:
- Hook (0-3 seconds): [The first thing said or shown]
- Pattern interrupt (3-7 seconds): Change scene or visual to keep attention
- Content delivery (7-50 seconds): Core value — fast, specific, no padding
- Payoff (50-55 seconds): The result or punchline
- CTA (55-60 seconds): Follow / comment / save

Include:
- [ON SCREEN TEXT] suggestions
- [VISUAL CUT] markers
- Caption text for the video
- 5 trending sound suggestions for this type of content`,
        tags: ["tiktok", "reels", "short video"],
        isPremium: true,
      },
      {
        id: "sm-5",
        title: "30-Day Content Calendar",
        description: "A month of strategic content ideas mapped to your goals",
        prompt: `Create a 30-day social media content calendar for [PLATFORM] for [NICHE/BRAND].

Account details:
- Current following: [NUMBER]
- Posting frequency goal: [X posts per week]
- Content pillars: [2-4 main topics you post about]
- Current biggest challenge: [not enough ideas / low engagement / inconsistent / no time]
- Business goal: [sell X / grow following / drive traffic to site]

For each day provide:
- Content type: [post / reel / story / carousel / thread]
- Topic/idea
- Hook or title
- Format notes
- Best posting time

Include:
- 4 "hero" high-effort posts for maximum reach
- Trending formats for [MONTH/SEASON]
- Engagement loops (posts that generate comment activity)
- Batch-creation strategy (how to film/write in 2 hours/week)`,
        tags: ["content calendar", "strategy", "planning"],
        isPremium: true,
      },
      {
        id: "sm-6",
        title: "Write a YouTube Description",
        description: "SEO-optimised descriptions that rank and drive clicks",
        prompt: `Write a YouTube video description for: [VIDEO TITLE]

Video content summary: [2-3 sentences about what the video covers]
Target keyword: [PRIMARY KEYWORD]
Secondary keywords: [2-3 more keywords]
Channel niche: [YOUR NICHE]

Description structure:
1. First 2 lines (visible without clicking "more"): Hook + video promise
2. Main description (200-300 words): expand on content, include keywords naturally
3. Timestamps (fill in format for me to add times):
   00:00 Introduction
   [ADD YOUR SECTIONS]
4. Links section (format for me to fill in)
5. Social media section (format)
6. Subscribe CTA
7. Relevant hashtags (3-5 at the very end)

Also: suggest 5 tags for the Tags field.`,
        tags: ["youtube", "SEO", "description"],
        isPremium: true,
      },
      {
        id: "sm-7",
        title: "Respond to Negative Comments",
        description: "Professional, brand-protecting responses to criticism",
        prompt: `Write a response to this negative comment/review for [BRAND/ACCOUNT].

The comment: [PASTE COMMENT]
Context: [What happened? Is the complaint valid?]
Brand voice: [professional / friendly / bold / empathetic]
Platform: [Twitter / Instagram / Google Reviews / etc.]

Write:
1. Primary response (acknowledge + address + resolve)
2. Alternative response if the complaint is unfair
3. Template for taking the conversation private
4. What NOT to say (and why)

Guidelines:
- Never be defensive or dismissive
- Specific, not generic ("We hear you" is not enough)
- Offer a clear next step
- Keep public response under 280 characters if possible
- Show character — don't just apologise robotically`,
        tags: ["community management", "PR", "responses"],
        isPremium: true,
      },
      {
        id: "sm-8",
        title: "Write a Pinned Post / Bio",
        description: "Optimise your profile bio and pinned content for growth",
        prompt: `Rewrite my [platform] bio and pinned post to maximise follows and conversions.

Current bio: [PASTE CURRENT BIO]
My role/niche: [WHAT YOU DO]
Who you help: [YOUR AUDIENCE]
What you offer (if anything): [CONTENT / PRODUCT / SERVICE]
Goal of profile: [grow following / drive to website / get clients / build community]

Bio should include:
- What you do (specific, not vague)
- Who you help or who should follow you
- Proof or credibility (years, results, numbers)
- CTA with link (what to click and why)
- Under 150 characters for [platform] limit

Pinned post:
- Introduce yourself authentically
- Your best insight or most valuable tip
- Proof you know your stuff
- Reason to follow (what they'll get)
- CTA to follow + save`,
        tags: ["bio", "profile", "personal brand"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "work",
    name: "Work & Productivity",
    description: "Emails, reports, meetings, and professional communication done right",
    icon: "Briefcase",
    color: "#fbbf24",
    prompts: [
      {
        id: "wk-1",
        title: "Write a Professional Email",
        description: "Clear, well-structured emails for any workplace situation",
        prompt: `Write a professional email for the following situation.

Situation: [DESCRIBE WHAT YOU NEED TO COMMUNICATE]
Recipient: [role/relationship — manager / colleague / client / vendor / unknown]
Context: [any relevant background they need to understand]
My goal: [what outcome do I want from this email?]
Tone: [formal / semi-formal / direct / diplomatic]

The email should:
- Subject line: clear, specific, action-oriented
- Opening: appropriate, not "I hope this email finds you well"
- Body: organised with clear paragraphs or bullets if listing items
- Closing: appropriate CTA or next steps
- Sign-off: matching the formality level

Additional notes: [any constraints — character limit, must mention X, avoid Y]

Also write: an alternative version that is [more formal / more direct / shorter] if I need it.`,
        tags: ["email", "professional", "communication"],
        isPremium: false,
      },
      {
        id: "wk-2",
        title: "Summarise a Meeting",
        description: "Turn raw meeting notes into a clean action-item summary",
        prompt: `Turn these meeting notes into a professional meeting summary.

Meeting notes (raw): [PASTE YOUR NOTES]
Meeting type: [standup / project review / client call / strategy session / 1:1]
Attendees: [list or number]
Meeting date: [DATE]
My role: [note-taker / facilitator / participant]

Output format:
1. **Meeting summary** (2-3 sentences — the TL;DR)
2. **Key decisions made** (bullet list, numbered)
3. **Action items** table:
   | Action | Owner | Due Date | Priority |
4. **Open questions** (unresolved items for next meeting)
5. **Next meeting** (date, agenda items)

Style: concise, professional, no padding — this goes straight into Slack/email`,
        tags: ["meetings", "notes", "productivity"],
        isPremium: false,
      },
      {
        id: "wk-3",
        title: "Write a Project Proposal",
        description: "Persuasive project proposals that get approved",
        prompt: `Write a project proposal for [PROJECT NAME / IDEA].

Context:
- Who is approving this: [stakeholder role]
- Budget requested: [AMOUNT or "TBD"]
- Timeline: [DURATION]
- Team needed: [SIZE / ROLES]
- Problem this solves: [THE BUSINESS PROBLEM]

Proposal structure:
1. Executive Summary (half page — what, why, outcome)
2. Problem Statement (current situation + cost of inaction)
3. Proposed Solution (what you're building/doing)
4. Timeline (phases with milestones)
5. Budget breakdown (detailed)
6. Expected ROI / Success metrics
7. Risks and mitigations
8. Why now (urgency)
9. Next steps (what you need them to do)

Tone: [confident / data-driven / persuasive / straightforward]`,
        tags: ["proposal", "project management", "business"],
        isPremium: false,
      },
      {
        id: "wk-4",
        title: "Handle a Difficult Conversation",
        description: "Scripts for awkward or high-stakes workplace conversations",
        prompt: `Help me prepare for this difficult workplace conversation.

Situation: [DESCRIBE WHAT HAPPENED AND WHAT NEEDS TO BE ADDRESSED]
My role: [manager / peer / employee]
Other person's likely reaction: [defensive / upset / dismissive / cooperative]
My desired outcome: [WHAT DO I WANT FROM THIS CONVERSATION]
Relationship importance: [must maintain / damaged / new / long-term]

Provide:
1. Opening line (how to start without immediately triggering defensiveness)
2. How to state the issue clearly (facts, not feelings/judgements)
3. How to listen and respond to pushback
4. 3 likely responses from them + how to handle each
5. How to close with a clear next step
6. What to do if it doesn't go well

Also: what NOT to say (phrases that escalate this type of conversation)`,
        tags: ["communication", "difficult conversations", "management"],
        isPremium: true,
      },
      {
        id: "wk-5",
        title: "Write a Performance Review",
        description: "Self-reviews and team reviews that are specific and impactful",
        prompt: `Write a [self-review / peer review / manager review] for [ROLE/PERSON] covering [PERIOD].

Information about the work:
- Key projects completed: [LIST WITH BRIEF OUTCOMES]
- Goals set at start of period: [LIST]
- Goals achieved: [LIST WITH METRICS IF POSSIBLE]
- Challenges encountered: [DESCRIBE]
- Areas of growth: [DESCRIBE]
- Development needed: [BE HONEST]

Review type: [self-evaluation / 360 feedback / annual review / probation review]
Platform format: [free text / ratings with comments / structured form]

Write:
- Overall performance summary (3-4 sentences)
- Achievement highlights (specific, quantified where possible)
- Areas for growth (constructive, not critical)
- Goals for next period (SMART goals)
- Final rating justification (if ratings are used)`,
        tags: ["performance review", "HR", "feedback"],
        isPremium: true,
      },
      {
        id: "wk-6",
        title: "Write a Business Report",
        description: "Clear, structured reports that inform good decisions",
        prompt: `Write a [REPORT TYPE: monthly / quarterly / incident / analysis] report for [AUDIENCE].

Report purpose: [WHAT DECISION OR UPDATE DOES THIS SUPPORT]
Data/information I have: [PASTE OR DESCRIBE YOUR DATA]
Key metrics to include: [LIST METRICS]
Period covered: [DATE RANGE]

Report structure:
1. Executive Summary (key findings + recommendation — for busy readers)
2. Background/Context
3. Findings (organised by theme, not by data dump)
4. Analysis (what the data means)
5. Recommendations (numbered, specific, actionable)
6. Appendix (raw data / methodology)

Visual suggestions: [what charts or tables to include]
Tone: [formal / data-driven / strategic / operational]
Length: [1 page / 2-4 pages / comprehensive]`,
        tags: ["report", "business", "analysis"],
        isPremium: true,
      },
      {
        id: "wk-7",
        title: "Write a Business Plan Section",
        description: "Specific sections of a business plan written professionally",
        prompt: `Write the [SECTION NAME] section of a business plan for [BUSINESS NAME / TYPE].

Section to write: [Executive Summary / Market Analysis / Product/Service Description / Marketing Strategy / Financial Projections / Operations Plan / Competition Analysis]

Business details:
- What the business does: [DESCRIPTION]
- Target market: [WHO AND HOW BIG]
- Revenue model: [HOW IT MAKES MONEY]
- Stage: [idea / MVP / early revenue / growth]
- Location/market: [WHERE]

For this section, include:
[Specific requirements based on the section — I'll adapt based on what's requested]

Format for: [investor pitch / bank loan / internal planning / accelerator application]`,
        tags: ["business plan", "entrepreneurship", "strategy"],
        isPremium: true,
      },
      {
        id: "wk-8",
        title: "Create an OKR / Goal Framework",
        description: "Set ambitious but achievable OKRs for teams and individuals",
        prompt: `Create an OKR (Objectives and Key Results) framework for [TEAM / INDIVIDUAL / COMPANY].

Context:
- Organisation type: [startup / enterprise / team / personal]
- Time period: [quarterly / annual]
- Top priorities: [WHAT MATTERS MOST RIGHT NOW]
- Current challenges: [WHAT'S BLOCKING PROGRESS]
- Previous wins: [WHAT WORKED LAST PERIOD]

Create [3-5] Objectives, each with 3 Key Results.

Rules I want you to follow:
- Objectives: inspiring, qualitative, directional
- Key Results: measurable, binary clear, 0-100% achievable with stretch
- No activities as KRs ("launch X" → "X reaches Y users by date")
- Add a confidence score (0-100%) for each KR
- Flag any OKRs that conflict with each other

Also: explain the grading system and what counts as success.`,
        tags: ["OKRs", "goals", "management", "planning"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "career",
    name: "Career & CV",
    description: "Land the job — from CV to offer negotiation",
    icon: "FileText",
    color: "#fb923c",
    prompts: [
      {
        id: "cv-1",
        title: "Write a CV / Resume",
        description: "ATS-optimised resume that gets past the screening",
        prompt: `Rewrite my CV for [JOB TITLE] at [COMPANY TYPE / INDUSTRY].

My background:
[PASTE YOUR CURRENT CV OR LIST YOUR EXPERIENCE, SKILLS, EDUCATION]

Target role requirements:
[PASTE THE JOB DESCRIPTION]

Optimise for:
- ATS (Applicant Tracking System) keyword matching
- Recruiter 6-second scan (most important info first)
- Quantified achievements (add estimations if I haven't given numbers)
- Correct tense (past roles past tense, current role present)
- Strong action verbs (not "responsible for")

Format:
- [1 page / 2 pages]
- [Chronological / Skills-based / Hybrid]
- Include: Skills section with exact keywords from the job description

Output the full CV, then list: 5 keywords from the job description I must include.`,
        tags: ["resume", "CV", "ATS", "job search"],
        isPremium: false,
      },
      {
        id: "cv-2",
        title: "Write a Cover Letter",
        description: "Personalised cover letters that stand out from the pile",
        prompt: `Write a cover letter for [JOB TITLE] at [COMPANY NAME].

My background (relevant to this role):
[PASTE YOUR RELEVANT EXPERIENCE AND SKILLS]

The job description:
[PASTE JOB DESCRIPTION]

Something specific about this company I admire:
[WHY DO YOU WANT THIS JOB AT THIS COMPANY SPECIFICALLY]

Cover letter rules:
- Open with a hook — not "I am writing to apply for..."
- Paragraph 2: your strongest proof of fit (one specific achievement)
- Paragraph 3: why THIS company specifically (shows research)
- Close: confident, not desperate — a clear ask
- Under 250 words
- No "I believe I would be a great fit" — show, don't tell
- Write it to be read, not to tick boxes`,
        tags: ["cover letter", "job application", "writing"],
        isPremium: false,
      },
      {
        id: "cv-3",
        title: "Prepare for a Job Interview",
        description: "Tailored interview prep with answers to likely questions",
        prompt: `Prepare me for an interview for [JOB TITLE] at [COMPANY NAME].

Role: [PASTE JOB DESCRIPTION]
My background: [BRIEF OVERVIEW OF YOUR EXPERIENCE]
Interview format: [phone screen / first-round / technical / panel / final]
Interview style: [competency-based / case study / technical / culture fit]

Give me:
1. 10 most likely interview questions for this exact role
2. STAR-format answer framework for each (Situation, Task, Action, Result)
3. Draft answers using MY background where possible
4. 5 questions I should ask them (that make me look smart)
5. Red flags to watch for
6. Salary question scripts — how to handle "what are you expecting?"

Also: what to research before the interview (company, industry, interviewer).`,
        tags: ["interview", "job search", "career"],
        isPremium: false,
      },
      {
        id: "cv-4",
        title: "Negotiate Salary",
        description: "Scripts and strategy for salary and offer negotiations",
        prompt: `Help me negotiate my salary/offer for [ROLE] at [COMPANY].

Offer details:
- Offered salary: [AMOUNT]
- My target: [AMOUNT]
- Market rate for this role (from research): [RANGE]
- My current/previous salary: [AMOUNT or "not disclosing"]
- Competing offer: [YES: amount / NO]
- Non-salary components: [equity / bonus / remote / benefits to negotiate]

Give me:
1. The number to ask for (with reasoning)
2. Exact script for the negotiation conversation
3. How to respond if they say "this is our best offer"
4. Which non-salary items to negotiate if base is fixed
5. What to say if I need time to decide
6. Email version of the negotiation (if doing it in writing)

My nervousness factor: [low / medium / high] — adapt the tone accordingly.`,
        tags: ["salary", "negotiation", "offers"],
        isPremium: true,
      },
      {
        id: "cv-5",
        title: "Write a LinkedIn Profile",
        description: "A complete LinkedIn overhaul that attracts recruiters",
        prompt: `Rewrite my LinkedIn profile to attract [recruiter messages / client inquiries / speaking invites / networking].

Current profile info:
[PASTE YOUR CURRENT HEADLINE, ABOUT SECTION, AND TOP 3 EXPERIENCE ENTRIES]

Target role / what I want people to know I do:
[DESCRIBE]

Goals for LinkedIn:
[GET HIRED / ATTRACT CLIENTS / BUILD THOUGHT LEADERSHIP / NETWORKING]

Rewrite:
1. Headline (220 chars) — keyword-rich, not just job title
2. About section (1,300 chars) — first-person, story-driven, ends with CTA
3. Experience entries (2-3 bullets each, achievement-focused)
4. Skills section (top 10 to add)
5. Featured section suggestions (what to add)
6. Creator mode: should I enable it? (yes/no + reason)

Recruiter search optimisation: which keywords to include and where.`,
        tags: ["LinkedIn", "personal brand", "career"],
        isPremium: true,
      },
      {
        id: "cv-6",
        title: "Write a Resignation Letter",
        description: "Professional resignation letters that leave doors open",
        prompt: `Write a resignation letter for [ROLE] at [COMPANY].

Situation:
- Reason for leaving: [new job / personal / relocation / career change / hostile environment]
- Relationship with manager: [good / neutral / bad]
- Notice period: [WEEKS]
- Last day: [DATE]
- Do I want a reference from them: [yes / no / maybe]

The letter must:
- Be professional regardless of circumstances
- State last working day clearly
- Offer to help with transition (if appropriate)
- Keep reason vague if leaving for bad reasons
- Not burn bridges

Also write: what to say verbally when handing in the letter (the conversation script).`,
        tags: ["resignation", "letter", "career transition"],
        isPremium: true,
      },
      {
        id: "cv-7",
        title: "Handle a Rejection Email",
        description: "Respond to rejections in a way that keeps future doors open",
        prompt: `Write a response to this job rejection.

Rejection email: [PASTE THE REJECTION EMAIL]
Stage I reached: [applied / phone screen / first round / final round]
My relationship with this company: [first contact / familiar / know someone there]

Write:
1. Reply to the rejection (gracious, brief, professional)
2. Request feedback email (a few days later)
3. Stay-in-touch follow-up (3-6 months later, when they might be hiring again)

The goal: leave a positive impression so I'm top of mind next time they hire.

Also: how to emotionally process rejection and what to do next (practical next steps, not generic advice).`,
        tags: ["rejection", "job search", "follow-up"],
        isPremium: true,
      },
      {
        id: "cv-8",
        title: "Career Change Strategy",
        description: "A realistic roadmap for switching industries or roles",
        prompt: `Create a career change strategy for me.

Current situation:
- Current role/industry: [ROLE] in [INDUSTRY]
- Years of experience: [NUMBER]
- Transferable skills: [LIST YOUR MAIN SKILLS]
- Education: [DEGREE / CERTIFICATIONS]

Target role/industry: [WHERE I WANT TO BE]
Timeline: [MONTHS / YEARS]
Constraints: [financial / geographic / family / visa / time]

Give me:
1. Honest assessment: how realistic is this change?
2. Skill gap analysis (what I need to learn)
3. 90-day action plan (specific steps, not vague advice)
4. How to frame my "career change story" to employers
5. Communities, people, and resources to connect with
6. The fastest path vs the safest path (and the tradeoffs)`,
        tags: ["career change", "strategy", "planning"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "creative",
    name: "Creative Writing",
    description: "Stories, characters, scripts, and fiction that people want to read",
    icon: "Sparkles",
    color: "#f87171",
    prompts: [
      {
        id: "cr-1",
        title: "Start a Story (Hook Opening)",
        description: "Gripping story openings that demand to be read",
        prompt: `Write the opening of a story that immediately grabs the reader.

Genre: [thriller / romance / fantasy / sci-fi / literary fiction / horror / mystery]
Setting: [TIME PERIOD and LOCATION]
Main character: [NAME, AGE, ONE DEFINING TRAIT]
Inciting incident: [WHAT DISRUPTS THEIR WORLD]
Mood: [tense / melancholic / eerie / hopeful / unsettling]

Opening requirements:
- Start in the middle of action or a striking moment (in medias res)
- Do NOT start with weather, waking up, or backstory
- Establish voice immediately — this is the character's world
- Create one specific sensory detail that anchors the scene
- End on a question or tension that demands the reader continue
- Length: 300-500 words

Inspiration I like: [AUTHORS or BOOKS you enjoy]`,
        tags: ["fiction", "story", "creative writing"],
        isPremium: false,
      },
      {
        id: "cr-2",
        title: "Develop a Character",
        description: "Deep, contradictory characters that feel real",
        prompt: `Create a fully developed character for my [GENRE] story.

Role in story: [protagonist / antagonist / supporting / mentor / love interest]
Basic concept: [one sentence about who they are]

Develop:
1. **Core wound** — what happened to them that drives everything they do
2. **Contradiction** — their surface personality vs who they really are
3. **Want vs Need** — what they think they want vs what they actually need
4. **Voice** — how they speak (sentence length, vocabulary, what they avoid saying)
5. **Physical presence** — 3 specific details (not generic descriptions)
6. **Relationships** — how they interact differently with different people
7. **Flaw** — a genuine flaw that creates story problems, not a cute quirk
8. **Arc** — how they change (or refuse to change) by the end

Avoid: chosen one syndrome, perfect protagonists, evil-for-evil's-sake villains`,
        tags: ["character", "worldbuilding", "fiction"],
        isPremium: false,
      },
      {
        id: "cr-3",
        title: "Write Dialogue",
        description: "Natural, subtext-rich dialogue that reveals character",
        prompt: `Write a dialogue scene between [CHARACTER A] and [CHARACTER B].

Context:
- Their relationship: [strangers / friends / enemies / lovers / family / rivals]
- Setting: [WHERE THIS TAKES PLACE]
- What's really going on (subtext): [THE REAL TENSION BENEATH THE SURFACE]
- What they're talking about (surface): [THE OSTENSIBLE TOPIC]
- What each character wants from this conversation: [A wants X, B wants Y]
- Emotional state of each: [frustrated / hopeful / hiding something / lying / grieving]

Dialogue rules:
- Each character should sound distinct — different vocabulary, rhythm, patterns
- No "dialogue tags" beyond said/asked unless action is happening
- What they DON'T say is as important as what they do
- 1-2 moments of misunderstanding or deflection
- Scene should end with a small but significant shift in their relationship

Length: [SCENE LENGTH — short exchange / full scene]`,
        tags: ["dialogue", "scene writing", "fiction"],
        isPremium: false,
      },
      {
        id: "cr-4",
        title: "Plot a Story Structure",
        description: "Three-act structure and plot points for any story idea",
        prompt: `Plot the complete structure for a [GENRE] story about [PREMISE].

Use: [3-Act Structure / Hero's Journey / Save the Cat / 7-Point Story Structure]

My core idea: [DESCRIBE YOUR STORY IDEA IN 2-3 SENTENCES]

Develop:
1. **Inciting incident** (what disrupts the normal world)
2. **Act 1 turning point** (the point of no return)
3. **Midpoint** (the world flips — false victory or false defeat)
4. **Act 2 low point** (darkest moment / all seems lost)
5. **Climax** (the final confrontation)
6. **Resolution** (the new world)

For each beat:
- What happens externally (plot)
- What happens internally (character arc)
- The emotion the reader should feel

Flag: any logical plot holes or missing setup I need to add.`,
        tags: ["plot", "structure", "story development"],
        isPremium: true,
      },
      {
        id: "cr-5",
        title: "Build a Fantasy / Sci-Fi World",
        description: "Detailed worldbuilding with internal consistency",
        prompt: `Create a detailed world for my [fantasy / sci-fi / dystopian] story.

Core concept: [1-2 sentences about the world's central premise]
Story tone: [epic / dark / hopeful / satirical / grounded]
Time period equivalent: [medieval / Victorian / futuristic / alt-history]

Develop:
1. **The rule** — the one thing that makes this world unique (magic system / technology / social structure)
2. **History** — 3 past events that shape present-day tension
3. **Power structures** — who controls what and who wants to change it
4. **Geography** — key locations and what makes each significant
5. **Culture** — customs, beliefs, what people fear most
6. **Conflict source** — the fundamental tension built into this world's DNA
7. **Details** — 5 specific sensory/cultural details that make it feel real

Avoid: chosen-one prophecies unless subverted, maps with too many apostrophes`,
        tags: ["worldbuilding", "fantasy", "sci-fi"],
        isPremium: true,
      },
      {
        id: "cr-6",
        title: "Write a Short Story",
        description: "Complete flash fiction or short stories to spec",
        prompt: `Write a complete short story based on these specifications.

Genre: [GENRE]
Word count: [500 / 1000 / 1500 / 2000 words]
Prompt/seed: [GIVE ME A FIRST LINE, SCENARIO, OR THEME]
POV: [first person / third person limited / third person omniscient]
Tense: [past / present]
Ending type: [resolved / ambiguous / twist / tragic / hopeful]

Craft requirements:
- Show, don't tell — demonstrate emotions through action and detail
- One specific, unusual image or metaphor per page
- The ending should recontextualise something from the beginning
- No adverbs modifying dialogue tags ("he said softly" → show it)
- Subtext: the story should be "about" something beneath the surface

Theme I want to explore (optional): [THEME]`,
        tags: ["short story", "flash fiction", "creative"],
        isPremium: true,
      },
      {
        id: "cr-7",
        title: "Edit and Improve Your Writing",
        description: "Line-level editing that improves clarity, rhythm, and impact",
        prompt: `Edit this passage for craft — not just grammar.

My writing: [PASTE YOUR PASSAGE]

What I want improved:
- [sentence rhythm / word choice / showing vs telling / pacing / description / dialogue]

Edit for:
1. Cut: every word that doesn't earn its place
2. Strengthen: weak verbs → specific strong verbs
3. Vary: sentence length and structure
4. Remove: clichés, adverbs modifying dialogue, telling instead of showing
5. Improve: the 2-3 weakest sentences specifically

Output:
- Edited version of my passage
- Tracked changes with explanation (why each change improves it)
- 3 things I do well that I should keep doing
- 1 pattern in my writing to watch for`,
        tags: ["editing", "writing craft", "improvement"],
        isPremium: true,
      },
      {
        id: "cr-8",
        title: "Write a Poem",
        description: "Poems in any form and style, with real craft",
        prompt: `Write a poem about [SUBJECT / THEME].

Form: [free verse / sonnet / haiku sequence / villanelle / ode / prose poem / experimental]
Length: [SHORT under 20 lines / MEDIUM 20-40 lines / LONG 40+ lines]
Tone: [melancholic / celebratory / ironic / tender / angry / contemplative]
Approach: [metaphor-driven / image-based / narrative / lyric / conceptual]

Constraints to follow:
- The poem must contain: [a specific image, word, or idea you want included]
- Avoid: [clichés, abstract nouns without grounding, easy rhymes that force meaning]
- Central image or metaphor: [suggest one or let me choose]

Inspirations: [POETS or POEMS you like]

After the poem: a brief note on the craft choices made (for learning).`,
        tags: ["poetry", "poem", "creative writing"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "ux-design",
    name: "UI/UX Design",
    description: "Design systems, wireframes, and user experience that actually works",
    icon: "Palette",
    color: "#2dd4bf",
    prompts: [
      {
        id: "ux-1",
        title: "Design a Color System",
        description: "Complete colour palette with accessibility baked in",
        prompt: `Design a complete colour system for [BRAND/PRODUCT NAME].

Brand personality: [3 adjectives that describe the brand]
Industry: [INDUSTRY — affects colour psychology expectations]
Audience: [WHO USES THIS PRODUCT]
Existing colours (if any): [PASTE HEX CODES OR DESCRIBE]
Dark mode needed: [yes / no]

Deliver:
1. **Primary palette** — 5 shades of main brand colour (50-900 scale)
2. **Neutral palette** — 9 greys (50-900)
3. **Semantic colours** — success, warning, error, info (with shades)
4. **Text colours** — primary, secondary, disabled, inverse
5. **Background tokens** — base, surface, overlay, card

For each colour:
- Hex value
- WCAG contrast ratio against white and dark bg
- Use case recommendation

CSS custom properties format + Tailwind config format`,
        tags: ["colour", "design system", "brand", "CSS"],
        isPremium: false,
      },
      {
        id: "ux-2",
        title: "Write a UX Research Plan",
        description: "Structure user research to get actionable insights",
        prompt: `Create a UX research plan for [PRODUCT / FEATURE].

Context:
- What we're trying to learn: [RESEARCH QUESTION]
- Stage of product: [discovery / validation / optimisation]
- Timeline: [WEEKS]
- Budget: [low / medium / high]
- Team size: [PEOPLE AVAILABLE]

Research plan should include:
1. **Research goals** (3-5 specific questions to answer)
2. **Methods** — which research methods and why (usability testing, interviews, surveys, analytics)
3. **Participant criteria** — who to recruit and how
4. **Discussion guide** — key questions for user interviews
5. **Metrics** — how we'll measure success
6. **Deliverables** — what outputs this produces
7. **Risk** — what could go wrong and how to mitigate

Format this as a research brief I can share with stakeholders.`,
        tags: ["UX research", "user testing", "design process"],
        isPremium: false,
      },
      {
        id: "ux-3",
        title: "Write Microcopy / UX Writing",
        description: "UI text that guides users and reduces friction",
        prompt: `Write UX copy (microcopy) for [FEATURE / SCREEN / COMPONENT].

Context:
- What the user is trying to do: [USER GOAL]
- Where they are in the flow: [onboarding / mid-task / error state / empty state / confirmation]
- User's likely emotional state: [excited / frustrated / unsure / in a hurry]
- Product voice: [friendly / professional / playful / minimal / trustworthy]

Write copy for:
1. [Screen/component title]
2. [Body text / instruction]
3. [CTA button] (and what NOT to write)
4. [Error message] — specific, helpful, not blaming
5. [Empty state] — helpful, not depressing
6. [Confirmation / success message]
7. [Tooltip text]

Rule: every word must earn its place. Cut anything users can infer.`,
        tags: ["UX writing", "microcopy", "content design"],
        isPremium: false,
      },
      {
        id: "ux-4",
        title: "Critique a Design (UX Review)",
        description: "Structured design critique with actionable improvements",
        prompt: `Review this design and give me a structured UX/UI critique.

[DESCRIBE THE DESIGN IN DETAIL or list the screens/flows]
Product type: [WHAT KIND OF APP/WEBSITE IS THIS]
Target user: [WHO USES THIS]
Primary goal of this screen: [WHAT SHOULD USERS DO HERE]

Evaluate:
1. **Visual hierarchy** — does the eye go where it should?
2. **Clarity** — is the purpose of each element immediately clear?
3. **Friction** — what makes this harder to use than it should be?
4. **Consistency** — does it match standard conventions and itself?
5. **Accessibility** — obvious visual accessibility concerns
6. **Mobile usability** — tap targets, spacing, scrolling
7. **Empty/error states** — are they handled?

Output:
- Top 3 critical issues (highest impact to fix first)
- 5 medium improvements
- What's working well (keep these)
- One redesign suggestion for the biggest issue`,
        tags: ["design critique", "UX review", "usability"],
        isPremium: true,
      },
      {
        id: "ux-5",
        title: "Design a Component Library",
        description: "Systematised design tokens and reusable component specs",
        prompt: `Create a component library specification for [PRODUCT NAME].

Stack: [React / Vue / Web Components / Figma-first]
Existing design tools: [Figma / Sketch / none]
Team size: [designers + developers]
Product type: [SaaS dashboard / marketing site / mobile app / e-commerce]

Define:
1. **Design tokens** — spacing scale, border radius scale, shadow scale
2. **Typography scale** — 6 sizes with use cases
3. **Component inventory** — list of all components needed
4. **Component anatomy** — for [BUTTON / INPUT / CARD / MODAL], define:
   - States (default, hover, active, disabled, error, loading)
   - Variants (primary, secondary, destructive, ghost)
   - Props/API
   - Do's and don'ts

5. **Naming convention** — file and component naming rules
6. **Documentation template** — what each component's doc page includes`,
        tags: ["design system", "component library", "tokens"],
        isPremium: true,
      },
      {
        id: "ux-6",
        title: "Create User Personas",
        description: "Evidence-based personas that actually guide design decisions",
        prompt: `Create [NUMBER] user personas for [PRODUCT / SERVICE].

What I know about my users:
[PASTE ANY RESEARCH, INTERVIEWS, ANALYTICS, OR ASSUMPTIONS]

Context:
- Product: [WHAT IT DOES]
- Stage: [pre-launch / early users / growth]
- Main use cases: [HOW PEOPLE USE IT]

For each persona:
1. Name, age, role, location (make them real but not stereotypes)
2. **Goals** — primary and secondary goals related to your product
3. **Frustrations** — what about the current situation bothers them
4. **Behaviours** — how they research, buy, and use tools like yours
5. **Quote** — one sentence that captures their mindset
6. **How they'd use your product** — specific scenario
7. **What would make them churn** — what would cause them to leave

Format: one A4 card per persona (concise, visual-friendly)`,
        tags: ["personas", "user research", "UX strategy"],
        isPremium: true,
      },
      {
        id: "ux-7",
        title: "Map a User Journey",
        description: "End-to-end journey maps revealing pain points and opportunities",
        prompt: `Create a user journey map for [PERSONA TYPE] trying to [ACHIEVE GOAL] using [PRODUCT/SERVICE].

Journey scope: [end-to-end from awareness → advocacy / specific feature flow]

For each stage of the journey, map:
1. **Stage name** (Awareness / Consideration / Onboarding / Usage / Renewal)
2. **Actions** — what the user does
3. **Thoughts** — what they're thinking
4. **Emotions** — feeling (rate 1-5, frustrated to delighted) + why
5. **Pain points** — what goes wrong or causes friction
6. **Opportunities** — what could be improved here
7. **Touchpoints** — what channels/interfaces they interact with

Output format:
- Table format (easy to put in a presentation)
- Summary: top 3 highest-impact opportunities found
- Recommended next research questions`,
        tags: ["user journey", "experience map", "service design"],
        isPremium: true,
      },
      {
        id: "ux-8",
        title: "Write a Design Brief",
        description: "Clear briefs that get the design you actually want",
        prompt: `Write a design brief for [PROJECT / FEATURE].

Project context:
- What we're designing: [DESCRIPTION]
- Business goal: [WHAT BUSINESS OUTCOME DOES THIS SUPPORT]
- User goal: [WHAT DOES THE USER WANT TO ACCOMPLISH]
- Success metric: [HOW WILL WE KNOW IT WORKED]

Design constraints:
- Platform: [web / iOS / Android / all]
- Brand guidelines: [exist / in progress / flexible]
- Technical constraints: [CMS / existing component library / specific tech]
- Timeline: [WEEKS for design]
- Budget: [DESIGN RESOURCES AVAILABLE]

Brief should include:
1. Background & context (why this project)
2. Problem statement (specific, user-centred)
3. Goals (business + user)
4. Out of scope (what we're NOT doing)
5. Success criteria
6. Key questions to answer in discovery
7. Deliverables expected from designer`,
        tags: ["brief", "project planning", "design process"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "research",
    name: "Research & Analysis",
    description: "Synthesise information, analyse data, and make better decisions",
    icon: "Search",
    color: "#94a3b8",
    prompts: [
      {
        id: "re-1",
        title: "Competitive Analysis",
        description: "Structure a thorough competitor analysis for any market",
        prompt: `Conduct a competitive analysis for [YOUR PRODUCT / COMPANY] in the [MARKET / INDUSTRY].

My product: [1-2 sentence description + target customer]
Competitors to analyse: [LIST 3-5 COMPETITORS or "identify the main ones"]

For each competitor, analyse:
1. **Product** — what they offer, key features, positioning
2. **Pricing** — model and price points
3. **Target customer** — who they're actually selling to
4. **Marketing** — how they acquire customers, key messages
5. **Strengths** — what they genuinely do well
6. **Weaknesses** — where they fall short (validated, not wishful thinking)

Output:
- Comparison table (all competitors vs dimensions)
- Where the market gap is (what none of them do well)
- My product's best positioning angle given this landscape
- 3 features I should prioritise based on competitor gaps`,
        tags: ["competitive analysis", "market research", "strategy"],
        isPremium: false,
      },
      {
        id: "re-2",
        title: "Analyse Survey Results",
        description: "Extract meaningful insights from survey data",
        prompt: `Analyse these survey results and give me actionable insights.

Survey data: [PASTE YOUR SURVEY RESULTS — numbers, percentages, or raw responses]
Survey context:
- What we were trying to learn: [SURVEY GOAL]
- Who we surveyed: [RESPONDENT DESCRIPTION]
- Sample size: [NUMBER]
- When it was conducted: [DATE/PERIOD]

Analyse for:
1. **Key findings** — the 5 most significant insights (not just the obvious ones)
2. **Surprising results** — what you didn't expect
3. **Patterns** — what clusters or correlations appear
4. **Contradictions** — where answers conflict
5. **What's missing** — questions you should have asked
6. **Recommended actions** — specific decisions this data supports

Output: executive summary + detailed findings + recommendations table`,
        tags: ["survey", "data analysis", "insights"],
        isPremium: false,
      },
      {
        id: "re-3",
        title: "Write a Literature Review",
        description: "Academic literature reviews that synthesise multiple sources",
        prompt: `Write a literature review on [TOPIC] for [PURPOSE: dissertation / report / systematic review].

Sources to synthesise:
[LIST YOUR SOURCES or paste abstracts]

Topic/research question: [WHAT IS THE REVIEW TRYING TO ESTABLISH]
Field: [ACADEMIC DISCIPLINE]
Scope: [TIME PERIOD, GEOGRAPHIC SCOPE, TYPE OF STUDIES]
Word count: [TARGET LENGTH]

Structure:
1. Introduction (context, scope, structure of the review)
2. Thematic sections (organise by theme, NOT by source)
3. Critical synthesis (where sources agree, disagree, or have gaps)
4. Identification of gaps (what is not yet known)
5. Conclusion (summary of state of knowledge)

Style: [APA / MLA / Harvard] — cite in-text properly`,
        tags: ["literature review", "academic", "research"],
        isPremium: false,
      },
      {
        id: "re-4",
        title: "SWOT Analysis",
        description: "Deep SWOT analysis with prioritised strategic recommendations",
        prompt: `Conduct a thorough SWOT analysis for [COMPANY / PRODUCT / PROJECT / DECISION].

Context: [DESCRIBE WHAT YOU'RE ANALYSING]
Current situation: [BRIEF BACKGROUND]
Decision or goal this supports: [WHY ARE YOU DOING THIS SWOT]

For each quadrant, I need MORE than surface-level points:
- Strengths: internal advantages (be specific — what capabilities, assets, advantages)
- Weaknesses: internal limitations (honest — what slows you down or makes you vulnerable)
- Opportunities: external conditions to exploit (market trends, competitor gaps, timing)
- Threats: external risks to plan for (be specific — not "competition exists")

Output:
1. Full SWOT (5 points per quadrant, in priority order)
2. TOWS matrix (how Strengths address Threats, Weaknesses block Opportunities)
3. Top 3 strategic priorities that emerge from this analysis
4. One red flag I should not ignore`,
        tags: ["SWOT", "strategy", "business analysis"],
        isPremium: true,
      },
      {
        id: "re-5",
        title: "Build a Research Framework",
        description: "Design a rigorous methodology for any research question",
        prompt: `Design a research framework for investigating: [RESEARCH QUESTION]

Research context:
- Purpose: [academic / business / product / policy]
- Resources available: [time, budget, team]
- What decisions this research will inform: [DESCRIBE]
- Existing knowledge: [WHAT YOU ALREADY KNOW]

Framework should cover:
1. **Research design** — qualitative / quantitative / mixed and why
2. **Sampling strategy** — who to study and how to select them
3. **Data collection methods** — with pros/cons for each
4. **Analysis approach** — how you'll make sense of the data
5. **Validity and reliability** — how to ensure trustworthy results
6. **Ethical considerations** — consent, data protection, bias
7. **Timeline and milestones**
8. **How to present findings** for your audience`,
        tags: ["research methodology", "framework", "academic"],
        isPremium: true,
      },
      {
        id: "re-6",
        title: "Decision Framework",
        description: "Structured frameworks for making hard decisions clearly",
        prompt: `Help me make this decision using a structured framework.

The decision: [DESCRIBE THE DECISION YOU NEED TO MAKE]
Options I'm considering: [LIST 2-5 OPTIONS]
Constraints: [TIME / BUDGET / PEOPLE / TECHNICAL LIMITATIONS]
What matters most to me: [YOUR PRIORITIES]
What I'm afraid of: [WORST CASE SCENARIOS]

Apply the best framework for this type of decision:
- [Weighted criteria matrix / PRO-CON / Regret minimisation / Second-order thinking / Pre-mortem]

For each option:
- Score against criteria
- Best case / likely case / worst case
- Reversibility (can I undo this if wrong?)
- What information would change my mind

Recommendation: which option the framework suggests + your honest assessment of whether it's right.`,
        tags: ["decision making", "frameworks", "strategy"],
        isPremium: true,
      },
      {
        id: "re-7",
        title: "Analyse a Business Problem",
        description: "Root cause analysis and solution frameworks for business challenges",
        prompt: `Help me analyse and solve this business problem.

Problem statement: [DESCRIBE THE PROBLEM]
Current symptoms: [WHAT YOU'RE OBSERVING]
When it started: [WHEN DID THIS BECOME A PROBLEM]
What we've already tried: [PREVIOUS ATTEMPTS AND WHY THEY FAILED]
Stakeholders affected: [WHO IS IMPACTED]
Resources available to fix it: [BUDGET, TEAM, TIME]

Analysis frameworks to apply:
1. **5 Whys** — dig to the actual root cause
2. **Fishbone diagram** — categorise causes (people, process, technology, environment)
3. **Impact/effort matrix** — prioritise solutions

Output:
- Root cause (not just symptoms)
- 5 solution options (with realistic assessment of each)
- Recommended solution + implementation steps
- How to measure if we've solved it`,
        tags: ["problem solving", "root cause", "business"],
        isPremium: true,
      },
      {
        id: "re-8",
        title: "Fact-Check and Verify Claims",
        description: "Systematically verify claims and identify misinformation",
        prompt: `Help me fact-check and verify these claims.

Claims to verify:
[LIST THE CLAIMS OR PASTE THE TEXT]

For each claim:
1. **Classification** — verifiable fact / opinion / prediction / misleading framing
2. **What I'd need to verify it** — specific sources, data, or evidence required
3. **Red flags** — signs of potential misinformation (vague statistics, missing context, emotional manipulation)
4. **Questions to ask** — what the claim doesn't mention that I should investigate

Also:
- Identify the strongest claim (hardest to dispute)
- Identify the weakest claim (most likely to be wrong)
- Suggest 3 reliable source types to verify this topic

Note: Be honest about what you cannot verify and why.`,
        tags: ["fact-checking", "research", "critical thinking"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "build-from-scratch",
    name: "Build App From Scratch",
    description: "Complete A–Z guides: stack, auth, backend, security, hosting, and launch",
    icon: "Layers",
    color: "#f59e0b",
    prompts: [
      {
        id: "bfs-1",
        title: "Define Your Project & Pick Your Stack",
        description: "Nail the scope, avoid the wrong tech choices, and start with confidence",
        prompt: `I want to build: [DESCRIBE YOUR APP / WEBSITE IN 3-5 SENTENCES].

Answer these to help me choose the right stack:
- Expected users at launch: [under 100 / 100-1000 / 1000+]
- Team: [solo / 2-3 devs / larger team]
- My strongest skill: [frontend / backend / full-stack / no-code]
- Timeline to MVP: [2 weeks / 1 month / 3 months]
- Budget for hosting/tools: [free tier only / $20-50/mo / $100+/mo]
- Mobile app needed: [web only / web + mobile / mobile only]
- Real-time features: [yes / no / maybe]
- Needs payments: [yes: Stripe / no]
- Expected data volume: [light / medium / heavy]

Based on my answers, give me:

1. **Recommended stack** — frontend + backend + database + auth + hosting (with exact versions to use today)
2. **Why this stack** — specific reasons for my project, not generic pros
3. **What to avoid** — 2-3 tempting options that would hurt me for this project and why
4. **Starter repo structure** — exact folder/file layout for day 1
5. **MVP scope** — what's in, what's out, what's phase 2
6. **First 3 commands** — how to initialise the project right now`,
        tags: ["stack selection", "architecture", "project planning", "full-stack"],
        isPremium: false,
      },
      {
        id: "bfs-2",
        title: "System Architecture Blueprint",
        description: "Design the full system before writing a single line of code",
        prompt: `Design the complete system architecture for: [YOUR APP NAME AND DESCRIPTION].

My chosen stack: [FRONTEND / BACKEND / DATABASE / AUTH]
Expected scale at 6 months: [USER COUNT / REQUESTS PER DAY]
Critical constraints: [cost / latency / compliance / offline support / multi-region]

Design:
1. **Component diagram** — every service/layer, how they connect (text-based diagram)
2. **Data flow** — how a typical user request travels through the system end-to-end
3. **Frontend architecture** — routing, state management, data fetching pattern
4. **Backend architecture** — API layer, business logic layer, data layer separation
5. **Database design** — which DB for which data (relational vs KV vs blob) and why
6. **External services** — what to integrate vs build (email, search, storage, queue)
7. **Authentication flow** — token lifecycle, session management, refresh strategy
8. **Caching strategy** — what to cache, where, and for how long
9. **Failure points** — what can go wrong and how each is handled
10. **Scaling path** — what breaks first as you grow and how to fix it when it does

Flag: the 2 decisions that will be hardest to reverse later — get these right now.`,
        tags: ["architecture", "system design", "planning", "scalability"],
        isPremium: false,
      },
      {
        id: "bfs-3",
        title: "Authentication System — Full Implementation",
        description: "Choose the right auth solution and implement it securely end-to-end",
        prompt: `Design and implement authentication for my [APP TYPE] built with [STACK].

My requirements:
- Auth methods needed: [email+password / Google OAuth / GitHub / magic link / phone OTP / SSO]
- User roles needed: [admin / user / guest / custom: describe]
- Session behaviour: [stay logged in / expire after X hours / device management]
- Special requirements: [MFA / invite-only / org/team accounts / public + private areas]

Give me:

**Part 1 — Auth provider recommendation:**
Compare these options for MY project: [Supabase Auth / Auth0 / Clerk / NextAuth / custom JWT / Firebase Auth]
- Pros/cons for my specific requirements
- Cost at 100 / 1,000 / 10,000 users
- Migration difficulty if I want to switch later
- **Final recommendation with reasoning**

**Part 2 — Full implementation:**
1. Setup and configuration (env vars, provider setup)
2. Sign up flow (with email verification)
3. Sign in flow
4. Session management (access token + refresh token lifecycle)
5. Protected routes middleware
6. Role-based access control (RBAC) implementation
7. Password reset flow
8. OAuth provider setup (if applicable)

**Part 3 — Security hardening:**
- Rate limiting on auth endpoints
- Brute force protection
- Token storage (where and why — NOT localStorage for sensitive tokens)
- CSRF protection
- Security headers to set`,
        tags: ["authentication", "security", "auth0", "supabase", "JWT"],
        isPremium: false,
      },
      {
        id: "bfs-4",
        title: "Database Design + Where to Host It",
        description: "Schema design, the right database type, and exact hosting recommendation with costs",
        prompt: `Design the complete database layer for my app.

App description: [WHAT YOUR APP DOES]
Stack: [BACKEND LANGUAGE/FRAMEWORK]
Expected data: [describe your main entities and relationships]
Scale target: [row counts at 1 year, read/write ratio]
Budget: [free / $0-20/mo / $20-100/mo / flexible]

**Part 1 — Database type selection:**
Evaluate for my use case:
- PostgreSQL vs MySQL vs SQLite
- Should I add Redis? (caching + queues + sessions)
- Should I add a search engine? (Algolia / Typesense / pgvector)
- Should I add object storage? (Supabase Storage / Cloudflare R2 / S3)
→ Recommendation with cost at each growth stage

**Part 2 — Where to host it:**
Compare these hosting options FOR MY BUDGET AND SCALE:
- Supabase (free → Pro → Enterprise)
- Railway
- PlanetScale / Neon / TiDB
- Fly.io Postgres
- AWS RDS / DigitalOcean Managed DB
- Self-hosted VPS

For each: monthly cost, free tier limits, connection pooling, backups, read replicas availability, vendor lock-in risk

**→ Final recommendation:** hosting provider + plan + estimated monthly cost at 3 growth stages

**Part 3 — Schema design:**
Write the complete SQL schema for my app's core entities.
Include: indexes, foreign keys, RLS policies (if Supabase), soft deletes, timestamps.
Add 5 queries I'll run most often — verify the schema handles them efficiently.`,
        tags: ["database", "hosting", "PostgreSQL", "Supabase", "schema"],
        isPremium: true,
      },
      {
        id: "bfs-5",
        title: "Backend API — Complete Build Plan",
        description: "Every endpoint, middleware, validation layer, and error format",
        prompt: `Build the complete backend API plan for my app.

App: [DESCRIPTION]
Framework: [Express / FastAPI / Hono / NestJS / Django / etc.]
Database: [YOUR DB]
Auth: [YOUR AUTH SOLUTION]

**Part 1 — API design:**
For each resource in my app [LIST YOUR MAIN ENTITIES]:
- Endpoints (method + path + description)
- Request schema (body + query params + path params)
- Response schema (success + error)
- Auth required + permission level
- Rate limit recommendation

**Part 2 — Middleware stack (in order):**
1. CORS configuration (exact settings for my setup)
2. Security headers (helmet.js config or equivalent)
3. Rate limiting (per IP + per user)
4. Auth middleware (token verification + user injection)
5. Request validation (Zod / Joi schema)
6. Request logging
7. Error handler (global — never leak stack traces to client)

**Part 3 — Patterns to implement:**
- Consistent error response format (code, message, details)
- Pagination pattern (cursor-based vs offset and when to use which)
- File upload handling
- Background job pattern (what to process async vs sync)
- API versioning strategy

**Part 4 — Testing plan:**
- Unit tests: what to test, what to mock
- Integration tests: which endpoints need real DB tests
- Load test: what to check before launch`,
        tags: ["backend", "API", "middleware", "Express", "REST"],
        isPremium: true,
      },
      {
        id: "bfs-6",
        title: "Security Hardening — Pre-Launch Audit",
        description: "OWASP top 10 + production security checklist before you go live",
        prompt: `Perform a pre-launch security audit for my [APP TYPE] and give me everything to fix.

My stack: [FRONTEND + BACKEND + DATABASE + HOSTING]
Handles: [user data / payments / medical / just content — describe sensitivity]
Auth method: [WHAT I'M USING]
Current stage: [building / near launch / already live]

**Audit me on every category:**

1. **Injection attacks** (SQL injection, command injection, XSS)
   - What to check in my specific stack
   - Code patterns that are vulnerable — show the bad vs good version

2. **Authentication & session security**
   - Token storage vulnerabilities
   - Session fixation, CSRF, clickjacking
   - Password policy and storage (bcrypt cost factor)

3. **Access control**
   - IDOR (Insecure Direct Object Reference) — how to check for it
   - Privilege escalation paths
   - API endpoint that should be protected but might not be

4. **Data exposure**
   - What my API should NEVER return (passwords, tokens, internal IDs)
   - Logging what I shouldn't (PII, secrets)
   - .env and secrets management — what can't go in git

5. **Security headers** (give me the exact headers to set)

6. **Dependency security** (how to audit npm/pip packages)

7. **Infrastructure** (firewall rules, exposed ports, SSH hardening if VPS)

8. **GDPR / compliance** (if handling EU users — what's legally required)

Output: a numbered checklist ordered by severity. Critical items first.`,
        tags: ["security", "OWASP", "audit", "production", "hardening"],
        isPremium: true,
      },
      {
        id: "bfs-7",
        title: "Choose Your Hosting — Full Comparison",
        description: "Exact recommendation for where to host frontend, backend, and database — with real costs",
        prompt: `Recommend the best hosting setup for my app.

App details:
- Type: [SaaS / portfolio / marketplace / API / e-commerce / internal tool]
- Stack: [FRONTEND FRAMEWORK + BACKEND FRAMEWORK + DATABASE]
- Expected traffic at launch: [requests/day or users/day]
- Expected traffic at 1 year: [growth estimate]
- Monthly hosting budget: [AMOUNT or "minimise cost"]
- Team size: [1 / 2-5 / 5+]
- DevOps experience: [none / some / confident]
- Must-have: [low latency / multi-region / EU hosting / SLA guarantee / specific compliance]

**Compare these options for MY project:**

Frontend hosting:
- Vercel / Netlify / Cloudflare Pages / AWS Amplify / self-hosted Nginx
→ Recommendation + why + cost breakdown + hidden gotchas

Backend hosting:
- Railway / Render / Fly.io / DigitalOcean App Platform / Heroku / AWS / GCP / self-hosted VPS
→ Compare: cold starts, pricing model, scaling behaviour, DX, ops complexity
→ Recommendation + plan + estimated cost at 3 growth stages

Database hosting: [covered in schema prompt or repeat here]

**Final architecture recommendation:**
Exact services to use + monthly cost at:
- Launch (0-100 users): $___/mo
- Early growth (1,000 users): $___/mo
- Scale (10,000 users): $___/mo

Flags: services where I'll hit a pricing cliff and need to plan ahead.`,
        tags: ["hosting", "Vercel", "Railway", "AWS", "deployment", "cost"],
        isPremium: true,
      },
      {
        id: "bfs-8",
        title: "CI/CD Pipeline + Production Deploy",
        description: "Automated deploys, environment management, and monitoring from day one",
        prompt: `Set up a complete CI/CD pipeline and production deployment for my app.

Stack: [FRONTEND + BACKEND + DATABASE]
Hosting: [WHERE YOU'RE DEPLOYING]
Repo: [GitHub / GitLab / Bitbucket]
Team: [solo / small team]
Environments needed: [dev / staging / prod / all three]

**Part 1 — GitHub Actions / CI pipeline:**
Write the complete workflow YAML for:
1. On every PR: lint + type check + unit tests + build check
2. On merge to main: run tests → build → deploy to staging
3. On tag/release: deploy to production with manual approval gate
4. Environment-specific secrets management
5. Notifications (Slack / email on failure)

**Part 2 — Environment management:**
- How to manage environment variables across dev/staging/prod
- Which secrets go where (which provider: Doppler / GitHub Secrets / Vault / .env)
- How to keep staging as close to prod as possible
- Database migration strategy (never break prod on deploy)

**Part 3 — Production readiness:**
- Health check endpoint (what it should verify)
- Zero-downtime deployment strategy
- Rollback procedure (how to revert in under 5 minutes)
- Database backup schedule and restore test

**Part 4 — Monitoring (free tier first):**
- Error tracking: Sentry setup (what to capture, what to ignore)
- Uptime monitoring: how to get alerted when site is down
- Performance monitoring: what metrics to watch
- Log aggregation: where to send logs and how to query them

Give me the complete setup I can follow step by step.`,
        tags: ["CI/CD", "GitHub Actions", "deployment", "monitoring", "DevOps"],
        isPremium: true,
      },
      {
        id: "bfs-9",
        title: "Production Launch Checklist",
        description: "Everything to verify in the 48 hours before you go live",
        prompt: `Generate a complete pre-launch checklist for my app before I go live.

App type: [WHAT IT DOES]
Stack: [FULL STACK]
Hosting: [WHERE IT'S DEPLOYED]
Has payments: [yes / no]
Handles user data: [yes / no]
Expected launch date: [DATE]

Check every category — mark each as [DONE / TODO / NOT APPLICABLE]:

**Performance:**
- [ ] Lighthouse score (target: 90+ performance, 100 accessibility)
- [ ] Images optimised and lazy loaded
- [ ] Bundle size analysed (no massive dependencies)
- [ ] Database queries have indexes — no N+1 problems
- [ ] API response times under 200ms for common endpoints

**Security:**
- [ ] All environment variables set in production (none hardcoded)
- [ ] HTTPS enforced (HTTP → HTTPS redirect)
- [ ] Security headers verified (helmet / CF headers)
- [ ] Auth tokens expire and refresh correctly
- [ ] Rate limiting active on API and auth endpoints
- [ ] Error responses don't leak stack traces or internal details
- [ ] Dependencies audited (npm audit / pip check)

**Reliability:**
- [ ] Error tracking live (Sentry or equivalent)
- [ ] Uptime monitoring active with alert
- [ ] Database backups configured and tested
- [ ] Rollback procedure documented and tested

**Legal / Compliance:**
- [ ] Privacy Policy live and linked
- [ ] Terms of Service live and linked
- [ ] Cookie consent (if tracking EU users)
- [ ] GDPR data deletion flow works

**UX:**
- [ ] 404 page looks intentional
- [ ] Error states shown to user (not blank screens)
- [ ] Email sending tested (confirmation, password reset)
- [ ] Mobile tested on real device
- [ ] Forms work with keyboard only (accessibility)

**Business:**
- [ ] Analytics tracking verified (events firing correctly)
- [ ] Payment flow tested with test card
- [ ] Customer support contact visible
- [ ] Social meta tags (OG image, title, description)

For every TODO: give me the exact fix.`,
        tags: ["launch", "checklist", "production", "pre-launch", "QA"],
        isPremium: true,
      },
      {
        id: "bfs-10",
        title: "Full Project Roadmap — Week by Week",
        description: "A realistic, detailed build plan from idea to live product",
        prompt: `Create a realistic week-by-week roadmap to build and launch my app.

Project: [DESCRIBE YOUR APP]
My skill level: [beginner / intermediate / experienced]
Available time per week: [HOURS]
Target launch: [DATE or "as fast as possible"]
Stack (if decided): [OR "help me choose"]
Solo or team: [SOLO / TEAM SIZE]

**Week-by-week plan:**

For each week, define:
- **Goal** — what "done" looks like at end of week
- **Tasks** — specific things to build/configure/test (not vague)
- **Deliverable** — what you can show or deploy at the end
- **Risk** — what could take longer than expected
- **Decision point** — anything requiring a choice that would block progress

Include explicit phases:
- Week 1-2: Foundation (repo, stack, auth, database, basic deploy)
- Week 3-4: Core features (the thing that makes it useful)
- Week 5-6: Polish + edge cases + error states
- Week 7: Security hardening + performance
- Week 8: Launch prep + monitoring + soft launch

**Also include:**
- Which tasks to batch together (things that share context)
- Which tasks can be skipped for MVP and added post-launch
- The #1 thing that will kill the timeline (and how to prevent it)
- A "if I only have X hours this week" priority cut list`,
        tags: ["roadmap", "planning", "project management", "MVP", "launch"],
        isPremium: true,
      },
    ],
  },

  {
    slug: "ai-tools",
    name: "AI & Token Efficiency",
    description: "Prompts engineered to get perfect results in one shot — fewer tokens, less cost",
    icon: "Cpu",
    color: "#818cf8",
    prompts: [
      {
        id: "ai-1",
        title: "One-Shot Code Request",
        description: "Get production-ready code first try — zero back-and-forth",
        prompt: `You are a [LANGUAGE] expert. Write [WHAT YOU NEED] with zero fluff.

Requirements (complete list — make no assumptions):
- Input: [DESCRIBE INPUT]
- Output: [DESCRIBE EXACT OUTPUT FORMAT]
- Constraints: [performance / security / compatibility requirements]
- Error handling: [how to handle edge cases]
- Do NOT include: explanations, comments unless critical, alternative approaches

Code only. If clarification is needed, ask exactly one question, then stop.

[PASTE ANY RELEVANT EXISTING CODE OR CONTEXT HERE]`,
        tags: ["coding", "one-shot", "token efficiency"],
        isPremium: false,
      },
      {
        id: "ai-2",
        title: "Minimal-Token Debug Request",
        description: "Pinpoint bugs without wasting tokens on context AI doesn't need",
        prompt: `Debug this. Give me: fix + one-line reason. Nothing else unless I ask.

Error: [EXACT ERROR MESSAGE — copy it, don't paraphrase]
File: [FILENAME:LINE NUMBER]

Broken code (only the relevant part, max 50 lines):
\`\`\`
[PASTE CODE]
\`\`\`

Expected: [ONE SENTENCE — what should happen]
Actual: [ONE SENTENCE — what is happening instead]
Already tried: [BULLET LIST ONLY]`,
        tags: ["debugging", "minimal", "token efficiency"],
        isPremium: false,
      },
      {
        id: "ai-3",
        title: "Batch Tasks in One Message",
        description: "Combine 5 tasks into 1 prompt — 5x cheaper than separate requests",
        prompt: `Complete all tasks below in one response. Number each output to match its task.

TASK 1: [DESCRIBE TASK 1]
Format: [exactly how you want the output]

---
TASK 2: [DESCRIBE TASK 2]
Format: [exactly how you want the output]

---
TASK 3: [DESCRIBE TASK 3]
Format: [exactly how you want the output]

---
TASK 4: [DESCRIBE TASK 4]
Format: [exactly how you want the output]

---
TASK 5: [DESCRIBE TASK 5]
Format: [exactly how you want the output]

Rules:
- No preamble before each answer
- No summary after each answer
- Use "---" as separator between outputs
- If a task is unclear, complete your best interpretation and flag it in [brackets]`,
        tags: ["batching", "efficiency", "cost saving"],
        isPremium: false,
      },
      {
        id: "ai-4",
        title: "Write a Perfect System Prompt",
        description: "A system prompt that makes every reply precise and cheap",
        prompt: `Write a system prompt for an AI assistant specialising in [ROLE / DOMAIN].

Use case: [what tasks will it perform daily]
Users: [who will interact with it]

The system prompt MUST enforce:
1. **Response format** — exact structure for every reply (define it precisely)
2. **Tone** — define it with 3 specific adjectives and one example sentence
3. **Always include** — mandatory elements in every response
4. **Never include** — no disclaimers / no "as an AI" / no unsolicited alternatives / no padding
5. **Ambiguity rule** — exactly what to do when the request is unclear
6. **Length calibration** — when to be brief (1-3 lines) vs detailed (structured sections)
7. **Output efficiency** — respond only to what was asked; do not add context the user didn't request

Target length: under 300 tokens. Every word must earn its place.

After the system prompt: rate it 1-10 for token efficiency and explain the score.`,
        tags: ["system prompt", "AI setup", "prompt engineering"],
        isPremium: true,
      },
      {
        id: "ai-5",
        title: "Exact JSON Output Every Time",
        description: "Get structured data in your exact schema — no reformatting ever",
        prompt: `Extract/generate data from the source below. Output ONLY valid JSON — no markdown fences, no explanation, no preamble.

Source:
[PASTE TEXT, DOCUMENT, OR DESCRIPTION TO EXTRACT FROM]

Required schema (fill in your field names and types):
{
  "[field_1]": "string",
  "[field_2]": "number",
  "[field_3]": ["array", "of", "strings"],
  "[nested]": {
    "[sub_field]": "boolean"
  }
}

Rules:
- null for missing values (never omit a field)
- Arrays: [] if empty, never null
- Strings: trimmed, no extra whitespace
- Dates: ISO 8601 (YYYY-MM-DD)
- Numbers: actual numbers, not strings
- If a field is ambiguous, add "_confidence": 0.0-1.0 beside it`,
        tags: ["JSON", "structured output", "extraction", "API"],
        isPremium: true,
      },
      {
        id: "ai-6",
        title: "Compress Context to Fit Your Window",
        description: "Shrink documentation or notes by 80% — keeping all the important parts",
        prompt: `Compress the following content into a dense context block I can paste into future prompts. Target: under [TOKEN LIMIT: 500 / 1000 / 2000] tokens.

Content to compress:
[PASTE: documentation / codebase notes / long conversation / research / meeting notes]

Compression rules:
1. KEEP: specific names, numbers, decisions, error messages, constraints, code signatures
2. REMOVE: pleasantries, examples that restate the rule, motivational framing, redundant definitions
3. MERGE: similar points into one line
4. FORMAT: terse bullets + inline code snippets; short headers for sections

Start the output with this header:
[COMPRESSED CONTEXT — paste this above your question]

Then the compressed content.

After: state original word count → compressed word count → % reduction.`,
        tags: ["context compression", "token saving", "long documents"],
        isPremium: true,
      },
      {
        id: "ai-7",
        title: "Build a Prompt Chain",
        description: "Break complex tasks into linked steps — cheaper and more accurate than one giant prompt",
        prompt: `Design a prompt chain to accomplish: [DESCRIBE YOUR END GOAL]

A prompt chain breaks one complex task into 3-6 focused steps. Each step's output feeds the next. This is 40-60% cheaper than one massive prompt and produces far better results.

For each step, define:
STEP [N]:
- Purpose: [what this step does]
- Input: [what it receives — from user or previous step output]
- Instruction: [the exact prompt for this step — one clear action only]
- Output: [exact format — what gets passed forward]
- Token estimate: [rough]

Requirements:
- Max [NUMBER] steps
- Flag steps that can run in parallel
- Mark the most expensive step — suggest where to save tokens there
- Each step must be useful even if a later step fails

End with:
- Total estimated token cost for the chain
- vs estimated cost of doing it in one prompt
- Why the chain produces better results here

Task: [YOUR COMPLEX TASK IN DETAIL]`,
        tags: ["prompt chaining", "complex tasks", "AI engineering"],
        isPremium: true,
      },
      {
        id: "ai-8",
        title: "Audit & Slash Your Prompt Tokens",
        description: "Cut any prompt by 50%+ without losing output quality",
        prompt: `Audit this prompt and rewrite it to use the fewest tokens possible without degrading the output.

Original prompt:
[PASTE YOUR PROMPT]

Analyse each section for:
1. **Already-known context** — what does the model know without being told?
2. **Verbose phrasing** — where 20 words replace 4
3. **Redundant constraints** — rules that are implied by other rules
4. **Unnecessary examples** — examples that add tokens but not understanding
5. **Output padding triggers** — phrases that make the model write filler

Output:
1. Optimised prompt (target: 50%+ shorter)
2. Token estimate: [ORIGINAL TOKENS] → [OPTIMISED TOKENS] → [MONEY SAVED per 1000 calls]
3. Annotated cut list: what was removed and why it's safe to remove
4. One thing you should NEVER cut from this type of prompt

Efficiency score for original: [1-10] with explanation.

Note on real savings: at $15/M output tokens (Claude Opus), cutting 200 tokens per call saves $3 per 10,000 calls. At scale, this matters.`,
        tags: ["token audit", "cost reduction", "prompt optimization"],
        isPremium: true,
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getFreePrompts(prompts: Prompt[]): Prompt[] {
  return prompts.filter((p) => !p.isPremium);
}

export function getLockedPrompts(prompts: Prompt[]): Prompt[] {
  return prompts.filter((p) => p.isPremium);
}
