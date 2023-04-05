import { ReactNode } from 'react'
import RCSelect, { GroupBase, Props as RCSelectProps } from 'react-select'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export interface SelectOption {
  label: string | ReactNode
  value: string
}

export interface SelectProps<
  Option = SelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<RCSelectProps<Option, IsMulti, Group>, 'theme'>,
    SpaceProps {
  'data-cy'?: string
}

export const Select = <
  Option = SelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  const dataCy = props['data-cy']

  return (
    <div data-cy={dataCy}>
      <StyledRCSelect
        {...props}
        styles={{
          container: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'red',
          }),
        }}
      />
    </div>
  )
}

// Don't pass custom styled-components theme to RCSelect, it has its own we don't care about
const StyledRCSelect = styled(({ theme: _theme, ...props }) => <RCSelect {...props} />)<RCSelectProps>`
  ${space}
` as typeof RCSelect
