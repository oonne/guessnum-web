import { getDictionary } from '@/i18n';
import HeaderNav from '@/components/header-nav/guess-number-nav';
import GuessNumber from '@/components/guess-number/guess-number';
import PageLayout from '@/components/layout/page-layout';

const Page1 = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_guess_number_game);

  return (
    <PageLayout header={<HeaderNav params={params} />}>
      <GuessNumber max={10} />
    </PageLayout>
  );
};

export default Page1;
