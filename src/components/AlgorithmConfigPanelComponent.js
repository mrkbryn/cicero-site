import React from 'react'
import { Panel } from 'react-bootstrap'
import NumberGroup from './NumberGroup'
import FieldGroup from './FieldGroup'
import SelectGroup from './SelectGroup'

class AlgorithmConfigPanelComponent extends React.Component {
    render() {
        let props = this.props
        return (
            <Panel header="Algorithm Selection">
                <SelectGroup
                    label="Select algorithm"
                    options={["naive", "greedy-FANTOM", ""]}
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
                        <FieldGroup
                            label="Maximum allowable context size"
                            help="The number of domains the algorithm is allowed to fix for tuples"
                            type="number"
                            value={props.maxAllowableContextSize}
                            onChange={e => props.setMaxAllowableContextSize(e.target.value)}
                        />
                        <FieldGroup
                            label="Maximum allowable numerical domain width"
                            help="The factor by which the upper bound is greater than the lower bound for numerical domains (mW)"
                            type="number"
                            value={props.maxAllowableNumericalDomainWidth}
                            onChange={e => props.setMaxAllowableNumericalDomainWidth(e.target.value)}
                        />
                        <FieldGroup
                            label="Maximum allowable categorical domain size"
                            help="The maximum number of categorical values allowed to be fixed in a domain (mC)"
                            type="number"
                            value={props.maxAllowableCategoricalDomainSize}
                            onChange={e => props.setMaxAllowableCategoricalDomainSize(e.target.value)}
                        />
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
