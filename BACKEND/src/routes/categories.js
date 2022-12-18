const  express = require('express');
const router = express.Router();

const pool = require('../database')


// GET CATEGORIES
router.get("/", async (req, res, next) => {
    try {
        const categories= await pool.query('SELECT * FROM `category`')
        res.json(categories)
    } catch (error) {
        res.status(404).json({ error: "Error : Products not found" })
    }

});

module.exports=router;