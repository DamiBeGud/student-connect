import styled from 'styled-components'
import{CameraFill, CameraVideoFill} from '@styled-icons/bootstrap'
import{Document} from '@styled-icons/fluentui-system-filled'
import {SendPlane2} from '@styled-icons/remix-fill'

export const PostWrapper = styled.div`
    width: 40em;
    height: fit-content;
    background-color: ${({theme})=> theme.backgroundColors.conteiner};
    margin-top: 1em;
    border-radius: 1em;
`
export const PostTextarea = styled.textarea`
    border: none;
    outline: none;
    padding: .5em;
    resize: none;
    width: 38em;
    height: auto;
    margin-left: 1em;
    margin-top: 1em;
    border-radius: .5em;
    overflow: visible;
`
export const PostUploadActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0 .5em 1em ;

`
export const PostButtonsWrapper = styled.div`
    display: flex;
    gap: 0.5em;
    align-items: center;

`
export const PostUploadInput = styled.input`

`

export const PostUploadImage = styled(CameraFill)`
    color:${({theme})=> theme.backgroundColors.header};
    width: 1.5em;
    height: 1.5em;
    &:hover{
        cursor: pointer; 
        transform: scale(1.1);
    }
`
export const PostUploadVideo = styled(CameraVideoFill)`
    color:${({theme})=> theme.backgroundColors.header};
    width: 1.5em;
    height: 1.5em;
    &:hover{
        cursor: pointer; 
        transform: scale(1.1);
    }
`
export const PostUploadDocument = styled(Document)`
    color:${({theme})=> theme.backgroundColors.header};
    width: 1.5em;
    height: 1.5em;
    &:hover{
        cursor: pointer; 
        transform: scale(1.1);
    }
`
export const PostPostButton = styled(SendPlane2)`
width: 1em;
height: 1em;


color: ${({theme})=> theme.color.buttonWhite};
&:hover{
    cursor: pointer; 
    
}
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
margin-right: 1em;
width: 2.5em;
height: 1.5em;
/* padding: 0 1.5em; */
background-color: ${({theme})=> theme.backgroundColors.header};
/* background-color: red; */
`
export const StyledUploadImage = styled.img`
    max-width: 20em;
    max-height: 20em;
    object-fit: cover;
    /* margin-left: 5em;
    margin-top: 1em;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center; */
`
export const StyledLoadingImage = styled.div`
    width: 30em;
    height: 15em;
    margin-left: 5em;
    margin-top: 1em;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

`
