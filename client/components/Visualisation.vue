<template>
    <div>
        <header-tpl class="header" :connected="connected"></header-tpl>
        <h1 class="title">Visualisation</h1>
        <div class="card">
          <div class="content">
            <h4 class="algo">{{algorithm.name}}</h4>
            <p class="description">{{algorithm.description}}</p>
          </div>
          <div class="rating">
            <p>{{algorithm.rating}} ★</p>
            <div v-if="connected" class="vote-container">
              <button v-on:click="vote(algorithm,'upvote')" class="vote up" v-bind:class="{ selected: algorithm.personal_rating == 1 }">+</button>
              <button v-on:click="vote(algorithm,'downvote')" class="vote down" v-bind:class="{ selected: algorithm.personal_rating == -1 }">-</button>
            </div>
          </div>
        </div>
        <div class="animation">
          <img class="gif" :src="`./assets/algos/${algorithm.url}.gif`">
        </div>
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

.card {
  margin: 20px 100px 20px 100px;
  padding: 15px;
  background-color: #393e46;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 2px white solid
}

.card * {
  background-color: #393e46;
}

.content {
  width: 90%;
}
.title {
  color: #FF6A3D;
  font-size: 40px;
  text-decoration: underline;
  margin-bottom: 30px;
  text-align: center;
}

.algo {
  color: #9DAAF2;
  font-size: 30px;
  text-decoration: underline;
  margin-bottom: 30px;
}

.description {
  color: white;
  font-size: 20px;
}

.rating {
  text-align: center;
  padding: 10px;
  color: #eeeeee;
  border-radius: 20px;
  border: 2px #eeeeee solid;
  min-width: 50px;
  background-color: #1A2238;
}

.rating * {
  background-color: #1A2238;
}

.animation {
  display: flex;
}

.gif {
  margin: auto;
  border: 3px #F4DB7D solid;
  border-radius: 40px;
}
</style>