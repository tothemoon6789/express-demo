const express = require("express")
const app = express()
const port = 3000
app.get('/',function (req,res) {
    res.send(('Hello wolrd, anh em nhes'))
    
})
app.listen(port,() => {
    console.log(`expamle app listening on port ${port}`) 
})