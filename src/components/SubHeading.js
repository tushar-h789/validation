import React from 'react'

const SubHeading = (props) => {
  return (

    props.as == undefined
    ?
    <p>Paragraph is not define</p>
    :

    <props.as className="font-non font-normal text-xl mt-3 mb-10">{props.title}</props.as>
  )
}

export default SubHeading