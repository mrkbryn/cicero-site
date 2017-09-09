import React from 'react';
import { Row, Col } from 'react-bootstrap';

function InfoLine(props) {
  return (
    <Row className="show-grid">
      <Col md={4} className="inlineheader"><b>{props.name}</b></Col>
      <Col md={8}>{props.value}</Col>
    </Row>
  );
};

export default InfoLine;
