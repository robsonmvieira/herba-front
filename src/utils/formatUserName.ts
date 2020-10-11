export const formatUserName = cookie => {
  const [, trash] = cookie.split(';')
  const [, userName] = trash.split('=')
  const parsedName = userName.split('%20').join().replace(/,/, ' ')
  return parsedName
}
