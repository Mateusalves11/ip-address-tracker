import { InputHTMLAttributes } from "react";
import { Button, InputBase, InputContainer } from "./styles";
import { IconArrow } from "@global-components/icons/icon-arrow";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onClickButton?: () => void;
}

export function Input({ onClickButton, ...props }: InputProps) {
    return (
        <>
            <InputContainer>
                <InputBase {...props} />
                <Button onClick={onClickButton}><IconArrow /></Button>
            </InputContainer>
        </>
    )
}