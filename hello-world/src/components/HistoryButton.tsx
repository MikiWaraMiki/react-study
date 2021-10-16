import { useHistory } from 'react-router';
import { VFC } from 'react';

const HistoryButton: VFC = () => {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.goBack()}>
        戻る
      </button>
      <button type="button" onClick={() => history.goForward()}>
        進む
      </button>
      <button type="button" onClick={() => history.push('/')}>
        トップページへ
      </button>
    </>
  );
};

export default HistoryButton;
