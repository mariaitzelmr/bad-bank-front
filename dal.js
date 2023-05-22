const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/myproject"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected")
}).catch((err) => { console.log(err) })
const userSchema = new mongoose.Schema({ name: String, email: String, password: String, balance: Number})
const userModel = mongoose.model("Users", userSchema)

function create(userInput) {
    return new Promise((resolve, reject) => {
        userModel.create({
            name: userInput.name,
            email: userInput.email,
            password: userInput.password,
            balance: 0
        }).then((user) => {
            resolve (user)
        }).catch((err) => {
            reject(err)
        })
    })
}

function all(){
    return new Promise((resolve, reject) => {
        userModel.find({}).then((users) => {
            resolve(users)
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = { create, all }