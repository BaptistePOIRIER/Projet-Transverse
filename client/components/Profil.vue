<template>
  <div>
    <h2>Profil</h2>
    <button @click="logout()">Se déconnecter</button>
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
    if (!this.connected) {
      router.push('/login')
    }
  },
  methods: {
      logout() {
          this.$emit('logout')
      }
    }
}
</script>

<style scoped>
</style>
