"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Zap, CheckCircle2, XCircle } from "lucide-react";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!supabase) {
      setStatus("error");
      return;
    }

    // Supabase automatically reads the session from the URL hash (#access_token=...)
    // onAuthStateChange fires as soon as the session is established
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setStatus("success");
        setTimeout(() => router.replace("/categories"), 1000);
      } else if (event === "TOKEN_REFRESHED") {
        setStatus("success");
        setTimeout(() => router.replace("/categories"), 1000);
      }
    });

    // Fallback: if already signed in (e.g. page refresh), redirect immediately
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setStatus("success");
        setTimeout(() => router.replace("/categories"), 800);
      }
    });

    // Timeout fallback in case event never fires
    const timeout = setTimeout(() => {
      supabase!.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          router.replace("/categories");
        } else {
          setStatus("error");
        }
      });
    }, 5000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
      {/* Logo */}
      <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--primary-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Zap size={22} color="#fff" fill="#fff" />
      </div>

      {status === "loading" && (
        <>
          <div style={{ width: 28, height: 28, border: "2px solid var(--border-2)", borderTopColor: "var(--primary)", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--text-1)", marginBottom: 6 }}>Verifying your email…</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-4)" }}>Just a second</div>
          </div>
        </>
      )}

      {status === "success" && (
        <>
          <CheckCircle2 size={32} color="var(--emerald)" />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--text-1)", marginBottom: 6 }}>Email verified!</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)" }}>Redirecting you now…</div>
          </div>
        </>
      )}

      {status === "error" && (
        <>
          <XCircle size={32} color="var(--rose)" />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--text-1)", marginBottom: 6 }}>Link expired or invalid</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)", marginBottom: 20 }}>Try signing up again to get a new link.</div>
            <a href="/auth/signup" className="btn btn-primary" style={{ fontSize: 13, padding: "9px 20px" }}>Back to sign up</a>
          </div>
        </>
      )}
    </div>
  );
}
