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
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  // Récupération des noms existants
  const result_name = await client.query({
    text: 'SELECT name FROM users'
  })
  
  // Nom déjà utilisé dans la base de donnée ?
  const user_name = result_name.rows.find(a => a.name === name)
  if (user_name) {
    res.status(400).json({ message: 'Nom déjà utilisé'})
    return
  }

  // Récupération des email existants
  const result_email = await client.query({
    text: 'SELECT email FROM users'
  })
  
  // Email n'a pas le bon format
  if (!/\S+@\S+\.\S+/.test(email)) {
    res.status(400).json({ message: `Le format de l'email est incorrect`})
    return
  }

  // Email déjà utilisé dans la base de donnée ?
  const user_email = result_email.rows.find(a => a.email === email)
  if (user_email) {
    res.status(401).json({ message: 'Email déjà utilisé'})
    return
  }

  // Mot de passe trop faible
  if (password.length < 4) {
    res.status(401).json({ message: 'Mot de passe trop simple'})
    return
  }

  // Hashage du mot de passe
  const hash = await bcrypt.hash(password, 10)
  
  // Stockage de l'utilisateur
  client.query({
    text: 'INSERT INTO users(name,email,password) VALUES ($1,$2,$3)',
    values: [name,email,hash]
  })
  res.status(200).json({ message: 'Enregistré avec succès'})
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
    res.status(400).json({ message: 'Email introuvable'})
    return
  }
  
  // Vérification du mot de passe
  if (await bcrypt.compare(password, user.password)) {
    // Déjà connecté
    if(req.session.userId == user.id) {
      res.status(401).json({ message: 'Déjà connecté'})
    }else {
      // Connexion
      req.session.userId = user.id
      res.status(200).json({ message: 'Connecté avec succès'})
    }
    return
  }
  // Mauvais mot de passe
  res.status(400).json({ message: 'Mauvais mot de passe'})
})

/**
* Cette route permet de renvoyer l'utilisateur connecté
*/
router.get('/me', async (req,res) => {
  // Connecté ?
  if (typeof req.session.userId !== 'number') {
    res.status(401).send({ message: `Vous n'êtes pas connecté` })
    return
  }

  // Récupération des email existants
  const result = await client.query({
    text: 'SELECT name,email,id FROM users'
  })

  // Récupération de l'utilisateur connecté
  const user = result.rows.find(a => a.id === req.session.userId)
  res.status(200).json(user)
})

/**
 * Cette route permet de modifier le nom de l'utilisateur
 */
router.post('/me', async (req,res) => {
  const name = req.body.name

  // Connecté ?
  if (typeof req.session.userId !== 'number') {
    res.status(401).send({ message: `Vous n'êtes pas connecté` })
    return
  }

  // Nom d'utilisateur pas utilisé ?
  const result_name = await client.query({
    text: 'SELECT name FROM users'
  })
  
  // Nom déjà utilisé dans la base de donnée ?
  const user_name = result_name.rows.find(a => a.name === name)
  if (user_name) {
    res.status(400).json({ message: 'Nom déjà utilisé'})
    return
  }

  // Edit name
  await client.query({
    text: `UPDATE users SET name = $1 WHERE id = $2`,
    values: [name,req.session.userId]
  })
  res.status(200).json({ message: 'Nom changé avec succès'})
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
    text: `SELECT algorithms.id,algorithms.name,algorithms.description,algorithms.url,COALESCE(rating.rating,0) as rating,COALESCE(personal_rating.value, 0) as personal_rating
    FROM algorithms 
    LEFT JOIN (SELECT votes.algo_id,SUM(votes.value) as rating FROM votes GROUP BY votes.algo_id) as rating ON rating.algo_id = algorithms.id
    LEFT JOIN (SELECT votes.algo_id,votes.value FROM votes WHERE votes.user_id = $1) as personal_rating ON personal_rating.algo_id = algorithms.id
    WHERE algorithms.url = $2`,
    values: [req.session.userId,algoURL]
  })
  console.log(result.rows[0])
  res.json(result.rows[0])
})

router.post('/contact', async (req,res) => {
  const name = req.body.name
  const message = req.body.message

  await client.query({
    text: 'INSERT INTO contact(email,message) VALUES ($1,$2)',
    values: [name,message]
  })

  res.status(200).json({ message: 'Succesfully sent'})
})

/**
 * Cette route permet de voter pour une définition
 */
router.post('/vote', async(req,res) => {
  const algoId = parseInt(req.body.algoId)
  const value = parseInt(req.body.value)
  console.log(algoId,value)

  // Connecté ?
  if (typeof req.session.userId !== 'number') {
    res.status(401).send({ message: `Vous n'êtes pas connecté` })
    return
  }

  // Suppresion de l'ancien vote:
  await client.query({
    text: 'DELETE FROM votes WHERE algo_id = $1 AND user_id = $2',
    values: [algoId,req.session.userId]
  })

  // Création du nouveau vote:
  if (value != 0) {
    await client.query({
      text: 'INSERT INTO votes(user_id,algo_id,value) VALUES ($1,$2,$3)',
      values: [req.session.userId,algoId,value]
    })
  }
  res.status(200).send({ message: 'Vote enregistré avec succès'})
})

module.exports = router