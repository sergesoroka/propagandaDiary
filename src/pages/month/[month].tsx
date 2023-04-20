import FakeList from "@/components/Fake/FakeList";
import SpetialText from "../../../data/SpetialText";
import BackArrow from "@/components/Icons/BackArrow";
import BarChart from "@/components/BarChart/BarChart";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export const monthFakes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { month } = router.query;

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
        <title>Propaganda Diary | 2022</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.mainLeft}>
      <div style={{ margin: "0 auto" }}>
        {/* @ts-ignore */}
        <BarChart month={month} />
      </div>

      <Link href="/archive">
        <BackArrow />
      </Link>
      <p className={styles.tagHeading}>
        <SpetialText name={monthName} />, 2022
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
      {/* @ts-ignore */}
      <FakeList month={month} />
    </div></>
  );
};

export default monthFakes;
