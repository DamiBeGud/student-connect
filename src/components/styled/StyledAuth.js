import styled from 'styled-components'

export const StyledAuthWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`
export const StyledAuthForm = styled.div`
    display: grid;
    width: 25em;
    justify-content: center;
    justify-items: center;
    gap: 0.5em;
    background-color: ${({theme})=> theme.backgroundColors.conteiner};
    padding: 4em 2em;
    border-radius: 1em;
    /* border: 1px solid ${({theme})=> theme.color.buttonDark} */
    box-shadow: 0 1px 10px ${({theme})=> theme.backgroundColors.span};
`
export const StyledAuthInput = styled.input`
    padding: .25em .5em;
    border:none;
    border-radius: .75em;
    outline: none;
    width: 15em; 
`
export const StyledAuthButton = styled.button`
    font-family: ${({theme})=> theme.secondaryFont};
    background-color: ${({theme})=> theme.backgroundColors.button};
    color: ${({theme})=>theme.color.buttonWhite};
    padding: .5em 1.5em;
    border: none;
    border-radius: 1em;
    max-width: 10em;
    margin-top:.5em;
    cursor: pointer;
    &:hover{
        opacity: .9;
        transform: scale(1.1);
    }
`
export const StyledSwitchButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({theme})=> theme.color.buttonDark};
    cursor: pointer;
`
export const StyledAuthLogo = styled.h1`
    font-family: 'Pacifico', cursive;
    font-weight: 400; 
    font-size: 3rem;
    color: ${({theme})=>theme.color.buttonDark};
    margin-bottom: .5em;
`