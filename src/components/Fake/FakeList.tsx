import Fake from "./Fake";
import data from "../../../data/dataEn.json";
import { useRouter } from "next/router";

const FakeList = ({ narrative }: { narrative?: string }) => {
  const router = useRouter();
  const { tag } = router.query;

  const fakeFiltered = data.filter((item) => item.Narrative === narrative);
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

  return <>{tag ? renderedFakesByTag : renderedFakes}</>;
};

export default FakeList;
