const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://rajkumarm210666ca:vTJqF2BiRkjvevk3@cluster0.hodevzl.mongodb.net/data?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })
    // vTJqF2BiRkjvevk3

}

connectDB()

module.exports = mongoose