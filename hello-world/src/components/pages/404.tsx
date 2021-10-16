import { VFC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: VFC = () => (
  <div>
    <h1>404</h1>
    <Link
      to={{
        pathname: '/',
        search: '?from=here',
        hash: '#subject',
        state: { secretCode: 'hogehoge' },
      }}
    >
      お問い合わせ
    </Link>
  </div>
);

export default NotFound;
