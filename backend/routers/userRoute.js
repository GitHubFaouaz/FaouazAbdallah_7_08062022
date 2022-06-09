const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers'); 

// user display 
router.get('/', userControllers.getAllUsers); // accedé à tous les utilisateurs
router.get('/:id',userControllers.infoUser); // accedé à un seul les utilisateur
router.put("/:id",userControllers.updateUser);// modification d'un utilisateur
router.delete("/:id",userControllers.deleteUser);// suppresion d'un utilisateur




module.exports = router;