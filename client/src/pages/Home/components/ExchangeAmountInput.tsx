import { Input, InputProps } from '~/components'

export const ExchangeAmountInput = ({ onChangeEnd, ...props }: InputProps) => (
  <Input data-cy="exchange-amount-input" {...props} onChangeEnd={onChangeEnd} placeholder="Amount in CZK" />
)
