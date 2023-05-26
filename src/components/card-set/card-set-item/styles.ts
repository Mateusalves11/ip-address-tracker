import { Text } from "@global-components/text";
import styled from "styled-components";

export const CardSetItemBase = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    max-width: 260px;
    padding-right: 60px;
    border-right: 1px solid rgb(220, 220, 220);
`

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSizes.sx};
    font-weight: 500;
    letter-spacing: 2px;
`

export const Description = styled(Text)`
    color: ${({ theme }) => theme.colors.veryDarkGray};
    font-size: 20px;
    font-weight: 500;
`