import styled from "styled-components";

export const InputBox = styled.input`
    height: 50px;
    width: 90%;
    font-weight:bold;
    font-size: 20px;
    padding: 10px;
    border: none;
    background-color:${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    border-radius:10px 10px;
    box-shadow:0px 0px 20px rgba(0,0,0,0.30);
    outline: none;
`