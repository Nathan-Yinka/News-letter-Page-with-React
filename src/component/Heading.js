import React from 'react'

const Heading = (props) => {
  return (
    <h1 className={`mt-md-3 mb-3 ${props.className}`}>{props.title}</h1>
  )
}
Heading.defaultProps = {
    title: 'Enter header'
}

export default Heading