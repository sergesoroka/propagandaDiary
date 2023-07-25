import { motion } from "framer-motion";
import styles from "./LatestNarratives.module.css";
import SpetialText from "../../../data/SpetialText";

import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";
import Narrative from "./Narrative/Narrative";

const NarrativesByMedia = ({
  country,
  media,
  setMedia,
}: {
  country: string;
  media: string;
  setMedia: (media: string) => {};
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
  const Narratives = uniqueNarratives.map((narrative, i) => {
    const uniqueFakes: string[] = [];

    // @ts-ignore
    data.map((fake) => {
      if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === narrative) {
        uniqueFakes.push(fake.Fake);
      }
    });

    return (
      <Narrative
        key={i}
        narrative={narrative}
        uniqueFakes={uniqueFakes}
        media={media}
        country={country}
      />
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
      {Narratives}
    </div>
  );
};

export default NarrativesByMedia;
