import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 100%;
    margin: 30px auto;
    ul{
        display: flex;
        gap: 30px;
        max-width: 100%;
        flex-wrap: wrap;
    }
    @media (max-width: 915px){
        flex-direction: row;
        width: 100%;
        overflow-x: hidden;
        ul{
            margin-left: 2%;
            width: 100%;
            flex-wrap: nowrap;
            overflow-x: scroll;
            padding: 0;
            padding-right: 20px;
            margin-left: 3%;
        }
    }
`
