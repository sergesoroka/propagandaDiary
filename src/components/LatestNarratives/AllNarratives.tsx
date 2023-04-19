import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LatestNarratives.module.css";

import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

const AllNarratives = () => {
  const { data } = useLangSwitcher();

  const uniqueNarrative: string[] = [];

 
  // @ts-ignore
  const lastNarratives = data.map((narrative, i) => {
     // @ts-ignore
    //  data.map((fake) => {
    //   if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === narrative) {
    //     uniqueFakes.push(fake.Fake);
    //   }
    // });

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
            {/* <p>{uniqueFakes.length}FAKES</p> */}
            <h1 className={styles.narrativeHeading}>{narrative.Narrative}</h1>
            <hr
              style={{
                height: "1px",
                background: "rgb(204, 204, 204)",
                border: "none",
              }}
            />
          </Link>
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
