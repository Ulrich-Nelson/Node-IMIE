const Recipes = require('../models/recipesModel');


module.exports.checkIngredients = async (req, res, next) => {

    const data = req.body;
    let retour = { error: true, message: 'The settings ' }

    if (data.length === 0)
        return res.status(406).json({ error: true });

    for (const key of Object.keys(data)) {
        let isOk = await Recipes.countDocuments({ 'ingredients.name': { $regex: `${key}`, $options: 'i' } });
        if (isOk === 0) // 13
            retour.message += key + ', '
    }

    if (retour.message.length === 13)
        next();
    else {
        retour.message = retour.message.slice(0, -2)
        retour.message += ' is not define'
        return res.status(406).json(retour);
    }
}