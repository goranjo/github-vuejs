<template>
   <div class="repo-container">
       <img v-bind:src="avatar" >
       <section class="cd-timeline js-cd-timeline">
                  <div v-if="isEmpty">No repos</div>
           <div class="container container--lg cd-timeline__container">
               <div class="cd-timeline__block"  v-for="repo in repos" :key="repo.id">
                   <div class="cd-timeline__img cd-timeline__img--picture">
                       <img src="assets/img/cd-icon-picture.svg" alt="Picture">
                   </div>
                   <div class="cd-timeline__content text-component">
                       <h2>{{ repo.full_name }}</h2>
                       <p class="text--subtle">{{ repo.description }}</p>
                       <div class="flex flex--space-between flex--center-y">
                           <span class="cd-timeline__date">{{ repo.pushed_at }}</span>
                           <a href="#0" class="btn btn--subtle">Read more</a>
                       </div>
                   </div>
               </div>
           </div>
       </section>
   </div>
</template>

<script>
import {RepositoryFactory} from '../../repositories/RepositoryFactory'
const GitRepos = RepositoryFactory.get('gitHub')
export default {
  name: 'Repo',
  data () {
    return {
      repos: [],
      route: this.$route
    }
  },
  mounted () {
    this.getUserRepos()
    // this.avatar()
  },
  methods: {
    getUserRepos () {
      let data = []
      GitRepos.getRepos(this.route.path).then(function (reposResults) {
        reposResults.data.filter(function (value) {
          return data.push(value)
        })
      })

      this.repos = data
    }
  },
  computed: {
    computedRepos () {
      return this.repos
    },
    avatar () {
      if (this.computedRepos.length > 0) {
        return Array.from(this.computedRepos)[0].owner.avatar_url
      }
    },
    isEmpty () {
      return this.computedRepos.length === 0
    }
  }
}
</script>
<style lang="scss">
    @import 'assets/css/styles.scss';
</style>
