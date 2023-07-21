import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import CountryList from "@/components/CountryList/CountryList";

import NarrativesByMedia from "@/components/LatestNarratives/NarrativesByMedia";

function Media() {
  const [country, setCountry] = useState("all");
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
          {/* @ts-ignore */}
          setMedia={setMedia}
        />
      </main>
    </>
  );
}

export default Media;
