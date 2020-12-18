import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Creator from './Creator'
import PDF from './PDF'
import H1 from '../components/H1'

const StyledMain = styled.div`
    height:100vh;
    width:100vw;
    background-color: #4a769b;
    overflow:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const StyledFlakesWrapper = styled.div`
    position: fixed; 
    top: 0;
    left:0;
    background-color: red;
`;

const StyledFlake = styled.div`
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius:50%;
    position: absolute;
    top: ${({ valY }) => valY + 'px'};
    left: ${({ valX }) => valX + 'vw'};
    animation: snowing 10s linear infinite both  ${({ valY }) => -valY / 10 + 's'};

    @keyframes snowing{
        0%{
            transform: translateY(${({ valY }) => valY + 'px'}) translateX(-10px);
            opacity: 1;
        }

        50%{
            transform: translateY(25vh) translateX(10px);
            opacity: 1;
        }

        100%{
            transform: translateY(50vh) translateX(0);
            opacity: 0;
        }
    };

`;

const Main = () => {
    const [flakesArray, setFlakesArray] = useState([]);

    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            let j = Math.floor(Math.random() * (100 - 5 + 1)) + 5;
            setFlakesArray(flakesArray => [...flakesArray, { Ypos: -j, Xpos: i + 1 }]);
        }
    }, [])

    return (
        <StyledMain>
            <H1>List do Świętego Mikołaja</H1>
            <StyledFlakesWrapper>
                {flakesArray.map((flake) => <StyledFlake valX={flake.Xpos} valY={flake.Ypos} />)}
            </StyledFlakesWrapper>
            <Creator />
            <PDF />
        </StyledMain>
    )
}

export default Main