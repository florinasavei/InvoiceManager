import { Checked, Cross } from "../../icons"

interface IBooleanIndicatorProps {
    value: boolean,
}

export const BooleanIndicator = ({ value }: IBooleanIndicatorProps): React.ReactElement => {
    return (
        <>
            {value ?
                <Checked />
                :
                <Cross />
            }
        </ >
    )
}
