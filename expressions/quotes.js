const express = require('express')
const parser = require('body-parser')
const router = express.Router()

let quotes = [
    {
      name: 'Fred Brooks',
      text: 'Nine people can’t make a baby in a month.',
    },
    {
      name: 'Paul Ford',
      text: 'A computer is a clock with benefits.',
    },
    {
      name: 'Linus Torvalds',
      text: 'Talk is cheap. Show me the code.',
    },
]

router
    .route('/')
    .get((req, res) => {
        res.send(quotes)
    })
    .post(parser.json(), (req, res) => {
        const newQuote = req.body
        quotes.push(newQuote)
        res.status(201).send(newQuote)
    })

router
    .route('/:name')
    .get((req, res) => {
        const { name } = req.params
        const slug = name.replace(/\s+/g, '-').toLowerCase()
        
        const filterQuotes = quotes.filter(
            quote => slug === quote.name.replace(/\s+/g, '-').toLowerCase()
        )
    
        if ( filterQuotes.length === 0 ) {
          res.status(404).json('That person isn\'t quote-worthy.')
        } else {
          res.send(filterQuotes)
        }
    })
    .delete((req, res) => {
        quotes.filter(
            quote => quote.name.replace(/\s+/g, '-').toLowerCase() !== req.params.name.replace(/\s+/g, '-').toLowerCase()
        )
        res.sendStatus(200)
    })

module.exports = router