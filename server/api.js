const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Promise = require('promise');
mongoose.Promise = Promise;
const cors = require('cors');


const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true
};


const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.text());
router.use(bodyParser.json({type: "application/json"}));

router.use(cors(corsOptions));
router.use(express.static('../client'));


const databaseUrl = 'mongodb://user:password@ds127105.mlab.com:27105/chopstick';

var menuSchema = mongoose.Schema({
  name: {type: String},
  price: {type: Number},
  category: {type: String},
  ingredients: {type: Array},
  description: {type: String, default: ''}

});

mongoose.connect(databaseUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Open")
});

var MenuItem = mongoose.model('menuitem', menuSchema);

var silence = new MenuItem({
  name: 'Silensce',
  price: 333,
  category: 'cooked',
  ingredients: ['one'],
  description: 'good'
});


// ################################################################################
//
router.post('/postItem', function (req, res) {


  console.log('hit');

  var menuitem = new MenuItem(req.body)
  menuitem.save(function (err) {
    if (err) throw (err);
    console.log('Says it worked')
    res.sendStatus(200);
  });


});

router.get('/getMenu', function (req, res) {
  MenuItem.find(function (err, menuitems) {
    if (err) return console.error(err);
    res.json(menuitems);
  })
});

//
// router.get('/posts', (req, res) = > {
//   db.studios.find().toArray(function (err, results) {
//   res.json(results);
//   // send HTML file populated with quotes here
// });
// })
// router.get('/city/:city', (req, res) = > {
//   db.studios.find({studioCity: req.params.city}).toArray(function (err, results) {
//   res.json(results);
//   // send HTML file populated with quotes here
// });
// })
// router.get('/id/:id', (req, res) = > {
//   db.studios.find({_id: ObjectId(req.params.id)}).toArray(function (err, results) {
//   res.json(results);
//   // send HTML file populated with quotes here
// });
// })
module.exports = router;
