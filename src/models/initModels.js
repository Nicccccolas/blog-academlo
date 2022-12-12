const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./post.models')

const initModels = () => {

    //* has model1.hasOne(model2) model 2 tiene la llave 
    
    //* belongs model2.belongsTo(model1) model 2 tiene la llave foranea
    
    //? fk = Posts
    //? 1 post pertenece a 1 category
    Posts.belongsTo(Categories)
    //? 1 category tiene M posts
    Categories.hasMany(Posts)

    //? fk = Posts
    //? 1 post pertenece a 1 user
    Posts.belongsTo(Users)
    //? 1 user tiene muchos post
    Users.hasMany(Posts)
    
}

module.exports = initModels

/*
? ------  1:1 -----
* ------belongsTo
* ------hasOne
? ------ 1:M ------
* ------belongsTo
* ------hasMany
? ------  M:M -----
* ------belongsToMany
* ------hasMany
? ------ 2° forma M:M --> 2 relaciones 1:M ------ más recomendable
* ------belongsTo
* ------hasMany
*/