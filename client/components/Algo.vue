<template>
  <div class="algos">
    <div class="container" v-for="(algo, i) in algos" :key="i">
        <router-link :to="{ path: '/algo', query: { name: algo.url_name }}">
            <div class="algo">
                <h4>{{algo.name}}</h4>
                <p>{{algo.desciption}}</p>
                <a>Rating: {{algo.rating}}, Comments: {{algo.comments}}</a>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      algos: [
          {name: "Algo 1", desciption: "Description rapide de l'algo1", url_name: 'algo-1' ,rating: 3, comments: 10},
          {name: "Algo 2", desciption: "Description rapide de l'algo2"}
      ]
    }
  }
}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}
.algos {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

.algo {
    margin: 10px;
    padding: 50px;
    border: 2px solid black;
    border-radius: 10px;
    transform: translateY(0px);
    transition: 0.3s ease;
}

.algo:hover {
    transform: translateY(-10px);
    transition: 0.3s ease;
    background-color: wheat;
    cursor: pointer;
}

.container * {
    text-decoration: none;
    color: black;
}
</style>