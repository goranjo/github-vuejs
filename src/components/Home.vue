<template>
  <div class="home">
    <img src="../assets/logo-gh.png">
    <h1>{{ msg }}</h1>
    <h2>Search a user</h2>
      <input type="text" v-model="username" v-on:keyup="enterUser" class="form-control">
  <user-list
          v-if="!isLoading"
          :users="computedUsers"
  >
    <template slot-scope="user">
      <div class="users-item">
        <figure class="flex items-center">
          <figcaption>
            <router-link :to="{path: `/users/${user.login}`}">{{user.login}}</router-link>
          </figcaption>
        </figure>
      </div>
    </template>
  </user-list>
  </div>
</template>

<script>
import UserList from './UserList'
import {RepositoryFactory} from '../repositories/RepositoryFactory'
// import gitJson from '../repositories/test.json'
const GitUser = RepositoryFactory.get('gitHub')

export default {
  // json: gitJson,
  name: 'Home',
  components: { UserList },
  data () {
    return {
      isLoading: false,
      users: [],
      username: 'goranjo',
      msg: 'Search the GitHub <3'
    }
  },
  mounted () {
    this.enterUser()
  },
  methods: {
    // add the debounce function Goraneee!!!
    enterUser () {
      this.isLoading = true
      let data = []

      GitUser.getUsers(this.username).then(function (userResults) {
        userResults.data.items.filter(function (value) {
          return data.push(value)
        })
      })

      this.users = data
      this.isLoading = false
    }
  },
  computed: {
    computedUsers () {
      return this.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
