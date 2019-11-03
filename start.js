require('dotenv').config({path: './variables.env'})
require('./db/connection')

// import all of our models
require('./models/User')

// Start the app!
const app = require('./app')
app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), () => {
    console.log("Server is currently running on port " + server.address().port)
})