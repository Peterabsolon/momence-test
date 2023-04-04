import { ChangeEvent, InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Custom onChange event to pass value as first argument
   */
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ onChange, ...props }: InputProps) => {
  // ====================================================
  // Handlers
  // ====================================================
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event)
    }
  }

  // ====================================================
  // JSX
  // ====================================================
  return <input {...props} onChange={handleChange} />
}
