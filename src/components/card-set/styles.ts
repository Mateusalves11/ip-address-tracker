import styled from "styled-components";

export const CardSetBase = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 10px;
    padding: 28px;
    min-height: 150px;
    height: 100%;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 16px;
    z-index: 999;
    >*{
        &:last-child{
            border: none;
        }
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95vw;
    }
`