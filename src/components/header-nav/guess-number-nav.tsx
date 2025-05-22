import { getLocale } from 'next-intl/server';
import NavClient from './nav-client';
import { LinkType } from './types';

/**
 * 主导航组件 - 服务器组件
 * 负责获取数据并传递给客户端组件
 */
const MainNav = async () => {
  const locale = await getLocale();

  // 主导航
  const mainLinks: LinkType[] = [
    { href: `/${locale}/guess-number-1-10`, label: '1-10' },
    { href: `/${locale}/guess-number-1-100`, label: '1-100' },
    { href: `/${locale}/guess-number-1-1000`, label: '1-1000' },
    { href: `/${locale}/guess-number-1-10000`, label: '1-10000' },
  ];

  // 其他导航
  const otherLinks: LinkType[] = [{ href: `/${locale}/random`, label: 'Random Number' }];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#23272b] text-white shadow-lg z-50">
      <NavClient
        lang={locale}
        mainLinks={mainLinks}
        otherLinks={otherLinks}
        mainMenuTitle="Guess Number Game"
      />
    </header>
  );
};

export default MainNav;
