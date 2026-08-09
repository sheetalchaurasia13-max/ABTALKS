function Day12() {

  return (
    <main className="day-page">

      <header className="day-header">

        <a href="/dashboard">
          ← Dashboard
        </a>

        <span>
          DAY 12 / 60
        </span>

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

      {/* GITHUB */}

      <section className="submission-card">

        <p className="eyebrow">
          01 / GITHUB
        </p>

        <label>
          Repository URL
        </label>

        <input
          type="url"
          placeholder="https://github.com/username/project"
        />

        <label>
          Commit URL
        </label>

        <input
          type="url"
          placeholder="https://github.com/.../commit/..."
        />

      </section>

      {/* DEPLOYMENT */}

      <section className="submission-card">

        <p className="eyebrow">
          02 / LIVE DEPLOYMENT
        </p>

        <label>
          Live project URL
        </label>

        <input
          type="url"
          placeholder="https://your-project.vercel.app"
        />

      </section>

      {/* LINKEDIN */}

      <section className="submission-card">

        <p className="eyebrow">
          03 / LINKEDIN
        </p>

        <label>
          LinkedIn post URL
        </label>

        <input
          type="url"
          placeholder="https://linkedin.com/posts/..."
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

      {/* SUBMIT */}

      <button className="submit-button">
        Submit Day 12 →
      </button>

    </main>
  );
}

export default Day12;