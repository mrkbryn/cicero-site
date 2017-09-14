import React from 'react'
import {
    Panel,
    Col,
    Row,
    ControlLabel,
} from 'react-bootstrap'
import NumberGroup from './NumberGroup'
import SelectGroup from './SelectGroup'

class AlgorithmConfigPanelComponent extends React.Component {
    render() {
        let props = this.props
        return (
            <Panel header="Algorithm Selection">
                <SelectGroup
                    label="Select algorithm"
                    options={["naive", "greedy-FANTOM", "hybrid"]}
                    defaultValue={props.algorithm}
                    onChange={e => props.setAlgorithm(e.target.value)}
                />
                <NumberGroup
                    label="Timeout"
                    suffix="Sec"
                    help="Timeout before defaulting to a naive result"
                    type="number"
                    value={props.timeout}
                    onChange={e => props.setTimeout(e.target.value)}
                />
                {props.algorithm !== "naive" &&
                    <div>
                        <Row>
                            <Col md="4">
                                <ControlLabel>Amount of context for each grouping of tuples (maximum context size)</ControlLabel>
                                <input
                                    type="range"
                                    min="1"
                                    max="4"
                                    step="1"
                                    value={props.maxAllowableContextSize}
                                    onChange={e => props.setMaxAllowableContextSize(e.target.value)}
                                />
                            </Col>
                            <Col md="4">
                                <ControlLabel>Number of values allowed for a categorical domain (maximum categorical domain size)</ControlLabel>
                                <input
                                    type="range"
                                    min="0"
                                    max="4"
                                    step="1"
                                    value={props.maxAllowableCategoricalDomainSize}
                                    onChange={e => props.setMaxAllowableCategoricalDomainSize(e.target.value)}
                                />
                            </Col>
                            <Col md="4">
                                <ControlLabel>Size of range for numerical context (maximum numerical domain width)</ControlLabel>
                                <input
                                    type="range"
                                    min="1.0"
                                    max="4.0"
                                    step="0.5"
                                    value={props.setMaxAllowableNumericalDomainWidth}
                                    onChange={e => props.setMaxAllowableNumericalDomainWidth(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </div>
                }
                {this.props.algorithm === "greedy-FANTOM" &&
                    <div>
                        <NumberGroup
                            label="Epsilon approximation value"
                            help="Approximation value for the Greedy FANTOM algorithm"
                            type="number"
                            value={props.epsilon}
                            onChange={e => props.setEpsilon(e.target.value)}
                        />
                    </div>
                }
            </Panel>
        )
    }
}

export default AlgorithmConfigPanelComponent
