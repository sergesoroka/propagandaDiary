import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../src/styles/Home.module.css";
import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import BackArrow from "@/components/Icons/BackArrow";
import data from "../../../data/dataEn.json";
import FakeList from "@/components/Fake/FakeList";
import { FakesBarChart } from "@/components/FakesBarChart/FakesBarChart";

const NarrativePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const narrativeTitle = uniqueNarrativesEn.map((item, i) => {
    if (item === id) {
      return (
        <div key={i}>
          <h2 className={styles.narrativeHeading}>{item}</h2>
          <hr
            style={{
              height: "4px",
              background: "#FF2618",
              border: "none",
              width: "100%",
            }}
          />
        </div>
      );
    }
  });

  const narrativeDiscriptions: string[] = [];
  // @ts-ignore
  data.map((item) => {
    if (item.Narrative === id) {
      if (!narrativeDiscriptions.includes(item.Description)) {
        narrativeDiscriptions.push(item.Description);
      }
    }
  });

  const narrativeTags: string[] = [];
  // @ts-ignore
  data.map((item) => {
    if (item.Narrative === id) {
      // let tagItem = item.Tag.split(', ')
      if (!narrativeTags.includes(item.Tag)) {
        narrativeTags.push(item.Tag);
      }
    }
  });

  const uniqueNarrativeTags: string[] = [];

  // @ts-ignore
  const arrTagsTest = narrativeTags.map((item) => {
    return item.split(", ");
  });

  arrTagsTest.flat().map((item) => {
    if (!uniqueNarrativeTags.includes(item)) {
      uniqueNarrativeTags.push(item);
    }
  });

  const tagsList = uniqueNarrativeTags.map((tag, i) => (
    <Link key={i} href={{ pathname: `/tag/${tag}` }}>
      <p className={styles.tagName}>#&nbsp;{tag}</p>
    </Link>
  ));

  return (
    <div className={styles.barChartWrap}>
      <div style={{ marginBottom: "2rem" }}>
        {/* <BarChart /> */}
        <FakesBarChart />
      </div>
      <Head>
        <title>Propaganda Diary</title>
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

          <p
            className={styles.discription}
            dangerouslySetInnerHTML={{ __html: narrativeDiscriptions[0] }}
          ></p>
        </div>
        <div className={styles.narrativeTags}>
          <p className={styles.caption}>Tags:</p>

          <div>{tagsList}</div>
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
