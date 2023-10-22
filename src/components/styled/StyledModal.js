import styled from 'styled-components'

export const StyledModalWrapper = styled.div`
position: absolute;
display: grid;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
top:0;
background-color: rgba(0, 0, 0, 0.7);

`
export const StyledModal = styled.div`
position: relative;
width: 40em;
height: auto;
border-radius: .5em;
background-color: ${({theme})=> theme.backgroundColors.conteiner};
outline: ${({theme})=> theme.backgroundColors.header} 2px solid;
`

export const StyledModalHeader = styled.div`
display: flex;
padding: 1em;
justify-content: space-between;
background-color: ${({theme})=> theme.backgroundColors.header};
border-radius: .5em .5em 0 0;
`
export const StyledModalHeaderHeading = styled.h2`

`
export const StyledModalHeaderExit = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
`

export const StyledModalBody = styled.div`

`
export const StyledModalActionsWrapper = styled.div`
/* position: absolute;
bottom: 0; */
width: 100%;

`
export const StyledModalActions = styled.div`
display: flex;
padding: 1em;
justify-content: space-between;
`
export const StyledModalActionsButton = styled.button`
padding: .25em .5em;
background-color: ${({theme})=> theme.backgroundColors.header};
border:none;
cursor:pointer;
`



