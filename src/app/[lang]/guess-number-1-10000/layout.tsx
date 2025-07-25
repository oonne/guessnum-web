import { getLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

/*
 * SEO TDK
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations();

  return {
    title: t('tdk_title_guess_number_1_n', { n: 10000 }),
    description: t('tdk_description_guess_number_1_n', { n: 10000 }),
    keywords: [
      t('tdk_keywords_guess_number_1_n', { n: 10000 }),
      t('tdk_keywords_guess_number_n_digit', { n: 4 }),
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/${locale}/guess-number-1-10000`,
    },
  };
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
