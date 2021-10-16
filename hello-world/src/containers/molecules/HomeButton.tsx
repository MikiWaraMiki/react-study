import { useHistory } from 'react-router';
import HomeButton from 'components/molecules/HomeButton';
import { VFC } from 'react';

const EnhancedHomeButton: VFC = () => {
  const history = useHistory();

  return <HomeButton redirectToHome={() => history.push('/')} />;
};

export default EnhancedHomeButton;
