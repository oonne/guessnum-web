import { getDictionary } from '@/i18n';
import HeaderNav from '@/components/header-nav/random-nav';
import RandomNumber from '@/components/random-number/random-number';
import PageLayout from '@/components/layout/page-layout';

const Page1 = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_random_number_game);

  return (
    <PageLayout header={<HeaderNav params={params} />}>
      <RandomNumber max={10} />
    </PageLayout>
  );
};

export default Page1;
