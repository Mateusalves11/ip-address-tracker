import { Text } from "@global-components/text";
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
        max-height: 440px;
    }
`

export const Title = styled(Text)`
    font-size: 40px;
    font-weight: 500;
    @media screen and (max-width: 768px){
        font-size: 30px;
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
