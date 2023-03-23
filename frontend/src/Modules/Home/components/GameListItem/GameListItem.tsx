import React from 'react';
import { Button } from '../../../../shared/components/atons/Button/Button';
import { Span } from '../../../../shared/components/atons/Span/Span';
import { Strong } from '../../../../shared/components/atons/Strong/strong';
import { GameTypes } from '../../../../types/game';

interface Props {
  game: GameTypes;
  enterGame: (gameId: string, playerName: string) => void;
}

export const GameListItem = ({ game, enterGame }: Props) => {
  return (
    <li className="flex flex-row m-8  justify-between">
      <div className="flex flex-col">
        <Strong text={`Nome: ${game.name}`} />
        <Span text={`Horizontal: ${game.warzone.horizontal}`} />
        <Span text={`Vertical: ${game.warzone.vertical}`} />
      </div>

      <Button text="Entrar" onClick={() => enterGame(game.id, 'Pirio')} />
    </li>
  );
};
