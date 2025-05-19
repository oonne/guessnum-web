import { getDictionary } from '@/i18n';
import NavClient from './nav-client';
import { LinkType } from './types';

/**
 * 主导航组件 - 服务器组件
 * 负责获取数据并传递给客户端组件
 */
const MainNav = async ({ params }: { params: { lang: string } | Promise<{ lang: string }> }) => {
  const { lang } = await params;
  await getDictionary(lang as LangCode);

  // 主导航
  const guessNumberLinks: LinkType[] = [
    { href: `/${lang}/guess-number-1-10`, label: '1-10' },
    { href: `/${lang}/guess-number-1-100`, label: '1-100' },
    { href: `/${lang}/guess-number-1-1000`, label: '1-1000' },
  ];

  // 其他导航
  const otherLinks: LinkType[] = [{ href: `/${lang}/random`, label: '随机数' }];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#23272b] text-white shadow-lg z-50">
      <NavClient lang={lang} guessNumberLinks={guessNumberLinks} otherLinks={otherLinks} />
    </header>
  );
};

export default MainNav;
