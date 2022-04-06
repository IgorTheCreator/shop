let express = require('express');
let router = express.Router();
const {clothes} = require('../models');
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cart.html', function(req, res, next) {
  res.render('cart');
});

router.get('/category.html', async function(req, res, next) {
  let clothesModel = await clothes.findAll();
  console.log(clothesModel);
  res.render('category');
  res.render('category.ejs', {clothesModel});
});

router.get('/checkout.html', function(req, res, next) {
  res.render('checkout');
});

router.get('/contact.html', function(req, res, next) {
  res.render('contact');
});

router.get('/product.html', function(req, res, next) {
  res.render('product');
});

router.get('/index.html', function(req, res, next) {
  res.render('index');
});

module.exports = router;
