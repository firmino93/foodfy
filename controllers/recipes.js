exports.index = function(req, res) {

    return res.render("recipes/index")
}

exports.create = function(req, res) {
    return res.render("recipes/create")
}