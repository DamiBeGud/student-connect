import styled from 'styled-components'

export const StyledProfileSection = styled.section`
    width: 30%;
    height: calc(100vh - 3em);
    background-color: ${({theme})=>theme.backgroundColors.conteiner};
`
export const StyledProfileWrapper = styled.div`
    display: flex;
    justify-items: center;
    align-content: center;
    padding: 1em;
    gap: .5em;
`
export const StyledProfileImage = styled.img`
    width:6em;
    height: 6em;
    object-fit: cover;
    border-radius: 3em;
`
export const StyledProfileImageWrapper = styled.div`
    width: 6em;
    height: 6em;
    border: 2px solid white;
    border-radius: 3em;
    &:hover{
    opacity: .2; 
    }
`
export const StyledProfileFullName = styled.h1`
    font-family: ${({theme})=>theme.secondaryFont};
    color: ${({theme})=>theme.color.heading};
    font-weight: 600;
    font-size: 1.250rem;
`
export const StyledProfileDescription = styled.p`
max-width: 40ch;
font-size: .6125rem;
color:${({theme})=>theme.color.text};
`
export const StyledProfileEditButtonInline = styled.button`
    border:none;
    background-color: transparent;
    font-size: .75rem;
    padding-left: 1em;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`
export const StyledProfileEditButton = styled.button`
    border:none;
    background-color: transparent;
    /* width: 1em; */
    height: 1em;
    font-size: .75rem;
    padding-left: 1em;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`


