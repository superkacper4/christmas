import React from 'react'
import styled from 'styled-components'

import DataProvider from './context/DataProvider'

import Main from './views/Main.jsx'

const StyledApp = styled.main`
  overflow-x: hidden;
`;

const App = () => {
  return (
    <DataProvider>
      <StyledApp>
        <Main />
      </StyledApp>
    </DataProvider>
  );
}

export default App;
