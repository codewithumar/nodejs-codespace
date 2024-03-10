const express = require('express')

const app = express()



app.get('/',()=>{
    return "Hello"
})
app.listen(3000,()=>{
    console.log('server staed')
})
