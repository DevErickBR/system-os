import styled from "styled-components";

export const ListContainer = styled.ul`
    display: flex;
    list-style:none;
    width: 95%;
    height: 40px;
    justify-content:space-around;
    li {
        display:flex;
        align-items:center;
        justify-content:center;
        border-right: 5px solid ${(props) => props.theme.colors.secondary};
        width: 100%
    }
`; 