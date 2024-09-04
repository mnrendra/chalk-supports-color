const isNode = (): boolean => {
  return true &&
  typeof process === 'object' &&
  typeof process.versions === 'object' &&
  typeof process.versions.node === 'string'
}

export default isNode
