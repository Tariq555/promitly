"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { ArrowRight, Copy, CheckCheck, Sparkles, RotateCcw, ChevronRight } from "lucide-react";

const AI_MODELS = [
  { id: "claude",     name: "Claude",      company: "Anthropic",  color: "#cc785c", glow: "rgba(204,120,92,0.3)",  symbol: "◈" },
  { id: "chatgpt",    name: "ChatGPT",     company: "OpenAI",     color: "#10a37f", glow: "rgba(16,163,127,0.3)", symbol: "⬡" },
  { id: "gemini",     name: "Gemini",      company: "Google",     color: "#4285f4", glow: "rgba(66,133,244,0.3)", symbol: "✦" },
  { id: "grok",       name: "Grok",        company: "xAI",        color: "#e0e0e0", glow: "rgba(224,224,224,0.2)", symbol: "⊗" },
  { id: "mistral",    name: "Mistral",     company: "Mistral AI", color: "#ff6b35", glow: "rgba(255,107,53,0.3)", symbol: "◆" },
  { id: "deepseek",   name: "DeepSeek",    company: "DeepSeek",   color: "#00c9ff", glow: "rgba(0,201,255,0.3)", symbol: "⊕" },
];

export default function PromptGenerator() {
  const { user } = useAuth();
  const [idea, setIdea] = useState("");
  const [selectedAI, setSelectedAI] = useState("claude");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [showAuthWall, setShowAuthWall] = useState(false);

  const selectedModel = AI_MODELS.find(m => m.id === selectedAI)!;

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    if (!user) { setShowAuthWall(true); return; }
    setLoading(true); setError(""); setResult("");
    try {
      const res = await fetch("/api/generate-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea: idea.trim(), targetAI: selectedAI }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setResult(data.prompt);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>

      {/* Auth wall overlay */}
      {showAuthWall && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(2,2,9,0.92)", backdropFilter: "blur(12px)" }}
          onClick={() => setShowAuthWall(false)}>
          <div onClick={e => e.stopPropagation()} style={{ background: "var(--card)", border: "1px solid rgba(0,229,200,0.25)", borderRadius: 4, padding: "40px 48px", maxWidth: 420, width: "90%", textAlign: "center", boxShadow: "0 0 80px rgba(0,229,200,0.1)" }}>
            {/* Top accent line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, var(--primary), transparent)", borderRadius: "4px 4px 0 0" }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--primary)", marginBottom: 16 }}>// ACCESS REQUIRED</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--text-1)", marginBottom: 12, letterSpacing: "0.05em" }}>SIGN IN TO GENERATE</h3>
            <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 28 }}>
              Create a free account to unlock the AI prompt generator and access 130+ expert prompts.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <Link href="/auth/signup" className="btn btn-accent" style={{ fontSize: 11, padding: "10px 24px" }}>
                Sign up free <ChevronRight size={13} />
              </Link>
              <Link href="/auth/login" className="btn btn-ghost" style={{ fontSize: 11, padding: "10px 24px" }}>
                Sign in
              </Link>
            </div>
            <button onClick={() => setShowAuthWall(false)} style={{ marginTop: 20, background: "none", border: "none", cursor: "pointer", color: "var(--text-3)", fontSize: 11, fontFamily: "var(--font-mono)" }}>
              dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main generator card */}
      <div style={{ position: "relative", background: "var(--card)", border: "1px solid rgba(0,229,200,0.15)", borderRadius: 4, padding: "36px 40px", overflow: "hidden" }}>

        {/* Top border glow */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, var(--primary) 40%, var(--secondary) 70%, transparent 100%)" }} />

        {/* Corner brackets */}
        <div style={{ position: "absolute", top: 12, left: 12, width: 16, height: 16, borderTop: "2px solid var(--primary)", borderLeft: "2px solid var(--primary)", opacity: 0.6 }} />
        <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderTop: "2px solid var(--primary)", borderRight: "2px solid var(--primary)", opacity: 0.6 }} />
        <div style={{ position: "absolute", bottom: 12, left: 12, width: 16, height: 16, borderBottom: "2px solid var(--primary)", borderLeft: "2px solid var(--primary)", opacity: 0.6 }} />
        <div style={{ position: "absolute", bottom: 12, right: 12, width: 16, height: 16, borderBottom: "2px solid var(--primary)", borderRight: "2px solid var(--primary)", opacity: 0.6 }} />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 8px var(--primary)", animation: "pulse 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--primary)" }}>// PROMPT.GENERATOR v1.0</span>
        </div>

        {/* Step 1 — Idea input */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--text-3)", marginBottom: 10 }}>01 / DESCRIBE YOUR IDEA</label>
          <div style={{ position: "relative" }}>
            <textarea
              value={idea}
              onChange={e => setIdea(e.target.value)}
              placeholder="e.g. write a cold outreach email for my SaaS product targeting startup CTOs..."
              rows={4}
              style={{
                width: "100%", background: "rgba(2,2,9,0.8)", border: "1px solid var(--border-2)",
                borderRadius: 2, padding: "14px 16px", color: "var(--text-1)", fontFamily: "var(--font-sans)",
                fontSize: 14, lineHeight: 1.7, outline: "none", resize: "vertical", minHeight: 110,
                transition: "border-color 0.18s, box-shadow 0.18s",
              }}
              onFocus={e => { e.target.style.borderColor = "rgba(0,229,200,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(0,229,200,0.05), 0 0 20px rgba(0,229,200,0.08)"; }}
              onBlur={e => { e.target.style.borderColor = "var(--border-2)"; e.target.style.boxShadow = "none"; }}
            />
            <div style={{ position: "absolute", bottom: 10, right: 12, fontFamily: "var(--font-mono)", fontSize: 10, color: idea.length > 400 ? "var(--rose)" : "var(--text-3)" }}>
              {idea.length}/500
            </div>
          </div>
        </div>

        {/* Step 2 — AI selector */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--text-3)", marginBottom: 12 }}>02 / SELECT TARGET AI</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {AI_MODELS.map(model => (
              <button
                key={model.id}
                onClick={() => setSelectedAI(model.id)}
                style={{
                  background: selectedAI === model.id ? `rgba(${model.color.slice(1).match(/.{2}/g)?.map(x => parseInt(x,16)).join(",")},0.1)` : "rgba(2,2,9,0.6)",
                  border: `1px solid ${selectedAI === model.id ? model.color : "var(--border-2)"}`,
                  borderRadius: 2,
                  padding: "10px 8px",
                  cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                  transition: "all 0.18s",
                  boxShadow: selectedAI === model.id ? `0 0 16px ${model.glow}` : "none",
                }}
              >
                <span style={{ fontSize: 18, color: selectedAI === model.id ? model.color : "var(--text-3)" }}>{model.symbol}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: "0.1em", color: selectedAI === model.id ? model.color : "var(--text-2)", fontWeight: 600 }}>{model.name}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--text-3)" }}>{model.company}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={loading || !idea.trim()}
          style={{
            width: "100%",
            background: loading || !idea.trim()
              ? "rgba(0,229,200,0.08)"
              : `linear-gradient(135deg, ${selectedModel.color}cc, ${selectedModel.color})`,
            border: `1px solid ${loading || !idea.trim() ? "var(--border-2)" : selectedModel.color}`,
            color: loading || !idea.trim() ? "var(--text-3)" : "#020209",
            padding: "16px 28px",
            cursor: loading || !idea.trim() ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase",
            clip: "auto",
            clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
            transition: "all 0.2s",
            boxShadow: loading || !idea.trim() ? "none" : `0 0 30px ${selectedModel.glow}`,
            position: "relative", overflow: "hidden",
          }}
        >
          {loading ? (
            <>
              <span style={{ width: 14, height: 14, border: `2px solid var(--text-3)`, borderTopColor: "var(--primary)", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block", flexShrink: 0 }} />
              Generating prompt...
            </>
          ) : (
            <>
              <Sparkles size={15} />
              Generate Prompt for {selectedModel.name}
              <ArrowRight size={14} />
            </>
          )}
        </button>

        {/* Error */}
        {error && (
          <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(255,64,96,0.08)", border: "1px solid rgba(255,64,96,0.2)", borderRadius: 2, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--rose)" }}>
            ⚠ {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div style={{ marginTop: 24, position: "relative" }}>
            {/* Result top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--neon)", boxShadow: "0 0 6px var(--neon)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--neon)" }}>// PROMPT GENERATED FOR {selectedModel.name.toUpperCase()}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => { setResult(""); setIdea(""); }} style={{ background: "none", border: "1px solid var(--border-2)", borderRadius: 2, cursor: "pointer", color: "var(--text-3)", padding: "4px 10px", display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em" }}>
                  <RotateCcw size={10} /> Reset
                </button>
                <button onClick={handleCopy} style={{
                  background: copied ? "rgba(0,255,136,0.1)" : "rgba(0,229,200,0.08)",
                  border: `1px solid ${copied ? "var(--neon)" : "var(--primary)"}`,
                  borderRadius: 2, cursor: "pointer",
                  color: copied ? "var(--neon)" : "var(--primary)",
                  padding: "4px 12px", display: "flex", alignItems: "center", gap: 5,
                  fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em",
                  transition: "all 0.18s",
                }}>
                  {copied ? <><CheckCheck size={11} /> COPIED</> : <><Copy size={11} /> COPY</>}
                </button>
              </div>
            </div>

            {/* Result box */}
            <div style={{
              background: "rgba(2,2,9,0.9)",
              border: `1px solid ${selectedModel.color}40`,
              borderRadius: 2,
              padding: "20px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              lineHeight: 1.85,
              color: "var(--text-1)",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              boxShadow: `0 0 30px ${selectedModel.glow}, inset 0 0 20px rgba(0,0,0,0.3)`,
            }}>
              {/* Blinking cursor at start */}
              <span style={{ color: selectedModel.color, marginRight: 8 }}>›</span>
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
