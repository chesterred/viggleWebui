import {getTranslations} from "next-intl/server";

export const getIndexLanguageText = async () => {
  const tIndex = await getTranslations('IndexPage');
  return {
    title: tIndex('title'),
    description: tIndex('description'),
    loadingText: tIndex('loadingText'),
    generateText: tIndex('generateText'),
    buttonText: tIndex('buttonText'),
    placeholderText: tIndex('placeholderText'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    soraVideoExample: tIndex('soraVideoExample'),
    prompt: tIndex('prompt'),
    moreExample: tIndex('moreExample'),
    soraResultTitle: tIndex('soraResultTitle'),
    fakeSoraTip: tIndex('fakeSoraTip'),
    soraTip: tIndex('soraTip'),
  };
}


export const getQuestionLanguageText = async () => {
  const tIndexQuestion = await getTranslations('indexQuestion');
  return {
    start: tIndexQuestion('start'),
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_1_p2: tIndexQuestion('h2_1_p2'),
    h2_1_p3: tIndexQuestion('h2_1_p3'),
    h2_1_p4: tIndexQuestion('h2_1_p4'),
    h3_1: tIndexQuestion('h3_1'),
    h4_1: tIndexQuestion('h4_1'),
    h5_1: tIndexQuestion('h5_1'),
    h5_1_p1: tIndexQuestion('h5_1_p1'),
    h5_1_p2: tIndexQuestion('h5_1_p2'),
    h5_1_p3: tIndexQuestion('h5_1_p3'),
    h4_2: tIndexQuestion('h4_2'),
    h5_2: tIndexQuestion('h5_2'),
    h5_2_p1: tIndexQuestion('h5_2_p1'),
    h5_2_p2: tIndexQuestion('h5_2_p2'),
    h5_2_p3: tIndexQuestion('h5_2_p3'),
    h3_2: tIndexQuestion('h3_2'),
    h4_3: tIndexQuestion('h4_3'),
    h5_3: tIndexQuestion('h5_3'),
    h4_4: tIndexQuestion('h4_4'),
    h5_4: tIndexQuestion('h5_4'),
    h2_2: tIndexQuestion('h2_2'),
    h2_3: tIndexQuestion('h2_3'),
    h2_4: tIndexQuestion('h2_4'),
    h2_4_p1: tIndexQuestion('h2_4_p1'),
    h2_5: tIndexQuestion('h2_5'),
    h2_6: tIndexQuestion('h2_6'),
    h2_7: tIndexQuestion('h2_7'),
    h2_8: tIndexQuestion('h2_8'),
      }
}


export const getWorksPageLanguageText = async () => {
  const tWorks = await getTranslations('worksPage');
  return {
    title: tWorks('title'),
    description: tWorks('description'),
    h1Text: tWorks('h1Text'),
    pDescription: tWorks('pDescription'),
    generateNew: tWorks('generateNew'),
  }
}

export const getVideosPageLanguageText = async () => {
  const tVideosPage = await getTranslations('videosPage');
  return {
    title: tVideosPage('title'),
    description: tVideosPage('description'),
  }
}

export const getPrivacyPolicyLanguageText = async () => {
  const tPrivacyPolicy = await getTranslations('privacyPolicy');
  return {
    title: tPrivacyPolicy('title'),
    description: tPrivacyPolicy('description'),
    h1: tPrivacyPolicy('h1'),
    date: tPrivacyPolicy('date'),
    desc: tPrivacyPolicy('desc'),
    h4_1: tPrivacyPolicy('h4_1'),
    h4_1_pa: tPrivacyPolicy('h4_1_pa'),
    h4_1_pb: tPrivacyPolicy('h4_1_pb'),
    h4_2: tPrivacyPolicy('h4_2'),
    h4_2_p: tPrivacyPolicy('h4_2_p'),
    h4_3: tPrivacyPolicy('h4_3'),
    h4_3_p: tPrivacyPolicy('h4_3_p'),
    h4_4: tPrivacyPolicy('h4_4'),
    h4_4_p: tPrivacyPolicy('h4_4_p'),
    h4_5: tPrivacyPolicy('h4_5'),
    h4_5_p: tPrivacyPolicy('h4_5_p'),
    h4_6: tPrivacyPolicy('h4_6'),
    h4_6_p: tPrivacyPolicy('h4_6_p'),
    p2_h1: tPrivacyPolicy('p2_h1'),
    p2_1: tPrivacyPolicy('p2_1'),
    p2_2: tPrivacyPolicy('p2_2'),
    p2_3: tPrivacyPolicy('p2_3'),
    p2_4: tPrivacyPolicy('p2_4'),
    p2_5: tPrivacyPolicy('p2_5'),
    viggle_discord: tPrivacyPolicy('viggle_discord'),
    how_title: tPrivacyPolicy('how_title'),
    how_description: tPrivacyPolicy('how_description'),

  }
}

export const getTermsOfServiceLanguageText = async () => {
  const tTermsOfService = await getTranslations('termsOfService');
  return {
    title: tTermsOfService('title'),
    description: tTermsOfService('description'),
    h1: tTermsOfService('h1'),
    date: tTermsOfService('date'),
    desc: tTermsOfService('desc'),
    h4_1: tTermsOfService('h4_1'),
    h4_1_p: tTermsOfService('h4_1_p'),
    h4_2: tTermsOfService('h4_2'),
    h4_2_p: tTermsOfService('h4_2_p'),
    h4_3: tTermsOfService('h4_3'),
    h4_3_p: tTermsOfService('h4_3_p'),
    h4_4: tTermsOfService('h4_4'),
    h4_4_p: tTermsOfService('h4_4_p'),
    h4_5: tTermsOfService('h4_5'),
    h4_5_p: tTermsOfService('h4_5_p'),
    h4_6: tTermsOfService('h4_6'),
    h4_6_p: tTermsOfService('h4_6_p'),
    h4_7: tTermsOfService('h4_7'),
    h4_7_p: tTermsOfService('h4_7_p'),
    h4_8: tTermsOfService('h4_8'),
    h4_8_p: tTermsOfService('h4_8_p'),
  }
}

export const getPlaygroundPageLanguageText = async () => {
  const tPlaygroundPage = await getTranslations('playgroundPage');
  return {
    title: tPlaygroundPage('title'),
    description: tPlaygroundPage('description'),
    h1Text: tPlaygroundPage('h1Text'),
    pDescription: tPlaygroundPage('pDescription'),
    moreWorks: tPlaygroundPage('moreWorks'),
  }
}
