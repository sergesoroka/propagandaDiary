import styles from "./BarChart.module.css";

const BarChart = () => {
  const data = [
    { name: "1", score: 80 },
    { name: "2", score: 76 },
    { name: "3", score: 90 },
    { name: "4", score: 82 },
    { name: "5", score: 90 },
    { name: "6", score: 75 },
    { name: "7", score: 86 },
    { name: "8", score: 80 },
    { name: "9", score: 52 },
    { name: "10", score: 77 },
    { name: "11", score: 62 },
    { name: "12", score: 40 },
  ];

  return (
    <>
      <div>
        <svg width="830" height="100" style={{ transform: "rotate(180deg)" }}>
          {data.map((item, i) => {
            let color = i % 2 === 0 ? "#CDCDCD" : "#e4e4e4";
            return (
              <rect
                key={item.name}
                width="60"
                height={item.score}
                style={{ fill: color }}
                x={i * 70}
              />
            );
          })}
        </svg>
      </div>
      <p className={styles.subtitle}>Динаміка фейків</p>
    </>
  );
};

export default BarChart;
