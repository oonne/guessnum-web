import { getDictionary } from '@/i18n';

const HeaderNav = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  return <div>顶导航: {dict.guess_number_game}</div>;
};

export default HeaderNav;
