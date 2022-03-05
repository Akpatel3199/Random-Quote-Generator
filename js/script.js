/******************************************
Treehouse FSJS Techdegree: 
project 1 - A Random Quote Generator
******************************************/



//Array of an object. Where all the values are stored.
const quotes = [
  {
    quote:`It does not matter how slowly you go, as long as you do not stop.`,
    source:`Confucius`,
    tags: `Motivation, Courage, Inspiration`
  },
  {
    quote:`Relationships are based on four principles: respect, understanding, acceptance and appreciation.`,
    source:`Mahatma Gandhi`,
    citation:`Speech`,
    tags: `Love, Inspirational, Relationship`
  },
  {
    quote:`Money and success don’t change people; they merely amplify what is already there.`,
    source:`Will Smith`
  },
  {
    quote:`Everything negative – pressure, challenges – is all an opportunity for me to rise.`,
    source:`Kobe Bryant`,
    tags: `Motivation, Encouragement `
  },
  {
    quote:`Some people can’t believe in themselves until someone else believes in them first.`,
    source: `Sean Maguire`,
    citation: `Good Will Hunting`,
    year: `1997`,
    tags: `Encouragement, Motivation`
  }
];

//Function `getRandomQuote` selects random quote from `quotes` array and returns into `quoteIndex` variable.
function getRandomQuote() {
  let quoteIndex = Math.floor(Math.random()*quotes.length); 
  return quotes[quoteIndex];
}

//Function `printQuote` prints random quotes into `quote-box`.
function printQuote(){
  let randomQuote = getRandomQuote(); 
  let message = `<p class="quote"> ${randomQuote.quote}</p>
                 <p class="source"> ${randomQuote.source}`    
//Checks if quote selected have a `ciation` property to desplay with quote.         
  if (randomQuote.citation) {
    message += `<span class="citation">${randomQuote.citation}</span>`;
  }
//Checks if quote selected have a `year` property to desplay with quote.
  if (randomQuote.year) {
    message +=`<span class="year">${randomQuote.year}</span>`;
  }
//Checks if quote selected have a `tags` property to desplay with quote.
  if (randomQuote.tags) {
  message += `<span class="tags">Tags: ${randomQuote.tags}</span>`
  }
  `</p>`;
//Desplays message variable to `quote-box`.
  document.getElementById('quote-box').innerHTML = message;    
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);