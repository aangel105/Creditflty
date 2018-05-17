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

module.exports = {
    getAllUsers: getAllUsers,
}