import React, { Component } from 'react'
import './App.css'
import {
  PageHeader,
  Button
} from 'react-bootstrap'
import TestResult from './components/TestResult'
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
          <Button>Run Test</Button>
          <TestResult />
        </div>
      </div>
    )
  }
}

export default App
