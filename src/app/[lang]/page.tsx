import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/i18n';
import HeaderNav from '@/components/header-nav/guess-number-nav';

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  console.log(dict.link_guess_number_game);

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 px-4">
      <HeaderNav params={params} />

      <nav className="w-full max-w-7xl">
        <ul>
          <li>本地环境变量: {process.env.NEXT_PUBLIC_ENV_NAME}</li>
        </ul>
      </nav>

      <Image src="/img/logo.png" alt="logo" width={180} height={180} priority className="my-8" />

      <Link href={`/${lang}/page-1`} className="mt-8 text-blue-600 hover:text-blue-800">
        跳转到页面1
      </Link>
    </main>
  );
};

export default Home;
