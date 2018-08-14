const container = document.getElementById('quotes')
const getQuotesButton = document.getElementById('get-quotes')
const createQuoteForm = document.getElementById('create-quote')

function appendQuote(quote) {
  const blockquote = document.createElement('blockquote')
  const deleteButton = document.createElement('button')
  deleteButton.setAttribute(
    'data-quote',
    quote.name.replace(/\s+/g, '-').toLowerCase()
  );
  deleteButton.textContent = 'Delete'
  blockquote.textContent = `"${quote.text}" — ${quote.name} `
  blockquote.appendChild(deleteButton)
  container.appendChild(blockquote)
}
getQuotesButton.addEventListener('click', function() {
    console.log('clicked')
    fetch('http://localhost:12345/quotes')
    .then(res => res.json())
    .then(quotes =>
        quotes.map(quote => {
            appendQuote(quote)
        })
    )
    .catch(err => console.log(err))
});

createQuoteForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(createQuoteForm)
    const newQuote = {}

    for ([key, value] of formData.entries()) {
        newQuote[key] = value
    }

    fetch('http://localhost:12345/quotes', {
        method: 'POST',
        body: JSON.stringify(newQuote),
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(quote => appendQuote(quote))
    .catch(err => console.error(err))
})

container.addEventListener('click', (e) => {
    const clickedEl = e.target
    if (clickedEl.tagName === 'BUTTON') {
        const name = clickedEl.getAttribute('name')
        fetch(`http://localhost:12345/quotes/${name}`, {
            method: 'DELETE',
        }).then(() => {
            const blockquote = clickedEl.parentNode
            blockquote.parentNode.removeChild(blockquote)
        }).catch(err => console.log(err))
    }
})