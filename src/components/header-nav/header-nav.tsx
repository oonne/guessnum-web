import { getDictionary } from '@/i18n';

const HeaderNav = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_guess_number_game);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg font-semibold text-gray-800">Guess Number Game</div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
