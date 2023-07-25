import { motion } from "framer-motion";
import { useState } from "react";
import SpetialText from "../../../../data/SpetialText";
import FakeListForMedia from "@/components/Fake/FakeListForMedia";
import styles from "../LatestNarratives.module.css";

function Narrative({
  narrative,
  uniqueFakes,
  media,
  country,
}: {
  narrative: string;
  uniqueFakes: string[];
  media: string;
  country: string;
}) {
  const [openNarrative, setOpenNarrative] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "tween", delay: 0.4 }}
    >
      <div className={styles.narrativeItem}>
        <p className={styles.fakesNumber}>
          <SpetialText name={"Fakes"} />: {uniqueFakes.length}
        </p>

        <h1
          className={styles.narrativeHeading}
          onClick={() => setOpenNarrative(!openNarrative)}
        >
          {narrative}
        </h1>
      </div>
      {openNarrative && (
        <FakeListForMedia
          narrative={narrative}
          media={media}
          country={country}
        />
      )}
      <hr
        style={{
          height: "1px",
          background: "rgb(204, 204, 204)",
          border: "none",
        }}
      />
    </motion.div>
  );
}

export default Narrative;
