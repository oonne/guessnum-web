import { getLocale } from 'next-intl/server';
import type { Metadata } from 'next';

/*
 * SEO TDK
 */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: 'Guess Number Game',
    description: 'Guess Number Game',
    keywords: ['Guess Number Game'],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMIAN}/${locale}/guess-number-1-10`,
    },
  };
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
