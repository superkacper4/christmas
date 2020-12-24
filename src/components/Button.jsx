import styled from 'styled-components'

const Button = styled.button`
    background-color: transparent;
    border: 2px solid #c25151;
    padding: 10px;
    margin: 5px;
    cursor:pointer;

    @media (min-width:1024px){
        &:hover{
            background-color: #b3b3b3;
            transition: background-color .5s;
        }
    }
`;

export default Button;