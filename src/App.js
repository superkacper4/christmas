import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './style/GlobalStyle'

import DataProvider from './context/DataProvider'

import Main from './views/Main.jsx'

const StyledApp = styled.main`
  overflow-x: hidden;
`;

const App = () => {
  return (
    <DataProvider>
      <GlobalStyle />
      <StyledApp>
        <Main />
      </StyledApp>
    </DataProvider>
  );
}

export default App;
