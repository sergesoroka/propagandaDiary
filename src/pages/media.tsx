import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import CountryList from "@/components/CountryList/CountryList";

import NarrativesByMedia from "@/components/LatestNarratives/NarrativesByMedia";
import { useRouter } from "next/router";

function Media() {
  const router = useRouter();
  const { locale } = router;
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (locale === "it") {
      setCountry("Italia");
    } else if (locale === "de") {
      setCountry("Deutschland");
    } else if (locale === "ua") {
      setCountry("Польща");
    } else if (locale === "en") {
      setCountry("Poland");
    } else if (locale === "ru") {
      setCountry("Польша");
    } else if (locale === "pl") {
      setCountry("Polska");
    } else if (locale === "cs") {
      setCountry("Česká republika");
    } else if (locale === "sk") {
      setCountry("Slovensko");
    } else if (locale === "hu") {
      setCountry("Magyarország");
    }
  }, [locale]);

  const [media, setMedia] = useState("all");

  return (
    <>
      <Head>
        <title>Propaganda Diary | Media</title>
        <meta name="description" content="Media sorted by country" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CountryList
          // @ts-ignore
          country={country}
          // @ts-ignore
          setCountry={setCountry}
          // @ts-ignore
          setMedia={setMedia}
        />
        <NarrativesByMedia
          country={country}
          media={media}
          // @ts-ignore
          setMedia={setMedia}
        />
      </main>
    </>
  );
}
export default Media;
