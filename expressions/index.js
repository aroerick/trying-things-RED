const express = require('express')
const quoteRoutes = require('./quotes')

const app = express()
const PORT = 12345 || process.env.PORT

const diyLogger = (req, res, nex) => {
    const start = new Date();
    const { url, method } = req;
    const { statusCode } = res;

    res.on('finish', () => {
        const dur = new Date() - start
        console.log(`${method} ${url} ${statusCode} ${dur} ms`)
    })
    nex()
}

app.use(express.static('public'))

app.use(diyLogger)

app.use('/quotes', quoteRoutes)

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})


// app
//     .route('/')
//     .use((req, res, nex) => {
//     console.log('MIDDLEWARE II')
//     nex()
//     })
//     .get((req, res) => {
//         res.write('Express yourself! ')
//         res.end()
//     })

// app
//     .route('/quotes')
//     .get((req, res) => {
//         res.send(quotes)
//     })
//     .post(parser.json(), (req, res) => {
//         const newQuote = req.body
//         quotes.push(newQuote)
//         res.status(201).send(newQuote)
//     })

// app
//     .route('/quotes/:name')
//     .get((req, res) => {
//         const { name } = req.params
//         const slug = name.replace(/\s+/g, '-').toLowerCase()
        
//         const filterQuotes = quotes.filter(
//             quote => slug === quote.name.replace(/\s+/g, '-').toLowerCase()
//         )
    
//         if ( filterQuotes.length === 0 ) {
//           res.status(404).json('That person isn\'t quote-worthy.')
//         } else {
//           res.send(filterQuotes)
//         }
//     })
//     .delete((req, res) => {
//         quotes.filter(
//             quote => quote.name.replace(/\s+/g, '-').toLowerCase() !== req.params.name.replace(/\s+/g, '-').toLowerCase()
//         )
//         res.sendStatus(200)
//     })

// app.route('/')
//     .use((req, res, nex) => {
//     console.log('MIDDLEWARE II')
//     nex()
//     })
//     .get((req, res) => {
//         res.write('Express yourself! ')
//         res.end()
//     })

// app.get('/', (req, res) => {
//     res.write('Express yourself! ')
//     res.end()
// })

// app.get('/quotes', (req, res) => {
//     res.send(quotes)
// })

// app.post('/quotes', parser.json(), (req, res) => {
//     // console.log(req.body)
//     const newQuote = req.body
//     quotes.push(newQuote)
//     res.status(201).send(newQuote)
// })

// app.delete('/quotes/:name', (req, res) => {
//     quotes.filter(
//         quote => quote.name.replace(/\s+/g, '-').toLowerCase() !== req.params.name.replace(/\s+/g, '-').toLowerCase()
//     )
//     res.sendStatus(200)
// })

// app.get('/quotes/:name', (req, res) => {
//     const { name } = req.params
//     const slug = name.replace(/\s+/g, '-').toLowerCase()
    
//     const filterQuotes = quotes.filter(
//         quote => slug === quote.name.replace(/\s+/g, '-').toLowerCase()
//     )

//     if ( filterQuotes.length === 0 ) {
//       res.status(404).json('That person isn\'t quote-worthy.')
//     } else {
//       res.send(filterQuotes)
//     }
// })
