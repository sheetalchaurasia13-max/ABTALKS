import { useState } from "react";

function Day12() {
  const [repoUrl, setRepoUrl] = useState("");
  const [commitUrl, setCommitUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom Validation (prevents browser floating popups)
    if (!repoUrl.trim() || !commitUrl.trim() || !linkedinUrl.trim()) {
      setErrorMessage("⚠️ Please fill in all required fields (GitHub Repo, Commit URL, and LinkedIn Post) before submitting.");
      return;
    }

    setErrorMessage("");
    setIsSubmitted(true);
  };

  return (
    <main className="day-page">

      <header className="day-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <a href="/dashboard">
          ← Dashboard
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>
            DAY 12 / 60
          </span>
          {isSubmitted && (
            <span style={{ 
              backgroundColor: '#10b981', 
              color: '#000', 
              padding: '2px 8px', 
              borderRadius: '4px', 
              fontSize: '0.75rem', 
              fontWeight: 'bold' 
            }}>
              ✓ SUBMITTED
            </span>
          )}
        </div>

      </header>

      <section className="day-hero">

        <p className="eyebrow">
          TODAY'S BUILD
        </p>

        <h1>
          Build Something Useful
        </h1>

        <p>
          Create a small project that solves
          a real problem.
        </p>

      </section>

      {/* TASK */}

      <section className="day-card">

        <p className="eyebrow">
          THE TASK
        </p>

        <h2>
          Build a useful mini-project.
        </h2>

        <p>
          Your project should solve a simple,
          real-world problem and demonstrate
          what you've learned so far.
        </p>

      </section>

      {/* REQUIREMENTS */}

      <section className="day-card">

        <p className="eyebrow">
          REQUIREMENTS
        </p>

        <ul>
          <li>Working project</li>
          <li>Clean code</li>
          <li>GitHub repository</li>
          <li>Live deployment</li>
          <li>LinkedIn progress post</li>
        </ul>

      </section>

      {/* IF SUBMITTED: SHOW SUCCESS CARD */}
      {isSubmitted ? (
        <section className="submission-card" style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.1)', 
          border: '1px solid #10b981', 
          borderRadius: '12px', 
          padding: '24px', 
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{ fontSize: '2rem' }}>🏆</div>
          <div>
            <h2 style={{ color: '#10b981', margin: '0 0 4px 0', fontSize: '1.2rem' }}>
              Day 12 is in the books.
            </h2>
            <p style={{ color: '#a7f3d0', margin: 0, fontSize: '0.9rem' }}>
              Your streak is now 12 days. Go make tomorrow easier.
            </p>
          </div>
        </section>
      ) : (
        /* IF NOT SUBMITTED: SHOW FORM WITH Custom Validation */
        <form onSubmit={handleSubmit} noValidate>
          {/* GITHUB */}

          <section className="submission-card">

            <p className="eyebrow">
              01 / GITHUB *
            </p>

            <label>
              Repository URL *
            </label>

            <input
              type="url"
              placeholder="https://github.com/username/project"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
            />

            <label>
              Commit URL *
            </label>

            <input
              type="url"
              placeholder="https://github.com/.../commit/..."
              value={commitUrl}
              onChange={(e) => setCommitUrl(e.target.value)}
            />

          </section>

          {/* DEPLOYMENT */}

          <section className="submission-card">

            <p className="eyebrow">
              02 / LIVE DEPLOYMENT (OPTIONAL)
            </p>

            <label>
              Live project URL
            </label>

            <input
              type="url"
              placeholder="https://your-project.vercel.app"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
            />

          </section>

          {/* LINKEDIN */}

          <section className="submission-card">

            <p className="eyebrow">
              03 / LINKEDIN *
            </p>

            <label>
              LinkedIn post URL *
            </label>

            <input
              type="url"
              placeholder="https://linkedin.com/posts/..."
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
            />

          </section>

          {/* COMPANION */}

          <section className="day-companion">

            <div>
              🤖
            </div>

            <p>
              You've already completed 11 days.
              Don't stop now.
            </p>

            <strong>
              Don't break the chain-submit Day 12 now.
            </strong>

          </section>

          {/* INLINE SCROLL-PROOF ERROR MESSAGE */}
          {errorMessage && (
            <div style={{
              color: '#f87171',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {errorMessage}
            </div>
          )}

          {/* SUBMIT BUTTON */}

          <button 
            type="submit" 
            className="submit-button"
          >
            Submit Day 12 →
          </button>
        </form>
      )}

    </main>
  );
}

export default Day12;