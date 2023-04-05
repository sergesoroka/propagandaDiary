import Fake from "./Fake";
import data from "../../../data/dataEn.json";
import { useRouter } from "next/router";

import { commonStatistic } from "../../../utils/statisticCalculate";

const FakeList = ({
  narrative,
  month,
}: {
  narrative?: string;
  month?: string;
}) => {
  const router = useRouter();
  const { tag } = router.query;

  // @ts-ignore
  const fakeFiltered = data.filter((item) => item.Narrative === narrative);
  // @ts-ignore
  const fakeByTag = data.filter((item) => item.Tag === tag);

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

  const monthFakes = commonStatistic(`2022-${month}-01`, `2022-${month}-31`, "Fake");
  const renderedFakesByMonth = monthFakes.map((item) => (
    <Fake fake={item} key={item} />
  ));

  return (
    <>
      {tag ? renderedFakesByTag : month ? renderedFakesByMonth : renderedFakes}
    </>
  );
};

export default FakeList;
