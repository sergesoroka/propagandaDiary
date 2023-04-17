import Link from "next/link";
import data from "../../../data/mediaLists.json";
import styles from "./List.module.css";

// @ts-ignore
export default function PolandLists({ country }) {
  const mediaListWhite = data.map((item, i) => {
    if (country === item.country && item.list === "Білий список") {
      return (
        <li key={i} className={styles.listItem}>
          <Link href={item.link} target="_blank" rel="noreferrer">
            {item.name}
          </Link>
        </li>
      );
    }
  });
  const mediaListBlack = data.map((item, i) => {
    if (country === item.country && item.list === "Чорний список") {
      return (
        <li key={i} className={styles.listItem}>
          <Link href={item.link} target="_blank" rel="noreferrer">
            {item.name}
          </Link>
        </li>
      );
    }
  });
  return (
    <div className={styles.listsWrap}>
      <div>
        <h3 className={styles.listHeading}>Білий список</h3>
        <ul>{mediaListWhite}</ul>
      </div>
      <div>
        <h3 className={styles.listHeading}>Чорний список</h3>
        <ul>{mediaListBlack}</ul>
      </div>
    </div>
  );
}
