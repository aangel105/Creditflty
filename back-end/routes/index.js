var express = require('express');
var router = express.Router();

const db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Instructions' });
});

router.get('/users', db.getAllUsers);

router.get('/expenditure',db.getExpenditure);

router.get('/creditcards', db.getAllCreditCards);

router.get('/cards/:id',db.getCreditCardsbyExpenditureId);

router.get('/userexpenses/:id',db.getUserExpensesByUserId);

module.exports = router;
