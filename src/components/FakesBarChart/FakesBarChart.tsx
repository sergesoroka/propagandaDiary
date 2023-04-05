import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import data from "../../../data/dataEn.json";
import Link from "next/link";

let defaultNarrative =
  "Narrative concerning weapons provided to Ukraine by Western countries";
let defaultFakesNumber = 5;

export const FakesBarChart = () => {
  const [title, setTitle] = useState<string | null>(defaultNarrative);
  const [fakes, setFakes] = useState<number>(defaultFakesNumber);

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
          width="30"
          height={uniqueFakes.length * 4}
          fill={title === item ? "#ff2618" : "#ccc"}
          x={i * 32}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setTitle(item);
            // @ts-ignore
            setFakes(uniqueFakes.length);
          }}
        />
      </>
    );
  });
  return (
    <div>
      <div>
        <p className={styles.fakesNumber}>{fakes} FAKES</p>
        <svg width="1200" height="200" style={{ transform: "scaleY(-1)" }}>
          {renderNarratives}
        </svg>
        <Link href={{ pathname: `/narrative/${title}` }}>
          <h3 className={styles.narrativeDynamicTitle}>{title}</h3>
        </Link>
      </div>
    </div>
  );
};
