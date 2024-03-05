import styled from "styled-components";

export const ContainerInput = styled.div`
    display:flex;
    justify-content:center;
    align-items: start;
    height:50px;
    color: ${(props) => props.theme.colors.text};
    
    label{
        font-weight:bold;
        background-color: ${(props) => props.theme.colors.primary};
        height: 50px;
        padding: 10px;
        text-align:center;
        display:flex;
        align-items:center;
        border-radius: 10px 0 0 10px
    }

    div{
        display:flex;
        align-items:center;
    };
    
    input{
        height: 50px;
        text-align:start;
        font-size: 18px;
        background-color:transparent;
        border: 4px solid ${(props) => props.theme.colors.primary};
        background-color: transparent;
        color: ${(props) => props.theme.colors.text};
        padding-left:10px;
        cursor: default;
        border-radius: 0 10px 10px 0 ;

        &:focus{
            outline: none;
        }
    }
`;