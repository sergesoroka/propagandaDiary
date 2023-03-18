import { useRouter } from "next/router";
import styles from "./LangSwitcher.module.css";

const LangSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <ul className={styles.switcher}>
      <li
        className={
          locale == "it" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "it" }
            // { shallow: false }
          );
        }}
      >
        IT
      </li>
      <li
        className={
          locale == "de" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "de" }
            // { shallow: false }
          );
        }}
      >
        DE
      </li>
      <li
        className={
          locale == "ua" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "ua" }
            // { shallow: false }
          );
        }}
      >
        UA
      </li>
      <li
        className={
          locale == "en" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "en" }
            // { shallow: false }
          );
        }}
      >
        EN
      </li>
      <li
        className={
          locale == "ru" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "ru" }
            // { shallow: false }
          );
        }}
      >
        RU
      </li>
      <li
        className={
          locale == "pl" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "pl" }
            // { shallow: false }
          );
        }}
      >
        PL
      </li>
      <li
        className={
          locale == "cs" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "cs" }
            // { shallow: false }
          );
        }}
      >
        CS
      </li>
      <li
        className={
          locale == "sk" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "sk" }
            // { shallow: false }
          );
        }}
      >
        SK
      </li>
      <li
        className={
          locale == "hu" ? styles.langMenuActiveItem : styles.langMenuItem
        }
        onClick={() => {
          router.push(
            { pathname, query },
            asPath,
            { locale: "hu" }
            // { shallow: false }
          );
        }}
      >
        HU
      </li>
    </ul>
  );
};

export default LangSwitcher;
