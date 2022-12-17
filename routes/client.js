var express = require('express');
var router = express.Router();
var { clientsController } = require('../controllers/clientController');


/* GET users listing. */
router.get('/clientList', async function(req, res, next){
  const query = req.query;
  console.log(query);
  try{
    const result = await clientsController.getAllClients(query);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.post('/addclient', async function(req, res, next){
  const body = req.body;
  console.log(body);
  try{
    const result = await clientsController.addClient(body);
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
    const result = await clientsController.delClient(filter);
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
    const result = await clientsController.updateClient(body);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

module.exports = router;