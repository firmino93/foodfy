const data = require('../data')

exports.home = function(req, res) {
    return res.render("user/index", {data});
}

exports.about = function(req, res) {
    return res.render("user/sobre", {data});
}

exports.recipes = function(req, res) {
    return res.render("user/receitas", {recipes: data});
}

exports.recipesIndex = function (req, res) {
    const recipes = data // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    return res.render("user/recipes", {recipe: recipes[recipeIndex]})
}