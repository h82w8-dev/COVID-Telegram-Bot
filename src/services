const axios = require('axios');
let service = {};

service.getByCountry = country => {
    return axios({
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": process.env['x-rapidapi-host'],
            "x-rapidapi-key":
                process.env['x-rapidapi-key']
        },
        params: {
            country: country
        }
    });
};

module.exports = service;
