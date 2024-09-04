const noEnv: NodeJS.ProcessEnv = {
  FORCE_COLOR: undefined,
  TF_BUILD: undefined,
  AGENT_NAME: undefined,
  TERM: undefined,
  CI: undefined,
  TRAVIS: undefined,
  CIRCLECI: undefined,
  APPVEYOR: undefined,
  GITLAB_CI: undefined,
  BUILDKITE: undefined,
  DRONE: undefined,
  GITHUB_ACTIONS: undefined,
  GITEA_ACTIONS: undefined,
  CI_NAME: undefined,
  TEAMCITY_VERSION: undefined,
  COLORTERM: undefined,
  TERM_PROGRAM: undefined,
  TERM_PROGRAM_VERSION: undefined
}

export default noEnv
