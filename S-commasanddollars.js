$(function(){
//place script here
$('#xeXa2w7ihwz.question.section-separator.questionodd').find('*').css('margin', '3px');
$('#xpPkyxnNoIo.question.section-separator.questioneven').find('*').css('margin', '3px');

$("input#id_q80gLHImug , input#id_a2Fu4bXUIZ , input#id_wmUPWUSDd3 , input#id_kTWKFJfkLK").attr('readonly', true).css({'background-color' : 'lightgray'});

// restrict input in fields
$("input").keypress(function(e) {
            var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9,]/);
            if (verified) {e.preventDefault();}
});

$("input").blur(function() {
$("input.form-control.d-inline").each(function() {
	var a4 = $(this).val();
    var b4 = a4.replaceAll(",","");   
    var c4 = b4.replaceAll("$","");
    var d4 = Number(c4);
	var artists2 = d4.toLocaleString('en');
    $(this).val(artists2);
    
});
$("#id_4erRMWKHwn_0,#id_4erRMWKHwn_1,#id_a2Fu4bXUIZ,#id_7dkx9sUqRb_0,#id_7dkx9sUqRb_1,#id_kTWKFJfkLK").each(function() {
	var adddollar = $(this).val();
    $(this).val('$'+adddollar);
});
// add dollar signs
});



$('input[type="text"]').attr({ maxLength : 12 });



});
