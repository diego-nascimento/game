import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const useEnterGame = () => {
  const enterGame = async (gameId: string, playerName: string) => {
    socket.emit('enterGame', { gameId, playerName });
  };

  useEffect(() => {
    socket.on('userconnected', (data) => {});
  }, []);

  return { enterGame };
};
