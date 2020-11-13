const Recipes = require('../models/recipesModel');

module.exports.searchIngredients = async (req, res) => {


    const data = req.body;
    let entityAnd = []
    let entityOr = [];
    let listRecipes;

    for (const key of Object.keys(data))
        if (data[key] == 'true')
            entityAnd.push({ 'ingredients.name': { $regex: `${key}`, $options: 'i' } })
        else
            entityOr.push({ 'ingredients.name': { $regex: `${key}`, $options: 'i' } })

    if (entityAnd.length !== 0 && entityOr.length !== 0)
        listRecipes = await Recipes.find({})
            .and(entityAnd)
            .or(entityOr)
            .exec();
    else if (entityAnd.length === 0 && entityOr.length !== 0)
        listRecipes = await Recipes.find({})
            .or(entityOr)
            .exec();
    else if (entityOr.length === 0 && entityAnd.length !== 0)
        listRecipes = await Recipes.find({})
            .and(entityAnd)
            .exec();
    else
        listRecipes = []

    if (listRecipes.length === 0)
        return res.status(200).json({ error: false, message: 'No recipes' });

    listRecipes.map((recipes) => {
        recipes.link = undefined;
        recipes.__v = undefined;
        recipes.createdAt = undefined;
        recipes.updatedAt = undefined;
        recipes.ingredients.map((ingredient) => {
            return ingredient = (ingredient.quantity != null) ? ingredient.quantity.toString() : '' + ingredient.gramming + ' ' + ingredient.name.toString()
        })
    })

    return res.status(200).json(listRecipes);
}