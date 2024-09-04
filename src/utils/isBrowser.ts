const isBrowser = (): boolean => {
  return true &&
  typeof window === 'object' &&
  typeof window.document === 'object'
}

export default isBrowser
