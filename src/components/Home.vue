<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Search a user</h2>
      <input type="text" v-model="username" @keyup.enter="enterUser()" >
  <users-list-list
          v-if="!isLoading"
          :users="computedUsers"
  >
    <template slot-scope="user">
      <div class="users--item">
        <figure class="flex items-center mb-3">
          <figcaption>
            <h3 class="text-base">{{user.owner.login}}</h3>
          </figcaption>
        </figure>
        <p class="text-grey-dark">{{user.body}}</p>
      </div>
    </template>
  </users-list-list>
  </div>
</template>

<script>
import UserList from './UserList'
import {RepositoryFactory} from '../repositories/RepositoryFactory'
const GitRepo = RepositoryFactory.get('gitHub')
console.log(GitRepo)
export default {
  name: 'Home',
  components: { UserList },
  data () {
    return {
      isLoading: false,
      users: [],
      username: '',
      msg: 'Search the GitHub <3'
    }
  },
  created () {
    this.fetch()
  },
  // watch: {
  //   usering: function () {
  //     console.log(this.username)
  //   }
  // },
  methods: {
    enterUser: function() {
      return this.username
    },
    async fetch () {
      this.isLoading = true
      const {data} = await GitRepo.getUser(this.enterUser())
      this.isLoading = false
      this.users = data
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
