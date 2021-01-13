<template>
    <div class="container">
        <div class="left">
            <img class="left-content" src="./assets/logo.png">
        </div>
        <div class="mid">
            <h1 class="mid-content"> L'algorithmique en un Clique  &#128433;&#65039; </h1>
        </div>
        <div class="right">
            <nav class="right-content">
                <router-link class="button" v-if="this.path != '/contact'" to='/contact'>Contact</router-link>
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
    height: 100px;
    position: sticky;
    top: 0px;
    display: flex;
}
.left {
    width: 50%;
    flex-shrink: 1;
    display: flex;
}
.left-content {
    width: 250px;
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