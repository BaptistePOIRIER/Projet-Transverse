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
            <h3 class="creator-name">Youssef JENDOUBI</h3>
            <p class="creator-role">Role: ------</p>
          </div>
          <div class="creator">
            <h3 class="creator-name">Duc Hoang NGUYEN</h3>
            <p class="creator-role">Role: ------</p>
          </div>
          <div class="creator">
            <h3 class="creator-name">Baptiste POIRIER</h3>
            <p class="creator-role">Role: Head dev</p>
          </div>
          <div class="creator">
            <h3 class="creator-name">Queran TCHOUME</h3>
            <p class="creator-role">Role: ------</p>
          </div>
          <div class="creator">
            <h3 class="creator-name">Yann YEBOUE</h3>
            <p class="creator-role">Role: ------</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="subsection">
        <h1 class="title">Contact</h1>
        <form class="form">
          <label class="form-nom">Nom / Email</label>
          <input class="nom" type="text" v-model="nom" required>
          <br>
          <label class="form-message">Message</label>
          <textarea class="message" type="text" maxlength="500" v-model="message" required></textarea>
          <p class="character-limit">{{message.length}}/500</p>
          <button class="button-submit" @click="submitMessage()">Envoyer</button>
        <form>
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
  },
  data() {
    return {
      nom: '',
      message: ''
    }
  },
  methods: {
    submitMessage() {
      const parameters = {
        name: this.nom,
        message: this.message
      }
    this.$emit('submit-message', parameters)
    }
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
  margin: 0px 10% 0px 10%;
  text-align: center;
}

.about {
  font-size: 20px;
  margin: 0px 10% 0px 10%;
  color: white;
  margin-bottom: 80px;
}

#contact {
  padding-top: 100px;
  min-height: 100vh;
  margin: 0px 20% 0px 20%;
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

.creator-name {
  color: #9DAAF2;
}

.creator-role {
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-nom {
  color: white;
}

.form-message {
  color: white;
}

.character-limit{
  color: white;
  font-size: 14px;
}

.nom {
  border: 3px solid white;
  border-radius: 20px;
  color: white;
  height: 40px;
  padding: 10px;
}

.message {
  border: 3px solid white;
  border-radius: 20px;
  color: white;
  height: 150px;
  padding: 10px;
  resize: vertical;
}

.button-submit {
    text-decoration: none;
    color: #eeeeee;
    padding: 6px 60px;
    margin: 5px;
    transition: 0.3s ease;
    border: 1px solid #eeeeee;
    background-color: #232931;
}
        
.button-submit:hover {
    color: black;
    border-radius: 10px;
    cursor: pointer;
    background-color: #4ecca3;
}
</style>
