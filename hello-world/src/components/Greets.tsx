import React from 'react'

type Props = { name: String; times?: number}

const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props
  return (
    <>
      {[...Array(times)].map((_, i) => (
        <p key={i}>Hello, { name }! { children }</p>
      ))}
    </>
  )
}

export  default Greets
