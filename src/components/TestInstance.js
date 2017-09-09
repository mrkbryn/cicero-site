import React, { Component } from 'react';
import { CsvData } from '../data';
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import SelectGroup from './SelectGroup';
import NumberGroup from './NumberGroup';

class TestInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: "fantom-greedy",
      csvHeader: "",
      csvBody: "",
      maxAllowableContextSize: 2,
      maxAllowableNumericalDomainWidth: 2,
      maxAllowableCategoricalDomainSize: 2,
      timeout: 120,
      epsilon: 0.1
    };

    this.onSubmit = props.onSubmit;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadPresetCsv = this.loadPresetCsv.bind(this);
  }

  parseValue(target) {
    if (target.type === 'checkbox') {
      return target.checked;
    } else if (target.type === 'number') {
      return parseFloat(target.value);
    } else {
      return target.value;
    }
  }

  handleChange(event) {
    var target = event.target;
    var value = this.parseValue(target);
    var name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var data = {
      csvHeader: this.state.csvHeader,
      csvBody: this.state.csvBody,
      algorithm: this.state.algorithm,
      config: {
        maxAllowableContextSize: this.state.maxAllowableContextSize,
        maxAllowableNumericalDomainWidth: this.state.maxAllowableNumericalDomainWidth,
        maxAllowableCategoricalDomainSize: this.state.maxAllowableCategoricalDomainSize,
        timeout: this.state.timeout,
        epsilon: this.state.epsilon
      }
    };
    this.onSubmit(data);
  }

  loadPresetCsv(event) {
    var target = event.target;
    var value = this.parseValue(target);
    this.setState({
      csvHeader: CsvData[value].csvHeader,
      csvBody: CsvData[value].csvBody
    });
  }

  render() {
    let isLoading = this.props.isLoading;
    return (
      <Panel header="Test Instance">
        <form>
          <Grid>
            <Row className="show-grid">
              <Col md={4}>
              <SelectGroup id="formPresetCsv" label="PresetCsv" options={Object.keys(CsvData)} onChange={this.loadPresetCsv}/>
              </Col>
              <Col md={8}>
              <FieldGroup id="formCsvHeader" type="text" label="CsvHeader" value={this.state.csvHeader} name="csvHeader" onChange={this.handleChange}/>
              <FieldGroup id="formCsvBody" label="CsvBody" componentClass="textarea" rows="5" value={this.state.csvBody} name="csvBody" onChange={this.handleChange}/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={4}>
              <FieldGroup id="formMaxAllowableContextSize" label="Max Allowable Context Size" help="mS" type="number" value={this.state.maxAllowableContextSize} name="maxAllowableContextSize" onChange={this.handleChange}/>
              </Col>
              <Col md={4}>
              <FieldGroup id="formMaxAllowableNumericalDomainWidth" label="Max Allowable Numerical Domain Width" help="mW" type="number" value={this.state.maxAllowableNumericalDomainWidth} name="maxAllowableNumericalDomainWidth" onChange={this.handleChange}/>
              </Col>
              <Col md={4}>
              <FieldGroup id="formMaxAllowableCategoricalDomainSize" label="Max Allowable Categorical Domain Size" help="mC" type="number" value={this.state.maxAllowableCategoricalDomainSize} name="maxAllowableCategoricalDomainSize" onChange={this.handleChange}/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={4}>
              <NumberGroup id="formTimeout" label="Timeout" suffix="Sec" help="Timeout before defaulting to a naive result" type="number" value={this.state.timeout} name="timeout" onChange={this.handleChange}/>
              </Col>
              <Col md={4}>
              <FieldGroup id="formEpsilon" label="Epsilon" help="Approximation value for the FANTOM algorithm" type="number" value={this.state.epsilon} name="epsilon" onChange={this.handleChange}/>
              </Col>
              <Col md={4}>
              <SelectGroup id="formAlgorithm" label="Algorithm" options={["naive","hybrid","fantom-greedy","linear"]} value={this.state.algorithm} name="algorithm" onChange={this.handleChange}/>
              </Col>
            </Row>
            <Button onClick={!isLoading ? this.handleSubmit : null} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Submit'}
            </Button>
          </Grid>
        </form>
      </Panel>
    );
  }
};

export default TestInstance;
