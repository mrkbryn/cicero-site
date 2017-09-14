import React from 'react'
import { Panel, Grid } from 'react-bootstrap'
import InfoLine from './InfoLine'
import Scopes from './Scopes'

function TestResult(props){
  var value = props.value || {}
  var result = value.result || {}
  var plan = result.plan || {}
  return (
    <Panel header="Test Result" key={value.id}>
      <Grid>
        <InfoLine name="Id:" value={value.id}/>
        <InfoLine name="Execution time:" value={result.executionTime}/>
        <InfoLine name="Speech cost:" value={plan.speechCost}/>
        <InfoLine name="Long form:" value={plan.longForm}/>
      </Grid>
      <br/>
      <Scopes value={plan.scopes}/>
    </Panel>
  )
}

export default TestResult
