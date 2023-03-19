import FakeList from "@/components/Fake/FakeList";
import SpetialText from "../../../data/SpetialText";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

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
    <div className={styles.mainLeft}>
      <p className={styles.tagHeading}><SpetialText name={monthName} /></p>
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
    </div>
  );
};

export default monthFakes;
