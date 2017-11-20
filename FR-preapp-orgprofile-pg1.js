$(function(){
//place script here

// edit the text of the "back" button on the top right. 
$('.button').eq(0).attr('id', 'backtohome');
$('#backtohome').text('Back to Pre-Application Home');

//adjust margins to tighten form
$('#xDaQEDqVTdH.question.section-separator.questioneven').find('*').css('margin', '0');

// adjust default text to gray
$("input#id_KfMGBMv1Mk_4").css('color','gray');

// FEIN feild starts with a format template example. on focus of this field, the text is removed
$("#id_KfMGBMv1Mk_4").focus(function() {
    if (this.value === "xx-xxxxxxx") {
        this.value = '';
        $("input#id_KfMGBMv1Mk_4").css('color','black');
    }
});

// on blur for FEIN field -- clear non-number characters and add in dash. 
 $("input#id_KfMGBMv1Mk_4").blur(function() {
 
 var FEIN = $("#id_KfMGBMv1Mk_4").val();
 var FEINreplace =  FEIN.replaceAll("-","");
 var FEINnew = FEINreplace.substr(0,2) + "-" + FEINreplace.substr(2);
 $("#id_KfMGBMv1Mk_4").val(FEINnew);
 });

// for the Missouri Business Number -- on blur, if the value is 9 characters long and starts with b, e, or n (uppoer or lower case), then the input is valid. Otherwise, error messages appear.
// additionally if not valid, the Next Page task is frozen. If it is valid, the Next PAge task is unforzen. 


$("input#id_wrT4duNEOW").blur(function() {
if (
		(($("#id_wrT4duNEOW").val().startsWith("b")) && ($("#id_wrT4duNEOW").val().length == 9)) || (($("#id_wrT4duNEOW").val().startsWith("e")) && ($("#id_wrT4duNEOW").val().length == 9)) || (($("#id_wrT4duNEOW").val().startsWith("n")) && ($("#id_wrT4duNEOW").val().length == 9)) || (($("#id_wrT4duNEOW").val().startsWith("B")) && ($("#id_wrT4duNEOW").val().length == 9)) || (($("#id_wrT4duNEOW").val().startsWith("E")) && ($("#id_wrT4duNEOW").val().length == 9)) || (($("#id_wrT4duNEOW").val().startsWith("N")) && ($("#id_wrT4duNEOW").val().length == 9))
   ) {
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

// Total Expenses
// Input is limit to digits only, with a lenght of 12
// on blur, commas are removed and re-inserted properly 

$('input#id_AnXPTKrPqf').keypress(function(e) {
	var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
    if (verified) {e.preventDefault();}
});

$('input#id_AnXPTKrPqf').attr({ maxLength : 12 });

$("input#id_AnXPTKrPqf").blur(function () {
var expvalb = $("#id_AnXPTKrPqf").val();
var exprepb = expvalb.replaceAll(",","");
var expparb = parseInt(exprepb,10);
if (isNaN(expvalb)) {$("#id_AnXPTKrPqf").val(null)}
	else {
	var d0 = Number(expparb).toLocaleString('en');
	$("#id_AnXPTKrPqf").val(d0);
	}


});


});
