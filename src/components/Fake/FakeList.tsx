import Fake from "./Fake";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";
import { useMemo } from "react";

const FakeList = ({
  narrative,
  month,
  year,
  tagName,
}: {
  narrative?: string;
  month?: string;
  year?: string;
  tagName?: string;
}) => {
  const { data } = useLangSwitcher();

  // @ts-ignore
  const fakeFiltered = useMemo(() => data.filter((item: { Narrative: string | undefined; }) => item.Narrative === narrative),
    [data, narrative]
  );
  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fakeByTag = useMemo(() => data.filter(
    // @ts-ignore
    (item) => item.Tag === tagName || item.Tag.split(", ").includes(tagName), [data, tagName])
  );

  const uniqueFakesEn: string[] = [];
  // @ts-ignore
  fakeFiltered.map((c) => {
    if (!uniqueFakesEn.includes(c.Fake)) {
      uniqueFakesEn.push(c.Fake);
    }
    return c;
  });
  const renderedFakes = uniqueFakesEn.map((item) => (
    <Fake fake={item} key={item} />
  ));

  const uniqueFakesByTagEn: string[] = [];
  fakeByTag.map((c: { Fake: string; }) => {
    if (!uniqueFakesByTagEn.includes(c.Fake)) {
      uniqueFakesByTagEn.push(c.Fake);
    }
    return c;
  });
  const renderedFakesByTag = uniqueFakesByTagEn.map((item) => (
    <Fake fake={item} key={item} />
  ));

  const uniqueFakesByDate: string[] = [];
  // @ts-ignore
  data.map((c) => {
    if (
      !uniqueFakesByDate.includes(c.Fake) &&
      c.Date > `${year}-${month}-01` &&
      c.Date < `${year}-${month}-31`
    ) {
      uniqueFakesByDate.push(c.Fake);
    }
    return c;
  });

  const renderedFakesByMonth = uniqueFakesByDate.map((item) => (
    <Fake fake={item} key={item} month={month} year={year} />
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
