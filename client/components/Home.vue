<template>
  <div>
    <header-tpl class="header" :connected="connected"></header-tpl>
    <div class="subsection">
      <h2>A propos de Step By Step</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam accusantium voluptatibus laudantium ipsa reiciendis quae corrupti sapiente! Consectetur, debitis fugit asperiores excepturi consequatur eos! Et, beatae! Nobis, quaerat eius!</p>
    </div>
    <div class="subsection">
      <h2>Nos algorithmes</h2>
    </div>
    <algo-tpl></algo-tpl>
  </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')
const AlgoTemplate = window.httpVueLoader('./components/Algo.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate,
    'algo-tpl': AlgoTemplate
  },
  props: {
    connected: { type: Boolean }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.header {
  width: 100%;
}

.subsection {
  text-align: center;
  padding: 10% 20% 0% 20%;
}
</style>
