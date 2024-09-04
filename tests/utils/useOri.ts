const useOri = (object: unknown): any => {
  try {
    return JSON.parse(JSON.stringify(object)) as unknown as any
  } catch (err) {
    return object
  }
}

export default useOri
