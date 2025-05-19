import Image from 'next/image';
import { getDictionary } from '@/i18n';
import Link from 'next/link';

const HeaderNav = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_guess_number_game);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#23272b] text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center h-16 gap-4">
          <Link
            href={`/${lang}`}
            className="text-xl font-bold hover:text-blue-200 transition-colors flex items-center gap-4"
          >
            <Image src="/img/logo.png" alt="logo" width={48} height={48} priority />
            <span>Guess Number Game</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href={`/${lang}/guess-number-1-10`}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm sm:text-base"
            >
              1-10
            </Link>
            <Link
              href={`/${lang}/guess-number-1-100`}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm sm:text-base"
            >
              1-100
            </Link>
            <Link
              href={`/${lang}/guess-number-1-1000`}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm sm:text-base"
            >
              1-1000
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
