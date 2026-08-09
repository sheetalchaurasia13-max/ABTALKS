function BottleJourney({ completedDays }) {

  const bottles = [
    { start: 1, end: 15 },
    { start: 16, end: 30 },
    { start: 31, end: 45 },
    { start: 46, end: 60 }
  ];

  return (
    <section className="dashboard-section">

      <div className="section-title">
        <div>
          <p className="eyebrow">
            PROGRESS
          </p>
          <h2>60-Day Bottle Journey</h2>
        </div>

        <span>
          {completedDays}/60
        </span>
      </div>

      <div className="bottle-row">

        {bottles.map((bottle, index) => {

          let fill = 0;

          if (completedDays >= bottle.end) {
            fill = 100;
          } else if (completedDays >= bottle.start) {
            fill =
              ((completedDays - bottle.start + 1) /
              (bottle.end - bottle.start + 1)) * 100;
          }

          return (
            <div className="bottle-column" key={index}>

              <small>
                {bottle.start}-{bottle.end}
              </small>

              <div className="bottle-shape">

                <div
                  className="bottle-liquid"
                  style={{
                    height: `${fill}%`
                  }}
                />

                {fill > 0 && (
                  <span className="falling-drop">
                    💧
                  </span>
                )}

              </div>

              <small>
                {Math.round(fill)}%
              </small>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default BottleJourney;