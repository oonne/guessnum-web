import { getDictionary } from '@/i18n';
import NavClient from './nav-client';
import { LinkType } from './types';

/**
 * 随机数导航组件 - 服务器组件
 * 负责获取数据并传递给客户端组件
 */
const RandomNav = async ({ params }: { params: { lang: string } | Promise<{ lang: string }> }) => {
  const { lang } = await params;
  await getDictionary(lang as LangCode);

  // 主导航 - 随机数相关链接
  const mainLinks: LinkType[] = [
    { href: `/${lang}/random-1-10`, label: '1-10' },
    { href: `/${lang}/random-1-100`, label: '1-100' },
    { href: `/${lang}/random-1-1000`, label: '1-1000' },
    { href: `/${lang}/random-1-10000`, label: '1-10000' },
  ];

  // 其他导航 - 猜数字链接
  const otherLinks: LinkType[] = [{ href: `/${lang}/`, label: 'Guess Number' }];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#23272b] text-white shadow-lg z-50">
      <NavClient
        lang={lang}
        mainLinks={mainLinks}
        otherLinks={otherLinks}
        mainMenuTitle="Random Number"
      />
    </header>
  );
};

export default RandomNav;
