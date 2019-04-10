import gitHubRepository from './gitHubService'

const repositories = {
  gitHub: gitHubRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
