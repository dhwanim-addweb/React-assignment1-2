import React from 'react';

function validation(props)
 {
   const valid = {
     'background-color': 'green',
     'color': '#eee',
     'display': 'inline',
     'font-size':'20px',
     'width': '30px',
     'border':'1px solid #202020',
     'text-align': 'center'
   };
   const valid1 = {
     'background-color': 'red',
     'color': '#eee',
     'display': 'inline',
    'font-size':'20px',
     'width': '30px',
     'border':'1px solid #202020',
     'text-align': 'center'
   };
  return (
    <div>
      {props.textLength >= 5 ? <p style={valid}>Text long enough!</p>
      : <p style={valid1}>Text Too short!</p>}
    </div>
  )
}

export default validation
