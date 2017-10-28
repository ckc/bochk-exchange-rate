const express = require('express');
const spiders = require('./spiders');

const app = express();

app.get('/exchangeRatesHKD', function (req, res) {
	spiders.exchangeRateHKD(req, res);
});
app.get('/exchangeRatesForCurrency', function (req, res) {
	spiders.exchangeRatesForCurrency(req, res);
});

app.listen(3000, function () {
	console.log('Server start on http://localhost:3000');
});