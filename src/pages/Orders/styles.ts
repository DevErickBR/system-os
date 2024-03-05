import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    display:flex;
    padding-top:20px;
    align-items:center;
    color:${(props) => props.theme.colors.text} ;
    position:absolute;
`;

export const ListHeader = styled.thead`
    list-style:none;
    display:flex;
    width: 95%;
    height: 50px;
    justify-items: center;
    align-items:center;
    justify-content:space-around;
    background-color: ${(props) => props.theme.colors.primary};
    font-size:20px;
    font-weight:bold;
    border-radius: 25px 25px;
    th {
        border-right:5px solid ${(props) => props.theme.colors.secondary};
        background-color:red;
        height:50px;
        width: 100%;
        display:flex;
        justify-items: center;
        align-items:center;
        justify-content:space-around;
        background-color: ${(props) => props.theme.colors.primary};
        font-size:20px;
        font-weight:bold;
        border-radius: 25px 25px 0px 0px;
    }
`;

export const ContainerTable = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

export const ConstainerOs = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:center;

    .headerOs{
        position:relative;
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap: 20px;
        padding:20px;   
    }
`;