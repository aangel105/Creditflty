const db = require("./connection");

function getAllUsers(req, res, next) {
  db.any("SELECT * FROM users")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Retrieved All Users"
      });
    })
    .catch(err => {
      return next(err);
    });
}

function getExpenditure(req, res, next) {
  db.any("SELECT * FROM expenditure")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Retrieved User Expenses"
      });
    })
    .catch(err => {
      return next(err);
    });
}

function getAllCreditCards(req, res, next) {
  db.any("SELECT * FROM creditcards")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Retrieved All CreditCards"
      });
    })
    .catch(err => {
      return next(err);
    });
}

function getCreditCardsbyExpenditureId(req, res, next) {
  const expenditureId = req.params.id;
  db.any(
    "SELECT creditcards.id, card_name, card_ratings, card_review_text, card_image_url FROM creditcards INNER JOIN expenditure ON creditcards.expenditure_id = expenditure.id WHERE expenditure.id = ${id}",
    {
      id: req.params.id
    }
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Retrieved Cards By Expenditure Id"
      });
    })
    .catch(err => {
      return next(err);
    });
}

function getUserExpensesByUserId(req, res, next) {
  const usersId = req.params.id;
  db.any(
    "SELECT * FROM users JOIN expenditure ON users.id = expenditure.users_id WHERE users.id=${id}",
    {
      id: req.params.id
    }
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Retrieved users expenses by userId"
      });
    })
    .catch(err => {
      return next(err);
    });
}

function userSignUp(req, res, next) {
  console.log("req:", req.body.first_name);
  console.log("POSTED!!!!");

  db.none(
    "INSERT INTO users (first_name, last_name, email, password_digest) VALUES (${first_name}, ${last_name}, ${email}, ${password_digest})",
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password_digest: req.body.password_digest
    }
  )
    .then(data => {
      console.log("user added!!");
      console.log(data);
      res.status(200).json({
        Method: "POST",
        status: "Success",
        data: data,
        message: "New User Registered"
      });
    })
    .catch(err => {
      return next(err);
    });
}

function userLogin(req, res, next) {
  console.log("User Login!!");

  db.any("SELECT * FROM users")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Retrieved All Users"
      });
    })
    .catch(err => {
      return next(err);
    });
}

module.exports = {
  getAllUsers: getAllUsers,
  getExpenditure: getExpenditure,
  getAllCreditCards: getAllCreditCards,
  getCreditCardsbyExpenditureId: getCreditCardsbyExpenditureId,
  getUserExpensesByUserId: getUserExpensesByUserId,
  userSignUp: userSignUp,
  userLogin: userLogin
};
