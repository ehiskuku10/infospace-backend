const Story = require('../models/Story')
const axios = require('axios')

exports.stories = async (req, res) => {
    axios.get('https://newsapi.org/v2/everything', {
        params: {
            q: 'news',
            from: '2019-10-02',
            sortBy: 'publishedAt',
            apiKey: '931af7933244423fbc444979847967d2'
        }
    })
    .then(function (response) {
        console.log(response);
        return res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}