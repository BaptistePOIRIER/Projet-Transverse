<template>
    <div class="container">
        <div class="left">
            <div class="left-content">
                <router-link to='/'>
                    <img class="left-content" src="./assets/logo.png">
                </router-link>
            </div>
        </div>
        <div class="mid">
        </div>
        <div class="right">
            <nav class="right-content">
                <a v-if="this.path == '/'" class="button" href="#algo">Algorithmes</a>
                <a v-if="this.path == '/'" class="button" href="#about">À propos</a>
                <a v-if="this.path == '/'" class="button" href="#contact">Contact</a>
                <router-link class="button" v-if="this.path != '/profil' && connected" to='/profil'>Profil</router-link>
                <router-link class="button" v-if="this.path != '/login' && this.path != '/register' && !connected" to='/login'>Connexion</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
module.exports = {
  props: {
      connected: Boolean
  },
  data () {
    return {
        path: ""
    }
  },
  mounted() {
      this.path = this.$router.currentRoute.path
      console.log(this.path)
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #1A2238;
    z-index: 9001;    
}
.container {
    height: 80px;
    position: sticky;
    top: 0px;
    display: flex;
    border-bottom: #eeeeee 2px solid;
    border-top: #eeeeee 2px solid;
}
.left {
    width: 50%;
    flex-shrink: 1;
    display: flex;
}
.left-content {
    width: 200px;
    margin: auto 0px auto 20px;
}
.mid { 
    flex-shrink: 0;
}
.mid-content {
    margin: 25px;
    color: white;
    font-size: 30px;
}
.right {
    width: 50%;
    flex-shrink: 1;
    display: flex;
    flex-direction: row-reverse;
}
.right-content {
    margin: auto 20px auto 0px;
}
.button {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    margin: 5px;
    transition: 0.3s ease;
    border: solid #1A2238 3px
}
        
.button:hover {
    color: #F4DB7D;
    border: solid #F4DB7D 3px;
}
</style>