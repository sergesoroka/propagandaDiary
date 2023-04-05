import Link from "next/link";
import styles from "./LatestNarratives.module.css";

import data from "../../../data/dataEn.json";

import { tagsOfNarrative } from "../../../utils/statisticCalculate";

const AllNarratives = () => {
  // @ts-ignore

  const uniqueNarrative: string[] = [];
  // @ts-ignore
  const lastNarratives = data.map((narrative, i) => {
    if (!uniqueNarrative.includes(narrative.Narrative)) {
      uniqueNarrative.push(narrative.Narrative);
      return (
        <>
          <Link href={{ pathname: `/narrative/${narrative.Narrative}` }}>
            <h1 className={styles.narrativeHeading} key={i}>
              {narrative.Narrative}
            </h1>
            <hr
              style={{ height: "1px", background: "rgb(204, 204, 204)", border: "none" }}
            />
          </Link>

          <p className={styles.narrativeTag}>
            {tagsOfNarrative(narrative.Narrative).map(
              (item, i) =>
                item && (
                  <Link key={i} href={{ pathname: `/tag/${item}` }}>
                    {item && "# "}
                    <span
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      {item}
                    </span>
                  </Link>
                )
            )}
          </p>
        </>
      );
    }
  });

  return (
    <div className={styles.narrativeWrap}>
      {/* @ts-ignore */}
      {lastNarratives}
    </div>
  );
};

export default AllNarratives;
