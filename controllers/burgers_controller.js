const express = require(`express`);

const router = express.Router();

const burger = require(`../models/burger`);

router.get(`/`, (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            
        }
    })
})









module.exports = router;