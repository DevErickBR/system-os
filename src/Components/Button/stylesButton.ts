import styled from "styled-components";

export const Box = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: ${props => props.theme.colors.secondary};
    width: 15vw;
    height: 8vh;
    border: none;
    border-radius: 10px 10px;
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
    transition: ease-in-out 100ms;

    &:hover{
        transform: translateX(10px)
    }

    > svg {
        font-size: 30px;
    }
`