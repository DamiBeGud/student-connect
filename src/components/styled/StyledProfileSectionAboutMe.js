import styled from "styled-components";
export const StyledAboutMeWrapper = styled.div`
padding: 1em;

`

export const StyledAboutMeHeading = styled.h2`
    font-family: ${({theme})=> theme.secondaryFont};
    font-size: .75rem;
    font-weight: 600;
    color:${({theme})=>theme.color.heading};
    border-bottom: 1px solid rgb(87, 115, 153, .5);
    opacity: .9;
    margin-bottom: .75em;

`
export const StyledAboutMeParagraph = styled.p`
    font-size: .625rem;
    color:${({theme})=> theme.color.text};
    overflow-anchor: auto;
`
export const StyledAboutMeSpan = styled.span`
padding: 0 .5em;
font-size: .625rem;
margin-left: .25em;
margin-bottom: .25em;
/* background-color: ${({theme})=> theme.backgroundColors.span}; */
color: ${({theme})=> theme.color.text};
`
export const StyledAboutMeSpanWrapper = styled.span`
display: flex;
flex-wrap: wrap;
`
export const StyledAboutMeFriendsWrapper=styled.div`
display: grid;
justify-content: center;
`
export const StyledAboutMeFriends = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`
export const StyledAboutMeFriendWrapper = styled.div`
    width: 4em;
    height: 4em;
    margin: 1em 1em 1em 1em;
    &:hover{
        opacity: .8;
    }
    `
export const StyledAboutMeFriendImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    margin-bottom: .25em;
    /* border: 1px solid white; */
    border-radius: 2em;
    box-shadow: 0 1px 5px ${({theme})=> theme.backgroundColors.span};
    `
export const StyledAboutMeFriendName = styled.h2`
    font-family: ${({theme})=> theme.secondaryFont};
    font-size: .75rem;
    font-weight: 600;
    color:${({theme})=>theme.color.heading};
    
`
export const StyledSeeMoreButton = styled.button`
font-family: ${({theme})=> theme.secondaryFont};
font-weight: 500;
background-color: transparent;
border:none;
color: ${({theme})=> theme.color.buttonDark};
cursor: pointer;
margin-top: 1em;
`

