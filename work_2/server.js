// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express')
const app = express()

//Define PORT
const PORT = 8383

let data = ['Abusadiq']


// Middleware
app.use(express.json())

// HTTP VERBS (method) && Routes (for paths)
/* The method informs the nature of request and the route is a further
subdirectory (basically we direct the request to the body of the code to
respond appropriately, and these locations or routes are called
Endpoints) */


// Type 1 - Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

//CRUD-method create-post read-get update-put and delete-delete

app.get('/', (req, res) => {
    console.log('user requested the home page')
    res.send(`
        <body 
        style="background:pink;
        color:blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify
                (data)
            }
            </p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
            <h1>dashboard</h1>
            <a href="/dashboard">Home</a>
        </body>
        `)
})

// Type 2 - API endpoints (non visual)

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    // Someone wants to create a user (for example when they click a sign up button)
    /* The user clicks the sign up button after entering their credentials, and 
    their browser is wired up to send out a network request to the server
    to handle that action */

    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('we deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`server has started on: ${PORT}`))