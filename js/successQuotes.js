var ALL_QUOTES = [
    {
        quote: "Welcome every morning with a smile. Look on the new day as another special gift from your Creator, another golden opportunity.",
        author: "Og Mandino"
    },
    {
        quote: "Happiness cannot be traveled to, owned, earned, or worn.It is the spiritual experience of living every minute with love, grace & gratitude.",
        author: "Denis Waitley"
    },
    {
        quote: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending",
        author: "Carl Bard"
    },
    {
        quote: "Accept responsibility for your life.Know that it is you who will get you where you want to go, no one else.",
        author: "Les Brown"
    },
    {
        quote: "Surround yourself with only people who are going to lift you higher.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Nobody ever wrote down a plan to be broke, fat, lazy, or stupid.Those things are what happen when you don’t have a plan.",
        author: "Larry Winget"
    },
    {
        quote: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        author: "Joel Brown"
    },
    {
        quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "Joshua J.Marine"
    },
    {
        quote: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray"
    },
    {
        quote: "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking.Don’t settle.",
        author: "Steve Jobs"
    },
    {
        quote: "In the end, it isn’t about changing the world, but rather, how many worlds you have changed.",
        author: "Unknown"
    },
    {
        quote: "Success is not a destination, but the road that you're on. Being successful means that you're working hard and walking your walk every day. You can only live your dream by working hard towards it. That's living your dream.",
        author: "Marlon Wayans"
    },
    {
        quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
        author: "Bill Cosby"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Life is like photography.You need the negatives to develop.",
        author: "Unknown"
    },
    {
        quote: "I am thankful for all of those who said NO to me.It’s because of them I’m doing it myself.",
        author: "Albert Einstein"
    },
    {
        quote: "Life isn’t about finding yourself.Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        quote: "We don’t see things the way they are.We see them the way we are",
        author: "Talmud"
    },
    {
        quote: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Never be bullied into silence.Never allow yourself to be made a victim.Accept no one’s definition of your life; define yourself.",
        author: "Harvey Fierstein"
    },
    {
        quote: "The price of anything is the amount of life you exchange for it",
        author: "Henry David Thoreau"
    },
    {
        quote: "Life is either a daring adventure or nothing",
        author: "Helen Keller"
    },
    {
        quote: "No one is going to hand me success.I must go out & get it myself.That’s why I’m here.To dominate.To conquer.Both the world, and myself.",
        author: "Unknown"
    }
];

// Use this to store user's choice
var userChoice = 'all';

// Use this to update the search string
var searchString;

function displayQuote(container, quote) {
    var quoteElement = $('<div class="author-quote"> <q>' + quote.quote +
        '</q> <span class="quote-author-name">– ' + quote.author + '</span> </div>');
    container.append(quoteElement);
}

function displayQuotes(quotes) {
    var quotesContainer = $('#author-quotes-container').empty();
    quotes.forEach(function (quote, index) {
        displayQuote(quotesContainer, quote);
    });
}

/**
 * Question 2. a: Implement a function factory that can be used to create 
 * closures that store in their created environment the value of prefix.
 * When this function is invoked, the closure function returned will be used to
 * generate a list of quote objects (a subset of the ALL_QUOTES array) such 
 * that the name of the author begins with the given prefix.    
 */
function makeQuotesWhoseAuthorsNameStartWith(prefix) {
    return function pushAllQuotes() {
        var quoteArray = [];
        for (var i = 0; i < ALL_QUOTES.length; i++) {
            if (ALL_QUOTES[i].author.startsWith(prefix)) {
                quoteArray.push(ALL_QUOTES[i]);
            }
        }
        displayQuotes(quoteArray);
    }

}

/**
 *  Question 2. b.  Implement at function that does the following:
 * Use the value of the searchString variable as the prefix 
 * of the author's name.  Create a closure by calling 
 * makeQuotesWhoseAuthorsNameStartWith() with the prefix entered by the user.
 * Use the closure function to generate a list of quote objects such that the 
 * name of the author begins with the prefix. Display only these quotes.
 * THe function should display an empty list of quotes if no prefix is 
 * provided. See the search() to determine when this function will run.
 */
function displayQuotesFromAuthorsWhoseNameStartWith() {
    if (searchString == "") {
        return [];
    } else {
        var closure = makeQuotesWhoseAuthorsNameStartWith(searchString);
        return closure();
    }
}

/**
 *  Question 3 Write a function that displays quotes from authors whose 
 * names contain the substring entered by the user. See the search() to 
 * determine when this function will run.
 */
function displayQuotesfromAuthorsWhoseNamesHaveSubstr(thisString) {
    quotes = [];
    for (var i = 0; i < ALL_QUOTES.length; i++) {
        if(ALL_QUOTES[i].author.includes(thisString)){
            quotes.push(ALL_QUOTES[i]);
        }
    }
    displayQuotes(quotes);
}


/**
 *  Question 4 Implement a function that displays the longest quote.  See the 
 * search() to determine when this function will run.
 */
function displayLongestQuote() {
    var quotes = [];
    var longestLen = 0;
    for (var i = 0; i < ALL_QUOTES.length; i++) {
        if(ALL_QUOTES[i].quote.length > longestLen){
            longestLen = ALL_QUOTES[i].quote.length;
            quotes.pop();
            quotes.push(ALL_QUOTES[i]);
        }
    }
    displayQuotes(quotes);
}

/**
 * Question 5 Implement a function that displays quotes from the author with 
 * the most quotes. See the search() to determine when this function will run.
 */
function displayQuotesFromAuthorWithMostQuotes() {
    
    return;
}

function search() {
    switch (userChoice) {
        case 'all':
            displayAllQuotes();
            break;
        case 'start':
            displayQuotesFromAuthorsWhoseNameStartWith();
            break;
        case 'substr':
            displayQuotesfromAuthorsWhoseNamesHaveSubstr(searchString);
            break;
        case 'long':
            displayLongestQuote();
            break;
        case 'most':
            displayQuotesFromAuthorWithMostQuotes();
            break;
        default:
            displayAllQuotes();
            break;
    }
}

function setup() {
    $('input:radio[name="choices"]').change(
        function () {
            userChoice = $(this).val();
            if ($(this).is(':checked')) {
                search();
            }
        });

    /**
     * Question 1:  Use jQuery's "on" method to attach an event listener to the 
     * search input text element.  The listener should listen for "input" 
     * events, which will fire when the user begins enters text in the search 
     * box.  The listen should store the text from the search box in the 
     * searchString variable and call the search() function.
     */
    $('#search').on('input', function () {
        searchString = $('#search').val();
        console.log(searchString);
        search();
    });

    displayAllQuotes();
}

function displayAllQuotes() {
    displayQuotes(ALL_QUOTES);
}

$(window).on('load', function () {
    //load in initial state
    setup();
});