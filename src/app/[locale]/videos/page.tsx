import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getIndexLanguageText, getPrivacyPolicyLanguageText, getVideosPageLanguageText} from "~/configs/languageText";

export default async function Videos({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const videosLanguageText = await getVideosPageLanguageText();
  const privacyPolicyLanguageText = await getPrivacyPolicyLanguageText();

  return (
    <PageComponent
      locale={locale}
      videosLanguageText={videosLanguageText}
      indexLanguageText={indexLanguageText}
      privacyPolicyLanguageText={privacyPolicyLanguageText}

    />
  )
}
