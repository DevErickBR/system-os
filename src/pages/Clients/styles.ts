import styled from "styled-components";

export const Container = styled.div`
    margin-top: 150px;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow:hidden;

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

export const HeaderTable = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 15%;
        text-transform: uppercase;
        position: relative;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        border:none;
        color: ${(props) => props.theme.colors.text};
        background-color: transparent;
        cursor: pointer;
        border: 3px #AFF765 solid;
        transition: ease-in-out 600ms;

        &:before{
            content: "";
            position: absolute;
            top: 0%;
            left: 0%;
            
            width:100%;
            height:100%;

            background-color: #AFF765;
            z-index: -1;

            transition: ease-in-out 500ms;
        };

        &:before{
            width: 0;
            height: 100%;
        }

        &:hover{
            color:white;
            &:before{
                width: 100%;
            }
        }


    };

`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 4;
`;

export const FormClients = styled.div`
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    div {
        display: flex;
        flex-direction: column;
        background-color: ${(props) => props.theme.colors.primary};
        width: 75vw;
        height: 60vh;
        align-items:center;
        gap: 50px;
        padding: 50px;
        border-radius:25px 25px;
    };

    
`;

export const BoxButtons = styled.div`
    width: 100%;
    height:100%;
    flex-direction: row;
    display:flex;

`;