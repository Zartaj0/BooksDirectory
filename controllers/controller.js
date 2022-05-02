const app = require('express')();

const Book = require('../models/model')

exports.getandsave = (req, res, next, id) => {

    Book.findById(id).exec((err, data) => {
        if (err) {
            return res.json({
                error: "cannot find any book with this id"
            })
        }
        req.getbook = data
        //res.json(book)

    })
    next()
}

exports.getSingleBook = (req, res) => {

    Book.findById(req.params.id).exec((err, book) => {
        if (err) {
            return res.json({
                error: "cannot find any book with this id"
            })
        }
        res.render('singlebook', { book })
    })


}

exports.getBooks = (req, res) => {
    Book.find().exec((err, books) => {
        if (err) {
            res.status(401).json({
                error: "can't find any books "
            })
        }

        res.render('allBooks', { books })
    })
}


exports.addBookspage = (req, res) => {
    res.render('addbook', { title: 'add a new book' })
}


exports.addBooks = (req, res) => {
    const books = new Book(req.body)
    books.save((err, data) => {
        if (err) {
            console.log(err)
            return res.status(400).json({

                error: "can't save book to database"
            })
        }
        res.redirect('/all')

    })
}

exports.editBooksPage = (req, res) => {
    Book.findById(req.params.id).exec((err, book) => {
        if (err) {
            return res.json({
                error: "cannot find any book with this id"
            })
        }

        res.render('updateBook', { book })

    })


}


exports.editBooks = (req, res) => {
    Book.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    error: "not authorized"
                })
            }
            res.redirect('/all')
        })

}



exports.deleteBooks = (req, res) => {

    Book.findByIdAndDelete(req.params.id)
        .then(() => { res.json({ redirect: '/all' }) })
}

exports.homePage = (req, res) => {
    res.render('home')
}

exports.getit =(req,res)=>{

 var reg = new RegExp(req.query.name)
    Book.findOne({name:req.query.name}).exec((err, book) => {
        if (err) {
            return res.json({
                error: "cannot find any book with this id"
            })
        }
    console.log(book)
        res.render('search',{book})

    })
}


