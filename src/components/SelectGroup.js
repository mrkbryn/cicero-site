import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

function SelectGroup({ id, label, help, options, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl componentClass="select" {...props}>{
        options.map((value) => {
          return (
            <option key={value} value={value}>{value}</option>
          )
        })
      }
      </FormControl>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

export default SelectGroup
