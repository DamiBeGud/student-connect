import React, { useRef } from 'react'
import {StyledEditProfileBody,StyledEditProfileInlineWrapper,StyledEditProfileInput, StyledEditProfileTextarea,StyledEditProfileAddButton} from './styled/StyledEditProfileBody'
import useStore from "../zustand/store";



function EditProfileModal({
    state,
    setState
}) {
 
    const {
    description ,
    cityFrom,
    cityBorn,
    countryBorn,
    dateOfBirth,
    universityName,
    universityMajor
    } = state
 
    const sport = useRef()
    const movie = useRef()
    const music = useRef()


  return (
    <>
    <StyledEditProfileBody>
    Descriptio: <StyledEditProfileTextarea value={description} onChange={(e)=>{setState((prev)=> ({...prev, description:e.target.value}))}} name="description"/>
    <StyledEditProfileInlineWrapper>
        From: <StyledEditProfileInput value={cityFrom} onChange={(e)=>{setState((prev)=> ({...prev, cityFrom:e.target.value}))}}/>
    </StyledEditProfileInlineWrapper>
        <StyledEditProfileInlineWrapper>
            Born in: <StyledEditProfileInput placeholder='city' value={cityBorn} onChange={(e)=>{setState((prev)=> ({...prev, cityBorn:e.target.value}))}}/><StyledEditProfileInput placeholder='country' value={countryBorn} onChange={(e)=>{setState((prev)=> ({...prev, countryBorn:e.target.value}))}}/>
        </StyledEditProfileInlineWrapper>
        <StyledEditProfileInlineWrapper>
            Date of Birth: <StyledEditProfileInput type='date' value={dateOfBirth} onChange={(e)=>{setState((prev)=> ({...prev, dateOfBirth:e.target.value}))}}/>
        </StyledEditProfileInlineWrapper>
        <StyledEditProfileInlineWrapper>
            Studys:<StyledEditProfileInput placeholder='Major' value={universityMajor} onChange={(e)=>{setState((prev)=> ({...prev, universityMajor:e.target.value}))}}/><StyledEditProfileInput placeholder='Univerity' value={universityName} onChange={(e)=>{setState((prev)=> ({...prev, universityName:e.target.value}))}}/>
        </StyledEditProfileInlineWrapper>
        <br/>
        <StyledEditProfileInlineWrapper>
            Sports: <StyledEditProfileInput ref={sport}/> <StyledEditProfileAddButton>+</StyledEditProfileAddButton>
        </StyledEditProfileInlineWrapper>
        <StyledEditProfileInlineWrapper>
            Movies: <StyledEditProfileInput ref={movie}/> <StyledEditProfileAddButton>+</StyledEditProfileAddButton>
        </StyledEditProfileInlineWrapper>
        <StyledEditProfileInlineWrapper>
            Music: <StyledEditProfileInput ref={music}/> <StyledEditProfileAddButton>+</StyledEditProfileAddButton>
        </StyledEditProfileInlineWrapper>
    </StyledEditProfileBody>
    </>
  )
}

export default EditProfileModal