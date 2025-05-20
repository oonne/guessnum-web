import { getDictionary } from '@/i18n';
import HeaderNav from '@/components/header-nav/guess-number-nav';
import GuessNumber from '@/components/guess-number/guess-number';

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
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

export default Home;
