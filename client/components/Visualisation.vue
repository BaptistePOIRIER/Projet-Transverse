<template>
    <div>
        <header-tpl class="header" :connected="connected"></header-tpl>
        <h1>Visualisation</h1>
        <h4>{{algorithm.name}}</h4>
        <p>{{algorithm.description}}</p>
        <p>Rating: {{algorithm.upvotes - algorithm.downvotes}}</p>
        <p v-if="connected">+</p>
        <p v-if="connected">-</p>
        <img :src="`./assets/algos/${algorithm.url}.gif`">
    </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')
const Algo1Template = window.httpVueLoader('./components/algo1/algo.vue')

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
    this.parameters = this.$route.params
    this.$emit('get-algorithm', this.parameters.algo)
  }
}


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

.visu-container {
  height: 60vh;
  background-color: aquamarine;
  text-align: center;
}
</style>