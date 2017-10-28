const cheerio = require('cheerio');
const request = require('request');

module.exports = {
	exchangeRateHKD: function (req, res) {
		request('https://www.bochk.com/whk/rates/exchangeRatesHKD/exchangeRatesHKD-input.action?lang=hk', function (error, response, html) {
			if (error) {
				return console.error(error);
			}

			var $ = cheerio.load(html);
			var json = [];

			$('table.form_table.import-data.second-right tbody tr')
				.each(function (index, element) {
					var text = $(this).text().trim().replace(/\s\s+/g, ',');
					var data = text.split(',');

					// If row includes titles or empty
					if (text === '' || index === 0) {
						return;
					}

					json.push({
						'currency': data[0],
						'buying': data[1],
						'selling': data[2]
					});

				});
			res.json(json);
		});
	},
	exchangeRatesForCurrency: function (req, res) {
		request('https://www.bochk.com/whk/rates/exchangeRatesForCurrency/exchangeRatesForCurrency-input.action?lang=hk', function (error, response, html) {
			if (error) {
				return console.error(error);
			}

			var $ = cheerio.load(html);
			var json = [];

			$('table.form_table.import-data.second-right tbody tr')
				.each(function (index, element) {
					var text = $(this).text().trim().replace(/\s\s+/g, ',');
					var data = text.split(',');

					// If row includes titles or empty
					if (text === '' || index === 0) {
						return;
					}

					json.push({
						'currency': data[0],
						'buying': data[1],
						'selling': data[2]
					});

				});
			res.json(json);
		});
	}
};
