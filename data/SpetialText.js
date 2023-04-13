import { useRouter } from "next/router";
import data from "./spetialTexts.json";

const SpetialText = ({ name }) => {
  const router = useRouter();
  const { locale } = router;

  const textSpetial = data.map((item, i) => {
    // if (locale === "en" && item["key"] === name) {
    //   return item.en;
    // }
    if (locale === "ru" && item["key"] === name) {
      return item.ru;
    } else if (locale === "ua" && item["key"] === name) {
      return item.ua;
    } else if (item["key"] === name) {
      return item.en;
    }
  });

  return <>{textSpetial}</>;
};

export default SpetialText;
