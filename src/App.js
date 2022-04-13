import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { AudioProvider } from "./AudioContext"
import { ApiDataProvider } from "./ApiDataContext"

import { home, settings, about, score, main } from "./routes"
import { GlobalStyle } from "./GlobalStyle"
import { colors } from "./colors"

import HomePage from "./pages/home/HomePage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/GamePage";
import ScorePage from "./pages/ScorePage"

function App() { 
  
  const [theme, setTheme] = useState(
    colors[localStorage.getItem("theme")] || colors.light
  )
  
  function toggleTheme() {
    setTheme(prevTheme => prevTheme === colors.light ? colors.dark : colors.light)
  }
  
  useEffect(() => {
    localStorage.setItem("theme", theme.type)
  }, [theme]) 

  return (
    <>  
        <AudioProvider>
          <GlobalStyle theme={theme.type}/>
          <img src="images/blob-top.svg" alt="" className="blob-top" />
          <img src="images/blob-bottom.svg" alt="" className="blob-bottom"/>
            <ThemeProvider theme={theme}>
              <ApiDataProvider>
                <Routes>

                  <Route path={home} element={
                    <HomePage/>
                  } />

                  <Route path={settings} element={
                    <SettingsPage 
                    toggleTheme={toggleTheme} 
                    />
                  } />

                  <Route path={about} element={
                    <AboutPage/>
                  } />

                  <Route path={score} element={
                    <ScorePage/>
                  }/>

                  <Route path={main} element={
                    <MainPage 
                      theme={theme.type}/>
                  } />
                </Routes>  
              </ApiDataProvider>
            </ThemeProvider>
          </AudioProvider>
    </>
  )
}

export default App;
