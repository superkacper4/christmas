import React, { useState, useContext } from 'react';
import styled from 'styled-components'

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
        // console.log(data, dataContext.contextData)
    }

    return (
        <StyledCreator>
            <input type="text" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Zwrot do adresta" />
            <input type="text" value={data.intro} onChange={(e) => setData({ ...data, intro: e.target.value })} placeholder="Krótki wstęp" />
            <input type="text" value={data.main} onChange={(e) => setData({ ...data, main: e.target.value })} placeholder="No i najważniejsze co yś chciał dostać" />
            <input type="text" value={data.ending} onChange={(e) => setData({ ...data, ending: e.target.value })} placeholder="Miłe zakończenie" />
            <input type="text" value={data.signature} onChange={(e) => setData({ ...data, signature: e.target.value })} placeholder="Podpis" />
            <button type="submit" onClick={handleSubmit}>Zatwierdź</button>
        </StyledCreator>
    )
}

export default Creator