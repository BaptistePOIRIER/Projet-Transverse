<template>
  <div>
    <h2>Se connecter</h2>
    <input v-model="loginInfos.email" placeholder="Email">
    <input v-model="loginInfos.password" placeholder="password">
    <button @click="login()">Valider</button>
    <br>
    <router-link to='/register'>Créer un compte</router-link>
  </div>
</template>

<script>
module.exports = {
  props: {
    connected: { type: Boolean }
  },
  data () {
    return {
      loginInfos: {
          email: '',
          password: ''
      }
    }
  },
  mounted () {
    if (this.connected) {
      router.push('/')
    }
  },
  methods: {
      login() {
          this.$emit('login', this.loginInfos)
      }
    }
}
</script>

<style scoped>
</style>
