import { TextField } from '@mui/material'
import React, { useState } from 'react'

const TextInput = () => {
    var [inputs, setInputs]=useState({sname:"",age:"",place:""})
    const inputHandler =(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);

    }
  return (
    <div>
      <TextField label="sname" variant="outlined" name="sname" onChange={inputHandler} /><br /><br />
      <TextField label="age" variant="outlined" name="age" onChange={inputHandler}/><br /><br />
      <TextField label="place" variant="outlined" name="place" onChange={inputHandler} />
    </div>
  )
}

export default TextInput
