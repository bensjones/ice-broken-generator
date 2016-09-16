$( document ).ready(function() {
    $.getJSON( "data.json", function( data ) {
        $("#ice-broken").text(pickIceBroken( data ));
    });
});

function pickIceBroken( data ){
    return data.questions[getRandomIntInclusive( 0, data.questions.length - 1 )].question;
}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var pick = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(pick);
    return pick;
}