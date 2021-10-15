import React from 'react'

const TextInput: React.FunctionComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleClick = (): void => {
    if (inputRef.current) inputRef.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      {
        /*
          refを利用して、real domへの参照を定義している
        */
      }
      <input type="button" value="Focus" onClick={handleClick} />
    </div>
  )
}

export default TextInput
