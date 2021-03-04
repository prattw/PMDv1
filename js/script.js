const $name = $('#name');
const $symbol = $('#symbol');
const $revenueTTM = $('#revenueTTM');
const $input = $('input[type="text"]');

let stockData, userInput;

$('form').on('submit', handleGetData);

const API_KEY = "EZBQRL0ZWHU5J5K3";

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
         url:'http://www.alphavantage.co/query?function=OVERVIEW&symbol=' + userInput + '&apikey=' + API_KEY + 'units=dollars'
    //   Where I get name, symbol, and Revenue
        }).then((data) => {
        console.log(data)
        render(data);
        },
        (error) => {
         console.log('bad request', error);
        }
    ); 
}

function render(stockData) {
    $name.text(stockData["Name"]);
    $symbol.text(stockData["Symbol"]);
    $revenueTTM.text(stockData["RevenueTTM"]);
 }