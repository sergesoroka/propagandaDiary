import Fake from "./Fake";
import { useRouter } from "next/router";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

import { commonStatistic } from "../../../utils/statisticCalculate";

const FakeList = ({
  narrative,
  month,
  tagName,
}: {
  narrative?: string;
  month?: string;
  tagName?: string;
}) => {
  const router = useRouter();
  const { tag } = router.query;

  const { data } = useLangSwitcher();

  // @ts-ignore
  const fakeFiltered = data.filter((item) => item.Narrative === narrative);
  // @ts-ignore
  const fakeByTag = data.filter(
    // @ts-ignore
    (item) => item.Tag === tagName || item.Tag.split(", ").includes(tagName)
  );

  const uniqueFakesEn: string[] = [];
  fakeFiltered.map((c) => {
    if (!uniqueFakesEn.includes(c.Fake)) {
      uniqueFakesEn.push(c.Fake);
    }
    return c;
  });

  const uniqueFakesByTagEn: string[] = [];
  fakeByTag.map((c) => {
    if (!uniqueFakesByTagEn.includes(c.Fake)) {
      uniqueFakesByTagEn.push(c.Fake);
    }
    return c;
  });

  const renderedFakes = uniqueFakesEn.map((item) => (
    <Fake fake={item} key={item} />
  ));

  const renderedFakesByTag = uniqueFakesByTagEn.map((item) => (
    <Fake fake={item} key={item} />
  ));
  // @ts-ignore
  const commonStatistic = (start, finish, type) => {
    // @ts-ignore
    const arr = [];
    // @ts-ignore
    data.map((c) => {
      // @ts-ignore
      if (c.Date > start && c.Date < finish && !arr.includes(c[type])) {
        // @ts-ignore
        arr.push(c[type]);
      }
    });
    // @ts-ignore
    return arr;
  };

  const monthFakes = commonStatistic(
    `2022-${month}-01`,
    `2022-${month}-31`,
    "Fake"
  );
  const renderedFakesByMonth = monthFakes.map((item) => (
    <Fake fake={item} key={item} />
  ));

  return (
    <>
      {tagName
        ? renderedFakesByTag
        : month
        ? renderedFakesByMonth
        : renderedFakes}
    </>
  );
};

export default FakeList;
