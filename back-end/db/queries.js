const db = require('./connection');

function getAllUsers(req, res, next){
    db
    .any("SELECT * FROM users")
    .then(function(data){
        res.status(200).json({
            status: 'success',
            data: data,
            message: 'Retrieved All Users'
        });
    })
    .catch(function(err){
        return next(err)
    })
}

function getSingleUser(req, res, next){
    db
    .any('SELECT')
}

module.exports = {
    getAllUsers: getAllUsers,
}