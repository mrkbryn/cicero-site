import React from 'react'
import {
    Button,
    Glyphicon,
    OverlayTrigger,
    Popover,
} from 'react-bootstrap'

const InfoButton = (props) => {
    let overlay = (
        <Popover title={props.title}>
            {props.helpText}
        </Popover>
    )

    return (
        <OverlayTrigger trigger="click" placement="top" overlay={overlay}>
            <Button><Glyphicon glyph="question-sign" /></Button>
        </OverlayTrigger>
    )
}

export default InfoButton
