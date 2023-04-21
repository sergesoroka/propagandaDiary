import Fake from "./Fake";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

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

  // @ts-ignore
  data.map(
    // @ts-ignore
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
  );

  const renderedFakesByMonth = uniqueFakesByDate.map((item) => (
    <Fake fake={item} key={item} month={month} year={year} />
  ));

  return <>{renderedFakesByMonth}</>;
};

export default FakeListForMonth;
