import Link from "next/link";
import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import styles from "./LatestNarratives.module.css";

import data from "../../../data/dataEn.json";

const LatestNarratives = () => {
  // @ts-ignore
  const unique = [...new Set(data.map((item) => item.Narrative))];

  return (
    <div className={styles.narrativeWrap}>
      {unique.map((narrative, i) => {
        return (
          <>
            <Link href={{ pathname: `/narrative/${narrative}` }}>
              <h1 className={styles.narrativeHeading} key={i}>
                {narrative}
              </h1>
              <hr
                style={{ height: "4px", background: "#FF2618", border: "none" }}
              />
              <p className={styles.narrativeTag}># TAG</p>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default LatestNarratives;
