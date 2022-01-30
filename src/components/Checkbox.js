import React from 'react'

function Checkbox(params) {
    return (
        <div>
            <input type="checkbox" id="todobox" name="todobox" value="TODO" />
            <label for="todobox">{params.todo}</label>
            <br />
        </div>
    )
}

export default Checkbox