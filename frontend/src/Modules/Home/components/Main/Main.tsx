import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { GameTypes } from '../../../../types/game';
import { GameListItem } from '../GameListItem/GameListItem';

interface Props {
  loading: boolean;
  games: GameTypes[];
  enterGame: (gameId: string, playerName: string) => void;
}

export const HomeMain = ({ games, loading, enterGame }: Props) => {
  return (
    <main className="flex justify-center items-center w-full">
      {loading ? (
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <ul className="border-slate-800 border rounded-xl w-full">
          {games.map((game) => {
            return (
              <GameListItem game={game} key={game.id} enterGame={enterGame} />
            );
          })}
        </ul>
      )}
    </main>
  );
};
