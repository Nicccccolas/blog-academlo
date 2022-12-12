//? Middleware para proteger mis rutas 

//? Passport tiene diferentes estrategias para manejar logins(bearer, jwt, facebook, google oath)
const JwtStrategy = require('passport-jwt').Strategy

//? Extraer el token de los header de mi petición
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
// const { ExtractJwt } = require('passport-jwt')

const jwtSecret = require('../../config').api.jwtSecret
const {findUserById} = require('../users/users.controllers')

    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'), //? Authorization JWT token
        secretOrKey : jwtSecret
    }
    passport.use(
        new JwtStrategy(options, async (tokenDecoded, done) => {
            //? done(error, tokenDecoded)
            try {
                const user = await findUserById(tokenDecoded.id)
                if(!user){
                    return done(null, false) //? No existe error, pero tampoco existe un usuario
                }
                return done(null, tokenDecoded) //? No existe un error, pero si un usuario
            } catch (error) {
                return done(error, false) //? Sí existe un error, pero no existe un usuario 
            }
        })
    )

//? Esto seria el tokenDecoded: 
//* {
//*   "id": "e5f425da-6f19-4bdb-88ea-130a6e2bc9ce",
//*   "user_name": null,
//*   "role": "normal",
//*   "iat": 1670461403
//* }



module.exports = passport

//? También se puede exportar cambiandole el nombre, de la siguiente manera:
//* module.exports = {
//*     passportJWT : passport
//* }
