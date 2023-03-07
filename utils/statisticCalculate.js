import dataEn from '../data/dataEn.json'

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