const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data

  // include: [{
  //   model: Product,
  //   required: true,
  // }]


  try{
    
    const tag = await Tag.findAll({include: [{
      model: Product,
      required: true,

      }
      ]
  });

    res.json(tag)
  }catch(e){
    console.log(e)
    res.status(500)
  }

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tag = await Tag.findOne({
      include: [{
        model: Product,
        required: true,
       
      }],
      where: { id: req.params.id }
    });

    res.json(tag)
  }catch(e){
    console.log(e)
    res.status(500).json()
  }

});

router.post('/', async (req, res) => {
  // create a new tag

  try{
    const newTag = await Tag.create({tag_name: req.body.tag_name})

    res.json(newTag)
  }catch(e){
    console.log(e)
    res.status(500)
  }

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagUpdate = await Tag.update(
      {tag_name: req.body.tag_name}, {where: {id: req.params.id}}
      )
      console.log(req.body)
      console.log(req.params)
    res.json(tagUpdate)
  }catch(e){
    console.log(e)
    res.status(500).json()
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const delTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
  
    res.json(delTag)
  }catch(e){
    console.log(e)
    res.json(500).json()
  }
});

module.exports = router;
