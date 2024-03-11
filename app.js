require('dotenv').config()
const express = require('express')
const router = require('./router/router')
const connectDb = require('./db/connect')
const app = express()
const port = process.env.PORT || 2000

/**they are same middleware  */

app.use(express.json())

/* they are same api router's */

app.use('/api' , router)


/**this are for testing */

app.get('/' , (req ,res) => {
    console.log(req.headers);
    return res.json({msg : "hello from wolf server"})
})

const start = async () =>{
    try { 
        await connectDb(process.env.MDB_URL)
        app.listen(port , () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()
