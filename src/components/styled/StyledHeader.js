import styled from 'styled-components'
import{Link} from 'react-router-dom'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme})=> theme.backgroundColors.header};
    width: 100%;
    height: 3em;
    padding: 1em;
`

export const StyledNav = styled.nav`

`
export const StyledNavList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap:.5em;
`
export const StyledNavLine = styled.li`

`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color:${({theme})=> theme.color.nav};
    font-family: ${({theme})=>theme.secondaryFont};
`

export const StyledSearchBar = styled.input.attrs({ type: 'search'})`
    background-color: ${({theme})=> theme.backgroundColors.body};
    border-radius: 0.5em;
    border: none;
    padding: 0.25em .5em;
    &:focus{
        outline:none;

    }
`
