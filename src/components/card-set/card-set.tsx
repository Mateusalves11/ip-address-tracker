import { CardSetBase } from "./styles"

export const CardSet = ({ children }: { children: React.ReactNode }) => {
    return (
        <CardSetBase>
            {children}
        </CardSetBase >
    )
}