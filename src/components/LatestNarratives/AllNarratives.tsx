import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LatestNarratives.module.css";
import SpetialText from "../../../data/SpetialText";

import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

const AllNarratives = () => {
  const { data } = useLangSwitcher();

  const uniqueNarratives: string[] = [];
  // @ts-ignore
  data.map((c) => {
    if (!uniqueNarratives.includes(c.Narrative)) {
      uniqueNarratives.push(c.Narrative);
    }
    return c;
  });

  // @ts-ignore
  const lastNarratives = uniqueNarratives.map((narrative, i) => {
    const uniqueFakes: string[] = [];

    // @ts-ignore
    data.map((fake) => {
      if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === narrative) {
        uniqueFakes.push(fake.Fake);
      }
    });

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "tween", delay: 0.4 }}
      >
        <div className={styles.narrativeItem}>
          <p className={styles.fakesNumber}>
             <SpetialText name={"Fakes"} />: {uniqueFakes.length}
          </p>
          <Link href={{ pathname: `/narrative/${narrative}` }}>
            <h1 className={styles.narrativeHeading}>{narrative}</h1>
          </Link>
        </div>
        <hr
          style={{
            height: "1px",
            background: "rgb(204, 204, 204)",
            border: "none",
          }}
        />
      </motion.div>
    );
  });

  return (
    <div className={styles.narrativeWrap}>
      {/* @ts-ignore */}
      {lastNarratives}
    </div>
  );
};

export default AllNarratives;
