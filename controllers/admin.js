const fs = require('fs')
const data = require('../data.json')

exports.index = (req, res)=>{
  res.render('admin/index', { items: data.recipes })
}
exports.create = (req, res)=>{
  res.render('admin/create')
}
exports.show = (req, res)=>{
  const recipeIndex = req.params.index;
  const foundRecipe = data.recipes[recipeIndex]
  const recipe ={ 
    ...foundRecipe,
    recipeIndex 
  }
  return res.render('admin/detalhe', { recipe })
}

exports.post = (req, res)=>{
  const keys = Object.keys(req.body)
  for (key of keys){
    if(req.body[key] == "")
    return res.send('Por favor preencha todos os campos')
  }
  let {image , title, author, ingredients, preparation, information} = req.body
  author = 'Joao Carlos';

  let id = 1
  const lastRecipe = data.recipes[data.recipes.length - 1]
  if(lastRecipe){
      id = lastRecipe.id + 1
  }
  
  data.recipes.push({
    id,
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  })

fs.writeFile('data.json', JSON.stringify(data, null, 2), (err)=>{
  if(err) return res.send('Erro ao gerar arquivo')
  return res.redirect('/admin/recipes')
})
}

exports.edit = (req, res)=>{
  const {id} = req.params
  const foundRecipe = data.recipes[id]
  
  if(!foundRecipe) return res.send('Recipe not found!')
  const recipe = {
    ...foundRecipe
  }
  return res.render('admin/edit', {recipe})
}

exports.put = (req, res) =>{
  const { id } = req.body
  let index = 0
  const foundRecipe = data.recipes.find((recipe, foundIndex)=>{
    if(id == recipe.id){
      index = foundIndex
      return true
    }
  }) 
  if(!foundRecipe) return res.send('Recipe not found!')

  const recipe ={
    ...foundRecipe,
    ...req.body
  }
  data.recipes[index] = recipe;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('White error')
    return res.redirect('/admin/recipes')
})}

exports.delete = (req, res) =>{
  const { id } = req.body
  const filteredRecipe = data.recipes.filter((recipe)=>{
    return recipe.id != id
  })
  data.recipes = filteredRecipe
  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('White error')
    return res.redirect('/admin/recipes')
})}