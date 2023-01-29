import React from "react";
import freeCodeCampLogo from '../images/freecodecamp-logo.png'

function LogoFreeCodeCamp() {
    return (
        <div className='freecodecamp-logo-container'>
            <img
                src={freeCodeCampLogo}
                className='freecodecamp-logo'
                alt='Logo from freeCodecamp' />
        </div>
    )
}

export default LogoFreeCodeCamp