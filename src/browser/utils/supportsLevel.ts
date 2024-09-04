import type { ColorSupportLevel } from '../../types'

type GlobalThis = typeof globalThis & {
  readonly navigator?: typeof navigator & {
    readonly userAgentData?: {
      readonly brands: Array<{
        readonly brand: string
        readonly version: string
      }>
    }
  }
}

const supportsLevel = (): ColorSupportLevel => {
  const { navigator } = globalThis as GlobalThis

  if (navigator === undefined) return 0

  const { userAgentData, userAgent } = navigator

  if (userAgentData !== undefined) {
    const brand = userAgentData.brands.find(({ brand }) => brand === 'Chromium')

    if (brand !== undefined && Number(brand.version) > 93) return 3
  }

  if (/\b(Chrome|Chromium)\//.test(userAgent)) return 1

  return 0
}

export default supportsLevel
