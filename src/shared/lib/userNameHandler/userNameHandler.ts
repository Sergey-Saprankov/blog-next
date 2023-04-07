export const userNameHandler = (userName: string): string => {
  const name = userName.split('@')[0]

  return name.length <= 20 ? name : `${name.slice(0, 20)}...`
}
