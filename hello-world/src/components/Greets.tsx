import React from 'react';

// eslint-disable-next-line react/require-default-props
type Props = { name: string; times?: number}

const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {[...Array(times)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}>
          Hello,
          { name }
          !
          { children }
        </p>
      ))}
    </>
  );
};

export default Greets;
