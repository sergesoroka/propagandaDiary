import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import data from "../../../data/dataEn.json";
import Link from "next/link";
import { motion } from "framer-motion";

let defaultNarrative = "Наратив щодо озброєння, яке надають Україні країни Заходу";
let defaultFakesNumber = 5;

export const FakesBarChart = () => {
  const [title, setTitle] = useState<string | null>(defaultNarrative);
  const [fakes, setFakes] = useState<number>(defaultFakesNumber);

  const renderNarratives = uniqueNarrativesEn.map((item, i) => {
    const uniqueFakes: string[] = [];

    // @ts-ignore
    data.map((fake) => {
      if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === item) {
        uniqueFakes.push(fake.Fake);
      }
    });
    return (
      <rect
        key={i}
        width="35"
        height={uniqueFakes.length * 4}
        fill={title === item ? "#ff2618" : "#ccc"}
        x={i * 40}
        style={{ cursor: "pointer" }}
        onClick={() => {
          setTitle(item);
          // @ts-ignore
          setFakes(uniqueFakes.length);
        }}
      />
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <div>
        <p className={styles.fakesNumber}>{fakes} FAKES</p>
        <svg width="1200" height="200" style={{ transform: "scaleY(-1)" }}>
          {renderNarratives}
        </svg>
        <Link href={{ pathname: `/narrative/${title}` }}>
          <h3 className={styles.narrativeDynamicTitle}>{title}</h3>
        </Link>
      </div>
    </motion.div>
  );
};
