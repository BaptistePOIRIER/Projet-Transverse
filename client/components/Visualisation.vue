<template>
    <div>
        <header-tpl class="header" :connected="connected"></header-tpl>
        <h1>Visualisation</h1>
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
  async mounted () {
    parameters = this.$route.query
    console.log(parameters)
  }
}
</script>