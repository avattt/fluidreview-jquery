// this validation will check to make sure that an accepted value is entered into a field.
    // if the value is not accepted, a few things happen: 
        // A red error message is displayed next to the field
	// The normally green Next Page box at the bottom is disabled and turned gray, preventing the user from continuing (unless they manipulate the html source
    // when they try to edit the erroneous answer, all error messages are removed
    // if the value is accepted, animation and green color and prop("disabled",false) are attributed to the Next Page button (just in case it was previously disabled)

$(function()  {


// for the Missouri Business Number -- on blur, if the value is 9 characters long and starts with b, e, or n (uppoer or lower case), then the input is valid. Otherwise, error messages appear.
// additionally if not valid, the Next Page task is frozen. If it is valid, the Next PAge task is unforzen. 


$(function() {

$("input#id_wrT4duNEOW").blur(function() {
    var val = $("#id_wrT4duNEOW").val();
    if (/^[ben]{1}\d{8}$/i.test(val)) {
    $("input#next-submit-button").prop("disabled",false).css({"background-color": "#2cb866", "transition": "all .2s ease-in-out", "border": "0", "color": "#fff", "font-weight": "500"}).addClass("button.button-highlight");
    $("input#next-submit-button").hover(function() {
    		$("input#next-submit-button").animate({backgroundColor: '#24A25C'}, 40);
    		}, function () {
    		$("input#next-submit-button").animate({backgroundColor: '#2cb866'}, 40);
    });
    }
    else 
    {
    $("input#id_wrT4duNEOW").after("<font color = red id=error1> Please enter a valid response.</font>");
    $("input#next-submit-button").prop("disabled",true).css({'background-color' : 'lightgray'}).after("<font color = red id=error2> Please check your responses before continuing.</font>");
    }
});

// clicking on the Missouri Business Council input will also clear any existing error messages. 
$("input#id_wrT4duNEOW").focus(function() {
		$("font#error1").remove();
    	$("font#error2").remove();
});


});
