import React, { useState } from "react";
import styles from "./BarChart.module.css";
import BarChart from "./BarChart";
import BarChartCurrent from "./BarChartCurrent";

export default function Timeline() {
  const [current, setCurrent] = useState(false);
  return (
    <>
      <div>
        {!current && <BarChart />}
        {current && <BarChartCurrent />}
      </div>
      <div className={styles.yearsWrap}>
        <p
          className={!current ? styles.yearActive : styles.year}
          onClick={() => setCurrent(!current)}
        >
          2022
        </p>
        <p
          className={current ? styles.yearActive : styles.year}
          onClick={() => setCurrent(!current)}
        >
          2023
        </p>
      </div>
    </>
  );
}
