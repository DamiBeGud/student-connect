import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {StyledAuthWrapper} from './components/styled/StyledAuth'
import {StyledLogo} from './components/styled/StyledLogo'

import { useState } from 'react'

function Auth({setAuth}) {
    const [authPage, setAuthPage] = useState(true)
    function swithcAuth(){
        setAuthPage(prevAuth => !prevAuth)
    }
  return (
    <>
        <StyledAuthWrapper>
        
        {authPage ? <Login swithcAuth={swithcAuth} setAuth={setAuth}/> : <Register swithcAuth={swithcAuth} />}
        </StyledAuthWrapper>
    </>
  )
}

export default Auth