import { CardSetItemBase, Description, Title } from "./styles"

export const CardSetItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <CardSetItemBase>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </CardSetItemBase >
    )
}