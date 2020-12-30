<template>
    <div>
        <header-tpl class="header" :connected="connected"></header-tpl>
        <h1>Visualisation</h1>
        <h4>{{algorithm.name}}</h4>
        <p>{{algorithm.description}}</p>
        <div class="visu-container">stuff</div>
    </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate
  },
  props: {
    connected: { type: Boolean },
    algorithm: { type: Object }
  },
  data () {
    return {
      parameters: {}
    }
  },
  mounted () {
    this.parameters = this.$route.query
    this.$emit('get-algorithm', this.parameters.id)
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