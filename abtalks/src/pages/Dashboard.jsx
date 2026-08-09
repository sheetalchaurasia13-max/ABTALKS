import Companion from "../components/Companion";
import BottleJourney from "../components/BottleJourney";
import StatCard from "../components/StatCard";

function Dashboard() {

  const completedDays = 11;
  const currentDay = 12;
  const completion = Math.round(
    (completedDays / 60) * 100
  );

  return (
    <main className="dashboard">

      <header className="dashboard-header">

        <div>
          <p className="eyebrow">
            <a 
              href="/" 
              style={{ 
                color: "inherit", 
                textDecoration: "none", 
                cursor: "pointer",
                transition: "opacity 0.2s"
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              ABTALKS
            </a>{" "}
            / DASHBOARD
          </p>

          <h1>
            Good evening 👋
          </h1>

          <p>
            Day {currentDay} is waiting for you.
          </p>
        </div>

        <div className="profile-button">
          👤
        </div>

      </header>

      {/* STREAK */}

      <section className="streak-card">

        <div>
          <p className="eyebrow">
            CURRENT STREAK
          </p>

          <h2>
            🔥 {completedDays} days
          </h2>

          <p>
            Don't break the chain.
          </p>
        </div>

        <div className="completion">
          {completion}%
        </div>

      </section>

      {/* STATS */}

      <section className="stats-grid">

        <StatCard
          icon="📈"
          title="Completion"
          value={`${completion}%`}
          description="11 of 60 days"
        />

        <StatCard
          icon="⚡"
          title="Momentum"
          value="82"
          description="Strong momentum"
        />

      </section>

      {/* TODAY */}

      <section className="task-card">

        <p className="eyebrow">
          DAY 12 / TODAY
        </p>

        <h2>
          Build Something Useful
        </h2>

        <p>
          Create a small project that solves
          a real problem. Push it to GitHub,
          deploy it, and share your progress.
        </p>

        <a
          href="/day/12"
          className="primary-button"
        >
          Open Day 12 →
        </a>

      </section>

      {/* COMPANION */}

      <Companion
        completedDays={completedDays}
      />

      {/* BOTTLES */}

      <BottleJourney
        completedDays={completedDays}
      />

      {/* ACHIEVEMENTS */}

      <section className="dashboard-section">

        <p className="eyebrow">
          ACHIEVEMENTS
        </p>

        <h2>
          Your wins
        </h2>

        <div className="achievement-grid">

          <div>
            🔥
            <strong>
              11 Day Streak
            </strong>
            <small>
              Consistency
            </small>
          </div>

          <div>
            💻
            <strong>
              Builder
            </strong>
            <small>
              First project
            </small>
          </div>

          <div>
            🚀
            <strong>
              Public
            </strong>
            <small>
              Sharing progress
            </small>
          </div>

        </div>

      </section>

      {/* PROFILE */}

      <section className="profile-card">

        <p className="eyebrow">
          PROFILE
        </p>

        <h2>
          Student
        </h2>

        <p>
          Fullstack Web Development
        </p>

      </section>

    </main>
  );
}

export default Dashboard;