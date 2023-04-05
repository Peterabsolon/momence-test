import { Input, InputProps } from '~/components'

export const ExchangeAmountInput = ({ onChangeEnd, ...props }: InputProps) => (
  <Input {...props} onChangeEnd={onChangeEnd} placeholder="Amount in CZK" data-cy="exchange-amount-input" />
)
