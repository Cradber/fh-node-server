const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 8080

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
    res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.listen(port, () => {
    console.log(`App is listening in http://localhost:${port}`)
})