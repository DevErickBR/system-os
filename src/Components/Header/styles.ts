import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-items:center;
    gap:50px;
    padding: 0 20px;
    height: 100px;
    width: 100vw;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-weight:bold;
    font-size: 30px;
    box-shadow: 0px 0px 20px 3px;

    & img {
        height: 90px;
    }
`

export const Icon = styled.div`
    display: flex;
    font-size: 50px;
    color: white;
    text-shadow: 5px 5px 5px rgba(0,0,0, 0.35);
    animation: setNewIcon 3s;

    &:hover{
        cursor: pointer;
    }
    


`