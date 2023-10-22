import React from 'react'
import {StyledAuthLogo, StyledAuthButton, StyledAuthForm, StyledAuthInput, StyledSwitchButton } from './styled/StyledAuth'
import { useRef } from 'react'
import useAuth from '../custom-hooks/useAuth'


function Login({swithcAuth, setAuth}) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const{handleSubmit} = useAuth('http://localhost:8080/login')
  return (
    <>
        <StyledAuthForm>
            <StyledAuthLogo>Student Connect</StyledAuthLogo>
            <StyledAuthInput type='email' placeholder='email' ref={emailRef}/>
            <StyledAuthInput type='password' placeholder='password' ref={passwordRef}/>
            <StyledAuthButton onClick={()=>handleSubmit(
              {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
              },
              setAuth
            )}>
            Log in
            </StyledAuthButton>
            <StyledSwitchButton onClick={()=>swithcAuth()}>Dont Have Account? <br />Register</StyledSwitchButton>
        </StyledAuthForm>
    </>
  )
}

export default Login