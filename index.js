const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const PORT = 8000;
const url = 'https://www.theguardian.com/uk';

const app = express();

app.use(cors())

app.get("/results", ( req , res ) => {
    axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const content = [];

        $('.fc-item__title', html).each(function() {
            const title = $(this).text();
            const url = $(this).find('a').attr('href');
            content.push({
                title,
                url,
            });    
        }) 
        res.json(content)

    }).catch(err => console.log(err))

})



app.listen( PORT, () => console.log(`Server Running on Port: ${PORT}`) );