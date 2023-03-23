import React, { useEffect, useState } from 'react';
import { GameTypes } from '../../types/game';
import { httpClient } from '../http';

export const useListGames = () => {
  const [games, setGames] = useState<GameTypes[]>([]);
  const [loading, setLoading] = useState(false);

  const createNew = async () => {
    try {
      setLoading(true);
      await httpClient({
        method: 'POST',
        url: 'http://localhost:3000/creategame',
        data: {
          gameName: 'teste',
          warzoneSize: {
            horizontal: 20,
            vertical: 20,
          },
        },
      });

      refresh();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getGames = async () => {
    try {
      setLoading(true);
      const result = await httpClient({
        method: 'GET',
        url: 'http://localhost:3000/listgames',
      });
      if (result.statusCode !== 200) throw new Error(result.data.message);
      setGames(result.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  const refresh = async () => {
    await getGames();
  };

  return {
    games,
    refresh,
    loading,
    createNew,
  };
};
