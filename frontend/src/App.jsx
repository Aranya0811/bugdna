import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [stackTrace, setStackTrace] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function investigate() {
    if (!stackTrace.trim() || !sourceCode.trim()) {
      setError("Add both the stack trace and source code to begin.");
      return;
    }

    setLoading(true);
    setError("");
    setReport("");

    try {
      const response = await fetch(`${API_URL}/investigate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stack_trace: stackTrace,
          source_code: sourceCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "The investigation failed.");
      }

      setReport(data.report);
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Cannot reach BugDNA's backend. Check that the API server is running on port 8000."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/">
          <span className="brand-mark">B.</span>
          <span>BugDNA</span>
        </a>

        <div className="side-label">INVESTIGATION</div>
        <div className="side-active">
          <span>⌕</span> New investigation
        </div>

        <div className="sidebar-bottom">
          <span className="status-dot" />
          <div>
            <strong>Local API</strong>
            <small>Gemma-powered analysis</small>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <span className="breadcrumb">Workspace / Investigation</span>
          <span className="model-pill">
            <span className="status-dot" /> GEMMA ENGINE
          </span>
        </header>

        <section className="hero">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            AI DEBUGGING INVESTIGATOR
          </div>
          <h1>
            Every bug leaves
            <br />
            <span className="heading-accent">a trail of evidence.</span>
          </h1>
          <p>
            Feed the evidence. Trace the failure. Find the most likely root
            cause with an AI-assisted investigation.
          </p>
        </section>

        <section className="workspace">
          <div className="section-heading">
            <div>
              <span className="step-number">01</span>
              <h2>Evidence intake</h2>
            </div>
            <span className="muted-label">REQUIRED INPUTS</span>
          </div>

          <div className="input-grid">
            <label className="input-card">
              <span className="field-title">
                <span className="field-icon">↳</span>
                Stack trace
              </span>
              <span className="field-description">
                The error, exception, or failure log
              </span>
              <textarea
                value={stackTrace}
                onChange={(e) => setStackTrace(e.target.value)}
                placeholder={"Traceback (most recent call last):\n  File ...\nZeroDivisionError: division by zero"}
                spellCheck="false"
              />
              <span className="field-footer">
                <span>PASTE ERROR LOG</span>
                <span>{stackTrace.length} chars</span>
              </span>
            </label>

            <label className="input-card">
              <span className="field-title">
                <span className="field-icon">{ "</>" }</span>
                Source code
              </span>
              <span className="field-description">
                The relevant function, class, or file
              </span>
              <textarea
                value={sourceCode}
                onChange={(e) => setSourceCode(e.target.value)}
                placeholder={"def calculate_average(total, count):\n    return total / count"}
                spellCheck="false"
              />
              <span className="field-footer">
                <span>PASTE SOURCE CODE</span>
                <span>{sourceCode.length} chars</span>
              </span>
            </label>
          </div>

          <div className="action-row">
            <div className="privacy-note">
              <span>◇</span> Your code is sent to the configured AI API for analysis.
            </div>
            <button
              className="investigate-button"
              onClick={investigate}
              disabled={loading}
            >
              {loading ? "Investigating..." : "Investigate bug"}
              <span>{loading ? "◌" : "↗"}</span>
            </button>
          </div>

          {error && <div className="error-banner">{error}</div>}
        </section>

        {(loading || report) && (
          <section className="report-section">
            <div className="section-heading">
              <div>
                <span className="step-number">02</span>
                <h2>Investigation report</h2>
              </div>
              <span className="muted-label">AI-GENERATED FINDINGS</span>
            </div>

            {loading ? (
              <div className="loading-card">
                <div className="loader" />
                <strong>Following the evidence...</strong>
                <p>Gemma is analyzing the trace and source code.</p>
              </div>
            ) : (
              <article className="report-card">
                <div className="report-toolbar">
                  <span><span className="status-dot" /> REPORT GENERATED</span>
                  <button
                    className="copy-button"
                    onClick={() => navigator.clipboard.writeText(report)}
                  >
                    Copy report ↗
                  </button>
                </div>
                <div className="report-text markdown-report"><ReactMarkdown>{report}</ReactMarkdown></div>
                <div className="report-disclaimer">
                  Findings are AI-generated hypotheses. Verify the proposed fix
                  and run the regression tests before applying changes.
                </div>
              </article>
            )}
          </section>
        )}

        <footer>
          <span>BugDNA <span className="footer-separator">/</span> DEBUG WITH EVIDENCE</span>
          <span>BUILT FOR THE CURIOUS</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
