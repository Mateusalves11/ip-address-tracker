import styled from "styled-components";

export const InputBase = styled.input`
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    padding: 10px 26px;
    border-radius: 10px 0px 0px 10px;
    ::placeholder {
        color: ${({theme}) => theme.colors.darkGray};
        font-size: 18px;
    }
`
export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    border: none;
    background-color: ${({theme}) => theme.colors.veryDarkGray};
    height: 50px;
    width: 50px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 0px 10px 10px 0px;
    transition: ease-in-out 0.3s;
    &:hover{
        background-color: ${({theme}) => theme.colors.darkGray};
    }
`