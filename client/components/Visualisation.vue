<template>
    <div>
        <header-tpl class="header" :connected="connected"></header-tpl>
        <h1>Visualisation</h1>
        <h4>{{algorithm.name}}</h4>
        <p>{{algorithm.description}}</p>
        <p>Rating: {{algorithm.upvotes - algorithm.downvotes}}</p>
        <p v-if="connected">+</p>
        <p v-if="connected">-</p>
        <algo-1 v-if="parameters.id == 1"></algo-1>
        <div v-if="parameters.id == 2" class="visu-container">stuff 2</div>
    </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')
const Algo1Template = window.httpVueLoader('./components/algo/algo1.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate,
    'algo-1': Algo1Template
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