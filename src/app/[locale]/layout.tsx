import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '~/config';
import { CommonProvider } from '~/context/common-context';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
                                             children,
                                             params: {locale}
                                           }: Props) {

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);


  return (
    <html className="h-full" lang={locale}>
    <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DC18EZLF41"></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4644126769732505"
     crossOrigin="anonymous"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-DC18EZLF41');
                  `,
        }}        
      />
      <script async="async" data-cfasync="false" src="//pl25003204.profitablecpmrate.com/b734abdcbb6527dd66db1caafb609a6f/invoke.js"></script>
    </head>
    <body suppressHydrationWarning={true} className={clsx(inter.className, 'flex h-full flex-col bg-black]')}>
    <CommonProvider>
      {children}
    </CommonProvider>
    </body>
    </html>
  );
}
