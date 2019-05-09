import gitHubRepository from './userRepository'

const repositories = {
  gitHub: gitHubRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
