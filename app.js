
const http = require('http')

http.createServer((req, res) => {
    res.write('Hello world')
    res.end()
})
.listen(8080)

console.log('Listening at port 8080')