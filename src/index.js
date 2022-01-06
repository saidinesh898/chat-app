const express = require('express')
const path = require('path')

const public = path.join(__dirname,'../public')

const app = express()
console.log(public)

app.use(express.static(public))


const port = process.env.PORT || 80


app.get('', (req, res) => {
    res.render('./index.html')
})



app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})