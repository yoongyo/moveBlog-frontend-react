import React, {useState} from 'react';
import Header from './component/layout/header';
import { MainRouter } from './routers/MainRouter';
import {RecoilRoot, useRecoilState} from 'recoil';
import { CookiesProvider } from 'react-cookie';
import styled, {ThemeProvider } from 'styled-components';
import { dark, light } from './component/theme/theme';
import { IsDarkModeState } from './state/recoil';

const App = () => {
  const [isdarkMode, setIsdarkMode] = useRecoilState<boolean>(IsDarkModeState);
  const theme = isdarkMode ? light : dark;

  return (
    <ThemeProvider theme={theme}>
        <CookiesProvider>
          <S.Main>
            <MainRouter/>
          </S.Main>
        </CookiesProvider>
    </ThemeProvider>
  )
}


export default App;


const S:any = {};
S.Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgColor};
  color: ${props => props.theme.colors.text};
`;
