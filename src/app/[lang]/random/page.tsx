import HeaderNav from '@/components/header-nav/random-nav';
import RandomNumber from '@/components/random-number/random-number';
import { getDictionary } from '@/i18n';

const Page1 = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_random_number_game);

  return (
    <main className="min-h-screen">
      <HeaderNav params={params} />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <RandomNumber max={10} />
      </div>
    </main>
  );
};

export default Page1;
