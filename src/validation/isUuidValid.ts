// https://gist.github.com/bugventure/f71337e3927c34132b9a
export const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i

export const isUuidValid = (uuid: string): boolean => {
  return uuidV4Regex.test(uuid)
}
