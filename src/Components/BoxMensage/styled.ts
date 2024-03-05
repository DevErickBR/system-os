import styled from "styled-components";

export const ContainerMensage = styled.div`
    width:90%;
    height: 50%;
    padding: 20px;
    display:flex;
    justify-content:start;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-size:20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0, 0.5)
`;