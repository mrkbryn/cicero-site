import React from 'react'
import {
    Panel,
} from 'react-bootstrap'

/*
 * Renders the test results returned from CiceroDB
 */
class TestResult extends React.Component {
    render() {
        let props = this.props;
        if (props.testResult) {
            return (
                <Panel header="Speech Text" bsStyle="primary" >
                    {props.testResult.longFormResult}
                </Panel>
            )
        }

        return (
            <div>
                <h2>No test result</h2>
            </div>
        )
    }
}

export default TestResult
