import os from 'node:os'

import noEnv from '@tests/dummies/noEnv'
import colorSupports from '@tests/dummies/colorSupports'
import mockedIsatty from '@tests/mocks/isatty'
import unmockIsatty from '@tests/unmocks/isatty'
import useOri from '@tests/utils/useOri'

import { supportsColor } from '..'

jest.mock('node:tty', () => ({
  isatty: jest.fn()
}))

describe('Test node\'s `supportsColor` feature:', () => {
  const oriProcess = useOri(globalThis.process)

  beforeEach(() => {
    globalThis.process = {
      ...useOri(oriProcess),
      env: {
        ...useOri(oriProcess).env,
        ...noEnv
      }
    }
  })

  beforeEach(() => {
    unmockIsatty(mockedIsatty)
    mockedIsatty.mockReturnValue(true)
  })

  afterEach(() => {
    globalThis.process = useOri(oriProcess)
    unmockIsatty(mockedIsatty)
  })

  describe('By mocking `FORCE_COLOR` env:', () => {
    describe('Mock env `FORCE_COLOR` to `"true"`:', () => {
      beforeEach(() => {
        globalThis.process.env.FORCE_COLOR = 'true'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `FORCE_COLOR` to `""`:', () => {
      beforeEach(() => {
        globalThis.process.env.FORCE_COLOR = ''
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `FORCE_COLOR` to `"false"`:', () => {
      beforeEach(() => {
        globalThis.process.env.FORCE_COLOR = 'false'
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `FORCE_COLOR` to `"0"`:', () => {
      beforeEach(() => {
        globalThis.process.env.FORCE_COLOR = '0'
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `FORCE_COLOR` to `"1"`:', () => {
      beforeEach(() => {
        globalThis.process.env.FORCE_COLOR = '1'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `FORCE_COLOR` to `"2"`:', () => {
      beforeEach(() => {
        globalThis.process.env.FORCE_COLOR = '2'
      })

      it('Should return `colorSupport` level 2!', () => {
        const received = supportsColor()
        const expected = colorSupports.level2
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `FORCE_COLOR` to `"3"`:', () => {
      beforeEach(() => {
        globalThis.process.env.FORCE_COLOR = '3'
      })

      it('Should return `colorSupport` level 3!', () => {
        const received = supportsColor()
        const expected = colorSupports.level3
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking sniff flags:', () => {
    describe('Mock for Deno\'s args:', () => {
      const oriDeno = useOri((globalThis as any).Deno)

      afterEach(() => {
        (globalThis as any).Deno = useOri(oriDeno)
      })

      describe('Mock `args` to `"--no-color"`:', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--no-color'] }
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--no-colors"`:', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--no-colors'] }
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=false"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=false'] }
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=never"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=never'] }
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color'] }
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--colors"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--colors'] }
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=true"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=true'] }
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=always"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=always'] }
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=16m"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=16m'] }
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=full"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=full'] }
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=truecolor"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=truecolor'] }
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=256"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=256'] }
        })

        it('Should return `colorSupport` level 2!', () => {
          const received = supportsColor()
          const expected = colorSupports.level2
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--color=256 --":', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--color=256', '--'] }
        })

        it('Should return `colorSupport` level 2!', () => {
          const received = supportsColor()
          const expected = colorSupports.level2
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `args` to `"--"`', () => {
        beforeEach(() => {
          (globalThis as any).Deno = { args: ['--'] }
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })
    })

    describe('Mock for Node\'s argv:', () => {
      describe('Mock `argv` to `"--no-color"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--no-color']
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--no-colors"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--no-colors']
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=false"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--no-color=false']
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=never"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--no-color=never']
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color']
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--colors"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--colors']
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=true"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color=true']
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=always"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color=always']
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=16m"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color=16m']
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=full"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color=full']
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=truecolor"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color=truecolor']
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=256"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color=256']
        })

        it('Should return `colorSupport` level 2!', () => {
          const received = supportsColor()
          const expected = colorSupports.level2
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--color=256 --"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--color=256', '--']
        })

        it('Should return `colorSupport` level 2!', () => {
          const received = supportsColor()
          const expected = colorSupports.level2
          expect(received).toEqual(expected)
        })
      })

      describe('Mock `argv` to `"--"`:', () => {
        beforeEach(() => {
          globalThis.process.argv = ['--']
        })

        it('Should return `colorSupport` level 0!', () => {
          const received = supportsColor()
          const expected = colorSupports.level0
          expect(received).toEqual(expected)
        })
      })
    })
  })

  describe('By mocking AZURE env:', () => {
    describe('Mock env `TF_BUILD` to `""` and `AGENT_NAME` to `""`:', () => {
      beforeEach(() => {
        globalThis.process.env.TF_BUILD = ''
        globalThis.process.env.AGENT_NAME = ''
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking TTY options:', () => {
    afterEach(() => {
      unmockIsatty(mockedIsatty)
      mockedIsatty.mockReturnValue(true)
    })

    describe('By mocking `isatty` to return `false`:', () => {
      beforeEach(() => {
        mockedIsatty.mockReturnValue(false)
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })

    describe('By mocking `isatty` to return `true`:', () => {
      beforeEach(() => {
        mockedIsatty.mockReturnValue(true)
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking DUMB TERM:', () => {
    describe('Mock env `TERM` to `"dumb"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = 'dumb'
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking WINDOWS platform:', () => {
    const oriRelase = useOri(os.release)

    beforeEach(() => {
      (globalThis.process as any).platform = 'win32'
    })

    afterEach(() => {
      os.release = useOri(oriRelase)
    })

    describe('Mock release version to `"10.x.10586"`:', () => {
      beforeEach(() => {
        os.release = () => '10.x.10586'
      })

      it('Should return `colorSupport` level 2!', () => {
        const received = supportsColor()
        const expected = colorSupports.level2
        expect(received).toEqual(expected)
      })
    })

    describe('Mock release version to `"10.x.14931"`:', () => {
      beforeEach(() => {
        os.release = () => '10.x.14931'
      })

      it('Should return `colorSupport` level 3!', () => {
        const received = supportsColor()
        const expected = colorSupports.level3
        expect(received).toEqual(expected)
      })
    })

    describe('Mock release version to `"10.x.10585"`:', () => {
      beforeEach(() => {
        os.release = () => '10.x.10585'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking CI env:', () => {
    describe('Mock env `CI` to `""`:', () => {
      beforeEach(() => {
        globalThis.process.env.CI = ''
      })

      describe('And mock env `GITHUB_ACTIONS` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.GITHUB_ACTIONS = ''
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `GITEA_ACTIONS` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.GITEA_ACTIONS = ''
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `TRAVIS` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.TRAVIS = ''
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `CIRCLECI` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.CIRCLECI = ''
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `APPVEYOR` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.APPVEYOR = ''
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `GITLAB_CI` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.GITLAB_CI = ''
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `BUILDKITE` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.BUILDKITE = ''
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `DRONE` to `""`:', () => {
        beforeEach(() => {
          globalThis.process.env.DRONE = ''
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      describe('And mock env `CI_NAME` to `"codeship"`:', () => {
        beforeEach(() => {
          globalThis.process.env.CI_NAME = 'codeship'
        })

        it('Should return `colorSupport` level 1!', () => {
          const received = supportsColor()
          const expected = colorSupports.level1
          expect(received).toEqual(expected)
        })
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking Team City env:', () => {
    describe('Mock env `TEAMCITY_VERSION` to `"9.01.0"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TEAMCITY_VERSION = '9.01.0'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TEAMCITY_VERSION` to `"9.0.0"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TEAMCITY_VERSION = '9.0.0'
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking Terminal env:', () => {
    describe('Mock env `COLORTERM` to `"truecolor"`:', () => {
      beforeEach(() => {
        globalThis.process.env.COLORTERM = 'truecolor'
      })

      it('Should return `colorSupport` level 3!', () => {
        const received = supportsColor()
        const expected = colorSupports.level3
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"xterm-kitty"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = 'xterm-kitty'
      })

      it('Should return `colorSupport` level 3!', () => {
        const received = supportsColor()
        const expected = colorSupports.level3
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM_PROGRAM` to `"iTerm.app"`', () => {
      beforeEach(() => {
        globalThis.process.env.TERM_PROGRAM = 'iTerm.app'
      })

      describe('And mock env `TERM_PROGRAM_VERSION` to `"3"`:', () => {
        beforeEach(() => {
          globalThis.process.env.TERM_PROGRAM_VERSION = '3'
        })

        it('Should return `colorSupport` level 3!', () => {
          const received = supportsColor()
          const expected = colorSupports.level3
          expect(received).toEqual(expected)
        })
      })

      describe('And mock `TERM_PROGRAM_VERSION` to `undefined`:', () => {
        beforeEach(() => {
          globalThis.process.env.TERM_PROGRAM_VERSION = undefined
        })

        it('Should return `colorSupport` level 2!', () => {
          const received = supportsColor()
          const expected = colorSupports.level2
          expect(received).toEqual(expected)
        })
      })
    })

    describe('Mock env `TERM_PROGRAM` to `"Apple_Terminal"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM_PROGRAM = 'Apple_Terminal'
      })

      it('Should return `colorSupport` level 2!', () => {
        const received = supportsColor()
        const expected = colorSupports.level2
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"*-256"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = '*-256'
      })

      it('Should return `colorSupport` level 2!', () => {
        const received = supportsColor()
        const expected = colorSupports.level2
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"*-256cOlOr"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = '*-256cOlOr'
      })

      it('Should return `colorSupport` level 2!', () => {
        const received = supportsColor()
        const expected = colorSupports.level2
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `undefined`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = undefined
      })

      it('Should return `colorSupport` level 0!', () => {
        const received = supportsColor()
        const expected = colorSupports.level0
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` `"screen*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = 'screen*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` `"xterm*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = 'xterm*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"vt100*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = 'vt100*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"vt220*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = 'vt220*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"rxvt*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = 'rxvt*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` `"*color*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = '*color*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"*ansi*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = '*ansi*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"*cygwin*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = '*cygwin*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `TERM` to `"*linux*"`:', () => {
      beforeEach(() => {
        globalThis.process.env.TERM = '*linux*'
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })

    describe('Mock env `COLORTERM` to `""`:', () => {
      beforeEach(() => {
        globalThis.process.env.COLORTERM = ''
      })

      it('Should return `colorSupport` level 1!', () => {
        const received = supportsColor()
        const expected = colorSupports.level1
        expect(received).toEqual(expected)
      })
    })
  })

  describe('By mocking other conditions:', () => {
    it('Should return `colorSupport` level 0!', () => {
      const received = supportsColor()
      const expected = colorSupports.level0
      expect(received).toEqual(expected)
    })
  })
})
