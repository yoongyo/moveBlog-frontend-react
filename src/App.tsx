import React from 'react';
import Header from './component/layout/header';
import { MainRouter } from './routers/MainRouter';
import {RecoilRoot} from 'recoil';


const App = () => {
  return (
    <RecoilRoot>
      <MainRouter/>
    </RecoilRoot>
  )
}


export default App;
