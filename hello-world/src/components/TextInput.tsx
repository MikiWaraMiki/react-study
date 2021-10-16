import React, { SyntheticEvent, useEffect } from 'react';

const TextInput: React.FunctionComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (inputRef.current) alert(inputRef.current.value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="button" value="Focus" onClick={handleClick} />
    </div>
  );
};

export default TextInput;
