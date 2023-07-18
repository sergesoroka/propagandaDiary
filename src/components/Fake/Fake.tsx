import { useState } from "react";
import styles from "./Fake.module.css";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

const Fake = ({
  fake,
  month,
  year,
  country,
  media
}: {
  fake: string;
  month?: string;
  year?: string;
  country?: string;
  media?: string;
}) => {
  const [open, setOpen] = useState(false);

  const { data } = useLangSwitcher();

  // @ts-ignore
  const mediaListByMonth = data.map((item) => {
    if (
      item.Date >= `${year}-${month}-01` &&
      item.Date <= `${year}-${month}-31` &&
      item.Fake === fake && item.Country === country && media === 'all'
    ) {
      return (
        <>
          <div className={styles.mediaList} key={item.id}>
            <a target="_blank" rel="noreferrer" href={item.Link_archive}>
              <p className={styles.mediaName}>{item.Media}</p>
            </a>
            <p className={styles.mediaCountry}>{item.Country}</p>
            <p className={styles.mediaDate}>{item.Date}</p>
          </div>
        </>
      );
    }
    if (
      item.Date >= `${year}-${month}-01` &&
      item.Date <= `${year}-${month}-31` &&
      item.Fake === fake && item.Country === country && item.Media === media
    ) {
      return (
        <>
          <div className={styles.mediaList} key={item.id}>
            <a target="_blank" rel="noreferrer" href={item.Link_archive}>
              <p className={styles.mediaName}>{item.Media}</p>
            </a>
            <p className={styles.mediaCountry}>{item.Country}</p>
            <p className={styles.mediaDate}>{item.Date}</p>
          </div>
        </>
      );
    }
  });

  // @ts-ignore
  const mediaList = data.map((item) => {
    if (fake === item.Fake) {
      return (
        <div className={styles.mediaList} key={item.id}>
          <a target="_blank" rel="noreferrer" href={item.Link_archive}>
            <p className={styles.mediaName}>{item.Media}</p>
          </a>
          <p className={styles.mediaCountry}>{item.Country}</p>
          <p className={styles.mediaDate}>{item.Date}</p>
        </div>
      );
    }
  });
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={open ? styles.fakeHeadingActive : styles.fakeHeading}
      >
        {fake}
      </div>
      {open && !month && <>{mediaList}</>}
      {open && month && <>{mediaListByMonth}</>}
    </div>
  );
};

export default Fake;
