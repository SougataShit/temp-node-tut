const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("it's a home page")
    }

    else if (req.url === '/about') {
        res.end(`<h1>OoPs!</h1>
  <p>We can't seee the page youare looking for</p>
  <a href="/">Back to home</a>`)
    }
    else {
        res.end(`
        <h1>We can't find this page</h1>
        <a href="/">Back to home</a>
        <br>
        <h3>*************</h3>
        <a href="/about">Go to about page</a>
        `)
    }

})

server.listen(7000)