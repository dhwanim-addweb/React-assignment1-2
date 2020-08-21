import React from 'react'


function char(props)
 {
   const char = {
     'background-color': 'grey',
     'color': '#eee',
     'display': 'inline-block',
     'padding':'10px',
     'margin': '10px',
     'width': '10px',
     'border':'1px solid #202020',
     'text-align': 'center',
     'font-size':'25px'
   };

  return (
    <div style={char}  onClick={props.handleClick}>
      {props.character}
    </div>
  )
}

export default char
