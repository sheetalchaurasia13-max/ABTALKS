function Landing() {
  return (
    <main className="landing">

      {/* HEADER */}
      <header className="landing-header">
        <div className="logo">
          <span className="logo-mark">AB</span>
          <span>Talks</span>
        </div>

        <span className="challenge-label">
          60 DAYS
        </span>
      </header>

      {/* HERO */}
      <section className="landing-hero">

        <p className="eyebrow">
          FOR COLLEGE BUILDERS
        </p>

        <h1>
          Your future
          <br />
          self is watching.
        </h1>

        <p className="hero-text">
          Build something every day for 60 days.
          Create proof of work, build consistency,
          and become visible to recruiters.
        </p>

        <a href="/dashboard" className="primary-button">
          I'm in →
        </a>

        <p className="small-note">
          One GitHub commit + one LinkedIn post every day.
        </p>

      </section>

      {/* WHAT IS ABTALKS */}
      <section className="landing-section">

        <p className="eyebrow">
          WHAT IS ABTALKS?
        </p>

        <h2>
          Stop learning quietly.
          Start building publicly.
        </h2>

        <p>
          ABTalks is a 60-day public coding challenge
          designed for college students.
        </p>

      </section>

      {/* WHY 60 DAYS */}
      <section className="landing-section">

        <p className="eyebrow">
          WHY 60 DAYS?
        </p>

        <div className="info-card">
          <strong>01</strong>
          <h3>Consistency</h3>
          <p>
            Show up every day instead of waiting
            for motivation.
          </p>
        </div>

        <div className="info-card">
          <strong>02</strong>
          <h3>Proof of Work</h3>
          <p>
            Your GitHub activity becomes evidence
            of what you can actually build.
          </p>
        </div>

        <div className="info-card">
          <strong>03</strong>
          <h3>Visibility</h3>
          <p>
            Share your progress and let recruiters
            see your journey.
          </p>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="landing-section">

        <p className="eyebrow">
          HOW IT WORKS
        </p>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <div>
              <h3>Pick a track</h3>
              <p>Choose what you want to become better at.</p>
            </div>
          </div>

          <div className="step">
            <span>2</span>
            <div>
              <h3>Build daily</h3>
              <p>Complete one practical challenge every day.</p>
            </div>
          </div>

          <div className="step">
            <span>3</span>
            <div>
              <h3>Show your work</h3>
              <p>Submit GitHub and LinkedIn proof.</p>
            </div>
          </div>

        </div>

      </section>

      {/* TRACKS */}
      <section className="landing-section">

        <p className="eyebrow">
          CHOOSE YOUR TRACK
        </p>

        <div className="track-card">
          <span>01</span>
          <h3>Fullstack Web Development</h3>
          <p>Build modern web applications.</p>
        </div>

        <div className="track-card">
          <span>02</span>
          <h3>Data Structures & Algorithms</h3>
          <p>Strengthen your problem-solving skills.</p>
        </div>

        <div className="track-card">
          <span>03</span>
          <h3>AI & Machine Learning</h3>
          <p>Build your foundations in AI.</p>
        </div>

      </section>

      {/* COMPANION TEASER */}
      <section className="companion-teaser">

        <div className="robot">
          🤖
        </div>

        <p className="eyebrow">
          YOUR 60-DAY COMPANION
        </p>

        <h2>
          Charge your Consistency.
        </h2>

        <p>
          Every completed day fills your companion.
          Complete all 60 days and watch it reach 100%.
        </p>

        <div className="teaser-bar">
          <div className="teaser-fill" />
        </div>



      </section>

      {/* FINAL CTA */}
      <section className="final-cta">

        <p className="eyebrow">
          YOUR NEXT 60 DAYS
        </p>

        <h2>
          Start building.
        </h2>

        <a href="/dashboard" className="primary-button">
          Start the challenge →
        </a>

      </section>

    </main>
  );
}

export default Landing;