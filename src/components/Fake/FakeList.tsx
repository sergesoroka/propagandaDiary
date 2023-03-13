import Fake from "./Fake";
import data from "../../../data/dataEn.json";

const FakeList = ({ narrative }: { narrative: string }) => {
  const fakeFiltered = data.filter((item) => item.Narrative === narrative);

  const uniqueFakesEn: string[] = [];
  fakeFiltered.map((c) => {
    if (!uniqueFakesEn.includes(c.Fake)) {
      uniqueFakesEn.push(c.Fake);
    }
    return c;
  });

  const renderedFakes = uniqueFakesEn.map((item) => (
    <Fake fake={item} key={item} />
  ));

  return <>{renderedFakes}</>;
};

export default FakeList;
