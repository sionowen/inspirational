var outerBorder= $("<div class='outerBorder'>please enter your quote here!</div>");
var textContainer= $("<div class='textContainer'></div>");
var textInput= $("<textarea class='textInput'>");
var textEnter= $("<input class='textEnter' type='submit'>");
var quoteCreation= $(".quoteCreation");


textEnter.on('click', function(event) {
var newQuote = textInput.val();
var addedQuote= "<div class= 'quoteCreation'><p class='textContainer'>"+newQuote+"</p></div>";

$("body").append(addedQuote);

});






$(document).on('ready', function() {
});







textContainer.append(textInput);
quoteCreation.append(outerBorder);
quoteCreation.append(textContainer);
quoteCreation.append(textEnter);