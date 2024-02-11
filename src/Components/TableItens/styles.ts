import styled from "styled-components";

export const Table = styled.tr`
    font-size: 20px;
    border-bottom: solid 2px;
    border-color: ${(props) => props.theme.colors.secondary};
    height:40px;
    svg {
        :hover{
        cursor: pointer;
        }
    }
`;