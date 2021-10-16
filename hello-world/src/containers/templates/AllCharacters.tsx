import { VFC } from 'react';
import { useLocation } from 'react-router';
import { charactersData } from 'datas/characters';
import AllCharacters from '../../components/templates/AllCharacters';

const EnhancedAllCharacters: VFC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');

  const characters = Object.values(charactersData)
    .map((v) => v.players)
    .flat()
    .sort((p, q) => ((p.height ?? 160) < (q.height ?? 160) ? -1 : 1));

  return <AllCharacters characters={characters} isLoading={isLoading} />;
};

export default EnhancedAllCharacters;
