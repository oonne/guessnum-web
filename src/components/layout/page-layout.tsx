import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  header: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, header }) => {
  return (
    <main className="min-h-screen">
      {header}

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">{children}</div>
    </main>
  );
};

export default PageLayout;
