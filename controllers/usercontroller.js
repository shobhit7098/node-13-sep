const users =  require('../user.json')
function getAllusers(req,res){
    try {
        res.json(users)
    } catch (err) {
        
    }
}
module.exports = {
    getAllusers
}