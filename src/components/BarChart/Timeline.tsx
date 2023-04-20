import React, { useState } from "react";
import styles from "./BarChart.module.css";
import BarChart from "./BarChart";
import BarChartCurrent from "./BarChartCurrent";

export default function Timeline({current}: {current: string}) {
  // const [current, setCurrent] = useState(false);
  return (
    <>
      <div>
        {current === '2022' && <BarChart />}
        {current === '2023' && <BarChartCurrent />}
      </div>
      {/* <div className={styles.yearsWrap}>
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
      </div> */}
    </>
  );
}
