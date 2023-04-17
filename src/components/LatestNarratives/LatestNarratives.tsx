import Link from "next/link";

import { motion } from "framer-motion";

import styles from "./LatestNarratives.module.css";

// import data from "../../../data/dataEn.json";

import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

const LatestNarratives = () => {
  const { data } = useLangSwitcher();
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
        <Link key={i} href={{ pathname: `/narrative/${narrative.Narrative}` }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.narrativeHeading}
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
