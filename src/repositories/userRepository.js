import gitHubRepository from './gitHubService'

const searchForTheUser = '/search/users?q='
// /repos/goranjo/contactform/pulls

export default {
  getUsers (userName) {
    return gitHubRepository.get(`${searchForTheUser}${userName}`)
  },
  getTheUser (userName) {
    return gitHubRepository.get(`${userName}`)
  },
  getRepos (repos) {
    return gitHubRepository.get(`${repos}`)
  },
  getMergeRequests (repos) {
    return gitHubRepository.get(`${repos}`)
  }
}
