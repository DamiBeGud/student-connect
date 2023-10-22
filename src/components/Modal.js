import React from 'react'
import { StyledModalWrapper,
    StyledModal,
     StyledModalHeader,
     StyledModalBody,
      StyledModalHeaderHeading,
      StyledModalHeaderExit,
      StyledModalActionsWrapper,
      StyledModalActions,
      StyledModalActionsButton } from './styled/StyledModal'

function Modal({
    modalName,
    closeModal,
    save,
    body,
    saveURL,
    saveData
 }) {
  return (
    <>
    <StyledModalWrapper>
        <StyledModal>
            <StyledModalHeader>
                <StyledModalHeaderHeading>{modalName}</StyledModalHeaderHeading>
                <StyledModalHeaderExit onClick={()=>closeModal()}>X</StyledModalHeaderExit>
            </StyledModalHeader>
            <StyledModalBody>
                {body}
            </StyledModalBody>
            <StyledModalActionsWrapper>
                <StyledModalActions>
                    <StyledModalActionsButton onClick={()=>closeModal()}>Close</StyledModalActionsButton>
                    <StyledModalActionsButton onClick={()=>save(saveURL, saveData)}>Save</StyledModalActionsButton>
                </StyledModalActions>
            </StyledModalActionsWrapper>
        </StyledModal>
    </StyledModalWrapper>
    </>
  )
}

export default Modal