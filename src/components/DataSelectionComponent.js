import React from 'react';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Panel,
    Nav,
    NavItem,
    Row,
} from 'react-bootstrap';

/**
 * Renders a form for a user to specify the test data. Test data
 * can be submitted by specifying a raw SQL query or by specifying
 * the data in CSV format.
 */
class DataSelectionComponent extends React.Component {
    render() {
        let props = this.props;
        return (
            <Panel header="Data Selection">
                <Row>
                    <Nav
                        bsStyle="tabs"
                        activeKey={props.dataInputMethod}
                        onSelect={inputMethod => props.setDataInputMethod(inputMethod)}
                    >
                        <NavItem eventKey="sqlQuery">SQL Query</NavItem>
                        <NavItem eventKey="csvData">CSV Data</NavItem>
                    </Nav>
                </Row>
                {this.props.dataInputMethod === "sqlQuery" &&
                    <div>
                        <FormGroup>
                            <ControlLabel>SQL Query</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </div>
                }
                {this.props.dataInputMethod === "csvData" &&
                    <div>
                        <FormGroup>
                            <ControlLabel>CSV Header</ControlLabel>
                            <FormControl type="text" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>CSV Body</ControlLabel>
                            <FormControl componentClass="textArea" rows="5" />
                        </FormGroup>
                    </div>
                }
            </Panel>
        );
    }
}

export default DataSelectionComponent;
