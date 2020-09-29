import React from 'react';
import './App.css';
import CharacterCounterContainer from './Components/CharacterCounterContainer.jsx';
import { RecoilRoot } from 'recoil';
import Navigation from './Navigation.jsx';




function useRecoilBridgeAcrossReactRoots_UNSTABLE():
// React.AbstractComponent<{children: React.Node}>;



function App() {

  return (
    <RecoilBridge>
      <RecoilRoot>
          <CharacterCounterContainer />
          <RecoilRoot>
            <Navigation />
          </RecoilRoot>
      </RecoilRoot>
    </RecoilBridge>
  );
}

export default App;
