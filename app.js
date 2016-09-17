//add keen.io tracking
!function(name,path,ctx){
    var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('KeenAsync','https://d26b395fwzu5fz.cloudfront.net/keen-tracking-1.0.3.min.js',this);

$( document ).ready(function() {
    $.getJSON( "data.json", function( data ) {
        $("#ice-broken").text(pickIceBroken( data ));
        // Record an event
        KeenAsync.ready(function(){
            // Configure a client instance
            var client = new KeenAsync({
                projectId: '57db9b0b8db53dfda8a6fda2',
                writeKey: '6719318775DF1B867C0136B4F9E4671982392F64F73D79887B72427F765F8812F50EB3EAD0B95206AE0C046F4C53CE936696E6280517E8C3A05136F03DD1798B0CD9C7FFDA5D50991CC039C54CC8A1C4A48948037170129293830571CA0A3EC5'
            });
            client.recordEvent('icebroken', {
                "ice-broken": $("#ice-broken").text()
            });
        });
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
    return pick;
}
