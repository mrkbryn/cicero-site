import React from 'react'
import { Label } from 'react-bootstrap'

function Tuples(props) {
  if (props.value === null || Object.keys(props.value).length === 0)
    return (<Label>Empty</Label>)
  else
    return (
      <div>
      {
        Object.entries(props.value).map((tuple) => {
          return (<Label className="tuple" key={JSON.stringify(tuple)}>{tuple[0]}: {tuple[1]}</Label>)
        })
      }
      </div>
    )
}

export default Tuples
