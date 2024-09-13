const users =  require('../user.json')
function getAllusers(req,res){
    try {
        res.json(users)
    } catch (err) {
        
    }
}
function getUsers(req,res){
    try {
        let id = parseInt(req.params.id)
        let user = users.find((user)=> user.id == id )
        res.json(user)
    } catch (err) {
        
    }
}
module.exports = {
    getAllusers,
    getUsers
}