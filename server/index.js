const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('../database/index.js')
const express = require('express')
const path = require('path')
const morgan = require('morgan');

const port = 4000;

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("default", morgan)

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/api/listing/:id', (req, res)=>{ 
	id = req.params.id
	database.getListing(id).then((dataObj)=>{
		res.status(200).send(dataObj);
	}).catch((err)=>{
		res.send(err)
	})
})

app.post('/api/listing', (req, res) => {
	console.log('post listing listing')
	database.createListing(req.body).then((dataObj) => {
		res.status(200).send(dataObj)
	}).catch((err) => {
		res.status(500).send(err);
	});
})

app.delete('/api/listing/:id', (req, res) => {
	console.log('delete apartment listing')
	database.deleteListing(req.params.id).then((dataObj) => {
		res.status(200).send(dataObj)
	}).catch((err) => {
		res.status(500).send(err);
	});
})

// TODO: perform db migration to make bookings table

// app.get('/api/booking', (req, res) => {
// 	console.log('get all bookings')
// })

// app.get('/api/booking/:aptId', (req, res) => {
// 	console.log('get bookings by apartment')
// })

// app.post('/api/booking/:aptId', (req, res) => {
// 	console.log('create a new booking for an apartment')
// })

app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})