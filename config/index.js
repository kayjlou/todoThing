odule.exports = require('mongoose')
  .connect('mongodb://localhost/tododb', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })