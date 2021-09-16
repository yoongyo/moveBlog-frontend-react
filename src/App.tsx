import React from 'react';
import Header from './component/layout/header';
import { MainRouter } from './routers/MainRouter';
import {RecoilRoot} from 'recoil';
import { CookiesProvider } from 'react-cookie';


const App = () => {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <MainRouter/>
      </CookiesProvider>
    </RecoilRoot>
  )
}


export default App;
