const express = require("express")
const app = express()
const PORT = 3000

let data = ['John']

// Middleware
app.use(express.json())

// Website endpoint
app.get("/", (req, res) => {
    // res.send(`
    //     <html>
    //         <head>
    //             <title>Home Page</title>
    //         </head>
    //         <body>
    //             <h1>Welcome to Our Website</h1>
    //             <p>This is a simple Express server homepage.</p>
    //             <nav>
    //                 <a href="/dashboard">Go to Dashboard</a>
    //                 <h1>${data}</h1>
    //             </nav>
    //         </body>
    //     </html>
    // `)
    res.sendFile(__dirname + '/homepage.html')
})

app.get('/dashboard', (req, res) => {
    // console.log('/dashboard request received')
    // res.send(`
    //     <html>
    //         <head>
    //             <title>dashboard Page</title>
    //         </head>
    //         <body>
    //             <h1>Welcome to Our dashboard</h1>
    //         </body>
    //     </html>
    // `)
    res.sendFile(__dirname + '/codeEditor.html')
})


// API endpoint
app.get('/api/data', (req, res) => {
    console.log('/api/data request received')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    console.log('/api/data post request received')
    const newData = req.body
    data.push(newData.name)
    res.sendStatus(201)
})

app.delete('/api/delete', (req, res) => {
    console.log('/api/delete request received')
    const name = req.body.name
    data.pop(name)
    res.sendStatus(203)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})