import gitHubRepository from './gitHubService'

const user = 'users'
const repos = 'repos'

export default {
  getUser (userName) {
    return gitHubRepository.get(`${user}/${userName}`)
  },
  getRepos (userName, repoName) {
    return gitHubRepository.get(`${repos}/${userName}/${repoName}`)
  }
}
