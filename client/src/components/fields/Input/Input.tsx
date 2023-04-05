import { debounce } from 'lodash'
import { ChangeEvent, InputHTMLAttributes, useEffect, useMemo } from 'react'
import styled, { css } from 'styled-components'

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
  return <StyledInput {...props} value={value} onChange={handleChange} />
}

const StyledInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radii.sm};
    height: 38px;
    padding: 5px 12px 6px;
    transition: 0.15s ease;
    outline: none;

    &:hover {
      border-color: ${theme.colors.borderDark};
    }

    &:focus {
      border-color: ${theme.colors.focus};
      box-shadow: 0 0 0 1px ${theme.colors.focus};
    }
  `}
`
