const express = require('express');
const usercontrollers = require('../controllers/usercontroller')
const router =express.Router();

router.get('/users',(req,res)=>{
      usercontrollers.getAllusers(req ,res)
})
router.get('/user/:id',(req,res)=>{
    usercontrollers.getUsers(req ,res)
})
module.exports = router
