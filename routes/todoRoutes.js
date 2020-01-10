const {Todo} = require('../models')

module.exports = app => {

    //get all todos
    app.get('/todo', (req,res)=>{
        Todo.find()
        .then(items => res.json(items))
        .catch(e=> console.error(e))
    })

    //delete all todos
    

    //update todos

    //add todo
    app.post('/todo', (req,res)=>{
        Todo.create(req.body)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
    })
}