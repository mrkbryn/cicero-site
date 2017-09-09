import React from 'react';
import { FormGroup, ControlLabel, InputGroup, FormControl, HelpBlock } from 'react-bootstrap';

function NumberGroup({ id, label, help, suffix, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        <FormControl {...props} />
        <InputGroup.Addon>{suffix}</InputGroup.Addon>
      </InputGroup>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

export default NumberGroup;
