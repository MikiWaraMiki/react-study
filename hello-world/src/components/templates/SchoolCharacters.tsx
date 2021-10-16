import { Character } from 'datas/characters';
import { VFC } from 'react';
import { Header } from 'semantic-ui-react';
import CharacterList from 'components/organisms/CharacterList';
import { Helmet } from 'react-helmet';

type Props = {
  school: string;
  characters: Character[];
  isLoading?: boolean;
};

const SchoolCharacters: VFC<Props> = ({
  school,
  characters,
  isLoading = false,
}) => (
  <>
    <Helmet>
      <title>登場人物 | {school} </title>
    </Helmet>
    <Header as="h2">{school}</Header>
    <CharacterList characters={characters} isLoading={isLoading} />
  </>
);

export default SchoolCharacters;
