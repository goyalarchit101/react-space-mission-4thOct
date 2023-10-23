import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button>{props.buttonText}</button>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Button
