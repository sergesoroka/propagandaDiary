import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LatestNarratives.module.css";
// import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

import narrLast from '../../../data/lastedNarratives.json'
import { useRouter } from "next/router";

const LatestNarratives = () => {
  const router = useRouter();
  const { locale } = router;

  const data =
    locale == "ua"
      ? narrLast['ua']
      : locale == "de"
      ? narrLast['de']
      : locale == "pl"
      ? narrLast['pl']
      : locale == "en"
      ? narrLast['en']
      : locale == "sk"
      ? narrLast['sk']
      : locale == "it"
      ? narrLast['it']
      : locale == "hu"
      ? narrLast['hu']
      : locale == "cs"
      ? narrLast['cs']
      : locale == "ru"
      ? narrLast['ru']
      : narrLast['ua'];



  // const { data } = useLangSwitcher();

  // @ts-ignore

  // const uniqueNarrative: string[] = [];
  // console.log(uniqueNarrative);
  
  // @ts-ignore
  const lastNarratives = data.map((narrative, i) => {
    // if (
    //   !uniqueNarrative.includes(narrative.Narrative) &&
    //   uniqueNarrative.length < 5
    // ) {
    //   uniqueNarrative.push(narrative.Narrative);
      return (
        <Link key={i} href={{ pathname: `/narrative/${narrative}` }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.narrativeHeading}
            style={{marginTop: '1.4rem'}}
          >
            {narrative}
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
   
  });

  return (
    <div className={styles.narrativeWrap}>
      {/* @ts-ignore */}
      {lastNarratives}
    </div>
  );
};

export default LatestNarratives;
