import styled from "styled-components"

type Props = {
    Menu: boolean;
}


export const Wrapper = styled.div`
    overflow: hidden;
    position:absolute;
    z-index: 4;
`

export const Container = styled.div`
    display: flex;
    position:fixed;
    align-items:center;
    justify-items:center;
    justify-content: space-between;
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
        margin-left: 50px;
        &::selection{
            background-color:transparent;
        }
       } 
`

export const Box = styled.div`
    height:100%;     
    display:flex;
    align-items:center
`;

export const Icon = styled.div`
    width: 50px;
    height: 50px;
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
    position:relative;
    height: 100vh;
    width: 25vw;
    margin-top: 100px;
    display: ${(props) => props.Menu ? "flex" : "none"};
    background-color: ${props => props.theme.colors.primary};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6.9px 8px;
    right:${(props) => props.Menu ? "0" : "25vw"};
    opacity: ${(props) => props.Menu ? "1" : "0"};
    transition: ease-in-out 1s;
    justify-content:center;
    align-items: flex-start;
    animation: fadeIn 300ms;

    li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            right: 25vw;
            
        }
        to {
            opacity: 1;
            right: 0;
        }
    }
    
`

export const Switch = styled.div`
    height: 50px;
    width: 100px;
    position:relative;  
    display:flex;
    flex-direction: column;
    

    input{
        visibility: hidden;
        &:checked + label:before{
            transform: translate(125%, -50%);
            background: rgb(60,9,108);
            background: linear-gradient(45deg, rgba(60,9,108,1) 0%, rgba(123,44,191,1) 100%);
        }
        &:checked + label svg{
            transform: translate(167%, -50%);
        }
    }

    label{
    height: 100%;
    width: 100%;
    border-radius: 25px 25px;
    background-color: ${(props) => props.theme.colors.secondary};
    position:absolute;
    
    svg{
        position:absolute;
        top:50%;
        left:9px;
        transform:translateY(-50%);
        color: white;
    }

    &:before{
        content: "";
        height: 40px;
        width: 40px;
        border-radius: 50% 50%;
        top: 50%;
        left: 5px;
        position:absolute;
        background: rgb(255,183,0);
        background: linear-gradient(45deg, rgba(255,183,0,1) 0%, rgba(241,255,0,1) 100%);
        transform: translateY(-50%);

    }
        &:hover{
            cursor: pointer;
        }
    }
    

`