import { useEnterGame } from '../../shared/hooks/useEnterGame';
import { useListGames } from '../../shared/hooks/useListGames';
import { HomeHeader } from './components/Header/Header';
import { HomeMain } from './components/Main/Main';

export const Home = () => {
  const { loading, games, createNew, refresh } = useListGames();
  const { enterGame } = useEnterGame();
  return (
    <div>
      <HomeHeader createNew={createNew} loading={loading} refresh={refresh} />
      <HomeMain games={games} loading={loading} enterGame={enterGame} />
    </div>
  );
};
