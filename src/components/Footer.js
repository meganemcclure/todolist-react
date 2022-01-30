import React from 'react'
import profilepic from '../images/profilepic.jpg'
import githubLogo from '../images/githubLogo.png'
import instagramLogo from '../images/instagramLogo.png'
import linkedinLogo from '../images/linkedinLogo.png'

function Footer() {
    const footerContainerStyle = {
        padding: "50px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: "30px",

        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "2.5rem", 
    }

    const profilePicStyle = {
        height: "100px",
        width: "100px",
        borderRadius: "50%"
    }

    return (
        <footer style={footerContainerStyle} >
            <img src={profilepic} alt="profile picture" style={profilePicStyle} />
            <Icon link="https://www.instagram.com/ivyloulou.knits/" img={instagramLogo} altText="instagram logo"/>
            <Icon link="https://www.linkedin.com/in/megan-mcclure-2216391a3?originalSubdomain=ca" img={linkedinLogo} altText="linkedin logo"/>
            <Icon link="https://github.com/meganemcclure" img={githubLogo} altText="githubLogo"/>
        </footer>
    )
}

function Icon(props) {
    const iconStyle ={
        height: "30px",
        width: "30px"
    }

    return (
        <p>
            <a href={props.link}>
                <img src={props.img} alt={props.altText} style={iconStyle}/>
            </a>
        </p>
    )
}

export default Footer