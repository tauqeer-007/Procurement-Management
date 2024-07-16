const express = require('express')
const router = express.Router()
const AuthController = require('../../src/controllers/AuthController')


router.get("/", (req, res) => {
    res.json({ "Api": "Procuement Management API", version: "1" })
  })

/*add auth routes*/
router.post('/auth/sign-in', AuthController.signIn)
router.get('/auth/users', AuthController.getUsers)


module.exports = router