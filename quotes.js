const quotes = [
    {
        quote: "Go ahead, make my day.",
        author: "Harry Callahan"
    },
    {
        quote: "If you want something done right, do it yourself.",
        author: "Charles-Guillaume Étienne"
    }, 
    {
        quote: "May the Force be with you.",
        author: "Star Wars"
    },
    {
        quote: "Life is like a box of chocolates. You never know what you’re gonna get.",
        author: "Forrest Gump"
    },
    {
        quote: "Whatever you are, be a good one.",
        author: "Abraham Lincoln"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Ghandi"
    },
    {
        quote: "The truth will set you free.",
        author: "the Bible"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Knowledge is power.",
        author: "Sir Francis Bacon"
    },
    {
        quote: "Ask, and it shall be given you; seek, and you shall find.",
        author: "the Bible"
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;