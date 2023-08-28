const express = require('express');
const Book = require("../models/Book.model");

const router = express.Router();


router.get("/books", (req, res, next) => {
    Book.find()
        .then( (booksFromDB) => {

            const data = {
                books: booksFromDB
            }

            res.render("books/books-list", data);
        })
        .catch( (e) => {
            console.log("Error getting list of books from DB", e);
            next(e);
        })
})


router.get("/books/:bookId", (req, res, next) => {
    const id = req.params.bookId;
    Book.findById(id)
        .then( bookFromDB => {
            res.render("books/book-details", bookFromDB);
        })
        .catch( (e) => {
            console.log("Error getting book details from DB", e);
            next(e);
        })

})


module.exports = router;
