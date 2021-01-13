<template>
  <div class="algos">
    <div class="container" v-for="(algo, i) in algorithms" :key="i">
        <router-link :to="`/visualise/${algo.url}`">
            <div class="algo">
                <h2 class="name">{{algo.name}}</h2>
                <p class="description">{{algo.description}}</p>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    algorithms: { type: Array }
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
    align-items: center;
    justify-content: space-around;
}

.algo {
    margin: 10px;
    padding: 10px;
    width: 400px;
    border: 5px solid white;
    border-radius: 10px;
    transition: 0.3s ease;
}

.algo:hover {
    border: 5px solid #F4DB7D;
    cursor: pointer;
    transform: scale(1.2);
}

.container * {
    text-decoration: none;
}

.name {
  margin-bottom: 20px;
  color: #9DAAF2;
}

.description {
  color: white;
}
</style>