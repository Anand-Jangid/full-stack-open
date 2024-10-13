const express = require("express");
const morgan = require("morgan");
const app = express();


const contacts = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(express.json());
morgan.token('body', req => JSON.stringify(req.body));


app.use(morgan(morganMiddlewareString));

app.get("/info", (req, res) => {
    return res.send(
        `<p>Phonebook has info for ${contacts.length} people </br>${new Date()}</p>`
    );
})

app.get("/api/persons", (req, res) => {
    return res.json(contacts);
});

app.get("/api/persons/:id", (req, res) => {
    const {id} = req.params;
    const contact = contacts.find((x) => x.id == id);

    if(contact){
        res.json(contact);
    }else{
        res.status(404).end();
    }
});


app.delete("/api/persons/:id", (req, res) => {
    const {id} = req.params;
    const index = contacts.findIndex(c => c.id == id);
    
    if(index == -1){
        return res.status(404).end();
    }
    contacts.splice(index, 1);
    return res.status(204).end();
});

app.post("/api/persons", (req, res) => {
    const {name, number} = req.body;

    if(!name || !number){
        return res.status(400).json({error: "incorrect request body"});
    }

    if(contacts.find(c => c.name === name)){
        return res.status(400).json({error: "name must be unique"});
    }

    const contact = {
        id: generateId(),
        name, number
    };

    contacts.push(contact);
    return res.json(contact);
});

function generateId() {
    const max = 100000;
    const number = Math.floor(Math.random() * max);

    return String(number);
}


function morganMiddlewareString(tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.body(req, res)
    ].join(' ')
}

app.listen(3001, () => {
    console.log(`Server is listening on port: 3001`);
});