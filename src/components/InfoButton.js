import React from 'react'
import {
    Button,
    Glyphicon
} from 'react-bootstrap'

const InfoButton = (props) => {
    return (
        // TODO: button should present help info from props when user
        //       hovers over button
        <Button><Glyphicon glyph="question-sign" /></Button>
    )
}

export default InfoButton
