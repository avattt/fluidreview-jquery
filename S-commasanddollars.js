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

$('input[type="text"]').attr({ maxLength : 12 });


//$("input.form-control.d-inline").each(function() {//
//	var a4 = $(this).val();
  //  var b4 = a4.replaceAll(",","");   
  //  var c4 = b4.replaceAll("$","");
  //  var d4 = Number(c4);
//	var artists2 = d4.toLocaleString('en');
 //   $(this).val(artists2);
    
//});

$("input").blur(function() {
var form1 = Number($("#id_vi2btTe7O1_0").val().replaceAll(",","").replaceAll("$",""));
var form2 = Number($("#id_vi2btTe7O1_1").val().replaceAll(",","").replaceAll("$",""));
var form3 = Number($("#id_4erRMWKHwn_0").val().replaceAll(",","").replaceAll("$",""));
var form4 = Number($("#id_4erRMWKHwn_1").val().replaceAll(",","").replaceAll("$",""));
var form5 = Number($("#id_Qdmvp1ShdH_0").val().replaceAll(",","").replaceAll("$",""));
var form6 = Number($("#id_Qdmvp1ShdH_1").val().replaceAll(",","").replaceAll("$",""));
var form7 = Number($("#id_7dkx9sUqRb_0").val().replaceAll(",","").replaceAll("$",""));
var form8 = Number($("#id_7dkx9sUqRb_1").val().replaceAll(",","").replaceAll("$",""));

$("#id_q80gLHImug").val((form1 + form2).toLocaleString('en'));
$("#id_a2Fu4bXUIZ").val("$"+(form3 + form4).toLocaleString('en'));
$("#id_wmUPWUSDd3").val((form5 + form6).toLocaleString('en'));
$("#id_kTWKFJfkLK").val("$"+(form7 + form8).toLocaleString('en'));

$("#id_vi2btTe7O1_0").val((form1).toLocaleString('en'));
$("#id_vi2btTe7O1_1").val((form2).toLocaleString('en'));
$("#id_4erRMWKHwn_0").val("$"+(form3).toLocaleString('en'));
$("#id_4erRMWKHwn_1").val("$"+(form4).toLocaleString('en'));
$("#id_Qdmvp1ShdH_0").val((form5).toLocaleString('en'));
$("#id_Qdmvp1ShdH_1").val((form6).toLocaleString('en'));
$("#id_7dkx9sUqRb_0").val("$"+(form7).toLocaleString('en'));
$("#id_7dkx9sUqRb_1").val("$"+(form8).toLocaleString('en'));



// $("#id_4erRMWKHwn_0,#id_4erRMWKHwn_1,#id_a2Fu4bXUIZ,#id_7dkx9sUqRb_0,#id_7dkx9sUqRb_1,#id_kTWKFJfkLK").each(function() {
//	var adddollar = $(this).val();
//    $(this).val('$'+adddollar);
//});




});







});
