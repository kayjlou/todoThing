module.exports = (model, Schema) => {

    const Todo = new Schema({
        name: String,
        isDone: Boolean
    })

    return model('Todo', Todo)
}