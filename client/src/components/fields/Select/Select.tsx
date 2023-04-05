import RCSelect, { GroupBase, Props as RCSelectProps } from 'react-select'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps<
  Option = SelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<RCSelectProps<Option, IsMulti, Group>, 'theme'>,
    SpaceProps {}

export const Select = <
  Option = SelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  return (
    <StyledRCSelect
      {...props}
      styles={{
        container: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'grey' : 'red',
        }),
      }}
    />
  )
}

// Don't pass custom styled-components theme to RCSelect, it has its own we don't care about
const StyledRCSelect = styled(({ theme: _theme, ...props }) => <RCSelect {...props} />)<RCSelectProps>`
  ${space}
` as typeof RCSelect
