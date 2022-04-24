const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('look mama i can code node with nodemon now!!!')
});


const users = [
    {
        id: 1,
        name: 'shabana',
        email: "shabana@mail.com",
        phone: '01788888888',
    },
    {
        id: 2,
        name: 'shabnoor',
        email: "shabnoor@mail.com",
        phone: '01788888888',
    },
    {
        id: 3,
        name: 'shuchorita',
        email: "shuchorita@mail.com",
        phone: '01788888888',
    },
    {
        id: 4,
        name: 'shuchonda',
        email: "shuchonda@mail.com",
        phone: '01788888888',
    },
    {
        id: 5,
        name: 'srabonti',
        email: "srabonti@mail.com",
        phone: '01788888888',
    },
    {
        id: 6,
        name: 'sraboni',
        email: "sraboni@mail.com",
        phone: '01788888888',
    },
    {
        id: 7,
        name: 'sumaiya',
        email: "sumaiya@mail.com",
        phone: '01788888888',
    },
]
app.get('/users', (req, res) => {
    console.log(req.query);
    // filter by search parameter
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));

        res.send(matched)
    }

    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = +req.params.id;
    const user = users.find(u => u.id === id);
    res.send(user)

})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send('post method success');
})


app.listen(port, () => {
    console.log('listening to port 5000')
}) 
