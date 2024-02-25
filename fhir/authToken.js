const axios = require('axios');
const qs = require('querystring');
const _ = require('lodash');


async function getAuthToken() {
    const data = {
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/token`,
      resource: process.env.BASE_URL
    }
    try {
        const response = await axios({
            url: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/token`,
            method: 'post',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(data),
        });
        return response.data.access_token
        
    } catch (error) {
    console.log(error);
    }
}

module.exports = {getAuthToken}