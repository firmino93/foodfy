const data = require('../data.json')

exports.home = (req, res)=>{
  res.render('foodfy/home', { items: data.recipes })
}
exports.sobre =  (req, res)=>{
  res.render('foodfy/sobre')
}
exports.receitas =  (req, res)=>{
  res.render('foodfy/receitas', {items: data.recipes})
}
exports.listreceita =  (req, res)=>{
  const recipeIndex = req.params.index;
  return res.render('foodfy/receita', { items: data.recipes[recipeIndex]})
  
}
