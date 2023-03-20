import React from 'react'

const Heading = (props) => {
  return (

    props.as == undefined
    ?
    <h1  className="font-non font-bold text-4xl">Heading is not define</h1>
    :
    <props.as  className="font-non font-bold text-4xl">{props.title}</props.as>

  )
}

export default Heading