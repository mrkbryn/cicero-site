import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Tuples from './Tuples';

function Scopes(props) {
  return (<Grid>
    {
      (props.value || []).map((ContextTuples) => {
        var context = {};
        var headers = Object.keys((ContextTuples.context || {}).valueDomains || {});
        headers.forEach((header) => {
          context[header] = context[header] || new Set();
          ContextTuples.tuples.map((row) => {
            Object.entries(row).map((tuple) => {
              if (tuple[0] == header) context[header].add(tuple[1]);
            });
          });
          context[header] = context[header] = Array.from(context[header]).join(', ');
        });
        var rows = ContextTuples.tuples.map((row) => {
          var filteredRow = {};
          Object.entries(row).map((tuple) => {
            if (headers.indexOf(tuple[0]) == -1)
              filteredRow[tuple[0]] = tuple[1];
          });
          return filteredRow;
        });
        return (
          <Row className="show-grid" key={JSON.stringify(ContextTuples)}>
            <Col md={4} className="inlineheader">
              <Tuples value={context} key={JSON.stringify(context)}/>
            </Col>
            <Col md={8}>{
              rows.map((row) => {
                return (<Tuples value={row} key={JSON.stringify(row)}/>);
              })
            }</Col>
          </Row>
        );
      })
    }
    </Grid>);
};

export default Scopes;
