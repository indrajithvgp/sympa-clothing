import styled, {css} from 'styled-components'

import {Link} from 'react-router-dom'

const OptionsContainerStyles = css`
padding: 10px 15px;
cursor: pointer;
`

export const HeaderContainer = styled.div`

height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
/* position: fixed;
left:0; */
`

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`

export const TextContainer = styled(Link)`
padding:25px 0;
margin-top:10px;
margin-right:270px;
font-weight: bold;
font-size:20px;
color:black;
font-family:'Julius Sans One';

`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`


export const OptionLink = styled(Link)`
    ${OptionsContainerStyles}
`
export const OptionDiv = styled.div`
    ${OptionsContainerStyles}
`
