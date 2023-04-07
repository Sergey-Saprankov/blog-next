export type ModsType = Record<string, boolean | string>

export const classNames = (
  cls: string,
  mods: ModsType = {},
  className: (string | undefined)[] = []
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => !!value)
      .map(([cls, value]) => cls),
    ...className.filter(Boolean),
  ].join(' ')
}
