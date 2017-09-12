import React from 'react';
import { Panel } from 'react-bootstrap';
import NumberGroup from './NumberGroup';
import FieldGroup from './FieldGroup';
import SelectGroup from './SelectGroup';

class AlgorithmConfigPanelComponent extends React.Component {
    render() {
        let props = this.props;
        return (
            <Panel header="Algorithm Selection">
                <SelectGroup
                    label="Select algorithm"
                    options={["naive", "greedy"]}
                    defaultValue={props.algorithm}
                    onChange={e => props.setAlgorithm(e.target.value)}
                />
                <FieldGroup
                    label="Maximum allowable context size"
                    help="The number of domains the algorithm is allowed to fix for tuples"
                    type="number"
                    value="2"
                    onChange={value => props.setMaxAllowableContextSize(value)}
                />
                <FieldGroup
                    label="Maximum allowable numerical domain width"
                    help="The factor by which the upper bound is greater than the lower bound for numerical domains (mW)"
                    type="number"
                    value="2.0"
                    onChange={value => props.setMaxAllowableNumericalDomainWidth(value)}
                />
                <FieldGroup
                    label="Maximum allowable categorical domain size"
                    help="The maximum number of categorical values allowed to be fixed in a domain (mC)"
                    type="number"
                    value="1"
                    onChange={value => props.setMaxAllowableCategoricalDomainSize(value)}
                />
                <NumberGroup
                    label="Timeout"
                    suffix="Sec"
                    help="Timeout before defaulting to a naive result"
                    type="number"
                    value="120"
                    onChange={value => props.setTimeout(value)}
                />
                <NumberGroup
                    label="Epsilon approximation value"
                    help="Approximation value for the Greedy FANTOM algorithm"
                    type="number"
                    value="0.1"
                    onChange={value => props.setEpsilon(value)}
                />
            </Panel>
        );
    }
}

export default AlgorithmConfigPanelComponent;
