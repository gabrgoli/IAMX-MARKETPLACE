const mysql=require('mysql');
const {promisify} = require('util');

// module.exports={
//     database:{
//         host:'localhost',
//         user:'root',
//         password: process.env.PASS,
//         database: 'nombre'
//     }
// }

    database={
        host:'localhost',
        user:'root',
        password: '',
        database: 'iamx_market_place'
    }


const pool= mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNCECTIONN WAS CLOSED')
        }
        if(err.code==='ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS')
        }
        if(err.code==='ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED')
        }
    }

    if(connection) connection.release();
    console.log('DB is Connected');
    return
});

// to be able to use promisis await async
pool.query= promisify(pool.query);

module.exports = pool;