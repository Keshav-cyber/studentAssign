const express = require('express')
const { default: mongoose } = require('mongoose')
const route = require('./routes/route.js')
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://Keshav-cyber:7LizqrsG6tL39fuT@cluster0.ohm0bak.mongodb.net/assignTail?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )





app.use('/', route)  


app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});