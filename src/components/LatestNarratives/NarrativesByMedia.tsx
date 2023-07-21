import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LatestNarratives.module.css";
import SpetialText from "../../../data/SpetialText";

import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";


const NarrativesByMedia = ({
  country,
  media,
  setMedia,
}: {
  country: string;
  media: string;
  setMedia: (media: string) => {}
}) => {
  const { data } = useLangSwitcher();



  const uniqueNarratives: string[] = [];
  const uniqueMedia: string[] = [];
  // @ts-ignore
  data.map((c) => {
    if (!uniqueMedia.includes(c.Media) && c.Country === country) {
      uniqueMedia.push(c.Media);
    }
    if (
      !uniqueNarratives.includes(c.Narrative) &&
      country === "all" &&
      media === "all"
    ) {
      uniqueNarratives.push(c.Narrative);
    }
    if (
      !uniqueNarratives.includes(c.Narrative) &&
      c.Country === country &&
      media === "all"
    ) {
      uniqueNarratives.push(c.Narrative);
    }
    if (
      !uniqueNarratives.includes(c.Narrative) &&
      c.Country === country &&
      c.Media === media
    ) {
      uniqueNarratives.push(c.Narrative);
    }
    return c;
  });

  const mediaList = uniqueMedia.map((item, i) => {
    return (
      <p
        className={media === item ? styles.listItemActive : styles.listItem}
        key={i}
        onClick={() => setMedia(item)}
      >
        {item}
      </p>
    );
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
        <hr
          style={{
            height: "2px",
            background: "#FF2618",
            border: "none",
            width: "100%",
            
          }}
        />
      <div className={styles.MediaList}>{mediaList}</div>
      {/* @ts-ignore */}
      {lastNarratives}
    </div>
  );
};

export default NarrativesByMedia;
