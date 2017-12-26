<template>
  <div class="content">
    ****{{test}}
    <div v-if="isAuthenticated">
      Hello authenticated user!
      <button @click="logout" class="button is-primary">
        Logout
      </button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="username" class="input" type="text" placeholder="Your username">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="password" class="input" type="password" placeholder="Your password">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary" v-on:click="login">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      test: function () {
        console.log('*****', this.salim)
        return 'salom'
      },
      ...mapGetters(['isAuthenticated', 'salim'])
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      login() {
        this.$store.dispatch('login', {username: this.username, password: this.password})
          .then(() => {
            this.username = ''
            this.password = ''
          })
      }
    }
  }
</script>


