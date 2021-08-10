const Category = require("../models/category");
const { errorHandler } = require("../helpers/dbErrorsHandler");

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: 'Category Not found'
      });
    }

    req.category = category;
    next();
  });
};


exports.read = (req, res) => {
  let category = req.category;

  return res.json(category);
};

exports.create = (req, res) => {
  const category = new Category(req.body);

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

exports.update = (req, res) => {
  const category = req.category

  category.name = req.body.name
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Error updating item",
      });
    }

    res.json(data)
  })
}

exports.remove = (req, res) => {
  const category = req.category

  category.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Error deleting category",
      });
    }

    res.json({
      message: "Category deleted"
    })
  })
}

exports.list = (req, res) => {
  Category.find().exec((err, data) => {
    if(err){
      return res.status(400).json({
        error: errorHandler(err)
      })
    }

    res.json(data)
  })
}