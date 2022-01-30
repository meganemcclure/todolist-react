import React from 'react'
import Checkbox from './Checkbox'

function MainContent() {
    return (
        <main>
            <h1>TODO:</h1>
            <Checkbox todo="Learn React"/>
            <Checkbox todo="Design Website"/>
            <Checkbox todo="Code Website"/>
        </main>
    )
}
export default MainContent