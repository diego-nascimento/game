import React, { PropsWithChildren } from 'react';

export const Lyaout = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <header></header>
      <main className="w-full flex  justify-center">
        <div className="max-w-7xl w-full  sm:mx-4 xl:mx-0">{children}</div>
      </main>
    </React.Fragment>
  );
};
