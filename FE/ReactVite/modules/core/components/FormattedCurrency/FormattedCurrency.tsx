import { FormattedNumber, IntlProvider } from 'react-intl';

interface IFormattedCurrencyProps {
    value: number
    currencyCode: string
}

export const FormattedCurrency = ({ value, currencyCode }: IFormattedCurrencyProps): React.ReactElement => {
    return (
        <IntlProvider locale="en-GB">
            <FormattedNumber
                style="currency"
                currency={currencyCode}
                value={value}
            />
        </IntlProvider>
    )
}
