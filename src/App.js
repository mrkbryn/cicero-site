import React, { Component } from 'react';
import './App.css';
import { PageHeader } from 'react-bootstrap';
import TestResult from './components/TestResult';
import AlgorithmConfigPanel from './containers/AlgorithmConfigPanel';
import DataSelectionContainer from './containers/DataSelectionContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PageHeader>CiceroDB <small>Optimizing Voice Output of Relational Data</small></PageHeader>
          <AlgorithmConfigPanel />
          <DataSelectionContainer />
          <h2>Test Results</h2>
          <TestResult />
        </div>
      </div>
    );
  }
}

export default App;
