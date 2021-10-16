import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

type School = {
  code: string;
  name: string;
};
type Props = {
  schoolList: School[];
};
const SchoolList: VFC<Props> = ({ schoolList = [] }) => (
  <>
    <h2>登場人物</h2>
    <List as="ul">
      {schoolList.map((school) => (
        <List.Item as="li" key={school.code}>
          <Link to={`/characters/${school.code}`}>{school.name}</Link>
        </List.Item>
      ))}
    </List>
  </>
);

export default SchoolList;
