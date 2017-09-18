import React from 'react'
import {
    ButtonToolbar,
    Button,
    FormGroup,
    ControlLabel,
} from 'react-bootstrap'
import { ALGORITHMS } from '../constants'

class AlgorithmSelectionBarComponent extends React.Component {
    render() {
        return (
            <FormGroup controlId="formAlgorithmSelection">
                <ControlLabel>Algorithm selection</ControlLabel>
                <ButtonToolbar>
                    {
                        ALGORITHMS.map(algorithm => {
                            return (
                                <Button
                                    key={algorithm}
                                    onClick={e => this.props.setAlgorithm(algorithm)}
                                    active={algorithm === this.props.algorithm}
                                >
                                    {algorithm}
                                </Button>
                            )
                        })
                    }
                </ButtonToolbar>
            </FormGroup>
        )
    }
}

export default AlgorithmSelectionBarComponent
