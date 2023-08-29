// @ts-nocheck
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

import SpetialText from "../../../data/SpetialText";
import BackArrow from "@/components/Icons/BackArrow";
import styles from "../../styles/Home.module.css";
import Timeline from "@/components/BarChart/Timeline";
import CountryList from "@/components/CountryList/CountryList";
import getSubNarrativeData from "../../../lib/getSubNarrativeData";
import getMediaData from "../../../lib/getMediaData";

import { format } from "date-fns";

const SubNarrativeList = dynamic(
  () => import("@/components/SubNarratives/SubNarrativeList"),
  {
    loading: () => <p style={{ margin: "0 auto" }}>Loading...</p>,
  }
);

export const MonthFakes = () => {
  const router = useRouter();
  const { month } = router.query;
  const defaultYear = router.query;

  const { locale } = router;
  const [current, setCurrent] = useState("2022");
  const [country, setCountry] = useState("Польща");
  const [media, setMedia] = useState("all");

  const [isLoading, setLoading] = useState(false);
  const [subNarrativeData, setSubNarrativeData] = useState(null);
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function getSubNarrative() {
      // @ts-ignore
      const dataFetched = await getSubNarrativeData(locale);
      if (isMounted) {
        setSubNarrativeData(dataFetched);
      }
    }
    getSubNarrative();

    async function getMedia() {
      const dataFetched = await getMediaData(locale);
      if (isMounted) {
        setMediaData(dataFetched);
      }
    }
    getMedia();
    return () => {
      isMounted = false;
    };
  }, [locale, media, country, current]);
  console.log("month data:", mediaData);

  const monthName =
    month === "01"
      ? "January"
      : month === "02"
      ? "February"
      : month === "03"
      ? "March"
      : month === "04"
      ? "April"
      : month === "05"
      ? "May"
      : month === "06"
      ? "June"
      : month === "07"
      ? "July"
      : month === "08"
      ? "August"
      : month === "09"
      ? "September"
      : month === "10"
      ? "October"
      : month === "11"
      ? "November"
      : month === "12"
      ? "December"
      : "";
  const mediaByMonth = [];
  const subNarrativId = [];

  mediaData &&
    mediaData.data.map((item) => {
      let dateMonth = format(new Date(item.date), "MM");
      if (dateMonth == month && media == "all" && item.country == country) {
        mediaByMonth.push(item);
        subNarrativId.push(item.sub_narrative_id);
      }
      if (
        dateMonth == month &&
        item.media_name == media &&
        item.country == country
      ) {
        mediaByMonth.push(item);
        subNarrativId.push(item.sub_narrative_id);
      }
    });

  const subNarrativesRender =
    subNarrativeData &&
    subNarrativeData.data.map((item) => {
      if (subNarrativId.includes(item.id)) {
        return (
          <SubNarrativeList
            key={item.id}
            subNarrativeTitle={item.title}
            subNarrativeId={item.id}
            media={mediaByMonth}
          />
        );
      }
    });
  return (
    <>
      <Head>
        <title>Propaganda Diary | Timeline</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          {/* @ts-ignore */}
          <Timeline current={current} setMedia={setMedia} />
          <div className={styles.yearsWrap}>
            <p
              className={current === "2022" ? styles.yearActive : styles.year}
              onClick={() => setCurrent("2022")}
            >
              2022
            </p>
            <p
              className={current === "2023" ? styles.yearActive : styles.year}
              onClick={() => setCurrent("2023")}
            >
              2023
            </p>
          </div>
          <CountryList
            setCountry={setCountry}
            country={country}
            setMedia={setMedia}
          />
        </div>
        <div className={styles.mediaListWrap}>
          <div>
            {month && (
              <div>
                <Link href="/archive">
                  <BackArrow />
                </Link>
                <p className={styles.tagHeading}>
                  <SpetialText name={monthName} />, {current}
                </p>
                <hr
                  style={{
                    height: "2px",
                    background: "#FF2618",
                    border: "none",
                    width: "100%",
                    marginBottom: "2rem",
                  }}
                />
              </div>
            )}

            {subNarrativesRender}
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthFakes;
