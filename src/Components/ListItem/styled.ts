import styled from "styled-components";

export const ListContainer = styled.tbody`
    display: flex;
    list-style:none;
    width: 95%;
    height: 40px;
    justify-content:space-around;

    tr {
        display:flex;
        background-color:${(props) => props.theme.colors.background};
        align-items:center;
        justify-content:center;
        border-right: 5px solid ${(props) => props.theme.colors.secondary};
        border-bottom: 1px groove ${(props) => props.theme.colors.secondary};
        width: 100%
    }
`; 