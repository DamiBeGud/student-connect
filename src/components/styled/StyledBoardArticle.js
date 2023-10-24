import styled from 'styled-components'
import {Comment} from '@styled-icons/boxicons-solid'
import {Like} from '@styled-icons/foundation'
import {SendPlane2} from '@styled-icons/remix-fill'

export const StyledBoardArticle = styled.article`
    width: 40em;
    border-radius: 1em;
    /* padding-bottom: 2em; */
    outline: 2px solid ${({theme})=> theme.backgroundColors.header};
    box-shadow: 0 1px 5px ${({theme})=> theme.backgroundColors.span};
`

export const StyledBoardArticleHeader = styled.div`
    display: flex;
    width: 100%;
    height: 3em;
    border-radius: 1em;

    `
export const StyledBoardArticleHeaderProfile = styled.div`
    display: flex;
    width: 100%;
    padding: .5em 1em;
    background-color: ${({theme})=> theme.backgroundColors.header};
    border-radius: 1em 1em 0 0 ;
    align-content: center;
    align-items: center;
    gap: .5em;
    &:hover{
        cursor: pointer;
    }
`
export const StyledBoardArticleHeaderProfileImage = styled.img`
    width: 2em;
    height: 2em;
    object-fit: cover;
    border-radius: 1em;
    border: 2px solid ${({theme})=> theme.backgroundColors.body};
`
export const StyledBoardArticleHeaderProfileName = styled.h2`
    font-size: 1.25rem;
    color:  ${({theme})=> theme.color.buttonWhite};
    font-family: ${({theme})=> theme.secondaryFont};
`
export const StyledBoardArticleBody = styled.div`
padding: .5em 1em;
display: grid;
justify-items: center;
gap: 1.5em;
`
export const StyledArticleText = styled.p`
    color: ${({theme})=> theme.color.text};
    font-size: .875rem;

`
export const StyledArticleImage = styled.img`
    max-width: 30em;
    max-height: 40em;
    object-fit: cover;

`
export const StyledBoardArticleFooter = styled.div`
width: 100%;
/* height: 2.5em; */
padding: .25em;
border-top: 2px solid ${({theme})=> theme.backgroundColors.header};

`
export const StyledArticleFooterActions = styled.div`
    display: flex;
    gap: 0.5em;
    justify-content: center;
`

export const StyledArticleFooterActionButton = styled.button`
    display: flex;
    align-items:center;
    align-content: center;
    background-color: transparent;
    border: none;
    &:hover{
        cursor: pointer;
    }
`

export const StyledLikeIcon = styled(Like)`
    width: 1.6em;
    /* height: 1.6em; */
    color: ${({theme})=> theme.backgroundColors.header};
`
export const StyledCommentIcon = styled(Comment)`
    width: 1.25em;
    /* height: 1.25em; */
    color: ${({theme})=> theme.backgroundColors.header};

`

export const StyledArticleCommentSection = styled.div`
    width: 100%;
    padding: 1em;

`
export const StyledCommentWrapper = styled.div`
    display: flex;
    background-color: ${({theme})=> theme.backgroundColors.conteiner};
    padding: 0.25em;
    border-radius: .25em;
    gap: 1em;
`
export const StyledCommentProfileImage = styled.img`
    width: 2em;
    height: 2em;
    border-radius: 1em;
    object-fit: cover;
`
export const StyledComment = styled.div`
    display: grid;
`
export const StyledCommentName = styled.h2`
    font-family: ${({theme})=> theme.secondaryFont};
    color: ${({theme})=> theme.color.heading};
`
export const StyledCommentText = styled.p`
    color: ${({theme})=> theme.color.text};
    font-size: .75rem;
`
export const StyledNewCommentWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 0.5em;
    margin-top: 1em;

`
export const StyledNewCommentInput = styled.input`
    width: 90%;
    outline: none;
    padding: .25em;
    outline:none;
    border:none;
    border-radius: .5em;
    &:focus{
        outline: 1px solid ${({theme})=> theme.backgroundColors.header};
    }
`

export const StyledCommentButton = styled(SendPlane2)`
width: 1.75em;
height: 1.75em;


color: ${({theme})=> theme.color.buttonDark};
&:hover{
    cursor: pointer; 
    
}
`


