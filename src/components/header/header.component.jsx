import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils.js'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import {HeaderContainer, OptionsContainer, LogoContainer, OptionDiv, OptionLink} from './header.styles'

import CartIcon from '../cart-icon/cart-icon.component'

import CartDropdown from '../cart-dropdown/cart-dropwdown.component'

const Header=({currentUser, hidden})=> (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
            SHOP
            </OptionLink>
            <OptionLink to="/shop">
            CONTACT
            </OptionLink>
            {
                currentUser?<OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                :<OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null: <CartDropdown/>
        }
        
    </HeaderContainer>
)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)
