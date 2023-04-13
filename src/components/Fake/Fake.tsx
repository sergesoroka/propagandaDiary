import { useState } from "react";
import styles from "./Fake.module.css";

import data from "../../../data/dataEn.json";

const Fake = ({ fake }: { fake: string }) => {
  const [open, setOpen] = useState(false);
  const mediaList = data.map((item) => {
    if (fake === item.Fake) {
      return (
        <div className={styles.mediaList} key={item.id}>
          <a target="_blank" rel="noreferrer" href={item.Link}>
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
      {open && <>{mediaList}</>}
    </div>
  );
};

export default Fake;
