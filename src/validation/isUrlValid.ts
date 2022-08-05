export const urlPrefix = 'https://pillarsofeternity.fandom.com/wiki/'

export const isUrlValid = (url: string): boolean => {
  return url.indexOf(urlPrefix) === 0 && url === url.trim() && url.length > urlPrefix.length
}
