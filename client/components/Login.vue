<template>
  <div class="main-container">
    <header-tpl :connected="connected"></header-tpl>
    <div class="card-container">
      <h2 class="top">Pour contribuer, connectez-vous !</h2>
      <form class="form" ref="form">
        <input class="input" v-model="loginInfos.email" placeholder="Email" type="text" required>
        <input class="input" v-model="loginInfos.password" placeholder="Mot de passe" type="password" required>
        <p class="error">{{errors.login}}</p>
      </form>
      <button class="button abort" @click="abortLogin()">Annuler</button>
      <button class="button connect" @click="login()">Se connecter</button>
      <br>
      <p class="bottom">Vous n'avez pas de compte ?</p>
      <router-link class="register" to='/register'>Inscrivez-vous !</router-link>
    </div>
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
    errors: { type: Object }
  },
  data () {
    return {
      loginInfos: {
          email: '',
          password: ''
      }
    }
  },
  mounted () {
    if (this.connected) {
      router.push('/')
    }
    this.errors.register = ''
  },
  methods: {
      login() {
        if (this.$refs.form.checkValidity()) {
          this.$emit('login', this.loginInfos)
          console.log(this.loginInfos)
          this.errors.login = ''
        }
        else {
          this.errors.login = 'Remplissez tous les champs!'
        }
      },
      abortLogin() {
        router.push('/')
        this.errors.login = ''
      }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
.main-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.card-container {
  position: absolute;
  background-color: #393e46;
  text-align: center;
  width: 500px;
  margin: 0% auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
  border-radius: 20px;
}
.top {
  background-color: #4ecca3;
  color: black;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px #eeeeee solid
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input {
  width: 80%;
  height: 40px;
  margin: 10px;
  background-color: #eeeeee;
  border-radius: 10px;
  text-align: center;
  border: 3px solid #4ecca3;
}
.error {
  color: #e5707e;
  height: 30px;
}
.button {
    text-decoration: none;
    color: #eeeeee;
    padding: 6px 60px;
    margin: 5px;
    transition: 0.3s ease;
    border: 1px solid #eeeeee;
    background-color: #232931;
}
        
.button:hover {
    color: black;
    border-radius: 10px;
    cursor: pointer;
}
.button.connect:hover {
  background-color: #4ecca3;
}
.button.abort:hover {
  background-color: #e5707e;
}
.bottom {
  background-color: #4ecca3;
  clip-path: polygon(100% 0, 100% 80%, 0 100%, 0% 20%);
  height: 40px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.register {
  color: #eeeeee;
  text-decoration: none;
  top: 10px
}
.register:hover {
  text-decoration: underline;
}
</style>