import styled from "styled-components"

type Props = {
    Menu: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-items:center;
    padding: 0 20px;
    height: 100px;
    width: 100vw;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-weight:bold;
    font-size: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    & img {
        height: 90px;
        margin-left: 100px;
        &::selection{
            background-color:transparent;
        }
       } 
`

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 35px;
    color:${props => props.theme.colors.text};
    cursor: pointer;
    border-radius:50%;
    transition: all 200ms;
    &:hover{
            background-color: ${(props => props.theme.colors.secondary)};
        }


`
export const SideMenu = styled.div<Props>`
    height: 100vh;
    width: 25vw;
    display: flex;
    position:relative;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6.9px 8px;
    right:${(props) => props.Menu ? "0" : "25vw"};
    transition: ease-in-out 300ms;
    justify-content:center;
    align-items: flex-start;

    li {
        list-style: none;
    }


` 