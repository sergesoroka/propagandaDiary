import Link from "next/link";

import { motion } from "framer-motion";

import styles from "./LatestNarratives.module.css";

import data from "../../../data/dataEn.json";

import { tagsOfNarrative } from "../../../utils/statisticCalculate";

const LatestNarratives = () => {
  // @ts-ignore

  const uniqueNarrative: string[] = [];
  // @ts-ignore
  const lastNarratives = data.map((narrative, i) => {
    if (
      !uniqueNarrative.includes(narrative.Narrative) &&
      uniqueNarrative.length < 5
    ) {
      uniqueNarrative.push(narrative.Narrative);
      return (
        <>
          <Link href={{ pathname: `/narrative/${narrative.Narrative}` }}>
            <motion.h1
            initial={{opacity: 0}}
              animate={{ opacity: 1}}
              transition={{duration: 0.5}}
              className={styles.narrativeHeading}
              key={i}
            >
              {narrative.Narrative}
            </motion.h1>
            <hr
              style={{
                height: "1px",
                background: "rgb(204, 204, 204)",
                border: "none",
              }}
            />
          </Link>

          {/* <p className={styles.narrativeTag}>
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
          </p> */}
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

export default LatestNarratives;
