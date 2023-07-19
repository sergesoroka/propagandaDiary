// import FakeList from "@/components/Fake/FakeList";
import SpetialText from "../../../data/SpetialText";
import BackArrow from "@/components/Icons/BackArrow";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Timeline from "@/components/BarChart/Timeline";
import CountryList from "@/components/CountryList/CountryList";
import MediaList from "@/components/MediaList/MediaList";
import { useState } from "react";
import dynamic from "next/dynamic";

const FakeList = dynamic(() => import("@/components/Fake/FakeList"), {
  loading: () => <p style={{ margin: "0 auto" }}>Loading...</p>,
});

const FakeListForMonth = dynamic(
  () => import("@/components/Fake/FakeListForMonth"),
  {
    loading: () => <p style={{ margin: "0 auto" }}>Loading Fakes...</p>,
  }
);

export const monthFakes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { month } = router.query;
  const defaultYear = router.query;
  console.log(defaultYear);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState("2022");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [country, setCountry] = useState("Польща");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [media, setMedia] = useState("all");
 
    

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

  return (
    <>
      <Head>
        <title>Propaganda Diary | Timeline</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainLeft}>
        <div style={{ margin: "0 auto" }}>
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
          {/* @ts-ignore */}
          <CountryList setCountry={setCountry} country={country} setMedia={setMedia} />
        </div>
        <div className={styles.mediaListWrap}>
          {/* @ts-ignore */}
          {/* <MediaList country={country} media={media} setMedia={setMedia}  /> */}
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
            {/* @ts-ignore */}

            <FakeListForMonth month={month} year={current} country={country} media={media} setMedia={setMedia}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default monthFakes;
