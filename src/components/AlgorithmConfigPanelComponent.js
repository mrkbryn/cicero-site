import React from 'react';
import { Panel } from 'react-bootstrap';
import NumberGroup from './NumberGroup';
import FieldGroup from './FieldGroup';
import SelectGroup from './SelectGroup';

class AlgorithmConfigPanelComponent extends React.Component {
    render() {
        return (
            <Panel header="Algorithm Selection">
                <SelectGroup
                    label="Select algorithm"
                    options={["naive"]}
                    onChange={()=>{}}
                />
                <FieldGroup
                    label="Maximum allowable context size"
                    help="The number of domains the algorithm is allowed to fix for tuples"
                    type="number"
                    value="2"
                    onChange={()=>{}}
                />
                <FieldGroup
                    label="Maximum allowable numerical domain width"
                    help="The factor by which the upper bound is greater than the lower bound for numerical domains (mW)"
                    type="number"
                    value="2.0"
                    onChange={()=>{}}
                />
                <FieldGroup
                    label="Maximum allowable categorical domain width"
                    help="The maximum number of categorical values allowed to be fixed in a domain (mC)"
                    type="number"
                    value="1"
                    onChange={()=>{}}
                />
                <NumberGroup
                    label="Timeout"
                    suffix="Sec"
                    help="Timeout before defaulting to a naive result"
                    type="number"
                    value="120"
                    onChange={()=>{}}
                />
                <NumberGroup
                    label="Epsilon approximation value"
                    help="Approximation value for the Greedy FANTOM algorithm"
                    type="number"
                    value="0.1"
                    onChange={()=>{}}
                />
            </Panel>
        );
    }
}

export default AlgorithmConfigPanelComponent;
