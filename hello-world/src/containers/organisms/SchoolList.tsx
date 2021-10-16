import { VFC } from 'react';
import { charactersData } from 'datas/characters';
import SchoolList from 'components/organisms/SchoolList';

const EnhancedSchoolList: VFC = () => {
  const schoolData = Object.keys(charactersData).map((code) => ({
    code,
    name: charactersData[code].school,
  }));

  return <SchoolList schoolList={schoolData} />;
};

export default EnhancedSchoolList;
