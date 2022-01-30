import React from 'react'
import './Header.css'

function Header(props) {
    return (
        <div className="headerContainer">
            <h1>Hi! I'm {props.name}!</h1>
            <h2>Good {getTimeOfDay()}!</h2>
        </div>
    )
}

function getTimeOfDay() {
    const hours = new Date().getHours()

    if (hours < 12) return "morning"
    if (hours >= 12 && hours < 17) return "afternoon"
    if (hours >= 17 && hours < 20) return "evening"
    return "night"
}

export default Header