import React from 'react';

function userInput(props)
{

    const styleInput = {
        'width': '50%',
        'border': '2px solid red',
        'padding': '16px',
        'margin': '16px',
        'background-color': 'yellow'
    };

    const styleDiv = { 'text-align': 'left'}

    return (
        <div style={styleDiv}>
            <input type='text'
                style={styleInput}
                onChange={props.changed}
                value={props.current} />
        </div>
    )
}

export default userInput;
