import React from 'react'
import { StyledHeader, StyledLink, StyledNav, StyledNavList, StyledSearchBar ,StyledNavLine } from './styled/StyledHeader'
import {StyledLogo} from './styled/StyledLogo'
function Header() {
  return (
   <StyledHeader>
        <StyledLogo>Student Connect</StyledLogo>
        <StyledSearchBar></StyledSearchBar>
        <StyledNav>
            <StyledNavList>
                <StyledNavLine>
                    <StyledLink to="/">Board</StyledLink>
                </StyledNavLine>
                <StyledNavLine>
                    <StyledLink to="/">My Board</StyledLink>
                </StyledNavLine>
            </StyledNavList>
        </StyledNav>
   </StyledHeader>
  )
}

export default Header