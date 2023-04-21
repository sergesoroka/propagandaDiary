import Fake from "./Fake";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";
import { useMemo } from "react";

const FakeListForMonth = ({
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

  const uniqueFakesByDate: string[] = [];
  // @ts-ignore
  useMemo(() =>
    // @ts-ignore
    data.map(
      (c) => {
        if (
          !uniqueFakesByDate.includes(c.Fake) &&
          c.Date > `${year}-${month}-01` &&
          c.Date < `${year}-${month}-31`
        ) {
          uniqueFakesByDate.push(c.Fake);
        }
        return c;
      },
      [data, year, month]
    )
  );

  const renderedFakesByMonth = uniqueFakesByDate.map((item) => (
    <Fake fake={item} key={item} month={month} year={year} />
  ));

  return <>{renderedFakesByMonth}</>;
};

export default FakeListForMonth;
