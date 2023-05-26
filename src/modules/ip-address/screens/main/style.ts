import styled from "styled-components";

export const MainBase = styled.div`
    background-image: url('/assets/images/pattern-bg-desktop.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px;
    max-height: 300px;
    @media screen and (max-width: 768px){
        background-image: url('/assets/images/pattern-bg-mobile.png');
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    height: 100%;
    >*{
        &:last-child{
            position: relative;
            top: 25px;
        }
    }
`
