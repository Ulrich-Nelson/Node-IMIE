const ingredients = require('express').Router();
const middlewares = require('../middlewares');
const controller = require('../controllers/ingredients');




ingredients.post('/ingredients', middlewares.checkIngredients, controller.searchIngredients)

ingredients.get('/equipement', (req, res) => {
    console.log('All equipement ', req.params.type);
    // Cas de figur. url = /all/:type?filter=apero
    if (req.param('apero') !== undefined)
        console.log('Add filter ', req.param('apero'))
    res.end('Fin')
})

module.exports = ingredients;