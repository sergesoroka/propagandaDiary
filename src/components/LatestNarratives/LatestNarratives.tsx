import Link from "next/link";
import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import styles from "./LatestNarratives.module.css";

import data from "../../../data/dataEn.json";

import { tagsOfNarrative } from "../../../utils/statisticCalculate";

const LatestNarratives = () => {
  // @ts-ignore
  const unique = [...new Set(data.map((item) => item.Tag))];

  const uniqueNarrativeEn: string[] = [];
  data.map((c) => {
    if (!uniqueNarrativeEn.includes(c.Narrative)) {
      uniqueNarrativeEn.push(c.Narrative);
    }
    return c;
  });

  return (
    <div className={styles.narrativeWrap}>
      {uniqueNarrativeEn.map((narrative, i) => {
        return (
          <>
            <Link href={{ pathname: `/narrative/${narrative}` }}>
              <h1 className={styles.narrativeHeading} key={i}>
                {narrative}
              </h1>
              <hr
                style={{ height: "4px", background: "#FF2618", border: "none" }}
              />
            </Link>

            <p className={styles.narrativeTag}>
              {tagsOfNarrative(narrative).map((item, i) => (
                item && <Link key={i} href={{ pathname: `/tag/${item}` }}>
                  {item && "# "}
                  <span
                    style={{ textTransform: "uppercase", marginRight: "1rem" }}
                  >
                    {item}
                  </span>
                </Link>
              ))}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default LatestNarratives;
