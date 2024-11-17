const express = require('express');
const app = express()
const userModel = require('./userModel');

app.get("/", (req, res) => {
    res.send("Hey my name is aayush pradhan");
})

// It will create a user data with it's details
app.get("/create", async (req, res) => {
    let create = await userModel.create({
        username: "Aayush",
        name: "Aayush Pradhan",
        address: "Itahari",
        age: 19
    })

    res.send(create);

})

//In this method we can read the how many user are there in the database.
app.get("/read", async (req, res) => {

    // .find( ) -- It find all the existing user data and save in the database
    // let userRead = await userModel.find();

    // find({ name: ' Aayush Pradhan '}) -- if we give the particular user name then it will find the particular user details
    // let userRead = await userModel.find({name:'Ayush Pradhan'});

    // findOne -- It find the only one user data. if there is one user with different data then also it will find and give one userdata.
    let userRead = await userModel.findOne({ name: 'Ayush Pradhan' });
    res.send(userRead);
})

//In this method we can update the user details.
app.get("/update", async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ name: 'Ayush' }, { name: 'aayush' }, { new: true });
    req.send(updatedUser);
})

//In this method we can delete the user  from the database.
app.get("/delete", async (req, res) => {
    let userDelete = await userModel.fineOneAndDelete({ name: "Aayush" });
    res.send(userDelete);
})

const port = 3000;
console.log(`the port is running${port}`)