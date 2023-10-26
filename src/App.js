import React from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styled/GlobalStyles';
import Auth from './Auth';
import { useState } from 'react';
import Application from './Application';


function App() {
  const [auth, setAuth] = useState(false)
  const theme = {
    backgroundColors:{
      header: "#577399",
      body: "#F7F7FF",
      conteiner: "#e4eef6",
      button: "#577399",
      span: "#577399",
    },
    color:{
      heading:"#20262d",
      text:"#495867",
      nav:"#F7F7FF",
      buttonWhite:"#F7F7FF",
      buttonDark:"#577399",
      span: "#F7F7FF",
    },
    secondaryFont:"'Montserrat', sans-serif",

  }
  return (
    <>
    
    <ThemeProvider theme= {theme}>
    <GlobalStyles />
    {
      auth != true ? 
      <Auth setAuth={setAuth}/>:
      <Application />
    }
    </ThemeProvider>

    </>
  );
}

export default App;
