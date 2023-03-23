import React from 'react';
import { Home } from './Modules';
import { Lyaout } from './shared/components/Layout/Lyaout';

export const App = () => {
  return (
    <Lyaout>
      <Home />
    </Lyaout>
  );
};
