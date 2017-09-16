import React, { Component } from 'react'
import './App.css'
import {
  PageHeader,
  Button,
  FormGroup,
} from 'react-bootstrap'
import TestResultContainer from './containers/TestResultContainer'
import AlgorithmConfigPanel from './containers/AlgorithmConfigPanel'
import DataSelectionContainer from './containers/DataSelectionContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PageHeader>CiceroDB <small>Optimizing Voice Output of Relational Data</small></PageHeader>
          <AlgorithmConfigPanel />
          <DataSelectionContainer />
          <FormGroup>
            <Button bsStyle="primary" bsSize="large">Run Test</Button>
          </FormGroup>
          <TestResultContainer />
        </div>
      </div>
    )
  }
}

export default App
