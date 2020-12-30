<template>
  <div>
    <h2>Créer un compte</h2>
    <input v-model="newAccount.email" placeholder="Email">
    <input v-model="newAccount.password" placeholder="password">
    <button @click="createAccount()">Valider</button>
    <br>
    <router-link to='/login'>Se connecter</router-link>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      newAccount: {
          email: '',
          password: ''
      }
    }
  },
  methods: {
      createAccount() {
          this.$emit('create-account', this.newAccount)
          console.log(this.newAccount)
      }
    }
}
</script>

<style scoped>
</style>
