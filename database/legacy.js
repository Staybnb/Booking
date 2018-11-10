var mysqlP = require('promise-mysql');


let stringParse = (data)=>{
  return JSON.parse(JSON.stringify(data))
};

var getListingData = (id) => { 
	console.log('Database query', id)

	let aptData = {dates: [], price: 0, id: 0, minStay: 0, stars: 0, numRatings: 0, max:0};

	return mysqlP.createConnection({
		host: 'localhost',
		user: 'root',
		database : 'booking'

	}).then((conn)=>{
			
		let aptDates = conn.query(`
		SELECT *
		FROM apartment t1
		INNER JOIN dates t2 
		ON t1.id = t2.apartment_id
		WHERE t1.id=${id};
		`);

		conn.end();
		return (aptDates);

	}).then((raw)=>{
		console.log('parsing')
		console.log(raw)
		let data = stringParse(raw)
		aptData.price = data[0].price;
		aptData.id = data[0].id;
		aptData.max = data[0].max;
		aptData.minStay = data[0].minStay;
		aptData.stars = data[0].stars;
		aptData.numRatings = data[0].numRatings;

		data.forEach(({date}) => {
			aptData.dates.push(date)
		});

	}).then(()=>{
		return aptData;
	}).catch((err)=>{
		console.log('query initialized err, works once componentsdidmount');		
		console.log(err)
	})   
}

module.exports.getListingData = getListingData;



