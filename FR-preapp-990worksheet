// FluidReview supports a 3D Matrix custom question, which is a grid of inputs.
// The drag-and-drop customization allows for extra rows and colummns to be added, but with limitations: 
    // Only INPUT rows and columns may be added (no basic/instructional text cells)
    // A default or initial value may only be added to a column (so, all cells in that column)
    // currency validation does not support commas
    // similarly, calculations may not be added to a single cell (as a result, FluidReview recommends having several one-line 3D MAtrixes, which takes up a ton of screenspace
    // Important to remember: no jquery will apply to the saved version of the form (the one that is converted to a PDF for the Reader/Reviewers view)
 
 
 
 // so, the following code does a few things
     // adds columns that are only used to display static text
     // block user entry on certain input fields. These fields will display the calculation (such as average value of other inputs), and will also save into the form so that the Reader/Reviewer can see them
     // add in commas. Needed to write jquery that removed commas on input focus and then added them back in on blur. this is necessary since all input values are referenced no matter which input is focused or blurred
     
 // additionally, our 990 worksheet also has a long list of hidden fields. There are used to bring values into the 3D Matrix for the FluidReview User Meta Data. All of our GOS applicants already had 990 worksheet data from the previous year's application. 
     // These values were uploaded to the Users Meta Data. 
     // The hidden values store the User MEta Data value. This is done using FluidReview's value piping system e.g., {{ applicant.field_12345 }}. 
     // On page load, two things happen: 
         // jquery is used to enter these values into the 990 worksheet 3D Matrix and calculate the read-only inputs
         // a final hidden field called FirstPageLoad has it's value changed from FALSE (the default) to TRUE. This is necessary to prevent what the user enteres in this form from being overwritten every time the User loads the page. 
 
 
  // jquery to prevent long string or bad characters
$(document).ready(function(){


    $('input').keypress(function(e) {
            var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9,]/);
            if (verified) {e.preventDefault();}
    });


$('input[type="text"]').attr({ maxLength : 12 });

// pipe hidden value TEST -- was successful, example below
//	var start1 = $("#id_LTZ79I9T0w").val();
//  $("#id_pIGD8kVDDw_4").val(start1);
var firstpageload = $("#id_IF7PgPryrr").val();
if (firstpageload == "FALSE") {
var start1 = $("#id_x68HkR0dDM").val();    $("#id_pIGD8kVDDw_50").val(start1);
var start2 = $("#id_H2U2taX8eC").val();    $("#id_pIGD8kVDDw_46").val(start2);
var start3 = $("#id_MVQ8vBDZnw").val();    $("#id_pIGD8kVDDw_34").val(start3);
var start4 = $("#id_qXEqR7A4Tg").val();    $("#id_pIGD8kVDDw_30").val(start4);
var start5 = $("#id_traWD0gaaC").val();    $("#id_pIGD8kVDDw_26").val(start5);
var start6 = $("#id_A4imk4Pv1L").val();    $("#id_pIGD8kVDDw_38").val(start6);
var start7 = $("#id_pUNAJuemuz").val();    $("#id_pIGD8kVDDw_62").val(start7);
var start8 = $("#id_XLKHmRw4Xi").val();    $("#id_pIGD8kVDDw_70").val(start8);
var start9 = $("#id_rEe0aCAAsH").val();    $("#id_pIGD8kVDDw_6").val(start9);
var start10 = $("#id_NUzOwzx2bO").val();    $("#id_pIGD8kVDDw_10").val(start10);
var start11 = $("#id_MN3hLBOSZs").val();    $("#id_pIGD8kVDDw_18").val(start11);
var start12 = $("#id_vXEALBSdHo").val();    $("#id_pIGD8kVDDw_49").val(start12);
var start13 = $("#id_yoU4MuIrS5").val();    $("#id_pIGD8kVDDw_45").val(start13);
var start14 = $("#id_GhUJNJfqO8").val();    $("#id_pIGD8kVDDw_33").val(start14);
var start15 = $("#id_x0mPrp6uUP").val();    $("#id_pIGD8kVDDw_29").val(start15);
var start16 = $("#id_w2E1MZtC2S").val();    $("#id_pIGD8kVDDw_25").val(start16);
var start17 = $("#id_C5aiJ5V3D2").val();    $("#id_pIGD8kVDDw_37").val(start17);
var start18 = $("#id_ID9k4K5tOw").val();    $("#id_pIGD8kVDDw_61").val(start18);
var start19 = $("#id_bT6hxbGTQp").val();    $("#id_pIGD8kVDDw_69").val(start19);
var start20 = $("#id_yR4aqJaAsD").val();    $("#id_pIGD8kVDDw_5").val(start20);
var start21 = $("#id_N0wpSxILkB").val();    $("#id_pIGD8kVDDw_9").val(start21);
var start22 = $("#id_pnVgu1HH30").val();    $("#id_pIGD8kVDDw_17").val(start22);
var start23 = $("#id_kVrnhq8n1f").val();    $("#id_pIGD8kVDDw_48").val(start23);
var start24 = $("#id_pt96DnzkDH").val();    $("#id_pIGD8kVDDw_44").val(start24);
var start25 = $("#id_kQC6isHKB0").val();    $("#id_pIGD8kVDDw_32").val(start25);
var start26 = $("#id_NV1NH43pWI").val();    $("#id_pIGD8kVDDw_28").val(start26);
var start27 = $("#id_FdVI7ds3X1").val();    $("#id_pIGD8kVDDw_24").val(start27);
var start28 = $("#id_cpRoDKX9vI").val();    $("#id_pIGD8kVDDw_36").val(start28);
var start29 = $("#id_tAN23qetzD").val();    $("#id_pIGD8kVDDw_60").val(start29);
var start30 = $("#id_fkDOT7A65G").val();    $("#id_pIGD8kVDDw_68").val(start30);
var start31 = $("#id_2y1HhXZRQe").val();    $("#id_pIGD8kVDDw_4").val(start31);
var start32 = $("#id_gp1rGHSxFo").val();    $("#id_pIGD8kVDDw_8").val(start32);
var start33 = $("#id_ixubNZboNp").val();    $("#id_pIGD8kVDDw_16").val(start33);
$("#id_IF7PgPryrr").val("TRUE")
}



// Mega table css edits
// HEADER GRAY	
	$("table#pIGD8kVDDw_3db th:first").css("background-color","lightgray");
    $("table#pIGD8kVDDw_3db th:eq(1),table#pIGD8kVDDw_3db th:eq(2),table#pIGD8kVDDw_3db th:eq(3),table#pIGD8kVDDw_3db th:eq(4)").css({"background-color":"lightgray", "font-weight":"bold"});
// HIDE INPUTS for header rows

	$("#id_pIGD8kVDDw_0").hide();
    $("div.d-inline:eq(0)").hide();
    $("#id_pIGD8kVDDw_1").hide();
    $("div.d-inline:eq(1)").hide();
    $("#id_pIGD8kVDDw_2").hide();
    $("div.d-inline:eq(2)").hide();
    $("#id_pIGD8kVDDw_3").hide();
    $("div.d-inline:eq(3)").hide();
    
    $("#id_pIGD8kVDDw_20").hide();
    $("div.d-inline:eq(20)").hide();
    $("#id_pIGD8kVDDw_21").hide();
    $("div.d-inline:eq(21)").hide();
    $("#id_pIGD8kVDDw_22").hide();
    $("div.d-inline:eq(22)").hide();
    $("#id_pIGD8kVDDw_23").hide();
    $("div.d-inline:eq(23)").hide();
    
        $("#id_pIGD8kVDDw_40").hide();
    $("div.d-inline:eq(40)").hide();
    $("#id_pIGD8kVDDw_41").hide();
    $("div.d-inline:eq(41)").hide();
    $("#id_pIGD8kVDDw_42").hide();
    $("div.d-inline:eq(42)").hide();
    $("#id_pIGD8kVDDw_43").hide();
    $("div.d-inline:eq(43)").hide();
    
        $("#id_pIGD8kVDDw_56").hide();
    $("div.d-inline:eq(56)").hide();
    $("#id_pIGD8kVDDw_57").hide();
    $("div.d-inline:eq(57)").hide();
    $("#id_pIGD8kVDDw_58").hide();
    $("div.d-inline:eq(58)").hide();
    $("#id_pIGD8kVDDw_59").hide();
    $("div.d-inline:eq(59)").hide();
    
    
        $("#id_pIGD8kVDDw_64").hide();
    $("div.d-inline:eq(64)").hide();
    $("#id_pIGD8kVDDw_65").hide();
    $("div.d-inline:eq(65)").hide();
    $("#id_pIGD8kVDDw_66").hide();
    $("div.d-inline:eq(66)").hide();
    $("#id_pIGD8kVDDw_67").hide();
    $("div.d-inline:eq(67)").hide();
    
