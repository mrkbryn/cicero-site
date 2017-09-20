import React from 'react'
import {
    Panel,
    Col,
    Row,
    ControlLabel,
} from 'react-bootstrap'
import NumberGroup from './NumberGroup'
import InfoButton from './InfoButton'
import AlgorithmSelectionBar from '../containers/AlgorithmSelectionBar'

class AlgorithmConfigPanelComponent extends React.Component {
    render() {
        let props = this.props
        return (
            <Panel header="Algorithm Selection">
                <AlgorithmSelectionBar />
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
                            <Col md={4}>
                                <ControlLabel>Maximum context size</ControlLabel>
                                <input
                                    type="range"
                                    min="1"
                                    max="4"
                                    step="1"
                                    value={props.maxAllowableContextSize}
                                    onChange={e => props.setMaxAllowableContextSize(e.target.value)}
                                />
                                <InfoButton
                                    title="Max Allowable Context Size"
                                    helpText="This configuration value determines how much context is allowed for a grouping of Tuples. The size of a context is simply the number of attributes we choose to set domains for before reading out the tuples that match these domains. For example, we can give context for two attributes such as 'Restaurants with medium price and location New York City', or we can choose to give context for just one attribute as 'Restaurants with medium or high price'. This configuration value controls how large these contexts can be."
                                />
                            </Col>
                            <Col md={4}>
                                <ControlLabel>Maximum categorical domain size</ControlLabel>
                                <input
                                    type="range"
                                    min="0"
                                    max="4"
                                    step="1"
                                    value={props.maxAllowableCategoricalDomainSize}
                                    onChange={e => props.setMaxAllowableCategoricalDomainSize(e.target.value)}
                                />
                                <InfoButton
                                    title="Max Allowable Categorical Domain Size"
                                    helpText="This configuration value determines how many categorical values we are allowed to group to construct a categorical value domain. For example, the domain 'location Ithaca, NY or New York City' includes two categorical values for the location attribute. Thus, the size of the categorical domain is 2. As another example, we can have a categorical value domain of size one by specifying 'location New York City'."
                                />
                            </Col>
                            <Col md={4}>
                                <ControlLabel>Maximum numerical domain width</ControlLabel>
                                <input
                                    type="range"
                                    min="1.0"
                                    max="4.0"
                                    step="0.5"
                                    value={props.setMaxAllowableNumericalDomainWidth}
                                    onChange={e => props.setMaxAllowableNumericalDomainWidth(e.target.value)}
                                />
                                <InfoButton
                                    title="Max Allowable Numerical Domain Width"
                                    helpText="This configuration value determines the precision of numerical domains we give in contexts. For example, the range 'rating 4.0 to 5.0 stars' is less precise than 'rating 4.5 to 4.8 stars'. With a larger numerical domain in a context, there are more potential tuples that have values in this range, allowing us to save more speaking time. However, there is a tradeoff, as we lose precision because the user must guess where each tuple that is read out falls in this domain."
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
                        <InfoButton
                            title="Epsilon Approximation Value"
                            helpText="This value controls how many times we run an iterative greedy algorithm."
                        />
                    </div>
                }
            </Panel>
        )
    }
}

export default AlgorithmConfigPanelComponent
