const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());


const port = 5000;

// Route to send 'Hello World' message
app.get('/api/hello', (req, res) => {
    const message = 'Hello World from the backend!';
    res.json({ message });
});

app.listen(port, () => {
    console.log('Server running at port ' + port)
})