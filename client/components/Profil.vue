<template>
  <div class="main-container">
    <header-tpl :connected="connected"></header-tpl>
    <div class="card-container">
      <h2 class="top">Votre profil</h2>
      <form class="form" ref="form">
        <input class="input" v-model="name" placeholder="Email" type="text" required>
        <p class="error">{{errors.profil}}</p>
      </form>
      <button class="button red" @click="abort()">Annuler</button>
      <button class="button green" @click="editName()">Modifier</button>
      <br>
      <p class="bottom">Autres actions</p>
      <button class="button red" @click="logout()">Se déconnecter</button>
    </div>
  </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')
module.exports = {
  props: {
    connected: { type: Boolean },
    user: { type: Object },
    errors: { type: Object }
  },
  components: {
    'header-tpl': HeaderTemplate
  },
  data() {
    return {
      name: ''
    }
  },
  mounted () {
    if (!this.connected) {
      router.push('/login')
    }
    else {
      this.name = this.user.name
    }
  },
  methods: {
      logout() {
          this.$emit('logout')
      },
      editName() {
        if (!(this.user.name != this.name)) {
          this.errors.profil = 'This is already your name!'
          return
        }
        if (!this.$refs.form.checkValidity()) {
          this.errors.profil = 'Fill the input!'
          return
        }
        const parameters = {
          name: this.name
        }
        this.$emit('edit-name', parameters)
      },
      abort() {
        router.push('/')
        this.errors.profil = ''
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
  border-radius: 20px;
}
.top {
  background-color: #9DAAF2;
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
  background-color: #393e46;
}
.input {
  width: 80%;
  height: 40px;
  margin: 10px;
  background-color: #eeeeee;
  border-radius: 10px;
  text-align: center;
  border: 3px solid #9DAAF2;
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
.button.green:hover {
  background-color: #4ecca3;
}
.button.red:hover {
  background-color: #e5707e;
}
.bottom {
  background-color: #9DAAF2;
  clip-path: polygon(100% 0, 100% 80%, 0 100%, 0% 20%);
  height: 40px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>