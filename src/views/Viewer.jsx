import React, { useContext } from 'react';
import styled from 'styled-components'

import PDF from './PDF'
import DataContext from '../context/DataContext'

const StyledCreator = styled.form`
    width: 30vw;
    padding: 10px;
    margin: 0;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Viewer = () => {
    const dataContext = useContext(DataContext)
    return (
        <StyledCreator>
            <h2>{dataContext.contextData.title}</h2>
            <h4>{dataContext.contextData.intro}</h4>
            <p>{dataContext.contextData.main}</p>
            <p>{dataContext.contextData.ending}</p>
            <h3>{dataContext.contextData.signature}</h3>
            <PDF />
        </StyledCreator>
    )
}

export default Viewer