import React, { Component, useState } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

function SignIn ({googleSignInStart, emailSignInStart}) { 
    
    const [userCredentials, setCredentials] = useState({email:'', password:''})

    const {email, password} = userCredentials
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {email,password} = userCredentials

        emailSignInStart(email, password)
    
    }
    const handleChange=(e)=>{
        const{value, name} =e.target
        setCredentials({...userCredentials, [name]:value})
    }

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span> 
                <form onSubmit={handleSubmit}>
                    <FormInput type='email' name='email' value={email} onChange={handleChange} label="Email" required/>
                    <FormInput type='password' name='password' value={password} onChange={handleChange} label="Password" required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>    
                </form>               
            </div> 
        )
    }


const mapDispatchToProps = (dispatch)=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email, password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null ,mapDispatchToProps)(SignIn)