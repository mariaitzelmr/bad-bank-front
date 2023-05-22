const express = require("express")
const app = express()
const cors = require("cors")
const dal = require("./dal.js")

app.use(express.static("bad_bank_front/build"))
app.use(cors())

// create user account
app.get("/account/create/:name/:email/:password", function(req, res){
    const user = {
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    }
    dal.create(user).then((user) => {
        console.log(user)
        res.send(user)
    })
})

app.get("/account/login/:email/:password", function(req, res){
    res.send({
        email: req.params.email,
        password: req.params.password
    })
})

app.get("/account/all", function(req, res){
    dal.all().then((docs) => {
        console.log(docs)
        res.send(docs)
    })
})

const port = 3080
app.listen(port)
console.log(`Running on port ${port}`)