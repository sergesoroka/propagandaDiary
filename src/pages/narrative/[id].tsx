import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../src/styles/Home.module.css";
import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import BackArrow from "@/components/Icons/BackArrow";

// import Arrow from '../../../public/arrow.svg'

import data from "../../../data/dataEn.json";
import FakeList from "@/components/Fake/FakeList";
import BarChart from "@/components/BarChart/BarChart";
import { FakesBarChart } from "@/components/FakesBarChart/FakesBarChart";

const NarrativePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const narrativeTitle = uniqueNarrativesEn.map((item, i) => {
    if (item === id) {
      return (
        <>
          <h2 key={i} className={styles.narrativeHeading}>
            {item}
          </h2>
          <hr
            style={{
              height: "4px",
              background: "#FF2618",
              border: "none",
              width: "100%",
            }}
          />
        </>
      );
    }
  });

  const narrativeDiscriptions: string[] = [];
  data.map((item) => {
    if (item.Narrative === id) {
      if (!narrativeDiscriptions.includes(item.Discription)) {
        narrativeDiscriptions.push(item.Discription);
      }
    }
  });

  const narrativeTags: string[] = [];
  data.map((item) => {
    if (item.Narrative === id) {
      if (!narrativeTags.includes(item.Tag)) {
        narrativeTags.push(item.Tag);
      }
    }
  });

  return (
    <div className={styles.mainLeft}>
      <div style={{ marginBottom: "2rem" }}>
        {/* <BarChart /> */}
        <FakesBarChart />
      </div>
      <Head>
        <title>Propaganda Diary | {id}</title>
      </Head>
      <div className={styles.fakeItemArrow}>
        <Link href="/" className={styles.caption}>
          <BackArrow />
        </Link>
      </div>

      {narrativeTitle}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "2rem .4rem",
        }}
      >
        <div>
          <p className={styles.caption}>About Narrative:</p>
          <p className={styles.discription}>{narrativeDiscriptions[0]}</p>
        </div>
        <div className={styles.narrativeTags}>
          <p className={styles.caption}>Tags:</p>
          <Link href={{ pathname: `/tag/${narrativeTags[0]}` }}>
            <p>{narrativeTags[0]}</p>
          </Link>
        </div>
      </div>
      <hr
        style={{
          height: "2px",
          background: "#cccccc",
          border: "none",
          width: "100%",
          marginBottom: "2rem",
        }}
      />
      {/* @ts-ignore */}
      <FakeList narrative={id} />
    </div>
  );
};

export default NarrativePage;
