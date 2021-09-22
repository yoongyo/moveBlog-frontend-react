import React, {useState} from 'react';
import Header from './component/layout/header';
import { MainRouter } from './routers/MainRouter';
import {RecoilRoot, useRecoilState} from 'recoil';
import { CookiesProvider } from 'react-cookie';
import styled, {ThemeProvider } from 'styled-components';
import { dark, DarkModeDiv, light } from '../src/theme/theme';
import { IsDarkModeState } from './state/recoil';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(IsDarkModeState);
  const theme = isDarkMode ? dark : light;

  return (
    <ThemeProvider theme={theme}>
        <CookiesProvider>
            <DarkModeDiv>
              <MainRouter/>
            </DarkModeDiv>
        </CookiesProvider>
    </ThemeProvider>
  )
}


export default App;



