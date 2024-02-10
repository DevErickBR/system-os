import styled from "styled-components";

export const Box = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${props => props.theme.colors.secondary};
    width: 20vw;
    height: 8vh;
    border: none;
    border-radius: 10px 10px;
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
    transition: ease-in-out 100ms;
    margin-top: 30px;

    &:hover{
        transform: translate(10px, -5px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        scale: 1.04;
    }

    > svg {
        font-size: 30px;
    }
`