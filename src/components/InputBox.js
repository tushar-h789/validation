import React from 'react'
import TextField from '@mui/material/TextField';

const InputBox = ({label, variant, className, textChange, type, name}) => {
  return (
    <TextField onChange={textChange} className={className} label={label} variant={variant} type={type} name={name} />
  )
}

export default InputBox