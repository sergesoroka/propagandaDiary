import styles from "./BarChart.module.css";

import { commonStatistic } from "../../../utils/statisticCalculate";

const BarChart = () => {
  const data = [
    {
      name: "1",
      score: commonStatistic("2022-01-01", "2022-01-31", "Fake").length * 10,
    },
    {
      name: "2",
      score: commonStatistic("2022-02-01", "2022-02-31", "Fake").length * 10,
    },
    {
      name: "3",
      score: commonStatistic("2022-03-01", "2022-03-31", "Fake").length * 10,
    },
    {
      name: "4",
      score: commonStatistic("2022-04-01", "2022-04-31", "Fake").length * 10,
    },
    {
      name: "5",
      score: commonStatistic("2022-05-01", "2022-05-31", "Fake").length * 10,
    },
    {
      name: "6",
      score: commonStatistic("2022-06-01", "2022-06-31", "Fake").length * 10,
    },
    {
      name: "7",
      score: commonStatistic("2022-07-01", "2022-07-31", "Fake").length * 10,
    },
    {
      name: "8",
      score: commonStatistic("2022-08-01", "2022-08-31", "Fake").length * 10,
    },
    {
      name: "9",
      score: commonStatistic("2022-09-01", "2022-09-31", "Fake").length * 10,
    },
    {
      name: "10",
      score: commonStatistic("2022-10-01", "2022-10-31", "Fake").length * 10,
    },
    {
      name: "11",
      score: commonStatistic("2022-11-01", "2022-11-31", "Fake").length * 10,
    },
    {
      name: "12",
      score: commonStatistic("2022-12-01", "2022-12-31", "Fake").length * 10,
    },
  ];

  return (
    <>
      <div>
        <svg width="830" height="100" style={{ transform: "scaleY(-1)" }}>
          {data.map((item, i) => {
            let color = i % 2 === 0 ? "#CDCDCD" : "#e4e4e4";
            return (
              <>
              <rect
                key={item.name}
                width="60"
                height={item.score}
                style={{ fill: color }}
                x={i * 70}
              />
              <text fill="#ccc">1</text></>
            );
          })}
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "830px",
        }}
      >
        <p>01</p>
        <p>02</p>
        <p>03</p>
        <p>04</p>
        <p>05</p>
        <p>06</p>
        <p>07</p>
        <p>08</p>
        <p>09</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
      </div>
      <p className={styles.subtitle}>Динаміка фейків</p>
    </>
  );
};

export default BarChart;
