// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../src/styles/Home.module.css";
import BackArrow from "@/components/Icons/BackArrow";
import SpetialText from "../../../data/SpetialText";

import { FakesBarChart } from "@/components/FakesBarChart/FakesBarChart";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import getMediaData from "../../../lib/getMediaData";
import getNarrativeData from "../../../lib/getNarrativeData";
import getSubNarrativeData from "../../../lib/getSubNarrativeData";

const SubNarrativeList = dynamic(
  () => import("@/components/SubNarratives/SubNarrativeList"),
  {
    loading: () => <p style={{ margin: "0 auto" }}>Loading...</p>,
  }
);

const NarrativePage = () => {
  const { data } = useLangSwitcher();

  const [tagName, setTagName] = useState("");

  const router = useRouter();
  const { locale } = router;
  const { id } = router.query;

  const [isLoading, setLoading] = useState(false);
  const [narrativeData, setNarrativeData] = useState(null);
  const [subNarrativeData, setSubNarrativeData] = useState(null);
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    async function getNarrative() {
      const dataFetched = await getNarrativeData(locale, "40");
      setNarrativeData(dataFetched);
    }
    getNarrative();

    async function getSubNarrative() {
      // @ts-ignore
      const dataFetched = await getSubNarrativeData(locale, "4000");
      setSubNarrativeData(dataFetched);
    }
    getSubNarrative();

    async function getMedia() {
      const dataFetched = await getMediaData(locale, "4000");
      setMediaData(dataFetched);
    }
    getMedia();
  }, [locale]);

  const narrativeDescription =
    narrativeData &&
    // @ts-ignore
    narrativeData.data.map((item) => {
      if (item.id == id) {
        return (
          <div key={item.id}>
            <h2 className={styles.narrativeHeading}>{item.title}</h2>
            <hr
              style={{
                height: "4px",
                background: "#FF2618",
                border: "none",
                width: "100%",
              }}
            />
            <p className={styles.caption}>
              <SpetialText name={"About_Narrative"} />:
            </p>
            <p
              key={item.id}
              className={styles.discription}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        );
      }
    });

  const mediaByNarrativeId: string[] = [];
  const narrativeTags: string[] = [];
  const uniqueNarrativeTags: string[] = [];

  console.log("Media By Nar ID", mediaByNarrativeId);

  mediaData &&
    mediaData.data.map((item) => {
      if (item.narrative_id == id) {
        mediaByNarrativeId.push(item);
      }
      if (item.narrative_id == id && !narrativeTags.includes(item.tags)) {
        narrativeTags.push(item.tags);
      }
    });

  // @ts-ignore
  const arrTagsTest = narrativeTags.map((item) => {
    return item.split(", ");
  });

  arrTagsTest.flat().map((item) => {
    if (!uniqueNarrativeTags.includes(item)) {
      uniqueNarrativeTags.push(item);
    }
  });

  const subNarrativesRender =
    subNarrativeData &&
    subNarrativeData.data.map((item) => {
      if (item.narrative_id == id) {
        return (
          <SubNarrativeList
            key={item.id}
            narrativeId={id}
            subNarrativeTitle={item.title}
            subNarrativeId={item.id}
            media={mediaByNarrativeId}
            tag={tagName}
          />
        );
      }
    });

  const tagsList = uniqueNarrativeTags.map((tag, i) => (
    // <Link key={i} href={{ pathname: `/tag/${tag}` }}>
    <p
      key={i}
      className={tagName !== tag ? styles.tagName : styles.tagNameActive}
      onClick={() => setTagName(tag)}
    >
      #&nbsp;{tag}
    </p>
    // </Link>
  ));

  return (
    <div>
      <Head>
        <title>Propaganda Diary </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.barChartWrap}>
        <FakesBarChart />
      </div>

      <div className={styles.narrativeContent}>
        <div>
          <Link href="/narratives">
            <BackArrow />
          </Link>
        </div>
        <div>
          <>{narrativeDescription}</>
        </div>
        <div className={styles.narrativeTags}>
          <p className={styles.caption}>
            <SpetialText name={"Tags"} />:
          </p>

          <div className={styles.narrativeTag}>{tagsList}</div>
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
        {/* <FakeList narrative={id} tagName={tagName} /> */}
        {subNarrativesRender}
      </div>
    </div>
  );
};

export default NarrativePage;
