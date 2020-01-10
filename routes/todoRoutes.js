const { Todo } = require('../models')

module.exports = app => {

    //get all todos
    app.get('/todo', (req,res)=>{
        res.send("YAY")
        // Todo.find()
        // .then(items => res.json(items))
        // .catch(e=> console.error(e))
    })

    //delete one todos
    app.delete('/todo/:id', async (req,res)=>{
        const {id} = req.params

        let item = await Todo.findByIdAndDelete(id)

        return res.status(200).send({
            error: false,
            item
        })
    })
    

    //update todos

    //add todo
    app.post('/todo', (req,res)=>{
        Todo.create(req.body)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
    })
}