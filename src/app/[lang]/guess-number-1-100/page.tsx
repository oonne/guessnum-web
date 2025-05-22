import HeaderNav from '@/components/header-nav/guess-number-nav';
import GuessNumber from '@/components/guess-number/guess-number';
import PageLayout from '@/components/layout/page-layout';

const Page = async () => {
  return (
    <PageLayout header={<HeaderNav />}>
      <GuessNumber max={100} />
    </PageLayout>
  );
};

export default Page;
