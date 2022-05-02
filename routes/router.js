const express = require('express');
const app = express();

const router = express.Router();

app.use(express.static('public'))

const {
    getBooks,
    getSingleBook,
    addBooks,
    editBooks,
    deleteBooks,
    addBookspage,
    homePage,
    editBooksPage,
    getandsave,
    getit
   
} = require('../controllers/controller')


router.param('id',getandsave)

router.get('/', homePage)

router.get('/all', getBooks)

router.get('/book/:id', getSingleBook)

router.get('/add', addBookspage)

router.post('/add', addBooks)


router.get(`/edit/:id`, editBooksPage)

 router.post('/edit/:id', editBooks)


router.delete('/book/:id', deleteBooks)

router.get('/search',getit)






module.exports = router