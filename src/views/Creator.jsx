import React, { useState, useContext } from 'react';
import styled from 'styled-components'

import Button from '../components/Button'

import DataContext from '../context/DataContext'

const StyledCreator = styled.form`
    width: 90vw;
    padding: 10px;
    margin: 10px;
    background-color: #e6dcbd;
    border: solid 3px #c25151;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    @media (min-width:768px){
        width: 30vw;
    }
`;

const StyledInput = styled.input`
    width: 80%;
    height: 20px;
    margin: 4px;
`;

const StyledTextArea = styled.textarea`
    width: 80%;
    height: 80px;
    margin: 4px;
`;

const Creator = () => {
    const [data, setData] = useState({
        title: '',
        intro: '',
        main: '',
        ending: '',
        signature: '',
    })

    const dataContext = useContext(DataContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        dataContext.setContextData(data)
        console.log(data, dataContext.contextData)
    }

    return (
        <StyledCreator>
            <StyledInput type="text" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Zwrot do adresta" />
            <StyledTextArea type="text" value={data.intro} onChange={(e) => setData({ ...data, intro: e.target.value })} placeholder="Krótki wstęp" />
            <StyledTextArea type="text" value={data.main} onChange={(e) => setData({ ...data, main: e.target.value })} placeholder="No i najważniejsze co yś chciał dostać" />
            <StyledTextArea type="text" value={data.ending} onChange={(e) => setData({ ...data, ending: e.target.value })} placeholder="Miłe zakończenie" />
            <StyledInput type="text" value={data.signature} onChange={(e) => setData({ ...data, signature: e.target.value })} placeholder="Podpis" />
            <Button type="submit" onClick={handleSubmit}>Zatwierdź</Button>
        </StyledCreator>
    )
}

export default Creator