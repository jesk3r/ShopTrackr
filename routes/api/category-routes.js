const router = require('express').Router();
const { json } = require('body-parser');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try{
    
    const category = await Category.findAll({
      include: [{
        model: Product,
        required: true,
      }]
    });

    res.json(category)
  }catch(e){
    console.log(e)
    res.status(500)
  }
  
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try{
    const category = await Category.findAll({
      include: [{
        model: Product,
        required: true, 
      }],
      where: { id: req.params.id}
    });


    res.json(category)
  }catch(e){
    console.log(e)
    res.status(500)
  }

});

router.post('/', async (req, res) => {
  // create a new category

  try{

    const newCat = await Category.create({category_name: req.body.category_name})
  
    res.json(newCat)
    
  }catch(e){
    console.log(e)
    res.status(500)
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value


  try{
    const categoryUpdate = await Category.update(
      {category_name: req.body.category_name}, {where: {id: req.params.id}}
      )
  
    res.json(categoryUpdate)

  }catch(e){
    console.log(e)
    res.status(500).json()
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value


  try{

    const delCategoy = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
  
    res.json(delCategoy)

  }catch(e){
    console.log(e)
    res.status(500).json()
  }


});

module.exports = router;
