<template>
  <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './AppHeader'
  import AppFooter from './AppFooter'

  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="sass">
  $primary: #287ab1
  @import '~bulma'

  .columns
    flex-wrap: wrap

</style>
