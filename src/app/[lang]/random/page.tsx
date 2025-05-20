import HeaderNav from '@/components/header-nav/random-nav';
import RandomNumber from '@/components/random-number/random-number';
import { getDictionary } from '@/i18n';

const Page1 = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang as LangCode);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeaderNav params={params} />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1>随机数</h1>
          <h2>{dict.link_home}</h2>
        </div>

        <div>
          <RandomNumber max={10} />
        </div>
      </main>
    </div>
  );
};

export default Page1;
