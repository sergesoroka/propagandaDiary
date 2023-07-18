import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./CountryList.module.css";
import { motion } from "framer-motion";

function CountryList({
  setCountry,
  country,
  setMedia,
}: {
  setCountry: (country: string) => {};
  country: string;
  setMedia: (media: string) => {};
}) {
  const router = useRouter();
  const { locale } = router;
  // const [country, setCountry] = useState("poland");

  return (
    <ul className={styles.listCountry}>
      <li
        className={country === "Польща" ? styles.activeCountry : ""}
        onClick={() => {
          setCountry("Польща");
          setMedia("all");
        }}
      >
        {locale == "ua" && "Польща"}
        {locale == "en" && "Poland"}
        {locale == "it" && "Polonia"}
        {locale == "de" && "Polen"}
        {locale == "ru" && "Польща"}
        {locale == "pl" && "Polska"}
        {locale == "hu" && "Lengyelország"}
        {locale == "cs" && "Polsko"}
        {locale == "sk" && "Poľsko"}
      </li>
      <li
        className={country === "Словаччина" ? styles.activeCountry : ""}
        onClick={() => {
          setCountry("Словаччина");
          setMedia("all");
        }}
      >
        {locale == "ua" && "Словаччина"}
        {locale == "en" && "Slovakia"}
        {locale == "it" && "Slovacchia"}
        {locale == "de" && "Slowakei"}
        {locale == "ru" && "Словакия"}
        {locale == "pl" && "Słowacja"}
        {locale == "hu" && "Szlovákia"}
        {locale == "cs" && "Slovensko"}
        {locale == "sk" && "Slovensko"}
      </li>
      <li
        className={country === "Чехія" ? styles.activeCountry : ""}
        onClick={() => {
          setCountry("Чехія");
          setMedia("all");
        }}
      >
        {locale == "ua" && "Чехія"}
        {locale == "en" && "The Czech Republic"}
        {locale == "it" && "Repubblica Ceca"}
        {locale == "de" && "Die Tschechische Republik"}
        {locale == "ru" && "Чехия"}
        {locale == "pl" && "Republika Czeska"}
        {locale == "hu" && "Cseh Köztársaság"}
        {locale == "cs" && "Česká republika"}
        {locale == "sk" && "Česká republika"}
      </li>
      <li
        className={country === "Угорщина" ? styles.activeCountry : ""}
        onClick={() => {
          setCountry("Угорщина");
          setMedia("all");
        }}
      >
        {locale == "ua" && "Угорщина"}
        {locale == "en" && "Hungary"}
        {locale == "it" && "Ungheria"}
        {locale == "de" && "Ungarn"}
        {locale == "ru" && "Венгрия"}
        {locale == "pl" && "Węgry"}
        {locale == "hu" && "Magyarország"}
        {locale == "cs" && "Maďarsko"}
        {locale == "sk" && "Maďarsko"}
      </li>
      <li
        className={country === "Німеччина" ? styles.activeCountry : ""}
        onClick={() => {
          setCountry("Німеччина");
          setMedia("all");
        }}
      >
        {locale == "ua" && "Німеччина"}
        {locale == "en" && "Germany"}
        {locale == "it" && "Germania"}
        {locale == "de" && "Deutschland"}
        {locale == "ru" && "Германия"}
        {locale == "pl" && "Niemcy"}
        {locale == "hu" && "Németország"}
        {locale == "cs" && "Německo"}
        {locale == "sk" && "Nemecko"}
      </li>
      <li
        className={country === "Італія" ? styles.activeCountry : ""}
        onClick={() => {
          setCountry("Італія");
          setMedia("all");
        }}
      >
        {locale == "ua" && "Італія"}
        {locale == "en" && "Italy"}
        {locale == "it" && "Italia"}
        {locale == "de" && "Italien"}
        {locale == "ru" && "Италия"}
        {locale == "pl" && "Włochy"}
        {locale == "hu" && "Olaszország"}
        {locale == "cs" && "Itálie"}
        {locale == "sk" && "Taliansko"}
      </li>
    </ul>
  );
}

export default CountryList;
