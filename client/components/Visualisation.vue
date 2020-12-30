<template>
    <div>
        <header-tpl class="header" :connected="connected"></header-tpl>
        <h1>Visualisation</h1>
        <div class="visu-container">CONTENT</div>
    </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate
  },
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
  }
}
</script>

<style scoped>
.visu-container {
  height: 60vh;
  background-color: aquamarine;
  text-align: center;
}
</style>