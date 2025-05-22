import HeaderNav from '@/components/header-nav/random-nav';
import RandomNumber from '@/components/random-number/random-number-container';
import PageLayout from '@/components/layout/page-layout';

const Page = () => {
  return (
    <PageLayout header={<HeaderNav />}>
      <RandomNumber max={10} />
    </PageLayout>
  );
};

export default Page;
