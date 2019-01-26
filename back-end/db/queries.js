const db = require('./connection');

function getAllUsers(req, res, next) {
    db
        .any("SELECT * FROM users")
        .then((data) => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Retrieved All Users'
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                error: err
            })
        })
}

function getExpenditure(req, res, next) {
    db
        .any("SELECT * FROM expenditure")
        .then((data) => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Retrieved User Expenses'
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                error: err
            })
        })
}

function getAllCreditCards(req, res, next) {
    db
        .any("SELECT * FROM creditcards")
        .then((data) => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Retrieved All CreditCards'
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                error: err
            })
        })
}

function getCreditCardsbyExpenditureId(req, res, next) {
    const expenditureId = req.params.id
    db
        .any("SELECT creditcards.id, card_name, card_ratings, card_review_text, card_image_url FROM creditcards INNER JOIN expenditure ON creditcards.expenditure_id = expenditure.id WHERE expenditure.id = ${id}", {
            id: req.params.id
        })
        .then((data) => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Retrieved Cards By Expenditure Id'
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                error: err
            })
        })
}

function getUserExpensesByUserId(req, res, next) {
    const usersId = req.params.id
    db
        .any("SELECT * FROM users JOIN expenditure ON users.id = expenditure.users_id WHERE users.id=${id}", {
            id: req.params.id
        })
        .then((data) => {
            res.status(200).json({
                status: 'Success',
                data: data,
                message: 'Retrieved users expenses by userId'
            })
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                error: err
            })
        })
}

module.exports = {
    getAllUsers: getAllUsers,
    getExpenditure: getExpenditure,
    getAllCreditCards: getAllCreditCards,
    getCreditCardsbyExpenditureId: getCreditCardsbyExpenditureId,
    getUserExpensesByUserId: getUserExpensesByUserId,
}