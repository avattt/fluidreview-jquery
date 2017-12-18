

$("tr td:nth-child(3) input").blur(function() {
var s1 = $(this).val();
var s2 = $(this).closest('tr').find('td').first().next().next().find('input').first().val();
$("#id_4pmtbfibRC_12").val(s2);
if (((Date.parse(s1)) > (Date.parse("05/15/2018"))) && ((Date.parse(s1)) < (Date.parse(s2)))) {
    	$("font#errorsd1").remove();
    	$("font#errored2").remove();
        $("font#errorsded3").remove();
    	$("font#error2").remove();
        $("font#error3").remove();
        $("input#next-submit-button").prop("disabled",false).css({"background-color": "#2cb866", "transition": "all .2s ease-in-out", "border": "0", "color": "#fff", "font-weight": "500"}).addClass("button.button-highlight");
    	$("input#next-submit-button").hover(function() {
    		$("input#next-submit-button").animate({backgroundColor: '#24A25C'}, 40);
    	}, function () {
    		$("input#next-submit-button").animate({backgroundColor: '#2cb866'}, 40);
    });
    }
    else 
    {
    	$("font#errorsd1").remove();
    	$("font#errored2").remove();
        $("font#errorsded3").remove();
    	$("font#error2").remove();
        $("font#error3").remove();
    $(this).after("<font size = 2 color = red id=errorsd1>Invalid entry.<strong>*</strong></font>");
    $("input#next-submit-button").prop("disabled",true).css({'background-color' : 'lightgray'}).after("<font color = red id=error2> Please resolve any errors above before continuing.</font>");
    $(this).parents("table:first").prop("disabled",true).css({'background-color' : 'lightgray'}).after("<font color = red id=error3><strong>*</strong> Please provide a date between June 15, 2018 and November 30, 2019. The Start Date may not be greater than the End Date.</font>");
    }
});
