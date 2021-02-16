import React from 'react'
import { auth } from '../../firebase/firebase.utils'
import './custom-button.styles.scss'
import {CustomButtonContainer} from './custom-button.styles'


const CustomButton=({children, isGoogleSignIn, inverted, ...otherProps})=> {


    return (
        <button className= {`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
        </button>  
    )
}

export default CustomButton 
