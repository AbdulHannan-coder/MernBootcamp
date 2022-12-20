var express = require('express');
var router = express.Router();
var adminsController = require('../controllers/adminController');


/* GET users listing. */
router.get('/adminslist', async function(req, res, next){
  const query = req.query;
  console.log(query);
  try{
    const result = await adminsController.getAllAdmins(query);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.post('/addadmin', async function(req, res, next){
  const body = req.body;
  console.log(body);
  try{
    const result = await adminsController.addAdmin(body);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.delete('/:id', async function(req, res, next){
  const id = req.params.id;
  console.log(id)
  try{
    const filter = { _id: id };
    const result = await adminsController.delAdmin(filter);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.put('/', async function(req, res, next){
  const body = req.body;
  console.log(body);
  try{
    const result = await adminsController.updateAdmin(body);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

module.exports = router;