const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Form = require('./model')

const app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
const sendEmail = require('./sendemail');
// var mongoDB = 'mongodb+srv://janmejay:Janmejay@webdev.71cwj.mongodb.net/form';
var mongoDB = "mongodb+srv://wirtespace:writespace@cluster0.hvawi.mongodb.net/form"
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(express.static(path.join(__dirname, 'out')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'out', 'index.html'))
})

app.post('/form', (req, res) => {
    const {
        name,
        email,
        phone,
        budget,
        services
    } = req.body

    Form.create({
        name,
        email,
        phone,
        budget,
        services,
        createdAt: Date.now()
    })
    .then(async done => {
        try {
            let sendMail = await sendEmail({name, email, phone, budget, services})
            console.log(sendMail)
        }
        catch (err) {
        }
        return res.json({
            success: true,
            message: "Query Submitted Successfully!"
        })
    })
    .catch(err => {
        return res.json({
            success: false,
            message: "Interval Server Error!",
            error: err
        })
    })
})

const http = require('http').createServer(app)
var port = process.env.PORT || 5000;
http.listen(port, () => console.log("Server is running"))