const  express = require('express');
const router = express.Router();

const pool = require('../database')

//GET ALL THE OFFERS WITH THE DETAILS
router.get('/',async(req,res,next)=>{

        try{
            //const offers= await pool.query(`SELECT * FROM 'merchantoffers'`)
          // const offers= await pool.query('SELECT * FROM offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory LEFT JOIN  discount dis ON dis.offer_details_id=ot.id')
          const offers= await pool.query('SELECT * FROM offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory ')
          return offers.length === 0 ? res.json(["No Offers"]) : res.json(offers)
        }catch (error) {
            next(error)
        }
})

//GET 1 OFFER BY THE ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        console.log(id)

        const offer = await pool.query(`SELECT * FROM offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN country c ON ot.idcountry=c.idcountry INNER JOIN category cat ON ot.idcategory=cat.idcategory WHERE o.idoffer='${id}'`)
        return offer.length === 0 ? res.json(["No Offer"]) : res.send(offer[0])
    } catch (err) {
        next(err)
    }
});


router.post('/getoffersbytitle',async(req,res,next)=>{
    const {title} = req.body
    try {           
        //const offers= await pool.query(`SELECT * FROM 'merchantoffers' WHERE title LIKE '%${title}%'`)
        //const offers= await pool.query(`SELECT * FROM (offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory LEFT JOIN  discount dis ON dis.offer_details_id=ot.id) WHERE title LIKE '%${title}%'`)
        const offers= await pool.query(`SELECT * FROM (offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory ) WHERE title LIKE '%${title}%'`)
        console.log('offers',offers)
        return offers.length === 0 ? res.json(["No Offers"]) : res.json(offers)
    } catch (error) {
        next(error)
    }
})

router.post('/getoffersbycategory',async(req,res,next)=>{
    const {category} = req.body
            
        try {
            //const offers= await pool.query(`SELECT * FROM (offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory LEFT JOIN  discount dis ON dis.offer_details_id=ot.id) WHERE category='${category}'`)
            const offers= await pool.query(`SELECT * FROM (offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory) WHERE category='${category}'`)
            return offers.length === 0 ? res.json(["No Offers"]) : res.json(offers)
        } catch (error) {
            next(error)
        }
    
})



// router.get('/paises',async(req,res)=>{
//     const offers= await pool.query('SELECT * FROM offer,')
//     res.json(offers)
// })



//SELECT * FROM (offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory) WHERE country='germany' 	
//SELECT * FROM (offer o INNER JOIN offer_details ot ON o.idoffer=ot.idoffer INNER JOIN  country c ON ot.idcountry=c.idcountry INNER JOIN  category cat ON ot.idcategory=cat.idcategory) WHERE category='Hardware' 	

module.exports=router;