import styles from "@/styles/Home.module.css";

import { uniqueNarrativesEn } from "../../utils/statisticCalculate";
import data from "../../data/dataEn.json";
import Link from "next/link";
import { useState } from "react";
import LatestNarratives from "@/components/LatestNarratives/LatestNarratives";

let defaultNarrative = 'Narrative concerning weapons provided to Ukraine by Western countries'

const Narratives = () => {
  const [title, setTitle] = useState<string | null>(defaultNarrative);
  const [fakes, setFakes] = useState<number>(0);

  const renderNarratives = uniqueNarrativesEn.map((item, i) => {
    const uniqueFakes: string[] = [];

    data.map((fake) => {
      if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === item) {
        uniqueFakes.push(fake.Fake);
      }
    });
    return (
      <>
        <rect
          key={i}
          width="20"
          height={uniqueFakes.length * 20}
          fill={title === item ? "#ff2618" : "#ccc"}
          x={i * 30}
          style={{ cursor: "pointer" }}
          onClick={() => {setTitle(item)
            // @ts-ignore
         setFakes(uniqueFakes.length) 
          }}
        />
      </>
    );
  });
  return (
    <div className={styles.allNarrativesWrap}>
      <div>
        {fakes !== 0 && <p className={styles.fakesNumber}>{fakes} FAKES</p>}
        <svg width="1200" height="140" style={{ transform: "scaleY(-1)" }}>
          {renderNarratives}
        </svg>
        <Link href={{ pathname: `/narrative/${title}` }}>
          <h3 className={styles.narrativeDynamicTitle}>{title}</h3>
        </Link>
      </div>
      <LatestNarratives />
    </div>
  );
};

export default Narratives;
