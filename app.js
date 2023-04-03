const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// app.get('/', (req, res) => res.send('Hello World!'));
app.disable('etag');
app.use(bodyParser.urlencoded());
let data = ["one", "two", "three"];

app.get('/getList', (req, res) => {
    // res.body({message: "success", data: data})
    res.json({message: "success", data: data});
});

app.use(bodyParser.json());
app.post('/add', (req, res) => {
    data = [...data, req.body.data];
    res.json({message: "successfully added", data: data});
})

app.listen(port, () => console.log(`Express app running on port ${port}!`));