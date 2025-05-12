const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("user server is running");
}) 

app.listen(port, () => {
    console.log(`user server is running on port ${port}`)
})