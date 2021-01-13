const express = require('express')
const router = express.Router()
//const articles = require('../data/articles.js')
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
 connectionString: process.env.DATABASE_URL,
 ssl: {
     rejectUnauthorized: false
 }
})

client.connect()

/**
 * Cette route permet d'inscrire un utilisateur
 */
router.post('/register', async (req,res) => {
    const email = req.body.email
    const password = req.body.password
  
    // Récupération des email existants
    const result = await client.query({
      text: 'SELECT email FROM users'
    })
  
    // Email déjà utilisé dans la base de donnée ?
    const user_email = result.rows.find(a => a.email === email)
    if (user_email) {
      res.status(400).json({ message: 'Email already used'})
      return
    }
  
    // Hashage du mot de passe
    const hash = await bcrypt.hash(password, 10)
  
    // Stockage de l'utilisateur
    client.query({
      text: 'INSERT INTO users(name,email,password) VALUES ($1,$2)',
      values: [email,hash]
    })
    res.status(200).json({ message: 'Successfully registered'})
  })
  
  /**
   * Cette route permet à l'utilisateur de se connecter
   */
  router.post('/login', async (req,res) => {
    const email = req.body.email
    const password = req.body.password
  
    // Récupération des email existants
    const result = await client.query({
      text: 'SELECT email,password,id FROM users'
    })
  
    // Utilisateurs absent de la base de donnée ?
    const user = result.rows.find(a => a.email === email)
    if (!user) {
      res.status(400).json({ message: 'Email cannot be found'})
      return
    }
  
    // Vérification du mot de passe
    if (await bcrypt.compare(password, user.password)) {
      // Déjà connecté
      if(req.session.userId == user.id) {
        res.status(401).json({ message: 'Already connected'})
      }else {
        // Connexion
        req.session.userId = user.id
        res.status(200).json({ message: 'Successfully connected'})
      }
      return
    }
    // Mauvais mot de passe
    res.status(400).json({ message: 'Wrong password'})
  })

/**
* Cette route permet de renvoyer l'utilisateur connecté
*/
router.get('/me', async (req,res) => {
  // Connecté ?
  if (typeof req.session.userId !== 'number') {
    res.status(401).send({ message: 'No connected users' })
    return
  }

  // Récupération des email existants
  const result = await client.query({
    text: 'SELECT email,id FROM users'
  })

  // Récupération de l'utilisateur connecté
  const user = result.rows.find(a => a.id === req.session.userId)
  res.status(200).json(user)
})

/**
 * Cette route permet de deconnecter l'utilisateur
 */
router.post('/logout', async (req,res) => {
  req.session.destroy()
  res.status(200).json({ message: 'Succesfully disconnected'})
})


router.get('/algorithms', async (req,res) => {
  // Récupération des algo existants
  const result = await client.query({
    text: 'SELECT * FROM algorithms'
  })
  res.json(result.rows)
})

router.get('/algorithm/:algoURL', async (req,res) => {
  const algoURL = req.params.algoURL
  console.log("HELLOOOOO")
  console.log(algoURL)
  const result = await client.query({
    text: 'SELECT * FROM algorithms WHERE url = $1',
    values: [algoURL]
  })
  console.log(result.rows[0])
  res.json(result.rows[0])
})

module.exports = router