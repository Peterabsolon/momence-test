import omit from 'lodash/omit'
import pick from 'lodash/pick'

const margins = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'] as const
const paddings = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'] as const
const keys = [...paddings, ...margins] as const

export const getSpacingProps = <T extends AnyRecord>(props: T): Pick<T, (typeof keys)[number]> => pick(props, keys)

export const getSpaceingPropsAndRest = <T extends AnyRecord>(
  props: T
): { spaceProps: Pick<T, (typeof keys)[number]>; restProps: Omit<T, (typeof keys)[number]> } => ({
  spaceProps: pick(props, keys),
  restProps: omit(props, keys),
})
