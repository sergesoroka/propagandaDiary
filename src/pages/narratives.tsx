import styles from "@/styles/Home.module.css";

import { uniqueNarrativesEn } from "../../utils/statisticCalculate";
import data from "../../data/dataEn.json";
import Link from "next/link";
import { useState } from "react";

const Narratives = () => {
  const [title, setTitle] = useState<string | null>(null);

  const uniqueFakes: string[] = [];
  const renderNarratives = uniqueNarrativesEn.map((item, i) => {
    data.map((fake) => {
      if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === item) {
        uniqueFakes.push(fake.Fake);
      }
    });
    return (
      <rect
        key={i}
        width="40"
        height={uniqueFakes.length * 3}
        fill={title === item ? "#ff2618" : "#ccc"}
        x={i * 50}
        style={{ cursor: "pointer" }}
        onClick={() => setTitle(item)}
      />
    );
  });
  return (
    <div className={styles.allNarrativesWrap}>
      <svg width="830" height="200" style={{ transform: "scaleY(-1)" }}>
        {renderNarratives}
      </svg>
      <Link href={{ pathname: `/narrative/${title}` }}>
        <h3 className={styles.narrativeDynamicTitle}>{title}</h3>
      </Link>
    </div>
  );
};

export default Narratives;
