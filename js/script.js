/******************************************
Treehouse FSJS Techdegree: 
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Created Array of object. Where all the quotes are stored.
const quotes = [
  {
    quote:`It does not matter how slowly you go, as long as you do not stop.`,
    source:`Confucius`
  },
  {
    quote:`Relationships are based on four principles: respect, understanding, acceptance and appreciation.`,
    source:`Mahatma Gandhi`,
    citation:`Speech`
  },
  {
    quote:`Money and success don’t change people; they merely amplify what is already there.`,
    source:`Will Smith`
  },
  {
    quote:`Everything negative – pressure, challenges – is all an opportunity for me to rise.`,
    source:`Kobe Bryant`
  },
  {
    quote:`Some people can’t believe in themselves until someone else believes in them first.`,
    source: `Sean Maguire`,
    citation: `Good Will Hunting`,
    year: `1997`,
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
//Checks if quote selected have a ciation property.         
  if (randomQuote.citation) {
    message += `<span class="citation">${randomQuote.citation}</span>`;
  }
//Checks if quote selected have a year property.
  if (randomQuote.year) {
    message +=`<span class="year">${randomQuote.year}</span>`;
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