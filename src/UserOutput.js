import React from 'react';
import './UserOutput.css';

function userOutput(props)  {
    return (
        <div class="UserOutput">
            <p>My name is {props.name}</p>
            <p>Hello </p>
        </div>

    )
}

export default userOutput;
