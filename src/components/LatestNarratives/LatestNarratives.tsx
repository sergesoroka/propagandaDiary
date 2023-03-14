import Link from "next/link";
import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import styles from "./LatestNarratives.module.css";

import data from "../../../data/dataEn.json";

const LatestNarratives = () => {
  // @ts-ignore
  const unique = [...new Set(data.map((item) => item.Tag))];
console.log(unique);

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
            {/* {data.map((tag) => {
              if(tag.Narrative === narrative) {
                return (<p key={tag.id} className={styles.narrativeTag}># {tag.Tag}</p>)
              }
            })} */}
              <p className={styles.narrativeTag}># TAG</p>
          </>
        );
      })}
    </div>
  );
};

export default LatestNarratives;
