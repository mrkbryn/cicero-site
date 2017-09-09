import React, { Component } from 'react';
import './App.css';
import { PageHeader } from 'react-bootstrap';
import $ from 'jquery';
import TestInstance from './components/TestInstance';
import TestResult from './components/TestResult';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: null,
      isLoading: false
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSuccess(data) {
    // alert(JSON.stringify(data));
    this.setState({response: data, isLoading: false});
  }

  onError(err) {
    alert("err");
    this.setState({isLoading: false});
  }

  onSubmit(data) {
    //alert(JSON.stringify(data));
    this.setState({isLoading: true});
    $.ajax({
      method: 'post',
      url:'/test',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: this.onSuccess,
      error: this.onError
    });
  }

  render() {
    return (
      <div className="App">
        <PageHeader>CiceroDB<small>: Optimizing Voice Output of Relational Data</small></PageHeader>
        <TestInstance onSubmit={this.onSubmit} isLoading={this.state.isLoading}></TestInstance>
        <TestResult value={this.state.response}></TestResult>
      </div>
    );
  }
}

export default App;
