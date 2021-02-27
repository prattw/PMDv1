const $name = $('#name');
const $symbol = $('#symbol');
const $revenueTTM = $('#revenueTTM');
const $priceAtClose = $('#priceAtClose')
const $input = $('input[type="text"]');

let stockData, userInput;

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
   userInput = $input.val();
    $.ajax({
         url:'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo'
    //   Where I get name, symbol, and Revenue
        }).then(
        (data) => {
         stockData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    ); 
}

function handleGetData(event) {
    event.preventDefault();
   userInput = $input.val();
    $.ajax({
         url:'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo'
    //   Where I draw daily closing price
        }).then(
        (data) => {
    stockData = data;
    render();
   },
   (error) => {
    console.log('bad request', error);
   }
); 
}





function render() {
    $name.text(stockData.name);
    $symbol.text(stockData.symbol);
    $revenueTTM.text(stockData.revenueTTM);
    $priceAtClose.text(stockData.priceAtClose)
 }

//  const $name = $('#name');
// const $symbol = $('#symbol');
// const $revenueTTM = $('#revenueTTM');
// const $priceAtClose = $('#priceAtClose')