// inserted 2 headers
	$('<th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990-EZ</b></th>').insertAfter("table#pIGD8kVDDw_3db tr:first th:first");
    $('<th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990</b></th>').insertAfter("table#pIGD8kVDDw_3db tr:first th:first");
// inserted two cells before in each row. 
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(1) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(1) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 1</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(2) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 8</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(2) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 2</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(3) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 9</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(3) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(4) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(4) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 9</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(5) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 12</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(5) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(6) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(6) td:eq(0)");
    
	$('<td class="threedBorder threedCell threedRadiocolodd">Part I - 17</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(7) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part IX - 25 B</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(7) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><font color="gray">N/A</font></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(8) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part IX - 25 C</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(8) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><font color="gray">N/A</font></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(9) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part IX - 25 D</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(9) td:eq(0)");
    
        
    
    $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 17</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(10) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part IX - 25 A</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(10) td:eq(0)");
    
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(11) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(11) td:eq(0)");
    
    $('<td class="threedBorder threedCell threedRadiocolodd">Part II - 25(B)</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(12) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part X - 16(B)</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(12) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part II - 23(B)</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(13) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part X - 10c(B)</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(13) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><font color="gray"><i>Calculation</i></font></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(14) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><font color="gray"><i>Calculation</i></font></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(14) td:eq(0)");
    
        $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(15) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(15) td:eq(0)");
    
    
    $('<td class="threedBorder threedCell threedRadiocolodd">Part II - 26(B)</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(16) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part X - 26(B)</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(16) td:eq(0)");
    
        $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(17) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(17) td:eq(0)");
    
        $('<td class="threedBorder threedCell threedRadiocolodd">Part I - 19</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(18) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd">Part XI - 4</td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(18) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(19) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(19) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(20) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(20) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></b></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(21) td:eq(0)");
    $('<td class="threedBorder threedCell threedRadiocolodd"><i><font color="gray">Calculation</font></i></td>').insertBefore("table#pIGD8kVDDw_3db tr:eq(21) td:eq(0)");
// insert rows for each section


//    $('<tr class="threedRow threedrowodd"><th style="width: 140.0px;background-color:lightgray" class="threedTopLeft threedBorder" rowspan="1"><b>EXPENSES</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990-EZ</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2015</b><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2014</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2013</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>Average</b></th></tr>').insertBefore($("#pIGD8kVDDw_3db tbody tr:eq(4)"));
//    $('<tr class="threedRow threedrowodd"><th style="width: 140.0px;background-color:lightgray" class="threedTopLeft threedBorder" rowspan="1"><b>ASSETS</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990-EZ</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2015</b><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2014</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2013</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>Average</b></th></tr>').insertBefore($("#pIGD8kVDDw_3db tbody tr:eq(9)"));
//    $('<tr class="threedRow threedrowodd"><th style="width: 140.0px;background-color:lightgray" class="threedTopLeft threedBorder" rowspan="1"><b>LIABILITIES</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990-EZ</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2015</b><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2014</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2013</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>Average</b></th></tr>').insertBefore($("#pIGD8kVDDw_3db tbody tr:eq(13)"));
//    $('<tr class="threedRow threedrowodd"><th style="width: 140.0px;background-color:lightgray" class="threedTopLeft threedBorder" rowspan="1"><b>RECONCILIATION</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990</b></th><th class="threedBorder threedCell threedRadiocolodd" style="background-color:lightgray"><b>990-EZ</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2015</b><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2014</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>2013</b></th><th scope="col" class="threedBorder threedHeader threedRadiocolodd" rowspan="1" colspan="1" style="background-color:lightgray"><b>Average</b></th></tr>').insertBefore($("#pIGD8kVDDw_3db tbody tr:eq(15)"));
    $('td').css("fontSize", 14);
    $('th').css("fontSize", 14);
    
// prevent user edits on calculation fields

    $("input#id_pIGD8kVDDw_3 , input#id_pIGD8kVDDw_7 , input#id_pIGD8kVDDw_11 , input#id_pIGD8kVDDw_15 , input#id_pIGD8kVDDw_19 , input#id_pIGD8kVDDw_23 , input#id_pIGD8kVDDw_27 , input#id_pIGD8kVDDw_31 , input#id_pIGD8kVDDw_35 , input#id_pIGD8kVDDw_39 , input#id_pIGD8kVDDw_43 , input#id_pIGD8kVDDw_47 , input#id_pIGD8kVDDw_51 , input#id_pIGD8kVDDw_55 , input#id_pIGD8kVDDw_59 , input#id_pIGD8kVDDw_63 , input#id_pIGD8kVDDw_67 , input#id_pIGD8kVDDw_71 , input#id_pIGD8kVDDw_75 , input#id_pIGD8kVDDw_79 , input#id_pIGD8kVDDw_83 , input#id_pIGD8kVDDw_12 , input#id_pIGD8kVDDw_13 , input#id_pIGD8kVDDw_14 , input#id_pIGD8kVDDw_52 , input#id_pIGD8kVDDw_53 , input#id_pIGD8kVDDw_54 , input#id_pIGD8kVDDw_56 , input#id_pIGD8kVDDw_57 , input#id_pIGD8kVDDw_58 , input#id_pIGD8kVDDw_72 , input#id_pIGD8kVDDw_73 , input#id_pIGD8kVDDw_74 , input#id_pIGD8kVDDw_76 , input#id_pIGD8kVDDw_77 , input#id_pIGD8kVDDw_78 , input#id_pIGD8kVDDw_80 , input#id_pIGD8kVDDw_81 , input#id_pIGD8kVDDw_82").attr('readonly', true).css({'background-color' : 'lightgray'});

 // function starts. whenever any input is blurred

$("table#pIGD8kVDDw_3db input").blur(function(){

// get all user input values
// "a" variables are the value entered by a user
// "b" variables are the value entered by the user stripped of commas
// "c" variables convert the value from the input from a string to a number
 var a4 = $("#id_pIGD8kVDDw_4").val();
 var b4 = a4.replaceAll(",","");
 var c4 = parseInt(b4,10);
 
 var a5 = $("#id_pIGD8kVDDw_5").val();
 var b5 = a5.replaceAll(",","");
 var c5 = parseInt(b5,10);
 
 var a6 = $("#id_pIGD8kVDDw_6").val();
 var b6 = a6.replaceAll(",","");
 var c6 = parseInt(b6,10);
 
 var a8 = $("#id_pIGD8kVDDw_8").val();
 var b8 = a8.replaceAll(",","");
 var c8 = parseInt(b8,10);
 
 var a9 = $("#id_pIGD8kVDDw_9").val();
 var b9 = a9.replaceAll(",","");
 var c9 = parseInt(b9,10);
 
 var a10 = $("#id_pIGD8kVDDw_10").val();
 var b10 = a10.replaceAll(",","");
 var c10 = parseInt(b10,10);
 
 var a16 = $("#id_pIGD8kVDDw_16").val();
 var b16 = a16.replaceAll(",","");
 var c16 = parseInt(b16,10);
 
 var a17 = $("#id_pIGD8kVDDw_17").val();
 var b17 = a17.replaceAll(",","");
 var c17 = parseInt(b17,10);
 
 var a18 = $("#id_pIGD8kVDDw_18").val();
 var b18 = a18.replaceAll(",","");
 var c18 = parseInt(b18,10);
 
 var a24 = $("#id_pIGD8kVDDw_24").val();
 var b24 = a24.replaceAll(",","");
 var c24 = parseInt(b24,10);
 
 var a25 = $("#id_pIGD8kVDDw_25").val();
 var b25 = a25.replaceAll(",","");
 var c25 = parseInt(b25,10);
 
 var a26 = $("#id_pIGD8kVDDw_26").val();
 var b26 = a26.replaceAll(",","");
 var c26 = parseInt(b26,10);
 
 var a28 = $("#id_pIGD8kVDDw_28").val();
 var b28 = a28.replaceAll(",","");
 var c28 = parseInt(b28,10);
 
 var a29 = $("#id_pIGD8kVDDw_29").val();
 var b29 = a29.replaceAll(",","");
 var c29 = parseInt(b29,10);
 
 var a30 = $("#id_pIGD8kVDDw_30").val();
 var b30 = a30.replaceAll(",","");
 var c30 = parseInt(b30,10);
 
 var a32 = $("#id_pIGD8kVDDw_32").val();
 var b32 = a32.replaceAll(",","");
 var c32 = parseInt(b32,10);
 
 var a33 = $("#id_pIGD8kVDDw_33").val();
 var b33 = a33.replaceAll(",","");
 var c33 = parseInt(b33,10);
 
 var a34 = $("#id_pIGD8kVDDw_34").val();
 var b34 = a34.replaceAll(",","");
 var c34 = parseInt(b34,10);
 
 var a36 = $("#id_pIGD8kVDDw_36").val();
 var b36 = a36.replaceAll(",","");
 var c36 = parseInt(b36,10);
 
 var a37 = $("#id_pIGD8kVDDw_37").val();
 var b37 = a37.replaceAll(",","");
 var c37 = parseInt(b37,10);
 
 var a38 = $("#id_pIGD8kVDDw_38").val();
 var b38 = a38.replaceAll(",","");
 var c38 = parseInt(b38,10);
 
 var a44 = $("#id_pIGD8kVDDw_44").val();
 var b44 = a44.replaceAll(",","");
 var c44 = parseInt(b44,10);
 
 var a45 = $("#id_pIGD8kVDDw_45").val();
 var b45 = a45.replaceAll(",","");
 var c45 = parseInt(b45,10);
 
 var a46 = $("#id_pIGD8kVDDw_46").val();
 var b46 = a46.replaceAll(",","");
 var c46 = parseInt(b46,10);
 
 var a48 = $("#id_pIGD8kVDDw_48").val();
 var b48 = a48.replaceAll(",","");
 var c48 = parseInt(b48,10);
 
 var a49 = $("#id_pIGD8kVDDw_49").val();
 var b49 = a49.replaceAll(",","");
 var c49 = parseInt(b49,10);

 var a50 = $("#id_pIGD8kVDDw_50").val();
 var b50 = a50.replaceAll(",","");
 var c50 = parseInt(b50,10);
 
 var a60 = $("#id_pIGD8kVDDw_60").val();
 var b60 = a60.replaceAll(",","");
 var c60 = parseInt(b60,10);
 
 var a61 = $("#id_pIGD8kVDDw_61").val();
 var b61 = a61.replaceAll(",","");
 var c61 = parseInt(b61,10);
 
 var a62 = $("#id_pIGD8kVDDw_62").val();
 var b62 = a62.replaceAll(",","");
 var c62 = parseInt(b62,10);
 
 var a68 = $("#id_pIGD8kVDDw_68").val();
 var b68 = a68.replaceAll(",","");
 var c68 = parseInt(b68,10);
 
 var a69 = $("#id_pIGD8kVDDw_69").val();
 var b69 = a69.replaceAll(",","");
 var c69 = parseInt(b69,10);
 
 var a70 = $("#id_pIGD8kVDDw_70").val();
 var b70 = a70.replaceAll(",","");
 var c70 = parseInt(b70,10);
 
// create all variables to be used in calculation formulas. use Z for all user input variables. then set all null equal to zero for formulas only
// "z" variables are a numeric value to be used in calcuations. While we already had "c" above, "z" is the same as "c" unless "c" was a 'null' value, so we convert 'null's to numeric zeros.
 var z4;
 var z5;
 var z6; 

 var z8;
 var z9;
 var z10;

 var z16;
 var z17;
 var z18;

 var z24;
 var z25;
 var z26;

 var z28;
 var z29;
 var z30;

 var z32;
 var z33;
 var z34;

 var z36;
 var z37;
 var z38; 
 
 var z44;
 var z45;
 var z46; 
 
 var z48;
 var z49;
 var z50;

 var z60;
 var z61;
 var z62;

 var z68;
 var z69;
 var z70;

if (isNaN(c4)) {z4 = 0;}
	else {z4 = c4;}
if (isNaN(c5)) {z5 = 0;}
	else {z5 = c5;}
if (isNaN(c6)) {z6 = 0;}
	else {z6 = c6;}
    
if (isNaN(c8)) {z8 = 0;}
	else {z8 = c8;}
if (isNaN(c9)) {z9 = 0;}
	else {z9 = c9;}
if (isNaN(c10)) {z10 = 0;}
	else {z10 = c10;}
    
if (isNaN(c16)) {z16 = 0;}
	else {z16 = c16;}
if (isNaN(c17)) {z17 = 0;}
	else {z17 = c17;}
if (isNaN(c18)) {z18 = 0;}
	else {z18 = c18;}
    
if (isNaN(c24)) {z24 = 0;}
	else {z24 = c24;}
if (isNaN(c25)) {z25 = 0;}
	else {z25 = c25;}
if (isNaN(c26)) {z26 = 0;}
	else {z26 = c26;}
    
if (isNaN(c28)) {z28 = 0;}
	else {z28 = c28;}
if (isNaN(c29)) {z29 = 0;}
	else {z29 = c29;}
if (isNaN(c30)) {z30 = 0;}
	else {z30 = c30;}
    
if (isNaN(c32)) {z32 = 0;}
	else {z32 = c32;}
if (isNaN(c33)) {z33 = 0;}
	else {z33 = c33;}
if (isNaN(c34)) {z34 = 0;}
	else {z34 = c34;}

if (isNaN(c36)) {z36 = 0;}
	else {z36 = c36;}
if (isNaN(c37)) {z37 = 0;}
	else {z37 = c37;}
if (isNaN(c38)) {z38 = 0;}
	else {z38 = c38;}
    
if (isNaN(c44)) {z44 = 0;}
	else {z44 = c44;}
if (isNaN(c45)) {z45 = 0;}
	else {z45 = c45;}
if (isNaN(c46)) {z46 = 0;}
	else {z46 = c46;}

if (isNaN(c48)) {z48 = 0;}
	else {z48 = c48;}
if (isNaN(c49)) {z49 = 0;}
	else {z49 = c49;}
if (isNaN(c50)) {z50 = 0;}
	else {z50 = c50;}


if (isNaN(c60)) {z60 = 0;}
	else {z60 = c60;}
if (isNaN(c61)) {z61 = 0;}
	else {z61 = c61;}
if (isNaN(c62)) {z62 = 0;}
	else {z62 = c62;}

if (isNaN(c68)) {z68 = 0;}
	else {z68 = c68;}
if (isNaN(c69)) {z69 = 0;}
	else {z69 = c69;}
if (isNaN(c70)) {z70 = 0;}
	else {z70 = c70;}

// calculations. this set of "c" variables is different. these are the values to be entered into grayed out calculation fields in the form. they outputs only in order to avoid cyclical or self-referential formulas.
	var c7 = Math.round(((z4+z5+z6)/3));
 	var c11 = Math.round(((z8+z9+z10)/3));
 	var c12 = Math.round(z16-(z4+z8));
    var c13 = Math.round(z17-(z5+z9));
    var c14 = Math.round(z18-(z6+z10));
    var c15 = Math.round(((z16-(z4+z8))+(z17-(z5+z9))+(z18-(z6+z10)))/3);
    var c19 = Math.round((z16+z17+z18)/3);
    var c27 = Math.round((z24+z25+z26)/3);
    var c31 = Math.round((z28+z29+z30)/3);
    var c35 = Math.round((z32+z33+z34)/3);
    var c39 = Math.round((z36+z37+z38)/3);
    var c47 = Math.round((z44+z45+z46)/3);
    var c51 = Math.round((z48+z49+z50)/3);
    var c52 = Math.round(z44-z48);
    var c53 = Math.round(z45-z49);
    var c54 = Math.round(z46-z50);
    var c55 = Math.round(((z44-z48)+(z45-z49)+(z46-z50))/3);
    var c63 = Math.round((z60+z61+z62)/3);
    var c71 = Math.round((z68+z69+z70)/3);
    var c72 = Math.round(z16-z36);
    var c73 = Math.round(z17-z37);
    var c74 = Math.round(z18-z38);
    var c75 = Math.round(((z16-z36)+(z17-z37)+(z18-z38))/3);
	var c76 = Math.round(z68+(z16-z36));
	var c77 = Math.round(z69+(z17-z37));
	var c78 = Math.round(z70+(z18-z38));
	var c79 = Math.round(((z68+(z16-z36))+(z69+(z17-z37))+(z70+(z18-z38)))/3);
	var c80 = Math.round((z68+(z16-z36))-z48);
	var c81 = Math.round((z69+(z17-z37))-z49);
	var c82 = Math.round((z70+(z18-z38))-z50);
	var c83 = Math.round((((z68+(z16-z36))-z48)+((z69+(z17-z37))-z49)+((z70+(z18-z38))-z50))/3);

// put calculation outputs into form. The "c" values created above are converted to a number (probably not necessary), then converted to a string that has commas according to local (english language) conventions. 
// if the calcuation field was already blank, it will stay blank. this is a necessary step since we are updated all calculation outputs all at once. without this check, the formula would try to convert 'null' to a number, which results in "NaN" (not a number) appearing the calculation output field. 
 
if (isNaN(c7)) {$("#id_pIGD8kVDDw_7").val(null)}
	else {
	var d7 = Number(c7).toLocaleString('en');
	$("#id_pIGD8kVDDw_7").val(d7);
	}
    
if (isNaN(c11)) {$("#id_pIGD8kVDDw_11").val(null)}
	else {
	var d11 = Number(c11).toLocaleString('en');
	$("#id_pIGD8kVDDw_11").val(d11);
	}

if (isNaN(c12)) {$("#id_pIGD8kVDDw_12").val(null)}
	else {
	var d12 = Number(c12).toLocaleString('en');
	$("#id_pIGD8kVDDw_12").val(d12);
	}

if (isNaN(c13)) {$("#id_pIGD8kVDDw_13").val(null)}
	else {
	var d13 = Number(c13).toLocaleString('en');
	$("#id_pIGD8kVDDw_13").val(d13);
	}

if (isNaN(c14)) {$("#id_pIGD8kVDDw_14").val(null)}
	else {
	var d14 = Number(c14).toLocaleString('en');
	$("#id_pIGD8kVDDw_14").val(d14);
	}

if (isNaN(c15)) {$("#id_pIGD8kVDDw_15").val(null)}
	else {
	var d15 = Number(c15).toLocaleString('en');
	$("#id_pIGD8kVDDw_15").val(d15);
	}

if (isNaN(c19)) {$("#id_pIGD8kVDDw_19").val(null)}
	else {
	var d19 = Number(c19).toLocaleString('en');
	$("#id_pIGD8kVDDw_19").val(d19);
	}

if (isNaN(c27)) {$("#id_pIGD8kVDDw_27").val(null)}
	else {
	var d27 = Number(c27).toLocaleString('en');
	$("#id_pIGD8kVDDw_27").val(d27);
	}

if (isNaN(c31)) {$("#id_pIGD8kVDDw_31").val(null)}
	else {
	var d31 = Number(c31).toLocaleString('en');
	$("#id_pIGD8kVDDw_31").val(d31);
	}

if (isNaN(c35)) {$("#id_pIGD8kVDDw_35").val(null)}
	else {
	var d35 = Number(c35).toLocaleString('en');
	$("#id_pIGD8kVDDw_35").val(d35);
	}

if (isNaN(c39)) {$("#id_pIGD8kVDDw_39").val(null)}
	else {
	var d39 = Number(c39).toLocaleString('en');
	$("#id_pIGD8kVDDw_39").val(d39);
	}

if (isNaN(c47)) {$("#id_pIGD8kVDDw_47").val(null)}
	else {
	var d47 = Number(c47).toLocaleString('en');
	$("#id_pIGD8kVDDw_47").val(d47);
	}

if (isNaN(c51)) {$("#id_pIGD8kVDDw_51").val(null)}
	else {
	var d51 = Number(c51).toLocaleString('en');
	$("#id_pIGD8kVDDw_51").val(d51);
	}

if (isNaN(c52)) {$("#id_pIGD8kVDDw_52").val(null)}
	else {
	var d52 = Number(c52).toLocaleString('en');
	$("#id_pIGD8kVDDw_52").val(d52);
	}

if (isNaN(c53)) {$("#id_pIGD8kVDDw_53").val(null)}
	else {
	var d53 = Number(c53).toLocaleString('en');
	$("#id_pIGD8kVDDw_53").val(d53);
	}

if (isNaN(c54)) {$("#id_pIGD8kVDDw_54").val(null)}
	else {
	var d54 = Number(c54).toLocaleString('en');
	$("#id_pIGD8kVDDw_54").val(d54);
	}

if (isNaN(c55)) {$("#id_pIGD8kVDDw_55").val(null)}
	else {
	var d55 = Number(c55).toLocaleString('en');
	$("#id_pIGD8kVDDw_55").val(d55);
	}

 if (isNaN(c63)) {$("#id_pIGD8kVDDw_63").val(null)}
	else {
	var d63 = Number(c63).toLocaleString('en');
	$("#id_pIGD8kVDDw_63").val(d63);
	}

 if (isNaN(c71)) {$("#id_pIGD8kVDDw_71").val(null)}
	else {
	var d71 = Number(c71).toLocaleString('en');
	$("#id_pIGD8kVDDw_71").val(d71);
	}

 if (isNaN(c72)) {$("#id_pIGD8kVDDw_72").val(null)}
	else {
	var d72 = Number(c72).toLocaleString('en');
	$("#id_pIGD8kVDDw_72").val(d72);
	}

 if (isNaN(c73)) {$("#id_pIGD8kVDDw_73").val(null)}
	else {
	var d73 = Number(c73).toLocaleString('en');
	$("#id_pIGD8kVDDw_73").val(d73);
	}

 if (isNaN(c74)) {$("#id_pIGD8kVDDw_74").val(null)}
	else {
	var d74 = Number(c74).toLocaleString('en');
	$("#id_pIGD8kVDDw_74").val(d74);
	}

 if (isNaN(c75)) {$("#id_pIGD8kVDDw_75").val(null)}
	else {
	var d75 = Number(c75).toLocaleString('en');
	$("#id_pIGD8kVDDw_75").val(d75);
	}

 if (isNaN(c76)) {$("#id_pIGD8kVDDw_76").val(null)}
	else {
	var d76 = Number(c76).toLocaleString('en');
	$("#id_pIGD8kVDDw_76").val(d76);
	}

 if (isNaN(c77)) {$("#id_pIGD8kVDDw_77").val(null)}
	else {
	var d77 = Number(c77).toLocaleString('en');
	$("#id_pIGD8kVDDw_77").val(d77);
	}

 if (isNaN(c78)) {$("#id_pIGD8kVDDw_78").val(null)}
	else {
	var d78 = Number(c78).toLocaleString('en');
	$("#id_pIGD8kVDDw_78").val(d78);
	}

 if (isNaN(c79)) {$("#id_pIGD8kVDDw_79").val(null)}
	else {
	var d79 = Number(c79).toLocaleString('en');
	$("#id_pIGD8kVDDw_79").val(d79);
	}

 if (isNaN(c80)) {$("#id_pIGD8kVDDw_80").val(null)}
	else {
	var d80 = Number(c80).toLocaleString('en');
	$("#id_pIGD8kVDDw_80").val(d80);
	}
    
 if (isNaN(c81)) {$("#id_pIGD8kVDDw_81").val(null)}
	else {
	var d81 = Number(c81).toLocaleString('en');
	$("#id_pIGD8kVDDw_81").val(d81);
	}

 if (isNaN(c82)) {$("#id_pIGD8kVDDw_82").val(null)}
	else {
	var d82 = Number(c82).toLocaleString('en');
	$("#id_pIGD8kVDDw_82").val(d82);
	}
    
 if (isNaN(c83)) {$("#id_pIGD8kVDDw_83").val(null)}
	else {
	var d83 = Number(c83).toLocaleString('en');
	$("#id_pIGD8kVDDw_83").val(d83);
	}

// put input variables back. earlier, we converted all input fields to a "c" value. However, we only used that "c" if it was not blank. this allowed us to use "z" values as 0 without changing the user input fields form blanks to zero. the formulas here convert the user input (not the number used in the calculation formulas) back to a number with commas, unless it was null, then it stays blank (rather than turning into a zero). 

if (isNaN(c4)) {$("#id_pIGD8kVDDw_4").val(null)}
	else {
	var d4 = Number(c4).toLocaleString('en');
	$("#id_pIGD8kVDDw_4").val(d4);
	}
if (isNaN(c5)) {$("#id_pIGD8kVDDw_5").val(null)}
	else {
	var d5 = Number(c5).toLocaleString('en');
	$("#id_pIGD8kVDDw_5").val(d5);
	}
if (isNaN(c6)) {$("#id_pIGD8kVDDw_6").val(null)}
 	else {
 	var d6 = Number(c6).toLocaleString('en');
 	$("#id_pIGD8kVDDw_6").val(d6);
 	}
    
if (isNaN(c8)) {$("#id_pIGD8kVDDw_8").val(null)}
	else {
	var d8 = Number(c8).toLocaleString('en');
	$("#id_pIGD8kVDDw_8").val(d8);
	}
if (isNaN(c9)) {$("#id_pIGD8kVDDw_9").val(null)}
	else {
	var d9 = Number(c9).toLocaleString('en');
	$("#id_pIGD8kVDDw_9").val(d9);
	}
if (isNaN(c10)) {$("#id_pIGD8kVDDw_10").val(null)}
 	else {
 	var d10 = Number(c10).toLocaleString('en');
 	$("#id_pIGD8kVDDw_10").val(d10);
 	}

if (isNaN(c16)) {$("#id_pIGD8kVDDw_16").val(null)}
	else {
	var d16 = Number(c16).toLocaleString('en');
	$("#id_pIGD8kVDDw_16").val(d16);
	}
if (isNaN(c17)) {$("#id_pIGD8kVDDw_17").val(null)}
	else {
	var d17 = Number(c17).toLocaleString('en');
	$("#id_pIGD8kVDDw_17").val(d17);
	}
if (isNaN(c18)) {$("#id_pIGD8kVDDw_18").val(null)}
 	else {
 	var d18 = Number(c18).toLocaleString('en');
 	$("#id_pIGD8kVDDw_18").val(d18);
 	}
   
if (isNaN(c24)) {$("#id_pIGD8kVDDw_24").val(null)}
	else {
	var d24 = Number(c24).toLocaleString('en');
	$("#id_pIGD8kVDDw_24").val(d24);
	}
if (isNaN(c25)) {$("#id_pIGD8kVDDw_25").val(null)}
	else {
	var d25 = Number(c25).toLocaleString('en');
	$("#id_pIGD8kVDDw_25").val(d25);
	}
if (isNaN(c26)) {$("#id_pIGD8kVDDw_26").val(null)}
 	else {
 	var d26 = Number(c26).toLocaleString('en');
 	$("#id_pIGD8kVDDw_26").val(d26);
 	}
 
if (isNaN(c28)) {$("#id_pIGD8kVDDw_28").val(null)}
	else {
	var d28 = Number(c28).toLocaleString('en');
	$("#id_pIGD8kVDDw_28").val(d28);
	}
if (isNaN(c29)) {$("#id_pIGD8kVDDw_29").val(null)}
	else {
	var d29 = Number(c29).toLocaleString('en');
	$("#id_pIGD8kVDDw_29").val(d29);
	}
if (isNaN(c30)) {$("#id_pIGD8kVDDw_30").val(null)}
 	else {
 	var d30 = Number(c30).toLocaleString('en');
 	$("#id_pIGD8kVDDw_30").val(d30);
 	}

if (isNaN(c32)) {$("#id_pIGD8kVDDw_32").val(null)}
	else {
	var d32 = Number(c32).toLocaleString('en');
	$("#id_pIGD8kVDDw_32").val(d32);
	}
if (isNaN(c33)) {$("#id_pIGD8kVDDw_33").val(null)}
	else {
	var d33 = Number(c33).toLocaleString('en');
	$("#id_pIGD8kVDDw_33").val(d33);
	}
if (isNaN(c34)) {$("#id_pIGD8kVDDw_34").val(null)}
 	else {
 	var d34 = Number(c34).toLocaleString('en');
 	$("#id_pIGD8kVDDw_34").val(d34);
 	}

if (isNaN(c36)) {$("#id_pIGD8kVDDw_36").val(null)}
	else {
	var d36 = Number(c36).toLocaleString('en');
	$("#id_pIGD8kVDDw_36").val(d36);
	}
if (isNaN(c37)) {$("#id_pIGD8kVDDw_37").val(null)}
	else {
	var d37 = Number(c37).toLocaleString('en');
	$("#id_pIGD8kVDDw_37").val(d37);
	}
if (isNaN(c38)) {$("#id_pIGD8kVDDw_38").val(null)}
 	else {
 	var d38 = Number(c38).toLocaleString('en');
 	$("#id_pIGD8kVDDw_38").val(d38);
 	}

if (isNaN(c44)) {$("#id_pIGD8kVDDw_44").val(null)}
	else {
	var d44 = Number(c44).toLocaleString('en');
	$("#id_pIGD8kVDDw_44").val(d44);
	}
if (isNaN(c45)) {$("#id_pIGD8kVDDw_45").val(null)}
	else {
	var d45 = Number(c45).toLocaleString('en');
	$("#id_pIGD8kVDDw_45").val(d45);
	}
if (isNaN(c46)) {$("#id_pIGD8kVDDw_46").val(null)}
 	else {
 	var d46 = Number(c46).toLocaleString('en');
 	$("#id_pIGD8kVDDw_46").val(d46);
 	}

if (isNaN(c48)) {$("#id_pIGD8kVDDw_48").val(null)}
	else {
	var d48 = Number(c48).toLocaleString('en');
	$("#id_pIGD8kVDDw_48").val(d48);
	}
if (isNaN(c49)) {$("#id_pIGD8kVDDw_49").val(null)}
	else {
	var d49 = Number(c49).toLocaleString('en');
	$("#id_pIGD8kVDDw_49").val(d49);
	}
if (isNaN(c50)) {$("#id_pIGD8kVDDw_50").val(null)}
 	else {
 	var d50 = Number(c50).toLocaleString('en');
 	$("#id_pIGD8kVDDw_50").val(d50);
 	}

if (isNaN(c60)) {$("#id_pIGD8kVDDw_60").val(null)}
	else {
	var d60 = Number(c60).toLocaleString('en');
	$("#id_pIGD8kVDDw_60").val(d60);
	}
if (isNaN(c61)) {$("#id_pIGD8kVDDw_61").val(null)}
	else {
	var d61 = Number(c61).toLocaleString('en');
	$("#id_pIGD8kVDDw_61").val(d61);
	}
if (isNaN(c62)) {$("#id_pIGD8kVDDw_62").val(null)}
 	else {
 	var d62 = Number(c62).toLocaleString('en');
 	$("#id_pIGD8kVDDw_62").val(d62);
 	}
    
if (isNaN(c68)) {$("#id_pIGD8kVDDw_68").val(null)}
	else {
	var d68 = Number(c68).toLocaleString('en');
	$("#id_pIGD8kVDDw_68").val(d68);
	}
if (isNaN(c69)) {$("#id_pIGD8kVDDw_69").val(null)}
	else {
	var d69 = Number(c69).toLocaleString('en');
	$("#id_pIGD8kVDDw_69").val(d69);
	}
if (isNaN(c70)) {$("#id_pIGD8kVDDw_70").val(null)}
	else {
	var d70 = Number(c70).toLocaleString('en');
	$("#id_pIGD8kVDDw_70").val(d70);
	}

    
    
});

// blur function has ended

// perform blur function once only on page load
// get all user input values
// "a" variables are the value entered by a user
// "b" variables are the value entered by the user stripped of commas
// "c" variables convert the value from the input from a string to a number
 var a4 = $("#id_pIGD8kVDDw_4").val();
 var b4 = a4.replaceAll(",","");
 var c4 = parseInt(b4,10);
 
 var a5 = $("#id_pIGD8kVDDw_5").val();
 var b5 = a5.replaceAll(",","");
 var c5 = parseInt(b5,10);
 
 var a6 = $("#id_pIGD8kVDDw_6").val();
 var b6 = a6.replaceAll(",","");
 var c6 = parseInt(b6,10);
 
 var a8 = $("#id_pIGD8kVDDw_8").val();
 var b8 = a8.replaceAll(",","");
 var c8 = parseInt(b8,10);
 
 var a9 = $("#id_pIGD8kVDDw_9").val();
 var b9 = a9.replaceAll(",","");
 var c9 = parseInt(b9,10);
 
 var a10 = $("#id_pIGD8kVDDw_10").val();
 var b10 = a10.replaceAll(",","");
 var c10 = parseInt(b10,10);
 
 var a16 = $("#id_pIGD8kVDDw_16").val();
 var b16 = a16.replaceAll(",","");
 var c16 = parseInt(b16,10);
 
 var a17 = $("#id_pIGD8kVDDw_17").val();
 var b17 = a17.replaceAll(",","");
 var c17 = parseInt(b17,10);
 
 var a18 = $("#id_pIGD8kVDDw_18").val();
 var b18 = a18.replaceAll(",","");
 var c18 = parseInt(b18,10);
 
 var a24 = $("#id_pIGD8kVDDw_24").val();
 var b24 = a24.replaceAll(",","");
 var c24 = parseInt(b24,10);
 
 var a25 = $("#id_pIGD8kVDDw_25").val();
 var b25 = a25.replaceAll(",","");
 var c25 = parseInt(b25,10);
 
 var a26 = $("#id_pIGD8kVDDw_26").val();
 var b26 = a26.replaceAll(",","");
 var c26 = parseInt(b26,10);
 
 var a28 = $("#id_pIGD8kVDDw_28").val();
 var b28 = a28.replaceAll(",","");
 var c28 = parseInt(b28,10);
 
 var a29 = $("#id_pIGD8kVDDw_29").val();
 var b29 = a29.replaceAll(",","");
 var c29 = parseInt(b29,10);
 
 var a30 = $("#id_pIGD8kVDDw_30").val();
 var b30 = a30.replaceAll(",","");
 var c30 = parseInt(b30,10);
 
 var a32 = $("#id_pIGD8kVDDw_32").val();
 var b32 = a32.replaceAll(",","");
 var c32 = parseInt(b32,10);
 
 var a33 = $("#id_pIGD8kVDDw_33").val();
 var b33 = a33.replaceAll(",","");
 var c33 = parseInt(b33,10);
 
 var a34 = $("#id_pIGD8kVDDw_34").val();
 var b34 = a34.replaceAll(",","");
 var c34 = parseInt(b34,10);
 
 var a36 = $("#id_pIGD8kVDDw_36").val();
 var b36 = a36.replaceAll(",","");
 var c36 = parseInt(b36,10);
 
 var a37 = $("#id_pIGD8kVDDw_37").val();
 var b37 = a37.replaceAll(",","");
 var c37 = parseInt(b37,10);
 
 var a38 = $("#id_pIGD8kVDDw_38").val();
 var b38 = a38.replaceAll(",","");
 var c38 = parseInt(b38,10);
 
 var a44 = $("#id_pIGD8kVDDw_44").val();
 var b44 = a44.replaceAll(",","");
 var c44 = parseInt(b44,10);
 
 var a45 = $("#id_pIGD8kVDDw_45").val();
 var b45 = a45.replaceAll(",","");
 var c45 = parseInt(b45,10);
 
 var a46 = $("#id_pIGD8kVDDw_46").val();
 var b46 = a46.replaceAll(",","");
 var c46 = parseInt(b46,10);
 
 var a48 = $("#id_pIGD8kVDDw_48").val();
 var b48 = a48.replaceAll(",","");
 var c48 = parseInt(b48,10);
 
 var a49 = $("#id_pIGD8kVDDw_49").val();
 var b49 = a49.replaceAll(",","");
 var c49 = parseInt(b49,10);

 var a50 = $("#id_pIGD8kVDDw_50").val();
 var b50 = a50.replaceAll(",","");
 var c50 = parseInt(b50,10);
 
 var a60 = $("#id_pIGD8kVDDw_60").val();
 var b60 = a60.replaceAll(",","");
 var c60 = parseInt(b60,10);
 
 var a61 = $("#id_pIGD8kVDDw_61").val();
 var b61 = a61.replaceAll(",","");
 var c61 = parseInt(b61,10);
 
 var a62 = $("#id_pIGD8kVDDw_62").val();
 var b62 = a62.replaceAll(",","");
 var c62 = parseInt(b62,10);
 
 var a68 = $("#id_pIGD8kVDDw_68").val();
 var b68 = a68.replaceAll(",","");
 var c68 = parseInt(b68,10);
 
 var a69 = $("#id_pIGD8kVDDw_69").val();
 var b69 = a69.replaceAll(",","");
 var c69 = parseInt(b69,10);
 
 var a70 = $("#id_pIGD8kVDDw_70").val();
 var b70 = a70.replaceAll(",","");
 var c70 = parseInt(b70,10);
 
// create all variables to be used in calculation formulas. use Z for all user input variables. then set all null equal to zero for formulas only
// "z" variables are a numeric value to be used in calcuations. While we already had "c" above, "z" is the same as "c" unless "c" was a 'null' value, so we convert 'null's to numeric zeros.
 var z4;
 var z5;
 var z6; 

 var z8;
 var z9;
 var z10;

 var z16;
 var z17;
 var z18;

 var z24;
 var z25;
 var z26;

 var z28;
 var z29;
 var z30;

 var z32;
 var z33;
 var z34;

 var z36;
 var z37;
 var z38; 
 
 var z44;
 var z45;
 var z46; 
 
 var z48;
 var z49;
 var z50;

 var z60;
 var z61;
 var z62;

 var z68;
 var z69;
 var z70;

if (isNaN(c4)) {z4 = 0;}
	else {z4 = c4;}
if (isNaN(c5)) {z5 = 0;}
	else {z5 = c5;}
if (isNaN(c6)) {z6 = 0;}
	else {z6 = c6;}
    
if (isNaN(c8)) {z8 = 0;}
	else {z8 = c8;}
if (isNaN(c9)) {z9 = 0;}
	else {z9 = c9;}
if (isNaN(c10)) {z10 = 0;}
	else {z10 = c10;}
    
if (isNaN(c16)) {z16 = 0;}
	else {z16 = c16;}
if (isNaN(c17)) {z17 = 0;}
	else {z17 = c17;}
if (isNaN(c18)) {z18 = 0;}
	else {z18 = c18;}
    
if (isNaN(c24)) {z24 = 0;}
	else {z24 = c24;}
if (isNaN(c25)) {z25 = 0;}
	else {z25 = c25;}
if (isNaN(c26)) {z26 = 0;}
	else {z26 = c26;}
    
if (isNaN(c28)) {z28 = 0;}
	else {z28 = c28;}
if (isNaN(c29)) {z29 = 0;}
	else {z29 = c29;}
if (isNaN(c30)) {z30 = 0;}
	else {z30 = c30;}
    
if (isNaN(c32)) {z32 = 0;}
	else {z32 = c32;}
if (isNaN(c33)) {z33 = 0;}
	else {z33 = c33;}
if (isNaN(c34)) {z34 = 0;}
	else {z34 = c34;}

if (isNaN(c36)) {z36 = 0;}
	else {z36 = c36;}
if (isNaN(c37)) {z37 = 0;}
	else {z37 = c37;}
if (isNaN(c38)) {z38 = 0;}
	else {z38 = c38;}
    
if (isNaN(c44)) {z44 = 0;}
	else {z44 = c44;}
if (isNaN(c45)) {z45 = 0;}
	else {z45 = c45;}
if (isNaN(c46)) {z46 = 0;}
	else {z46 = c46;}

if (isNaN(c48)) {z48 = 0;}
	else {z48 = c48;}
if (isNaN(c49)) {z49 = 0;}
	else {z49 = c49;}
if (isNaN(c50)) {z50 = 0;}
	else {z50 = c50;}


if (isNaN(c60)) {z60 = 0;}
	else {z60 = c60;}
if (isNaN(c61)) {z61 = 0;}
	else {z61 = c61;}
if (isNaN(c62)) {z62 = 0;}
	else {z62 = c62;}

if (isNaN(c68)) {z68 = 0;}
	else {z68 = c68;}
if (isNaN(c69)) {z69 = 0;}
	else {z69 = c69;}
if (isNaN(c70)) {z70 = 0;}
	else {z70 = c70;}

// calculations. this set of "c" variables is different. these are the values to be entered into grayed out calculation fields in the form. they outputs only in order to avoid cyclical or self-referential formulas.
	var c7 = Math.round(((z4+z5+z6)/3));
 	var c11 = Math.round(((z8+z9+z10)/3));
 	var c12 = Math.round(z16-(z4+z8));
    var c13 = Math.round(z17-(z5+z9));
    var c14 = Math.round(z18-(z6+z10));
    var c15 = Math.round(((z16-(z4+z8))+(z17-(z5+z9))+(z18-(z6+z10)))/3);
    var c19 = Math.round((z16+z17+z18)/3);
    var c27 = Math.round((z24+z25+z26)/3);
    var c31 = Math.round((z28+z29+z30)/3);
    var c35 = Math.round((z32+z33+z34)/3);
    var c39 = Math.round((z36+z37+z38)/3);
    var c47 = Math.round((z44+z45+z46)/3);
    var c51 = Math.round((z48+z49+z50)/3);
    var c52 = Math.round(z44-z48);
    var c53 = Math.round(z45-z49);
    var c54 = Math.round(z46-z50);
    var c55 = Math.round(((z44-z48)+(z45-z49)+(z46-z50))/3);
    var c63 = Math.round((z60+z61+z62)/3);
    var c71 = Math.round((z68+z69+z70)/3);
    var c72 = Math.round(z16-z36);
    var c73 = Math.round(z17-z37);
    var c74 = Math.round(z18-z38);
    var c75 = Math.round(((z16-z36)+(z17-z37)+(z18-z38))/3);
	var c76 = Math.round(z68+(z16-z36));
	var c77 = Math.round(z69+(z17-z37));
	var c78 = Math.round(z70+(z18-z38));
	var c79 = Math.round(((z68+(z16-z36))+(z69+(z17-z37))+(z70+(z18-z38)))/3);
	var c80 = Math.round((z68+(z16-z36))-z48);
	var c81 = Math.round((z69+(z17-z37))-z49);
	var c82 = Math.round((z70+(z18-z38))-z50);
	var c83 = Math.round((((z68+(z16-z36))-z48)+((z69+(z17-z37))-z49)+((z70+(z18-z38))-z50))/3);

// put calculation outputs into form. The "c" values created above are converted to a number (probably not necessary), then converted to a string that has commas according to local (english language) conventions. 
// if the calcuation field was already blank, it will stay blank. this is a necessary step since we are updated all calculation outputs all at once. without this check, the formula would try to convert 'null' to a number, which results in "NaN" (not a number) appearing the calculation output field. 
 
if (isNaN(c7)) {$("#id_pIGD8kVDDw_7").val(null)}
	else {
	var d7 = Number(c7).toLocaleString('en');
	$("#id_pIGD8kVDDw_7").val(d7);
	}
    
if (isNaN(c11)) {$("#id_pIGD8kVDDw_11").val(null)}
	else {
	var d11 = Number(c11).toLocaleString('en');
	$("#id_pIGD8kVDDw_11").val(d11);
	}

if (isNaN(c12)) {$("#id_pIGD8kVDDw_12").val(null)}
	else {
	var d12 = Number(c12).toLocaleString('en');
	$("#id_pIGD8kVDDw_12").val(d12);
	}

if (isNaN(c13)) {$("#id_pIGD8kVDDw_13").val(null)}
	else {
	var d13 = Number(c13).toLocaleString('en');
	$("#id_pIGD8kVDDw_13").val(d13);
	}

if (isNaN(c14)) {$("#id_pIGD8kVDDw_14").val(null)}
	else {
	var d14 = Number(c14).toLocaleString('en');
	$("#id_pIGD8kVDDw_14").val(d14);
	}

if (isNaN(c15)) {$("#id_pIGD8kVDDw_15").val(null)}
	else {
	var d15 = Number(c15).toLocaleString('en');
	$("#id_pIGD8kVDDw_15").val(d15);
	}

if (isNaN(c19)) {$("#id_pIGD8kVDDw_19").val(null)}
	else {
	var d19 = Number(c19).toLocaleString('en');
	$("#id_pIGD8kVDDw_19").val(d19);
	}

if (isNaN(c27)) {$("#id_pIGD8kVDDw_27").val(null)}
	else {
	var d27 = Number(c27).toLocaleString('en');
	$("#id_pIGD8kVDDw_27").val(d27);
	}

if (isNaN(c31)) {$("#id_pIGD8kVDDw_31").val(null)}
	else {
	var d31 = Number(c31).toLocaleString('en');
	$("#id_pIGD8kVDDw_31").val(d31);
	}

if (isNaN(c35)) {$("#id_pIGD8kVDDw_35").val(null)}
	else {
	var d35 = Number(c35).toLocaleString('en');
	$("#id_pIGD8kVDDw_35").val(d35);
	}

if (isNaN(c39)) {$("#id_pIGD8kVDDw_39").val(null)}
	else {
	var d39 = Number(c39).toLocaleString('en');
	$("#id_pIGD8kVDDw_39").val(d39);
	}

if (isNaN(c47)) {$("#id_pIGD8kVDDw_47").val(null)}
	else {
	var d47 = Number(c47).toLocaleString('en');
	$("#id_pIGD8kVDDw_47").val(d47);
	}

if (isNaN(c51)) {$("#id_pIGD8kVDDw_51").val(null)}
	else {
	var d51 = Number(c51).toLocaleString('en');
	$("#id_pIGD8kVDDw_51").val(d51);
	}

if (isNaN(c52)) {$("#id_pIGD8kVDDw_52").val(null)}
	else {
	var d52 = Number(c52).toLocaleString('en');
	$("#id_pIGD8kVDDw_52").val(d52);
	}

if (isNaN(c53)) {$("#id_pIGD8kVDDw_53").val(null)}
	else {
	var d53 = Number(c53).toLocaleString('en');
	$("#id_pIGD8kVDDw_53").val(d53);
	}

if (isNaN(c54)) {$("#id_pIGD8kVDDw_54").val(null)}
	else {
	var d54 = Number(c54).toLocaleString('en');
	$("#id_pIGD8kVDDw_54").val(d54);
	}

if (isNaN(c55)) {$("#id_pIGD8kVDDw_55").val(null)}
	else {
	var d55 = Number(c55).toLocaleString('en');
	$("#id_pIGD8kVDDw_55").val(d55);
	}

 if (isNaN(c63)) {$("#id_pIGD8kVDDw_63").val(null)}
	else {
	var d63 = Number(c63).toLocaleString('en');
	$("#id_pIGD8kVDDw_63").val(d63);
	}

 if (isNaN(c71)) {$("#id_pIGD8kVDDw_71").val(null)}
	else {
	var d71 = Number(c71).toLocaleString('en');
	$("#id_pIGD8kVDDw_71").val(d71);
	}

 if (isNaN(c72)) {$("#id_pIGD8kVDDw_72").val(null)}
	else {
	var d72 = Number(c72).toLocaleString('en');
	$("#id_pIGD8kVDDw_72").val(d72);
	}

 if (isNaN(c73)) {$("#id_pIGD8kVDDw_73").val(null)}
	else {
	var d73 = Number(c73).toLocaleString('en');
	$("#id_pIGD8kVDDw_73").val(d73);
	}

 if (isNaN(c74)) {$("#id_pIGD8kVDDw_74").val(null)}
	else {
	var d74 = Number(c74).toLocaleString('en');
	$("#id_pIGD8kVDDw_74").val(d74);
	}

 if (isNaN(c75)) {$("#id_pIGD8kVDDw_75").val(null)}
	else {
	var d75 = Number(c75).toLocaleString('en');
	$("#id_pIGD8kVDDw_75").val(d75);
	}

 if (isNaN(c76)) {$("#id_pIGD8kVDDw_76").val(null)}
	else {
	var d76 = Number(c76).toLocaleString('en');
	$("#id_pIGD8kVDDw_76").val(d76);
	}

 if (isNaN(c77)) {$("#id_pIGD8kVDDw_77").val(null)}
	else {
	var d77 = Number(c77).toLocaleString('en');
	$("#id_pIGD8kVDDw_77").val(d77);
	}

 if (isNaN(c78)) {$("#id_pIGD8kVDDw_78").val(null)}
	else {
	var d78 = Number(c78).toLocaleString('en');
	$("#id_pIGD8kVDDw_78").val(d78);
	}

 if (isNaN(c79)) {$("#id_pIGD8kVDDw_79").val(null)}
	else {
	var d79 = Number(c79).toLocaleString('en');
	$("#id_pIGD8kVDDw_79").val(d79);
	}

 if (isNaN(c80)) {$("#id_pIGD8kVDDw_80").val(null)}
	else {
	var d80 = Number(c80).toLocaleString('en');
	$("#id_pIGD8kVDDw_80").val(d80);
	}
    
 if (isNaN(c81)) {$("#id_pIGD8kVDDw_81").val(null)}
	else {
	var d81 = Number(c81).toLocaleString('en');
	$("#id_pIGD8kVDDw_81").val(d81);
	}

 if (isNaN(c82)) {$("#id_pIGD8kVDDw_82").val(null)}
	else {
	var d82 = Number(c82).toLocaleString('en');
	$("#id_pIGD8kVDDw_82").val(d82);
	}
    
 if (isNaN(c83)) {$("#id_pIGD8kVDDw_83").val(null)}
	else {
	var d83 = Number(c83).toLocaleString('en');
	$("#id_pIGD8kVDDw_83").val(d83);
	}

// put input variables back. earlier, we converted all input fields to a "c" value. However, we only used that "c" if it was not blank. this allowed us to use "z" values as 0 without changing the user input fields form blanks to zero. the formulas here convert the user input (not the number used in the calculation formulas) back to a number with commas, unless it was null, then it stays blank (rather than turning into a zero). 

if (isNaN(c4)) {$("#id_pIGD8kVDDw_4").val(null)}
	else {
	var d4 = Number(c4).toLocaleString('en');
	$("#id_pIGD8kVDDw_4").val(d4);
	}
if (isNaN(c5)) {$("#id_pIGD8kVDDw_5").val(null)}
	else {
	var d5 = Number(c5).toLocaleString('en');
	$("#id_pIGD8kVDDw_5").val(d5);
	}
if (isNaN(c6)) {$("#id_pIGD8kVDDw_6").val(null)}
 	else {
 	var d6 = Number(c6).toLocaleString('en');
 	$("#id_pIGD8kVDDw_6").val(d6);
 	}
    
if (isNaN(c8)) {$("#id_pIGD8kVDDw_8").val(null)}
	else {
	var d8 = Number(c8).toLocaleString('en');
	$("#id_pIGD8kVDDw_8").val(d8);
	}
if (isNaN(c9)) {$("#id_pIGD8kVDDw_9").val(null)}
	else {
	var d9 = Number(c9).toLocaleString('en');
	$("#id_pIGD8kVDDw_9").val(d9);
	}
if (isNaN(c10)) {$("#id_pIGD8kVDDw_10").val(null)}
 	else {
 	var d10 = Number(c10).toLocaleString('en');
 	$("#id_pIGD8kVDDw_10").val(d10);
 	}

if (isNaN(c16)) {$("#id_pIGD8kVDDw_16").val(null)}
	else {
	var d16 = Number(c16).toLocaleString('en');
	$("#id_pIGD8kVDDw_16").val(d16);
	}
if (isNaN(c17)) {$("#id_pIGD8kVDDw_17").val(null)}
	else {
	var d17 = Number(c17).toLocaleString('en');
	$("#id_pIGD8kVDDw_17").val(d17);
	}
if (isNaN(c18)) {$("#id_pIGD8kVDDw_18").val(null)}
 	else {
 	var d18 = Number(c18).toLocaleString('en');
 	$("#id_pIGD8kVDDw_18").val(d18);
 	}
   
if (isNaN(c24)) {$("#id_pIGD8kVDDw_24").val(null)}
	else {
	var d24 = Number(c24).toLocaleString('en');
	$("#id_pIGD8kVDDw_24").val(d24);
	}
if (isNaN(c25)) {$("#id_pIGD8kVDDw_25").val(null)}
	else {
	var d25 = Number(c25).toLocaleString('en');
	$("#id_pIGD8kVDDw_25").val(d25);
	}
if (isNaN(c26)) {$("#id_pIGD8kVDDw_26").val(null)}
 	else {
 	var d26 = Number(c26).toLocaleString('en');
 	$("#id_pIGD8kVDDw_26").val(d26);
 	}
 
if (isNaN(c28)) {$("#id_pIGD8kVDDw_28").val(null)}
	else {
	var d28 = Number(c28).toLocaleString('en');
	$("#id_pIGD8kVDDw_28").val(d28);
	}
if (isNaN(c29)) {$("#id_pIGD8kVDDw_29").val(null)}
	else {
	var d29 = Number(c29).toLocaleString('en');
	$("#id_pIGD8kVDDw_29").val(d29);
	}
if (isNaN(c30)) {$("#id_pIGD8kVDDw_30").val(null)}
 	else {
 	var d30 = Number(c30).toLocaleString('en');
 	$("#id_pIGD8kVDDw_30").val(d30);
 	}

if (isNaN(c32)) {$("#id_pIGD8kVDDw_32").val(null)}
	else {
	var d32 = Number(c32).toLocaleString('en');
	$("#id_pIGD8kVDDw_32").val(d32);
	}
if (isNaN(c33)) {$("#id_pIGD8kVDDw_33").val(null)}
	else {
	var d33 = Number(c33).toLocaleString('en');
	$("#id_pIGD8kVDDw_33").val(d33);
	}
if (isNaN(c34)) {$("#id_pIGD8kVDDw_34").val(null)}
 	else {
 	var d34 = Number(c34).toLocaleString('en');
 	$("#id_pIGD8kVDDw_34").val(d34);
 	}

if (isNaN(c36)) {$("#id_pIGD8kVDDw_36").val(null)}
	else {
	var d36 = Number(c36).toLocaleString('en');
	$("#id_pIGD8kVDDw_36").val(d36);
	}
if (isNaN(c37)) {$("#id_pIGD8kVDDw_37").val(null)}
	else {
	var d37 = Number(c37).toLocaleString('en');
	$("#id_pIGD8kVDDw_37").val(d37);
	}
if (isNaN(c38)) {$("#id_pIGD8kVDDw_38").val(null)}
 	else {
 	var d38 = Number(c38).toLocaleString('en');
 	$("#id_pIGD8kVDDw_38").val(d38);
 	}

if (isNaN(c44)) {$("#id_pIGD8kVDDw_44").val(null)}
	else {
	var d44 = Number(c44).toLocaleString('en');
	$("#id_pIGD8kVDDw_44").val(d44);
	}
if (isNaN(c45)) {$("#id_pIGD8kVDDw_45").val(null)}
	else {
	var d45 = Number(c45).toLocaleString('en');
	$("#id_pIGD8kVDDw_45").val(d45);
	}
if (isNaN(c46)) {$("#id_pIGD8kVDDw_46").val(null)}
 	else {
 	var d46 = Number(c46).toLocaleString('en');
 	$("#id_pIGD8kVDDw_46").val(d46);
 	}

if (isNaN(c48)) {$("#id_pIGD8kVDDw_48").val(null)}
	else {
	var d48 = Number(c48).toLocaleString('en');
	$("#id_pIGD8kVDDw_48").val(d48);
	}
if (isNaN(c49)) {$("#id_pIGD8kVDDw_49").val(null)}
	else {
	var d49 = Number(c49).toLocaleString('en');
	$("#id_pIGD8kVDDw_49").val(d49);
	}
if (isNaN(c50)) {$("#id_pIGD8kVDDw_50").val(null)}
 	else {
 	var d50 = Number(c50).toLocaleString('en');
 	$("#id_pIGD8kVDDw_50").val(d50);
 	}

if (isNaN(c60)) {$("#id_pIGD8kVDDw_60").val(null)}
	else {
	var d60 = Number(c60).toLocaleString('en');
	$("#id_pIGD8kVDDw_60").val(d60);
	}
if (isNaN(c61)) {$("#id_pIGD8kVDDw_61").val(null)}
	else {
	var d61 = Number(c61).toLocaleString('en');
	$("#id_pIGD8kVDDw_61").val(d61);
	}
if (isNaN(c62)) {$("#id_pIGD8kVDDw_62").val(null)}
 	else {
 	var d62 = Number(c62).toLocaleString('en');
 	$("#id_pIGD8kVDDw_62").val(d62);
 	}
    
if (isNaN(c68)) {$("#id_pIGD8kVDDw_68").val(null)}
	else {
	var d68 = Number(c68).toLocaleString('en');
	$("#id_pIGD8kVDDw_68").val(d68);
	}
if (isNaN(c69)) {$("#id_pIGD8kVDDw_69").val(null)}
	else {
	var d69 = Number(c69).toLocaleString('en');
	$("#id_pIGD8kVDDw_69").val(d69);
	}
if (isNaN(c70)) {$("#id_pIGD8kVDDw_70").val(null)}
	else {
	var d70 = Number(c70).toLocaleString('en');
	$("#id_pIGD8kVDDw_70").val(d70);
	}

    


// end page loud "blur" function

}); 

// document ready function has ended
