import type { Metadata } from 'next';

/*
 * SEO TDK
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Guess Number Game',
    description: 'Guess Number Game',
    keywords: ['Guess Number Game'],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMIAN}/${lang}/page-1`,
    },
  };
}

export default function Page1Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
