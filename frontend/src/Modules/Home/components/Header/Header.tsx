import React from 'react';
import { Button } from '../../../../shared/components/atons/Button/Button';
import { Title } from '../../../../shared/components/atons/Title/Title';

interface Props {
  loading: boolean;
  createNew: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const HomeHeader = ({ createNew, loading, refresh }: Props) => {
  return (
    <header className="flex justify-between my-8">
      <Title text="Lista de Games" />
      <Button
        disabled={loading}
        onClick={createNew}
        text={loading ? 'Criando...' : 'Criar Novo'}
      />
      <Button
        disabled={loading}
        onClick={refresh}
        text={loading ? 'Carregando...' : 'Recarregar'}
      />
    </header>
  );
};
