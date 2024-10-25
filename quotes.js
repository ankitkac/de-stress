const quotes = [
    '"Believe you can and you’re halfway there." – Theodore Roosevelt',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill',
    '"The only limit to our realization of tomorrow is our doubts of today." – Franklin D. Roosevelt',
    '"It does not matter how slowly you go as long as you do not stop." – Confucius',
    '"Life is 10% what happens to us and 90% how we react to it." – Charles R. Swindoll'
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').textContent = quotes[randomIndex];
}
