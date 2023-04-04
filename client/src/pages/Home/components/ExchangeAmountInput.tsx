import { useEffect, useMemo } from 'react'
import { debounce } from 'lodash'

import { Input, InputProps } from '../../../components'

const DEBOUNCE_MS = 500

export interface ExchangeAmountInputProps extends InputProps {
  onChangeEnd: (amount: number) => void
  value: string
}

export const ExchangeAmountInput = ({ value, onChangeEnd, ...props }: ExchangeAmountInputProps) => {
  // ====================================================
  // Handlers
  // ====================================================
  const handleChangeEnd = useMemo(
    () => debounce((amount?: string) => onChangeEnd(Number(amount) || 0), DEBOUNCE_MS),
    []
  )

  // ====================================================
  // Effects
  // ====================================================
  // Call debounced onChangeEnd on value change
  useEffect(() => {
    handleChangeEnd(value)
  }, [value])

  // ====================================================
  // JSX
  // ====================================================
  return (
    <div>
      <Input value={value} {...props} />
    </div>
  )
}
