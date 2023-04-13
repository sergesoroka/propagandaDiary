import Link from "next/link";
import { motion } from "framer-motion";
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
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "tween", delay: 0.4 }}
        >
          <Link href={{ pathname: `/narrative/${narrative.Narrative}` }}>
            <h1 className={styles.narrativeHeading}>{narrative.Narrative}</h1>
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
        </motion.div>
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
