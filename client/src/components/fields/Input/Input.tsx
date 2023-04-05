import { debounce } from 'lodash'
import { ChangeEvent, InputHTMLAttributes, useEffect, useMemo } from 'react'

const DEBOUNCE_MS = 500

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Custom onChange event to pass value as first argument
   */
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void

  /**
   * Debounced onChange event
   */
  onChangeEnd: (value?: string) => void
}

export const Input = ({ onChange, onChangeEnd, value, ...props }: InputProps) => {
  // ====================================================
  // Handlers
  // ====================================================
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event)
    }
  }

  const handleChangeEnd = useMemo(() => debounce((amount?: string) => onChangeEnd(amount), DEBOUNCE_MS), [onChangeEnd])

  // ====================================================
  // Effects
  // ====================================================
  // Call debounced onChangeEnd on value change
  useEffect(() => {
    handleChangeEnd(value as string)
  }, [value, handleChangeEnd])

  // ====================================================
  // JSX
  // ====================================================
  return <input {...props} value={value} onChange={handleChange} />
}
