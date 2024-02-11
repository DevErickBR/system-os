import styled from "styled-components";

export const Container = styled.div`
    margin-top: 150px;
    width: 100vw;
    display: flex;
    justify-content: center;

    div {
        font-size: 40px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.text}
    }; 

    table{
        width:80vw;
        margin-top: 20px;
        border-collapse: collapse;     
    };

    .header th{
        font-size: 30px;
        background-color:${(props) => props.theme.colors.secondary};
        height: 50px;
    };
`;