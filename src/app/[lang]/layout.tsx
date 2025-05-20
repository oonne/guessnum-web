import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { DEFAULT_LANGUAGE } from '@/i18n/config';
import '@/style/globals.css';

/*
 * 默认字体
 */
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/*
 * SEO TDK
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  let canonical = process.env.NEXT_PUBLIC_DOMIAN;
  if (lang !== DEFAULT_LANGUAGE) {
    canonical = `${process.env.NEXT_PUBLIC_DOMIAN}/${lang}`;
  }

  return {
    title: 'Guess Number Game',
    description: 'Guess Number Game',
    keywords: ['Guess Number Game'],
    alternates: {
      canonical,
    },
  };
}

/*
 * 运行时 必须设置为edge，以支持国际化和服务端渲染
 */
export const runtime = 'edge';

/*
 * 基础布局
 */
const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
