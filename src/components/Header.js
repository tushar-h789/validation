import React from 'react'
import Heading from './Heading'
import InputBox from './InputBox'

const Header = ({children, className}) => {
  return (
    <>
        <div className={className}>{children}</div>
    </>
    
  )
}

export default Header