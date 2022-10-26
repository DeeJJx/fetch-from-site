const axios = require('axios');
const cheerio = require('cheerio');

const getProductPrice = async (webUrl) => {
    try {
        const {data} = await axios.get(
            webUrl
        );
        const $ = cheerio.load(data);
        const productPrice = [];

        $('div.b-price > span.b-price__value > span.b-price__digit').each((_idx, el) => {
            const price = $(el).text();
            productPrice.push(price);
        });

        return productPrice;
    } catch (error){
        throw error;
    }
};

let price = getProductPrice('https://www.fatface.com/women/clothing/skirts/jennie-geo-skirt/976998.html?dwvar_976998_color=black#q=jennie+geo+skirt&lang=en_GB&start=1')
.then((productPrice) => console.log(productPrice));

export {price}; 