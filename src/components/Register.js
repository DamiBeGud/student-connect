import React from 'react'
import { StyledAuthLogo, StyledAuthButton, StyledAuthForm, StyledAuthInput, StyledSwitchButton } from './styled/StyledAuth'
import { useRef } from 'react'
import useAuth from '../custom-hooks/useAuth'

function Register({swithcAuth}) {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const{handleSubmit} = useAuth('http://localhost:8080/register', swithcAuth)
  
  return (
  <StyledAuthForm>
    <StyledAuthLogo>Student Connect</StyledAuthLogo>
    <StyledAuthInput type='name' placeholder='First name'  ref={firstNameRef}/>
    <StyledAuthInput type='name' placeholder='Last name' ref={lastNameRef}/>
    <StyledAuthInput type='email' placeholder='email' ref={emailRef}/>
    <StyledAuthInput type='password' placeholder='password' ref={passwordRef}/>
    <StyledAuthButton
    onClick={()=>handleSubmit(
      {
        firstname: firstNameRef.current?.value,
        lastname: lastNameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      }
    )}>
      Register
    </StyledAuthButton>
    <StyledSwitchButton type='button' onClick={(event)=>{event.preventDefault();swithcAuth()}}>Already have an account <br />Log in</StyledSwitchButton>
</StyledAuthForm>
  )
}

export default Register


