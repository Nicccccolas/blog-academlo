const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./post.models')

const initModels = () => {

    //* has model1.hasOne(model2) model 2 tiene la llave 
    
    //* belongs model2.belongsTo(model1) model 2 tiene la llave foranea
    
    //? 1 category tiene M posts
    Categories.hasMany(Posts)
    //? 1 post pertenece a 1 category
    Posts.belongsTo(Categories)
}

module.exports = initModels