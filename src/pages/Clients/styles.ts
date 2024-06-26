import styled from "styled-components";

type Props = {
    backGround: string;
}

export const Container = styled.div`
    margin-top: 150px;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow:hidden;
    position:absolute;

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
        transition: ease-in-out 300ms;

        &:before{
            content: "";
            position: absolute;
            top: 0%;
            left: 0%;
            
            width:100%;
            height:100%;

            background-color: #AFF765;
            z-index: -1;

            transition: ease-in-out 200ms;
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
    position:absolute;
    overflow: hidden;
`;

export const FormClients = styled.div`
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.primary};
    width: 75vw;
    height: 60vh;
    align-items:center;
    gap: 50px;
    padding: 50px;
    border-radius:25px 25px;
`

export const BoxButtons = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonAction = styled.button<Props>`
        width: 200px;
        height: 70px;
        font-size: 25px;
        font-weight: bold;
        position:relative;
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        border: none;
        background-color:transparent;
        color: ${(props) => props.theme.colors.text};
        overflow:hidden;
        

        &:before{
            content:"";
            width: 0%;
            height: 6px;
            position: absolute;
            background-color:${(Props) => Props.backGround};
            bottom: 0%;
            left: 0%;
            transition: ease-in-out 200ms;
            z-index: 0;
        };

        &:hover{
            cursor: pointer;
            svg {
                transition: ease-in-out 300ms;
                color:${(Props) => Props.backGround};
            }
            &:before{
                width:100%;
            }
        };

        :active{
            border: none;
        }
`;