const Home = window.httpVueLoader('./components/Home.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Visualisation = window.httpVueLoader('./components/Visualisation.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/profil', component: Profil},
  { path: '/algo', component: Visualisation}
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    algorithms: [],
    connected: false
  },
  async mounted () {
    const res = await axios.get('api/algorithms')
    this.algorithms = res.data
  },
  methods: {
    async createAccount (newAccount) {
      const res = await axios.post('api/register', newAccount)
      console.log(res.data)
    },
    async login (loginInfos) {
      try {
        const res = await axios.post('api/login', loginInfos)
        console.log(res.data)
        this.connected = true
        router.push('/')
      }
      catch {
        this.connected = false
      }
    },
    async logout() {
      this.connected = false
      const res = await axios.post('api/logout')
      console.log(res.data)
      router.push('/')
    }
  }
})
