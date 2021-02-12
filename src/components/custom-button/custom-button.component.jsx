import React from 'react'
import { auth } from '../../firebase/firebase.utils'
import './custom-button.styles.scss'

const CustomButton=({ children, isGoogleSignIn, inverted, ...otherProps })=> {


    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}{...otherProps}>
        {children}
        </button>  
    )
}

export default CustomButton 
