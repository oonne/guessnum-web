import HeaderNav from '@/components/header-nav/guess-number-nav';
import GuessNumber from '@/components/guess-number/guess-number';
import { getDictionary } from '@/i18n';

const Page1 = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_guess_number_game);

  return (
    <main>
      <HeaderNav params={params} />

      <GuessNumber max={10} />
    </main>
  );
};

export default Page1;
