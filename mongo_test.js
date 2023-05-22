const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/myproject"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected")
    }).catch((err) => { console.log(err) })

const customerModel = mongoose.model("Customers", { name: String, email: String })

customerModel.create({
    name: "other",
    email: "peter@peter.com"
}).then((customer) => {
    console.log(`created customer ${customer}`)
    mongoose.connection.close()
})