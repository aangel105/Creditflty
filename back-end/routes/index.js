let express = require("express");

let router = express.Router();

const db = require("../db/queries");

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Instructions" });
});

router.get("/users", db.getAllUsers);

router.get("/expenditure", db.getExpenditure);

router.get("/creditcards", db.getAllCreditCards);

router.get("/cards/:id", db.getCreditCardsByExpenditureId);

router.get("/userExpenses/:id", db.getUserExpensesByUserId);

router.get("/login", db.userLogin);

router.post("/addUser", db.userSignUp);

router.post("/addedExpenses", db.addExpenses);

module.exports = router;
