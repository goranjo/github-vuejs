<template>
    <div class="user-container">
        <div class="single-user" v-for="user in users" :key="user.id">
            <img v-bind:src="avatar" alt="">
            <h4>This is the user</h4>
                <h3><router-link :to="{path: `/users/${user.login}/repos`}">{{user.login}}</router-link></h3>
            <p>Total repositories: {{user.public_repos}}</p>
        </div>
    </div>
</template>

<script>
import {RepositoryFactory} from '../../repositories/RepositoryFactory'
const GitRepos = RepositoryFactory.get('gitHub')
export default {
  name: 'User',
  data () {
    return {
      users: []
      // route: this.$route what is best practice, this putting in variable or accessing through
    }
  },
  mounted () {
    this.getTheUser()
  },
  methods: {
    getTheUser () {
      let data = []
      GitRepos.getTheUser(this.$route.path).then(function (userResults) {
        return data.push(userResults.data)
      })

      this.users = data
    }
  },
  computed: {
    theUser () {
      return this.users
    },
    avatar () {
      return this.theUser[0].avatar_url
    }
  }
}
</script>

<style scoped>

</style>
