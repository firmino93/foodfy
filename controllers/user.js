const data = require('../data')

exports.home = function(req, res) {
    return res.render("index", {data});
}

exports.about = function(req, res) {
    return res.render("sobre", {data});
}

exports.recipes = function(req, res) {
    return res.render("receitas", {recipes: data});
}

exports.recipesIndex = function (req, res) {
    const recipes = data // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    return res.render("recipes", {recipe: recipes[recipeIndex]})
}