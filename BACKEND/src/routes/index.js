const express = require ('express');
const router = express.Router();
const offers = require('./offers') ;
const categories = require('./categories') ;


router.get('/',(req,res)=>{
    res.send('Market Place')
});

router.use("/offers", offers);
router.use("/categories", categories);

module.exports = router;