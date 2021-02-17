
import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'

const  WithSpinner = WrappedComponent =>({isLoading, ...otherProps})=> {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):(
        <WrappedComponent {...otherProps}/>
    )
}

// CAN BE WRITTEN LIE THIS
// const WithSpinner = function (WrappedComponent){
//     const spinner = function({isLoading, ...otherProps}){
//         return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer/>
//             </SpinnerOverlay>
//         ):(
//             <WrappedComponent {...otherProps}/>
//         )
//     }
//     return Spinner
// }

export default WithSpinner
