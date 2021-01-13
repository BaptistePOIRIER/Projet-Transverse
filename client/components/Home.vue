<template>
  <div>
    <header-tpl :connected="connected"></header-tpl>
    <section id="algo">
      <div class="subsection">
        <h1 class="title">Nos algorithmes</h1>
      </div>
        <algo-tpl :algorithms="algorithms"></algo-tpl>
    </section>
    <section id="about">
      <div class="subsection">
        <h1 class="title">A propos de Steparstep</h1>
        <p class="about">Steparstep est une application en ligne consue pour aider l'apprentissage a l'algorithmique à l'aide d'une approche visuelle.</p>
        <div class="creators-container">
          <div class="creator">
            <h3>Baptiste POIRIER</h3>
            <p>Role: Head dev</p>
          </div>
          <div class="creator">
            <h3>Baptiste POIRIER</h3>
            <p>Role: Head dev</p>
          </div>
          <div class="creator">
            <h3>Baptiste POIRIER</h3>
            <p>Role: Head dev</p>
          </div>
          <div class="creator">
            <h3>Baptiste POIRIER</h3>
            <p>Role: Head dev</p>
          </div>
          <div class="creator">
            <h3>Baptiste POIRIER</h3>
            <p>Role: Head dev</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="subsection">
        <h1 class="title">Contact</h1>
        <input type="text" required>
        <textarea type="text" required></textarea>
      </div>
    </section>
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
    connected: { type: Boolean },
    algorithms: { type: Array }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

.subsection {
  text-align: center;
  margin: 20px
}

.title {
  color: #FF6A3D;
  font-size: 40px;
  text-decoration: underline;
  margin-bottom: 30px;
}

#algo {
  padding-top: 100px;
  min-height: 100vh;
}

#about {
  padding-top: 100px;
  min-height: 100vh;
  margin: 0px 20% 0px 20%;
  text-align: center;
}

.about {
  font-size: 20px;
  color: white;
  margin-bottom: 80px;
}

#contact {
  padding-top: 100px;
  min-height: 100vh;
}

.creators-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.creator {
  margin: 3px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
}
</style>
