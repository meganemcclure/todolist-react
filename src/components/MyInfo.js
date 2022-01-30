import React from 'react'

/**
 * Exercise 2
 */
function MyInfo() {
  const titleStyle = {
    backgroundColor: "DodgerBlue",
    color: "white",
    padding: "10px",
    fontFamily: "Arial"
  }

  return (
    <div>
      <h1 style={titleStyle}>Hi I'm Megan!</h1>
      <p>I'm a software developer with a passion for knitting.</p>
      <h2>My top 3 vacation spots are:</h2>
      <ol>
        <li>Scotland</li>
        <li>Japan</li>
        <li>Denmark (for the yarn ofc!)</li>
      </ol>
    </div>
  )
}

/**
 * Personal Investigation: test import/export statements
 */
export function MoreInfo() {
    return (
        <div>
            <h2>This is more info about me!</h2>
            <p>My family has 2 dogs! Norm an Leroy!</p>
        </div>
    )
}

export default MyInfo