$(function()  {
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
