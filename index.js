const express = require('express');

const app = express();

const routers = require('./routes/router.js')

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(express.json({ extended: false }))

app.use(express.urlencoded({ extended: true }))

app.use('/', routers)


app.listen(PORT, () => {
    console.log('surver runnning');
})