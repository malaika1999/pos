var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : 'profile',
    failureRedirect : 'signup'
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect : 'profile',
    failureRedirect : 'login'
}));
router.get('/profile', isLoggedIn, (req, res) => {
    res.status(200).json(req.user);
});
router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.status(200).json({
        'message': 'successfully logout'
    });
});
const getAllController = require("../../controllers/employee/getall");
const deleteOneController = require("../../controllers/employee/deleteone");
const getOneController = require("../../controllers/employee/getone");
const updateOneController = require("../../controllers/employee/updateone");
router.get("/getall/", getAllController.allEmployees);
router.delete("/delete/:eId", deleteOneController.deleteEmployee);
router.get("/getone/:eId", getOneController.oneEmployee);
router.put("/update/:eId",isLoggedIn, updateOneController.updateEmployee);
module.exports = router;

//route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}