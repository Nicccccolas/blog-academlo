const router = require('express').Router()
const { session } = require('../middleware/auth.middleware')
const passportJWT =  require('../middleware/auth.middleware')

const userServices = require('./users.services')

router.get('/', passportJWT.authenticate('jwt', {session: false}), userServices.getAllUser)//? /api/v1/users
router.post('/', userServices.postUser) //? /api/v1/users
router.get('/me', passportJWT.authenticate('jwt', {session: false}), userServices.getMyUser) //? /api/v1/users/me

router.get('/:id', userServices.getUserById) //? /api/v1/users/:id
router.patch('/:id', userServices.patchUser)//? /api/v1/users/:id
router.delete('/:id', userServices.deleteUser) //? /api/v1/users/:id


module.exports = router