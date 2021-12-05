const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

//  Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Static content
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Yankiel Pacheco',
        title: 'Node.js course'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Yankiel Pacheco',
        title: 'Node.js course'
    })
    // res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Yankiel Pacheco',
        title: 'Node.js course'
    })
    // res.sendFile(__dirname + '/public/elements.html')
})

app.listen(port, () => {
    console.log(`App is listening in http://localhost:${port}`)
})