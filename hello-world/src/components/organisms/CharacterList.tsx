import Spinner from 'components/molecules/Spinner';
import { Character } from 'datas/characters';
import { VFC } from 'react';
import { Icon, Item } from 'semantic-ui-react';

type Props = {
  characters: Character[];
  isLoading?: boolean;
};

const CharactersList: VFC<Props> = ({ characters = [], isLoading = false }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <Item.Group>
        {characters.map((character) => (
          <Item key={character.id}>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{character.name}</Item.Header>
              <Item.Meta>
                <span>{character.grade}年生</span>
                <span>{character.height ?? '???'}cm</span>
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    )}
  </>
);

export default CharactersList;
