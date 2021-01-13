const Home = window.httpVueLoader('./components/Home.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Visualisation = window.httpVueLoader('./components/Visualisation.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/profil', component: Profil},
  { path: '/visualise/:algo', component: Visualisation},
  { path: '/:ref', component: Home }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    algorithms: [],
    algorithm: {},
    connected: false,
    user: {},
    errors: {
      register: '',
      login: '',
      newDefinition: '',
      profil: ''
    }
  },
  async mounted () {
    const res = await axios.get('api/algorithms')
    this.algorithms = res.data
    this.me()
  },
  methods: {
    async createAccount (newAccount) {
      try {
        const res = await axios.post('api/register', newAccount)
        console.log(res.data)
        router.push('/login')
      }
      catch (error) {
        this.errors.register = error.response.data.message
        console.log(error.response.data);
      }
    },
    async login (loginInfos) {  
      try {
        const res = await axios.post('api/login', loginInfos)
        console.log(res.data)
        this.me()
        router.push('/')
      }
      catch (error) {
        this.errors.login = error.response.data.message
        this.connected = false
        console.log(error.response.data);
      }
    },
    async logout() {
      this.connected = false
      const res = await axios.post('api/logout')
      console.log(res.data)
      router.push('/')
    },
    async me() {
      try {
        const res = await axios.get('api/me')
        this.user = res.data
        this.connected = true
      }
      catch (error) {
        console.log(error.response.data);
      }
    },
    async getAlgorithm (algo) {
      console.log(algo)
      const res = await axios.get('api/algorithm/' + algo)
      this.algorithm = res.data
      console.log(res.data)
    },
    async submitMessage(parameters) {
      console.log(parameters)
      const res = await axios.post('api/contact', parameters)
    },
    async editName(parameters) {
      const res = await axios.post('api/me', parameters)
      this.me()
    }
  }
})
