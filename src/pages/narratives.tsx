import styles from "@/styles/Home.module.css";

import { uniqueNarrativesEn } from "../../utils/statisticCalculate";
import data from "../../data/dataEn.json";
import Link from "next/link";

const narratives = () => {
  const uniqueFakes: string[] = [];
  const renderNarratives = uniqueNarrativesEn.map((item, i) => {
    data.map((fake, i) => {
      if (!uniqueFakes.includes(fake.Fake) && fake.Narrative === item) {
        uniqueFakes.push(fake.Fake);
      }
    });
    return (
      <>
        <Link href={{ pathname: `/narrative/${item}` }}>
          <div key={i} className={styles.allNarrativesBarChart}>
            <h1 className={styles.narrativePageHeading}>{item}</h1>
            {/* <hr
              style={{
                marginTop: ".8rem",
                height: "1px",
                width: `${uniqueFakes.length * 30}px`,
                background: "#e7e7e7",
                border: "none",
              }}
            /> */}
            <div
              className={styles.allNarrativesBar}
              style={{ width: `${uniqueFakes.length * 30}px` }}
            >
              <span className={styles.fakesNumber}>
                {uniqueFakes.length} FAKES
              </span>
            </div>
          </div>
        </Link>
      </>
    );
  });
  return <div className={styles.allNarrativesWrap}>{renderNarratives}</div>;
};

export default narratives;
