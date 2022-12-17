var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/usersList', async function(req, res, next){
  const query = req.query;
  console.log(query);
  try{
    const result = await usersController.getAllUsers(query);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.post('/adduser', async function(req, res, next){
  const body = req.body;
  console.log(body);
  try{
    const result = await usersController.addUser(body);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.delete('/:id', async function(req, res, next){
  const query = req.params.id;
  console.log(query)
  try{
    const result = await usersController.deleteUser(query);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.put('/:id', async function(req, res, next){
  const query = req.body;
  console.log(query);
  try{
    const result = await usersController.updateUser(query);
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).send(error);
  }
});

module.exports = router;