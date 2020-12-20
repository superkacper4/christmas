import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #e6dcbd;
    border: solid 3px #c25151;
    padding: 50px ;
    width: 60vh;
    position: relative;
`;

const StyledGift = styled.div`
    width: 50px;
    height: 50px;
    background-color: #c25151;
    position: absolute;
    bottom: 5px;
    right: 5px;


    &::before{
        content: '';
        top: 50%;
        left:0;
        transform: translateY(-50%);
        position:absolute;
        height: 10px;
        width: 100%;
        background-color: #c2a01a;
    }

    &::after{
        content: '';
        left: 50%;
        top:0;
        transform: translateX(-50%);
        position:absolute;
        height: 100%;
        width: 10px;
        background-color: #c2a01a;
    }
`;

const StyledH2 = styled.h2`
    padding:0;
    margin: 5px;
    font-size: 20px;
    text-align: center;
    color: #c25151;
`;

const StyledH3 = styled.h2`
    padding:0;
    margin: 5px;
    font-size: 15px;
    text-align: left;
    color: #9e6b6b;
`;

const StyledP = styled.p`
    padding:0;
    margin: 5px;
    color: black;
    text-align: justify;

`;


const Viewer = ({ title, intro, main, ending, signature }) => {
    return (
        <StyledDiv id="viewer">
            <StyledH2>{title}</StyledH2>
            <StyledH3>{intro}</StyledH3>
            <StyledP>{main}</StyledP>
            <StyledP>{ending}</StyledP>
            <StyledH3>{signature}</StyledH3>
            <StyledGift />
        </StyledDiv>
    )
}

export default Viewer