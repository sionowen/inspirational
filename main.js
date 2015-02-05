var outerBorder= $("<div class='outerBorder'>please enter your quote here!</div>");
var textContainer= $("<div class='textContainer'></div>");
var textInput= $("<textarea class='textInput'>");
var textEnter= $("<input class='textEnter' type='submit'>");
var quoteCreation= $(".quoteCreation");
var authorLog= $("<input class='authorLog' type='text'>Author</input>");
var authorArray = [];



textEnter.on('click', function(event) {
	var newQuote = textInput.val();
	var newAuthor = authorLog.val();
	var quoteObject = {
		author: authorLog.val(),
		text: textInput.val()
	};
	authorArray.push(quoteObject);
	console.log(authorArray);
	var addedQuote= "<div class= 'quoteCreation'><p class='textContainer'>"  + newQuote + "<br>" + '-' + newAuthor + "</p></div>";

$("body").append(addedQuote);
$(".textInput").val("");
$(".authorLog").val("");
});






$(document).on('ready', function() {
});







textContainer.append(textInput);
quoteCreation.append(outerBorder);
quoteCreation.append(textContainer);
quoteCreation.append(textEnter);
quoteCreation.append(authorLog);