const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('../database/index.js')
const express = require('express')
const path = require('path')
const port = 4000;
const morgan = require('morgan');

var app = express();

app.use("default", morgan)
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/apartment/:id', (req, res)=>{ 
	id = req.params.id
	database.getData(id).then((dataObj)=>{
		res.status(200).send(dataObj);
	}).catch((err)=>{
		res.send(err)
	})
})

app.post('/apartment/:id', (req, res) => {
	console.log('post apartment listing')
})

app.delete('/apartment/:id', (req, res) => {
	console.log('delete apartment listing')
})

app.get('/booking/:aptId', (req, res) => {
	console.log('get bookings by apt id')
})

app.post('/booking/:aptId', (req, res) => {
	console.log('create a new apartment booking')
})

// app.use('/bundle.js', express.static(path.join(__dirname + '/../client/dist')));

app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

// app.listen(process.env.PORT)
