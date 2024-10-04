import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import mixeport from '@mnrendra/rollup-plugin-mixexport'

export default [
  // main
  {
    external: (id) => !/^[./]/.test(id),
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      }
    ],
    plugins: [
      esbuild({ minify: true }),
      mixeport({ minify: true })
    ],
    onwarn ({ code }) {
      if (code === 'MIXED_EXPORTS') return false
    }
  },
  // browser
  {
    external: (id) => !/^[./]/.test(id),
    input: 'src/browser/index.ts',
    output: [
      {
        file: 'dist/browser.js',
        format: 'cjs'
      }
    ],
    plugins: [
      esbuild({ minify: true }),
      mixeport({ minify: true })
    ],
    onwarn ({ code }) {
      if (code === 'MIXED_EXPORTS') return false
    }
  },
  // types
  {
    external: (id) => !/^[./]/.test(id),
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: dts()
  }
]
