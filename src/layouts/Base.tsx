import React from 'react';

import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import Main from '@src/components/Main';

type Props = {
  title: string;
  children: NonNullable<React.ReactNode>;
};

const Base: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Base;
