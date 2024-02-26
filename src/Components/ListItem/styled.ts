import styled from "styled-components";

export const ListContainer = styled.tbody`
    display: flex;
    list-style:none;
    width: 95%;
    height: 40px;
    justify-content:space-around;
    z-index:4;
    &:hover{
        cursor: pointer;
        background-color:${(props) => props.theme.colors.primary + "85"};
        }
    
    tr {
        display:flex;
        align-items:center;
        justify-content:center;
        border-right: 5px solid ${(props) => props.theme.colors.secondary};
        border-bottom: 1px groove ${(props) => props.theme.colors.secondary};
        width: 100%;
        z-index: 0;
       
    }
`; 