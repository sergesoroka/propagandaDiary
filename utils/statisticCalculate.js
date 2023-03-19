import dataEn from "../data/dataEn.json";

export const uniqueNarrativesEn = [];
dataEn.map((c) => {
  if (!uniqueNarrativesEn.includes(c.Narrative)) {
    uniqueNarrativesEn.push(c.Narrative);
  }
  return c;
});

export const uniqueFakesEn = [];
dataEn.map((c) => {
  if (!uniqueFakesEn.includes(c.Fake)) {
    uniqueFakesEn.push(c.Fake);
  }
  return c;
});

export const uniqueSourcesEn = [];
dataEn.map((c) => {
  if (!uniqueSourcesEn.includes(c.Media)) {
    uniqueSourcesEn.push(c.Media);
  }
  return c;
});

export const commonStatistic = (start, finish, type) => {
  const arr = [];
  dataEn.map((c) => {
    if (c.Date > start && c.Date < finish && !arr.includes(c[type])) {
      arr.push(c[type]);
    }
  });
  return arr;
};

export const tagsOfNarrative = (narrative) => {
  const uniqueTags = [];
  dataEn.map((item) => {
    if (!uniqueTags.includes(item.Tag) && item.Narrative === narrative) {
      uniqueTags.push(item.Tag);
    }
  });
  return uniqueTags;
};
