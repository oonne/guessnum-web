import { getDictionary } from '@/i18n';
import HeaderNav from '@/components/header-nav/guess-number-nav';
import GuessNumber from '@/components/guess-number/guess-number';

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_guess_number_game);

  return (
    <main className="min-h-screen">
      <HeaderNav params={params} />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <GuessNumber max={10} />
      </div>
    </main>
  );
};

export default Home;
