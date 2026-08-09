function Companion({ completedDays }) {
  const percentage = Math.round((completedDays / 60) * 100);

  return (
    <section className="dashboard-section companion-card">

      <div className="companion-top">

        <div className="companion-robot">
          🤖
        </div>

        <div>
          <p className="eyebrow">
            60-DAY COMPANION
          </p>

          <h2>
             Power The Streak
          </h2>
        </div>

      </div>

      <p>
        you have built consistent progress {completedDays} days.
        Complete today's task to stay on track for the 60-day goal.
      </p>

      <div className="companion-progress">
        <div
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="companion-footer">
        <span>{completedDays}/60 days filled</span>
        <strong>{percentage}%</strong>
      </div>

    </section>
  );
}

export default Companion;