const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({        // find all categories 
    include: [Product],   // be sure to include its associated Products
  })
  .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});
  

router.get('/:id', (req, res) => {
  Category.findOne({                  // find one category by its `id` value 
    where: {                          
      id: req.params.id,
    },
    include: [Product],                 // be sure to include its associated Products
  })
  .then((category) => res.json(category))
  .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  Category.create(req.body)                // create a new category
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
  // create a new category
});

router.put('/:id', (req, res) => {          // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
      // update a category by its `id` value
    },
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  Category.delete({                           // delete a category by its `id` value
    where: {
      id: req.params.id,
    },
  })
  // delete a category by its `id` value
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

module.exports = router;
