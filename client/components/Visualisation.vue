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
              <button @click="vote('upvote')" class="vote up" v-bind:class="{ selected: algorithm.personal_rating == 1 }">+</button>
              <button @click="vote('downvote')" class="vote down" v-bind:class="{ selected: algorithm.personal_rating == -1 }">-</button>
            </div>
          </div>
        </div>
        <div class="animation">
          <img class="gif" :src="`./assets/algos/${algorithm.url}.gif`">
        </div>
        <h1 class="title">Commentaires</h1>
        <div class="comments">
          <form ref="form" class="new-comment" v-if="connected">
            <textarea class="comment" v-model="newComment" maxlength="300" required></textarea>
            <p class="character-limit">{{newComment.length}}/500</p>
            <button class="button-submit" @click="submitComment()">Envoyer</button>
          </form>
          <div class="for-comments" v-for="(comment,i) in comments" :key="i">
            <h4 class="for-comment">{{comment.comment}}</h4>
            <a class="for-by">Commenté par <span class="for-author">{{comment.name}}</span></a>
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
    algorithm: { type: Object },
    comments: { type: Array }
  },
  data () {
    return {
      parameters: {},
      newComment: ''
    }
  },
  mounted () {
    this.parameters = this.$route.params
    this.getAlgorithm()
    this.getComments()
  },
  methods: {
    getAlgorithm() {
      this.$emit('get-algorithm', this.parameters.algo)
    },
    getComments() {
      this.$emit('get-comments', this.parameters.algo)
    },
    vote(vote) {
      const parameters = {
        algo: this.algorithm.url,
        algoId: this.algorithm.id,
        value: 0
      }
      // Click upvote
      if (vote == 'upvote') {
        if (this.algorithm.personal_rating != 1) {
          parameters.value = 1
        }
      }
      // Click downvote
      if (vote == 'downvote') {
        if (this.algorithm.personal_rating != -1) {
          parameters.value = -1
        }
      }
      console.log(parameters)
      this.$emit('vote', parameters)
    },
    submitComment() {
      if (!this.$refs.form.checkValidity()) {
        return
      }
      const parameters = {
        comment: this.newComment,
        algoId: this.algorithm.id,
        algo: this.algorithm.url
      }
      console.log(parameters)
      this.$emit('submit-comment', parameters)
      this.newComment = ''
    }
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
  font-size: 16px;
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

.vote-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.vote {
  border: 1px white solid;
  height: 25px;
  width: 25px;
  margin: 5px;
  border-radius: 10px;
  outline: none;
  color: white;
}

.vote:not(.selected) {
  background: none;
}
.vote.selected {
  background-color: rgb(0, 0, 0)  
}
.vote:hover:not(.selected) {
  background-color: rgb(0, 0, 0);
  cursor: pointer
}
.vote:hover.selected {
  cursor: pointer
}
.up.selected {
  border: 2px #4ecca3 solid;
  color: #4ecca3;
}
.up:hover:not(.selected) {
  border: 2px #4ecca3 solid;
  color: #4ecca3;
}
.up:hover.selected {
  border: 2px #4ecca3aa solid;
  color: #4ecca3aa;
}
.down.selected {
  border: 2px #e5707e solid;
  color: #e5707e;
}
.down:hover:not(.selected) {
  border: 2px #e5707e solid;
  color: #e5707e;
}
.down:hover.selected {
  border: 2px #e5707eaa solid;
  color: #e5707eaa;
}
.animation {
  display: flex;
}

.gif {
  margin: auto;
  border: 3px white solid;
  border-radius: 40px;
}

.comments {
  text-align: center;
}
.character-limit{
  color: white;
  font-size: 14px;
}

.new-comment {
  margin-top: 40px
}

.comment {
  border: 3px solid white;
  border-radius: 20px;
  color: white;
  height: 50px;
  width: 700px;
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

.for-comments {
  margin: 20px;
}
.for-comment {
  color: white;
}

.for-by {
  color: white;
  font-size: 12px;
}

.for-author {
  color: white;
  font-weight: bolder;
  font-size: 12px;
}

</style>