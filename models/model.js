const mongoose = require('mongoose');



 const url = 'mongodb+srv://zartaj:[password]@cluster0.2isjv.mongodb.net/BooksDirectory?retryWrites=true&w=majority'
const connection = mongoose.connect(url)
    .then(()=>{console.log('connected to db');})


const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true,
    },

} )


module.exports = mongoose.model('Book', bookSchema)

