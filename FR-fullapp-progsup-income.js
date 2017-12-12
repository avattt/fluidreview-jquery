$(function(){
//place script here

// Set Grant Tier and in-kind values
var gt = $("#id_2sei6rpCny").val(); 
var gt2 = gt.replaceAll(",","").replaceAll("$",""); 
var gt3 = parseInt(gt2,10);

var gt4 = Number(gt3);
$("#id_gDVHoQXq8r").val(gt4);
var gt5 = gt4.toLocaleString('en');
$("#id_TkrkSB4RtU_5").val(gt5);
$("#id_TkrkSB4RtU_7").val(gt5);

var ikpy = $("#id_3U4cU3sqIZ").val();
var ikpy2 = Number(ikpy).toLocaleString('en');
$("#id_TkrkSB4RtU_96").val(ikpy2);

var ikcy = $("#id_eJJIq28MHS").val();
var ikcy2 = Number(ikcy).toLocaleString('en');
$("#id_TkrkSB4RtU_97").val(ikcy2);

$("#id_TkrkSB4RtU_6").val(0);

// ---- set In Kind Here

// Read Only
$("input#id_TkrkSB4RtU_5").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_6").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_7").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_11").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_15").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_19").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_23").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_27").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_35").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_39").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_43").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_47").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_51").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_55").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_59").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_63").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_67").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_71").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_75").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_79").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_83").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_87").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_91").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_95").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_99").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_103").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_TkrkSB4RtU_20").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_21").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_22").attr('readonly', true).css({'background-color' : 'lightgray'});


$("input#id_TkrkSB4RtU_24").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_25").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_26").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_TkrkSB4RtU_52").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_53").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_54").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_TkrkSB4RtU_88").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_89").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_90").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_TkrkSB4RtU_96").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_97").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_TkrkSB4RtU_100").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_101").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_TkrkSB4RtU_102").attr('readonly', true).css({'background-color' : 'lightgray'});


$("input#id_sV8WZFy66e_4").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_sV8WZFy66e_9").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_sV8WZFy66e_14").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_sV8WZFy66e_19").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_sV8WZFy66e_24").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_sV8WZFy66e_29").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_sV8WZFy66e_34").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_sV8WZFy66e_39").attr('readonly', true).css({'background-color' : 'lightgray'});



//from page 1
//adjust margins
$('div#xyZULsSPwRb').children().css('margin', '3px');

$('.button').eq(0).attr('id', 'backtohome');
$('#backtohome').text('Back to Application Home');

// restrict input in fields
    $("input:not(input#id_sV8WZFy66e_0,input#id_sV8WZFy66e_5,input#id_sV8WZFy66e_10,input#id_sV8WZFy66e_15,input#id_sV8WZFy66e_20,input#id_sV8WZFy66e_25,input#id_sV8WZFy66e_30,input#id_sV8WZFy66e_35)").keypress(function(e) {
            var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9,]/);
            if (verified) {e.preventDefault();}
            
    });



$('input[type="text"]').attr({ maxLength : 12 });

// edit the dollar signs
$("div.d-inline").css({"color":"dimgray","font-style":"normal","font-weight":"lighter"});

// read only blocks




// HIDE INPUTS for header rows

	$("#id_TkrkSB4RtU_0").hide();
    $("div.d-inline:eq(0)").hide();
    $("#id_TkrkSB4RtU_1").hide();
    $("div.d-inline:eq(1)").hide();
    $("#id_TkrkSB4RtU_2").hide();
    $("div.d-inline:eq(2)").hide();
    $("#id_TkrkSB4RtU_3").hide();
    $("div.d-inline:eq(3)").hide();

    $("#id_TkrkSB4RtU_28").hide();
    $("div.d-inline:eq(28)").hide();
    $("#id_TkrkSB4RtU_29").hide();
    $("div.d-inline:eq(29)").hide();
    $("#id_TkrkSB4RtU_30").hide();
    $("div.d-inline:eq(30)").hide();
    $("#id_TkrkSB4RtU_31").hide();
    $("div.d-inline:eq(31)").hide();

    $("#id_TkrkSB4RtU_56").hide();
    $("div.d-inline:eq(56)").hide();
    $("#id_TkrkSB4RtU_57").hide();
    $("div.d-inline:eq(57)").hide();
    $("#id_TkrkSB4RtU_58").hide();
    $("div.d-inline:eq(58)").hide();
    $("#id_TkrkSB4RtU_59").hide();
    $("div.d-inline:eq(59)").hide();

////endtext from page 1


// start blur function

$("input").blur(function(){

var a4 = $("#id_TkrkSB4RtU_4").val();   var b4 = a4.replaceAll(",","");   var c4 = parseInt(b4,10);
var a5 = $("#id_TkrkSB4RtU_5").val();   var b5 = a5.replaceAll(",","");   var c5 = parseInt(b5,10);

var a8 = $("#id_TkrkSB4RtU_8").val();   var b8 = a8.replaceAll(",","");   var c8 = parseInt(b8,10);
var a9 = $("#id_TkrkSB4RtU_9").val();   var b9 = a9.replaceAll(",","");   var c9 = parseInt(b9,10);
var a10 = $("#id_TkrkSB4RtU_10").val();   var b10 = a10.replaceAll(",","");   var c10 = parseInt(b10,10);
var a12 = $("#id_TkrkSB4RtU_12").val();   var b12 = a12.replaceAll(",","");   var c12 = parseInt(b12,10);
var a13 = $("#id_TkrkSB4RtU_13").val();   var b13 = a13.replaceAll(",","");   var c13 = parseInt(b13,10);
var a14 = $("#id_TkrkSB4RtU_14").val();   var b14 = a14.replaceAll(",","");   var c14 = parseInt(b14,10);
var a16 = $("#id_TkrkSB4RtU_16").val();   var b16 = a16.replaceAll(",","");   var c16 = parseInt(b16,10);
var a17 = $("#id_TkrkSB4RtU_17").val();   var b17 = a17.replaceAll(",","");   var c17 = parseInt(b17,10);
var a18 = $("#id_TkrkSB4RtU_18").val();   var b18 = a18.replaceAll(",","");   var c18 = parseInt(b18,10);
var a32 = $("#id_TkrkSB4RtU_32").val();   var b32 = a32.replaceAll(",","");   var c32 = parseInt(b32,10);
var a33 = $("#id_TkrkSB4RtU_33").val();   var b33 = a33.replaceAll(",","");   var c33 = parseInt(b33,10);
var a34 = $("#id_TkrkSB4RtU_34").val();   var b34 = a34.replaceAll(",","");   var c34 = parseInt(b34,10);
var a36 = $("#id_TkrkSB4RtU_36").val();   var b36 = a36.replaceAll(",","");   var c36 = parseInt(b36,10);
var a37 = $("#id_TkrkSB4RtU_37").val();   var b37 = a37.replaceAll(",","");   var c37 = parseInt(b37,10);
var a38 = $("#id_TkrkSB4RtU_38").val();   var b38 = a38.replaceAll(",","");   var c38 = parseInt(b38,10);
var a40 = $("#id_TkrkSB4RtU_40").val();   var b40 = a40.replaceAll(",","");   var c40 = parseInt(b40,10);
var a41 = $("#id_TkrkSB4RtU_41").val();   var b41 = a41.replaceAll(",","");   var c41 = parseInt(b41,10);
var a42 = $("#id_TkrkSB4RtU_42").val();   var b42 = a42.replaceAll(",","");   var c42 = parseInt(b42,10);
var a44 = $("#id_TkrkSB4RtU_44").val();   var b44 = a44.replaceAll(",","");   var c44 = parseInt(b44,10);
var a45 = $("#id_TkrkSB4RtU_45").val();   var b45 = a45.replaceAll(",","");   var c45 = parseInt(b45,10);
var a46 = $("#id_TkrkSB4RtU_46").val();   var b46 = a46.replaceAll(",","");   var c46 = parseInt(b46,10);
var a48 = $("#id_TkrkSB4RtU_48").val();   var b48 = a48.replaceAll(",","");   var c48 = parseInt(b48,10);
var a49 = $("#id_TkrkSB4RtU_49").val();   var b49 = a49.replaceAll(",","");   var c49 = parseInt(b49,10);
var a50 = $("#id_TkrkSB4RtU_50").val();   var b50 = a50.replaceAll(",","");   var c50 = parseInt(b50,10);
var a60 = $("#id_TkrkSB4RtU_60").val();   var b60 = a60.replaceAll(",","");   var c60 = parseInt(b60,10);
var a61 = $("#id_TkrkSB4RtU_61").val();   var b61 = a61.replaceAll(",","");   var c61 = parseInt(b61,10);
var a62 = $("#id_TkrkSB4RtU_62").val();   var b62 = a62.replaceAll(",","");   var c62 = parseInt(b62,10);
var a64 = $("#id_TkrkSB4RtU_64").val();   var b64 = a64.replaceAll(",","");   var c64 = parseInt(b64,10);
var a65 = $("#id_TkrkSB4RtU_65").val();   var b65 = a65.replaceAll(",","");   var c65 = parseInt(b65,10);
var a66 = $("#id_TkrkSB4RtU_66").val();   var b66 = a66.replaceAll(",","");   var c66 = parseInt(b66,10);
var a68 = $("#id_TkrkSB4RtU_68").val();   var b68 = a68.replaceAll(",","");   var c68 = parseInt(b68,10);
var a69 = $("#id_TkrkSB4RtU_69").val();   var b69 = a69.replaceAll(",","");   var c69 = parseInt(b69,10);
var a70 = $("#id_TkrkSB4RtU_70").val();   var b70 = a70.replaceAll(",","");   var c70 = parseInt(b70,10);
var a72 = $("#id_TkrkSB4RtU_72").val();   var b72 = a72.replaceAll(",","");   var c72 = parseInt(b72,10);
var a73 = $("#id_TkrkSB4RtU_73").val();   var b73 = a73.replaceAll(",","");   var c73 = parseInt(b73,10);
var a74 = $("#id_TkrkSB4RtU_74").val();   var b74 = a74.replaceAll(",","");   var c74 = parseInt(b74,10);
var a76 = $("#id_TkrkSB4RtU_76").val();   var b76 = a76.replaceAll(",","");   var c76 = parseInt(b76,10);
var a77 = $("#id_TkrkSB4RtU_77").val();   var b77 = a77.replaceAll(",","");   var c77 = parseInt(b77,10);
var a78 = $("#id_TkrkSB4RtU_78").val();   var b78 = a78.replaceAll(",","");   var c78 = parseInt(b78,10);
var a80 = $("#id_TkrkSB4RtU_80").val();   var b80 = a80.replaceAll(",","");   var c80 = parseInt(b80,10);
var a81 = $("#id_TkrkSB4RtU_81").val();   var b81 = a81.replaceAll(",","");   var c81 = parseInt(b81,10);
var a82 = $("#id_TkrkSB4RtU_82").val();   var b82 = a82.replaceAll(",","");   var c82 = parseInt(b82,10);
var a84 = $("#id_TkrkSB4RtU_84").val();   var b84 = a84.replaceAll(",","");   var c84 = parseInt(b84,10);
var a85 = $("#id_TkrkSB4RtU_85").val();   var b85 = a85.replaceAll(",","");   var c85 = parseInt(b85,10);
var a86 = $("#id_TkrkSB4RtU_86").val();   var b86 = a86.replaceAll(",","");   var c86 = parseInt(b86,10);
var a92 = $("#id_TkrkSB4RtU_92").val();   var b92 = a92.replaceAll(",","");   var c92 = parseInt(b92,10);
var a93 = $("#id_TkrkSB4RtU_93").val();   var b93 = a93.replaceAll(",","");   var c93 = parseInt(b93,10);
var a94 = $("#id_TkrkSB4RtU_94").val();   var b94 = a94.replaceAll(",","");   var c94 = parseInt(b94,10);
var a96 = $("#id_TkrkSB4RtU_96").val();   var b96 = a96.replaceAll(",","");   var c96 = parseInt(b96,10);
var a97 = $("#id_TkrkSB4RtU_97").val();   var b97 = a97.replaceAll(",","");   var c97 = parseInt(b97,10);
var a98 = $("#id_TkrkSB4RtU_98").val();   var b98 = a98.replaceAll(",","");   var c98 = parseInt(b98,10);

var aa1 = $("#id_sV8WZFy66e_1").val();   var bb1 = aa1.replaceAll(",","");   var cc1 = parseInt(bb1,10);
var aa2 = $("#id_sV8WZFy66e_2").val();   var bb2 = aa2.replaceAll(",","");   var cc2 = parseInt(bb2,10);
var aa3 = $("#id_sV8WZFy66e_3").val();   var bb3 = aa3.replaceAll(",","");   var cc3 = parseInt(bb3,10);

var aa6 = $("#id_sV8WZFy66e_6").val();   var bb6 = aa6.replaceAll(",","");   var cc6 = parseInt(bb6,10);
var aa7 = $("#id_sV8WZFy66e_7").val();   var bb7 = aa7.replaceAll(",","");   var cc7 = parseInt(bb7,10);
var aa8 = $("#id_sV8WZFy66e_8").val();   var bb8 = aa8.replaceAll(",","");   var cc8 = parseInt(bb8,10);

var aa11 = $("#id_sV8WZFy66e_11").val();   var bb11 = aa11.replaceAll(",","");   var cc11 = parseInt(bb11,10);
var aa12 = $("#id_sV8WZFy66e_12").val();   var bb12 = aa12.replaceAll(",","");   var cc12 = parseInt(bb12,10);
var aa13 = $("#id_sV8WZFy66e_13").val();   var bb13 = aa13.replaceAll(",","");   var cc13 = parseInt(bb13,10);

var aa16 = $("#id_sV8WZFy66e_16").val();   var bb16 = aa16.replaceAll(",","");   var cc16 = parseInt(bb16,10);
var aa17 = $("#id_sV8WZFy66e_17").val();   var bb17 = aa17.replaceAll(",","");   var cc17 = parseInt(bb17,10);
var aa18 = $("#id_sV8WZFy66e_18").val();   var bb18 = aa18.replaceAll(",","");   var cc18 = parseInt(bb18,10);

var aa21 = $("#id_sV8WZFy66e_21").val();   var bb21 = aa21.replaceAll(",","");   var cc21 = parseInt(bb21,10);
var aa22 = $("#id_sV8WZFy66e_22").val();   var bb22 = aa22.replaceAll(",","");   var cc22 = parseInt(bb22,10);
var aa23 = $("#id_sV8WZFy66e_23").val();   var bb23 = aa23.replaceAll(",","");   var cc23 = parseInt(bb23,10);

var aa26 = $("#id_sV8WZFy66e_26").val();   var bb26 = aa26.replaceAll(",","");   var cc26 = parseInt(bb26,10);
var aa27 = $("#id_sV8WZFy66e_27").val();   var bb27 = aa27.replaceAll(",","");   var cc27 = parseInt(bb27,10);
var aa28 = $("#id_sV8WZFy66e_28").val();   var bb28 = aa28.replaceAll(",","");   var cc28 = parseInt(bb28,10);

var aa31 = $("#id_sV8WZFy66e_31").val();   var bb31 = aa31.replaceAll(",","");   var cc31 = parseInt(bb31,10);
var aa32 = $("#id_sV8WZFy66e_32").val();   var bb32 = aa32.replaceAll(",","");   var cc32 = parseInt(bb32,10);
var aa33 = $("#id_sV8WZFy66e_33").val();   var bb33 = aa33.replaceAll(",","");   var cc33 = parseInt(bb33,10);

var aa36 = $("#id_sV8WZFy66e_36").val();   var bb36 = aa36.replaceAll(",","");   var cc36 = parseInt(bb36,10);
var aa37 = $("#id_sV8WZFy66e_37").val();   var bb37 = aa37.replaceAll(",","");   var cc37 = parseInt(bb37,10);
var aa38 = $("#id_sV8WZFy66e_38").val();   var bb38 = aa38.replaceAll(",","");   var cc38 = parseInt(bb38,10);




var z4;
var z5;

var z8;
var z9;
var z10;
var z12;
var z13;
var z14;
var z16;
var z17;
var z18;
var z32;
var z33;
var z34;
var z36;
var z37;
var z38;
var z40;
var z41;
var z42;
var z44;
var z45;
var z46;
var z48;
var z49;
var z50;
var z60;
var z61;
var z62;
var z64;
var z65;
var z66;
var z68;
var z69;
var z70;
var z72;
var z73;
var z74;
var z76;
var z77;
var z78;
var z80;
var z81;
var z82;
var z84;
var z85;
var z86;
var z92;
var z93;
var z94;
var z96;
var z97;
var z98;


var zz1;
var zz2;
var zz3;

var zz6;
var zz7;
var zz8;

var zz11;
var zz12;
var zz13;

var zz16;
var zz17;
var zz18;

var zz21;
var zz22;
var zz23;

var zz26;
var zz27;
var zz28;

var zz31;
var zz32;
var zz33;

var zz36;
var zz37;
var zz38;




if (isNaN(c4)) {z4 = 0;}
 else {z4 = c4;}
if (isNaN(c5)) {z5 = 0;}
 else {z5 = c5;}
if (isNaN(c8)) {z8 = 0;}
 else {z8 = c8;}
if (isNaN(c9)) {z9 = 0;}
 else {z9 = c9;}
if (isNaN(c10)) {z10 = 0;}
 else {z10 = c10;}
if (isNaN(c12)) {z12 = 0;}
 else {z12 = c12;}
if (isNaN(c13)) {z13 = 0;}
 else {z13 = c13;}
if (isNaN(c14)) {z14 = 0;}
 else {z14 = c14;}
if (isNaN(c16)) {z16 = 0;}
 else {z16 = c16;}
if (isNaN(c17)) {z17 = 0;}
 else {z17 = c17;}
if (isNaN(c18)) {z18 = 0;}
 else {z18 = c18;}

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
if (isNaN(c40)) {z40 = 0;}
 else {z40 = c40;}
if (isNaN(c41)) {z41 = 0;}
 else {z41 = c41;}
if (isNaN(c42)) {z42 = 0;}
 else {z42 = c42;}
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
if (isNaN(c64)) {z64 = 0;}
 else {z64 = c64;}
if (isNaN(c65)) {z65 = 0;}
 else {z65 = c65;}
if (isNaN(c66)) {z66 = 0;}
 else {z66 = c66;}
if (isNaN(c68)) {z68 = 0;}
 else {z68 = c68;}
if (isNaN(c69)) {z69 = 0;}
 else {z69 = c69;}
if (isNaN(c70)) {z70 = 0;}
 else {z70 = c70;}
if (isNaN(c72)) {z72 = 0;}
 else {z72 = c72;}
if (isNaN(c73)) {z73 = 0;}
 else {z73 = c73;}
if (isNaN(c74)) {z74 = 0;}
 else {z74 = c74;}
if (isNaN(c76)) {z76 = 0;}
 else {z76 = c76;}
if (isNaN(c77)) {z77 = 0;}
 else {z77 = c77;}
if (isNaN(c78)) {z78 = 0;}
 else {z78 = c78;}
if (isNaN(c80)) {z80 = 0;}
 else {z80 = c80;}
if (isNaN(c81)) {z81 = 0;}
 else {z81 = c81;}
if (isNaN(c82)) {z82 = 0;}
 else {z82 = c82;}
if (isNaN(c84)) {z84 = 0;}
 else {z84 = c84;}
if (isNaN(c85)) {z85 = 0;}
 else {z85 = c85;}
if (isNaN(c86)) {z86 = 0;}
 else {z86 = c86;}
if (isNaN(c92)) {z92 = 0;}
 else {z92 = c92;}
if (isNaN(c93)) {z93 = 0;}
 else {z93 = c93;}
if (isNaN(c94)) {z94 = 0;}
 else {z94 = c94;}
if (isNaN(c96)) {z96 = 0;}
 else {z96 = c96;}
if (isNaN(c97)) {z97 = 0;}
 else {z97 = c97;}
if (isNaN(c98)) {z98 = 0;}
 else {z98 = c98;}
 
if (isNaN(cc1)) {zz1 = 0;}
 else {zz1 = cc1;}
if (isNaN(cc2)) {zz2 = 0;}
 else {zz2 = cc2;}
if (isNaN(cc3)) {zz3 = 0;}
 else {zz3 = cc3;}
if (isNaN(cc6)) {zz6 = 0;}
 else {zz6 = cc6;}
if (isNaN(cc7)) {zz7 = 0;}
 else {zz7 = cc7;}
if (isNaN(cc8)) {zz8 = 0;}
 else {zz8 = cc8;}

if (isNaN(cc11)) {zz11 = 0;}
 else {zz11 = cc11;}
if (isNaN(cc12)) {zz12 = 0;}
 else {zz12 = cc12;}
if (isNaN(cc13)) {zz13 = 0;}
 else {zz13 = cc13;}

if (isNaN(cc16)) {zz16 = 0;}
 else {zz16 = cc16;}
if (isNaN(cc17)) {zz17 = 0;}
 else {zz17 = cc17;}
if (isNaN(cc18)) {zz18 = 0;}
 else {zz18 = cc18;}

if (isNaN(cc21)) {zz21 = 0;}
 else {zz21 = cc21;}
if (isNaN(cc22)) {zz22 = 0;}
 else {zz22 = cc22;}
if (isNaN(cc23)) {zz23 = 0;}
 else {zz23 = cc23;}

if (isNaN(cc26)) {zz26 = 0;}
 else {zz26 = cc26;}
if (isNaN(cc27)) {zz27 = 0;}
 else {zz27 = cc27;}
if (isNaN(cc28)) {zz28 = 0;}
 else {zz28 = cc28;}

if (isNaN(cc31)) {zz31 = 0;}
 else {zz31 = cc31;}
if (isNaN(cc32)) {zz32 = 0;}
 else {zz32 = cc32;}
if (isNaN(cc33)) {zz33 = 0;}
 else {zz33 = cc33;}

if (isNaN(cc36)) {zz36 = 0;}
 else {zz36 = cc36;}
if (isNaN(cc37)) {zz37 = 0;}
 else {zz37 = cc37;}
if (isNaN(cc38)) {zz38 = 0;}
 else {zz38 = cc38;}




var c11 = Math.round(z9-z10);
var c15 = Math.round(z13-z14);
var c19 = Math.round(z17-z18);

var c20 = Math.round(zz1+zz6+zz11+zz16+zz21+zz26+zz31+zz36);
var c21 = Math.round(zz2+zz7+zz12+zz17+zz22+zz27+zz32+zz37);
var c22 = Math.round(zz3+zz8+zz13+zz18+zz23+zz28+zz33+zz38);
var c23 = Math.round((zz2+zz7+zz12+zz17+zz22+zz27+zz32+zz37)-(zz3+zz8+zz13+zz18+zz23+zz28+zz33+zz38));

var c24 = Math.round(z4+z8+z12+z16+zz1+zz6+zz11+zz16+zz21+zz16+zz31+zz36);
var c25 = Math.round(z5+z9+z13+z17+zz2+zz7+zz12+zz17+zz22+zz17+zz32+zz37);
var c26 = Math.round(z10+z14+z18+zz3+zz8+zz13+zz18+zz23+zz18+zz33+zz38);
var c27 = Math.round((z5+z9+z13+z17+zz2+zz7+zz12+zz17+zz22+zz27+zz32+zz37)-(z10+z14+z18+zz3+zz8+zz13+zz18+zz23+zz28+zz33+zz38));

var c35 = Math.round(z33-z34);
var c39 = Math.round(z37-z38);
var c43 = Math.round(z41-z42);
var c47 = Math.round(z45-z46);
var c51 = Math.round(z49-z50);

var c52 = Math.round(z32+z36+z40+z44+z48);
var c53 = Math.round(z33+z37+z41+z45+z49);
var c54 = Math.round(z34+z38+z42+z46+z50);
var c55 = Math.round((z33+z37+z41+z45+z49)-(z34+z38+z42+z46+z50)); 

var c63 = Math.round(z61-z62);
var c67 = Math.round(z65-z66);
var c71 = Math.round(z69-z70);
var c75 = Math.round(z73-z74);
var c79 = Math.round(z77-z78);
var c83 = Math.round(z81-z82);
var c87 = Math.round(z85-z86);

var c88 = Math.round(z60+z64+z68+z72+z76+z80+z84);
var c89 = Math.round(z61+z65+z69+z73+z77+z81+z85);
var c90 = Math.round(z62+z66+z70+z74+z78+z82+z86);
var c91 = Math.round((z61+z65+z69+z73+z77+z81+z85)-(z62+z66+z70+z74+z78+z82+z86));

var c95 = Math.round(z93-z94);
var c99 = Math.round(z97-z98);

var c100 = Math.round(z4+z8+z12+z16+z32+z36+z40+z44+z48+z60+z64+z68+z72+z76+z80+z84+z92+z96+zz1+zz6+zz11+zz16+zz21+zz26+zz31+zz36);
var c101 = Math.round(z5+z9+z13+z17+z33+z37+z41+z45+z49+z61+z65+z69+z73+z77+z81+z85+z93+z97+zz2+zz7+zz12+zz17+zz22+zz27+zz32+zz37);
var c102 = Math.round(0+z10+z14+z18+z34+z38+z42+z46+z50+z62+z66+z70+z74+z78+z82+z86+z94+z98+zz3+zz8+zz13+zz18+zz23+zz28+zz33+zz38);
var c103 = Math.round((z5+z9+z13+z17+z33+z37+z41+z45+z49+z61+z65+z69+z73+z77+z81+z85+z93+z97+zz2+zz7+zz12+zz17+zz22+zz27+zz32+zz37)-(0+z10+z14+z18+z34+z38+z42+z46+z50+z62+z66+z70+z74+z78+z82+z86+z94+z98+zz3+zz8+zz13+zz18+zz23+zz28+zz33+zz38));

var cc4 = Math.round(zz2-zz3);
var cc9 = Math.round(zz7-zz8);
var cc14 = Math.round(zz12-zz13);
var cc19 = Math.round(zz17-zz18);
var cc24 = Math.round(zz22-zz23);
var cc29 = Math.round(zz27-zz28);
var cc34 = Math.round(zz32-zz33);
var cc39 = Math.round(zz37-zz38);



if (isNaN(c4)) {$("#id_TkrkSB4RtU_4").val(null)}
 else {
 var d4 = Number(c4).toLocaleString('en');
 $("#id_TkrkSB4RtU_4").val(d4);
 }
if (isNaN(c8)) {$("#id_TkrkSB4RtU_8").val(null)}
 else {
 var d8 = Number(c8).toLocaleString('en');
 $("#id_TkrkSB4RtU_8").val(d8);
 }
if (isNaN(c9)) {$("#id_TkrkSB4RtU_9").val(null)}
 else {
 var d9 = Number(c9).toLocaleString('en');
 $("#id_TkrkSB4RtU_9").val(d9);
 }
if (isNaN(c10)) {$("#id_TkrkSB4RtU_10").val(null)}
 else {
 var d10 = Number(c10).toLocaleString('en');
 $("#id_TkrkSB4RtU_10").val(d10);
 }
if (isNaN(c11)) {$("#id_TkrkSB4RtU_11").val(null)}
 else {
 var d11 = Number(c11).toLocaleString('en');
 $("#id_TkrkSB4RtU_11").val(d11);
 }
if (isNaN(c12)) {$("#id_TkrkSB4RtU_12").val(null)}
 else {
 var d12 = Number(c12).toLocaleString('en');
 $("#id_TkrkSB4RtU_12").val(d12);
 }
if (isNaN(c13)) {$("#id_TkrkSB4RtU_13").val(null)}
 else {
 var d13 = Number(c13).toLocaleString('en');
 $("#id_TkrkSB4RtU_13").val(d13);
 }
if (isNaN(c14)) {$("#id_TkrkSB4RtU_14").val(null)}
 else {
 var d14 = Number(c14).toLocaleString('en');
 $("#id_TkrkSB4RtU_14").val(d14);
 }
if (isNaN(c15)) {$("#id_TkrkSB4RtU_15").val(null)}
 else {
 var d15 = Number(c15).toLocaleString('en');
 $("#id_TkrkSB4RtU_15").val(d15);
 }
if (isNaN(c16)) {$("#id_TkrkSB4RtU_16").val(null)}
 else {
 var d16 = Number(c16).toLocaleString('en');
 $("#id_TkrkSB4RtU_16").val(d16);
 }
if (isNaN(c17)) {$("#id_TkrkSB4RtU_17").val(null)}
 else {
 var d17 = Number(c17).toLocaleString('en');
 $("#id_TkrkSB4RtU_17").val(d17);
 }
if (isNaN(c18)) {$("#id_TkrkSB4RtU_18").val(null)}
 else {
 var d18 = Number(c18).toLocaleString('en');
 $("#id_TkrkSB4RtU_18").val(d18);
 }
if (isNaN(c19)) {$("#id_TkrkSB4RtU_19").val(null)}
 else {
 var d19 = Number(c19).toLocaleString('en');
 $("#id_TkrkSB4RtU_19").val(d19);
 }
if (isNaN(c20)) {$("#id_TkrkSB4RtU_20").val(null)}
 else {
 var d20 = Number(c20).toLocaleString('en');
 $("#id_TkrkSB4RtU_20").val(d20);
 }
if (isNaN(c21)) {$("#id_TkrkSB4RtU_21").val(null)}
 else {
 var d21 = Number(c21).toLocaleString('en');
 $("#id_TkrkSB4RtU_21").val(d21);
 }
if (isNaN(c22)) {$("#id_TkrkSB4RtU_22").val(null)}
 else {
 var d22 = Number(c22).toLocaleString('en');
 $("#id_TkrkSB4RtU_22").val(d22);
 }
if (isNaN(c23)) {$("#id_TkrkSB4RtU_23").val(null)}
 else {
 var d23 = Number(c23).toLocaleString('en');
 $("#id_TkrkSB4RtU_23").val(d23);
 }
if (isNaN(c24)) {$("#id_TkrkSB4RtU_24").val(null)}
 else {
 var d24 = Number(c24).toLocaleString('en');
 $("#id_TkrkSB4RtU_24").val(d24);
 }
if (isNaN(c25)) {$("#id_TkrkSB4RtU_25").val(null)}
 else {
 var d25 = Number(c25).toLocaleString('en');
 $("#id_TkrkSB4RtU_25").val(d25);
 }
if (isNaN(c26)) {$("#id_TkrkSB4RtU_26").val(null)}
 else {
 var d26 = Number(c26).toLocaleString('en');
 $("#id_TkrkSB4RtU_26").val(d26);
 }
if (isNaN(c27)) {$("#id_TkrkSB4RtU_27").val(null)}
 else {
 var d27 = Number(c27).toLocaleString('en');
 $("#id_TkrkSB4RtU_27").val(d27);
 }
if (isNaN(c32)) {$("#id_TkrkSB4RtU_32").val(null)}
 else {
 var d32 = Number(c32).toLocaleString('en');
 $("#id_TkrkSB4RtU_32").val(d32);
 }
if (isNaN(c33)) {$("#id_TkrkSB4RtU_33").val(null)}
 else {
 var d33 = Number(c33).toLocaleString('en');
 $("#id_TkrkSB4RtU_33").val(d33);
 }
if (isNaN(c34)) {$("#id_TkrkSB4RtU_34").val(null)}
 else {
 var d34 = Number(c34).toLocaleString('en');
 $("#id_TkrkSB4RtU_34").val(d34);
 }
if (isNaN(c35)) {$("#id_TkrkSB4RtU_35").val(null)}
 else {
 var d35 = Number(c35).toLocaleString('en');
 $("#id_TkrkSB4RtU_35").val(d35);
 }
if (isNaN(c36)) {$("#id_TkrkSB4RtU_36").val(null)}
 else {
 var d36 = Number(c36).toLocaleString('en');
 $("#id_TkrkSB4RtU_36").val(d36);
 }
if (isNaN(c37)) {$("#id_TkrkSB4RtU_37").val(null)}
 else {
 var d37 = Number(c37).toLocaleString('en');
 $("#id_TkrkSB4RtU_37").val(d37);
 }
if (isNaN(c38)) {$("#id_TkrkSB4RtU_38").val(null)}
 else {
 var d38 = Number(c38).toLocaleString('en');
 $("#id_TkrkSB4RtU_38").val(d38);
 }
if (isNaN(c39)) {$("#id_TkrkSB4RtU_39").val(null)}
 else {
 var d39 = Number(c39).toLocaleString('en');
 $("#id_TkrkSB4RtU_39").val(d39);
 }
if (isNaN(c40)) {$("#id_TkrkSB4RtU_40").val(null)}
 else {
 var d40 = Number(c40).toLocaleString('en');
 $("#id_TkrkSB4RtU_40").val(d40);
 }
if (isNaN(c41)) {$("#id_TkrkSB4RtU_41").val(null)}
 else {
 var d41 = Number(c41).toLocaleString('en');
 $("#id_TkrkSB4RtU_41").val(d41);
 }
if (isNaN(c42)) {$("#id_TkrkSB4RtU_42").val(null)}
 else {
 var d42 = Number(c42).toLocaleString('en');
 $("#id_TkrkSB4RtU_42").val(d42);
 }
if (isNaN(c43)) {$("#id_TkrkSB4RtU_43").val(null)}
 else {
 var d43 = Number(c43).toLocaleString('en');
 $("#id_TkrkSB4RtU_43").val(d43);
 }
if (isNaN(c44)) {$("#id_TkrkSB4RtU_44").val(null)}
 else {
 var d44 = Number(c44).toLocaleString('en');
 $("#id_TkrkSB4RtU_44").val(d44);
 }
if (isNaN(c45)) {$("#id_TkrkSB4RtU_45").val(null)}
 else {
 var d45 = Number(c45).toLocaleString('en');
 $("#id_TkrkSB4RtU_45").val(d45);
 }
if (isNaN(c46)) {$("#id_TkrkSB4RtU_46").val(null)}
 else {
 var d46 = Number(c46).toLocaleString('en');
 $("#id_TkrkSB4RtU_46").val(d46);
 }
if (isNaN(c47)) {$("#id_TkrkSB4RtU_47").val(null)}
 else {
 var d47 = Number(c47).toLocaleString('en');
 $("#id_TkrkSB4RtU_47").val(d47);
 }
if (isNaN(c48)) {$("#id_TkrkSB4RtU_48").val(null)}
 else {
 var d48 = Number(c48).toLocaleString('en');
 $("#id_TkrkSB4RtU_48").val(d48);
 }
if (isNaN(c49)) {$("#id_TkrkSB4RtU_49").val(null)}
 else {
 var d49 = Number(c49).toLocaleString('en');
 $("#id_TkrkSB4RtU_49").val(d49);
 }
if (isNaN(c50)) {$("#id_TkrkSB4RtU_50").val(null)}
 else {
 var d50 = Number(c50).toLocaleString('en');
 $("#id_TkrkSB4RtU_50").val(d50);
 }
if (isNaN(c51)) {$("#id_TkrkSB4RtU_51").val(null)}
 else {
 var d51 = Number(c51).toLocaleString('en');
 $("#id_TkrkSB4RtU_51").val(d51);
 }
if (isNaN(c52)) {$("#id_TkrkSB4RtU_52").val(null)}
 else {
 var d52 = Number(c52).toLocaleString('en');
 $("#id_TkrkSB4RtU_52").val(d52);
 }
if (isNaN(c53)) {$("#id_TkrkSB4RtU_53").val(null)}
 else {
 var d53 = Number(c53).toLocaleString('en');
 $("#id_TkrkSB4RtU_53").val(d53);
 }
if (isNaN(c54)) {$("#id_TkrkSB4RtU_54").val(null)}
 else {
 var d54 = Number(c54).toLocaleString('en');
 $("#id_TkrkSB4RtU_54").val(d54);
 }
if (isNaN(c55)) {$("#id_TkrkSB4RtU_55").val(null)}
 else {
 var d55 = Number(c55).toLocaleString('en');
 $("#id_TkrkSB4RtU_55").val(d55);
 }
if (isNaN(c60)) {$("#id_TkrkSB4RtU_60").val(null)}
 else {
 var d60 = Number(c60).toLocaleString('en');
 $("#id_TkrkSB4RtU_60").val(d60);
 }
if (isNaN(c61)) {$("#id_TkrkSB4RtU_61").val(null)}
 else {
 var d61 = Number(c61).toLocaleString('en');
 $("#id_TkrkSB4RtU_61").val(d61);
 }
if (isNaN(c62)) {$("#id_TkrkSB4RtU_62").val(null)}
 else {
 var d62 = Number(c62).toLocaleString('en');
 $("#id_TkrkSB4RtU_62").val(d62);
 }
if (isNaN(c63)) {$("#id_TkrkSB4RtU_63").val(null)}
 else {
 var d63 = Number(c63).toLocaleString('en');
 $("#id_TkrkSB4RtU_63").val(d63);
 }
if (isNaN(c64)) {$("#id_TkrkSB4RtU_64").val(null)}
 else {
 var d64 = Number(c64).toLocaleString('en');
 $("#id_TkrkSB4RtU_64").val(d64);
 }
if (isNaN(c65)) {$("#id_TkrkSB4RtU_65").val(null)}
 else {
 var d65 = Number(c65).toLocaleString('en');
 $("#id_TkrkSB4RtU_65").val(d65);
 }
if (isNaN(c66)) {$("#id_TkrkSB4RtU_66").val(null)}
 else {
 var d66 = Number(c66).toLocaleString('en');
 $("#id_TkrkSB4RtU_66").val(d66);
 }
if (isNaN(c67)) {$("#id_TkrkSB4RtU_67").val(null)}
 else {
 var d67 = Number(c67).toLocaleString('en');
 $("#id_TkrkSB4RtU_67").val(d67);
 }
if (isNaN(c68)) {$("#id_TkrkSB4RtU_68").val(null)}
 else {
 var d68 = Number(c68).toLocaleString('en');
 $("#id_TkrkSB4RtU_68").val(d68);
 }
if (isNaN(c69)) {$("#id_TkrkSB4RtU_69").val(null)}
 else {
 var d69 = Number(c69).toLocaleString('en');
 $("#id_TkrkSB4RtU_69").val(d69);
 }
if (isNaN(c70)) {$("#id_TkrkSB4RtU_70").val(null)}
 else {
 var d70 = Number(c70).toLocaleString('en');
 $("#id_TkrkSB4RtU_70").val(d70);
 }
if (isNaN(c71)) {$("#id_TkrkSB4RtU_71").val(null)}
 else {
 var d71 = Number(c71).toLocaleString('en');
 $("#id_TkrkSB4RtU_71").val(d71);
 }
if (isNaN(c72)) {$("#id_TkrkSB4RtU_72").val(null)}
 else {
 var d72 = Number(c72).toLocaleString('en');
 $("#id_TkrkSB4RtU_72").val(d72);
 }
if (isNaN(c73)) {$("#id_TkrkSB4RtU_73").val(null)}
 else {
 var d73 = Number(c73).toLocaleString('en');
 $("#id_TkrkSB4RtU_73").val(d73);
 }
if (isNaN(c74)) {$("#id_TkrkSB4RtU_74").val(null)}
 else {
 var d74 = Number(c74).toLocaleString('en');
 $("#id_TkrkSB4RtU_74").val(d74);
 }
if (isNaN(c75)) {$("#id_TkrkSB4RtU_75").val(null)}
 else {
 var d75 = Number(c75).toLocaleString('en');
 $("#id_TkrkSB4RtU_75").val(d75);
 }
if (isNaN(c76)) {$("#id_TkrkSB4RtU_76").val(null)}
 else {
 var d76 = Number(c76).toLocaleString('en');
 $("#id_TkrkSB4RtU_76").val(d76);
 }
if (isNaN(c77)) {$("#id_TkrkSB4RtU_77").val(null)}
 else {
 var d77 = Number(c77).toLocaleString('en');
 $("#id_TkrkSB4RtU_77").val(d77);
 }
if (isNaN(c78)) {$("#id_TkrkSB4RtU_78").val(null)}
 else {
 var d78 = Number(c78).toLocaleString('en');
 $("#id_TkrkSB4RtU_78").val(d78);
 }
if (isNaN(c79)) {$("#id_TkrkSB4RtU_79").val(null)}
 else {
 var d79 = Number(c79).toLocaleString('en');
 $("#id_TkrkSB4RtU_79").val(d79);
 }
if (isNaN(c80)) {$("#id_TkrkSB4RtU_80").val(null)}
 else {
 var d80 = Number(c80).toLocaleString('en');
 $("#id_TkrkSB4RtU_80").val(d80);
 }
if (isNaN(c81)) {$("#id_TkrkSB4RtU_81").val(null)}
 else {
 var d81 = Number(c81).toLocaleString('en');
 $("#id_TkrkSB4RtU_81").val(d81);
 }
if (isNaN(c82)) {$("#id_TkrkSB4RtU_82").val(null)}
 else {
 var d82 = Number(c82).toLocaleString('en');
 $("#id_TkrkSB4RtU_82").val(d82);
 }
if (isNaN(c83)) {$("#id_TkrkSB4RtU_83").val(null)}
 else {
 var d83 = Number(c83).toLocaleString('en');
 $("#id_TkrkSB4RtU_83").val(d83);
 }
if (isNaN(c84)) {$("#id_TkrkSB4RtU_84").val(null)}
 else {
 var d84 = Number(c84).toLocaleString('en');
 $("#id_TkrkSB4RtU_84").val(d84);
 }
if (isNaN(c85)) {$("#id_TkrkSB4RtU_85").val(null)}
 else {
 var d85 = Number(c85).toLocaleString('en');
 $("#id_TkrkSB4RtU_85").val(d85);
 }
if (isNaN(c86)) {$("#id_TkrkSB4RtU_86").val(null)}
 else {
 var d86 = Number(c86).toLocaleString('en');
 $("#id_TkrkSB4RtU_86").val(d86);
 }
if (isNaN(c87)) {$("#id_TkrkSB4RtU_87").val(null)}
 else {
 var d87 = Number(c87).toLocaleString('en');
 $("#id_TkrkSB4RtU_87").val(d87);
 }
if (isNaN(c88)) {$("#id_TkrkSB4RtU_88").val(null)}
 else {
 var d88 = Number(c88).toLocaleString('en');
 $("#id_TkrkSB4RtU_88").val(d88);
 }
if (isNaN(c89)) {$("#id_TkrkSB4RtU_89").val(null)}
 else {
 var d89 = Number(c89).toLocaleString('en');
 $("#id_TkrkSB4RtU_89").val(d89);
 }
if (isNaN(c90)) {$("#id_TkrkSB4RtU_90").val(null)}
 else {
 var d90 = Number(c90).toLocaleString('en');
 $("#id_TkrkSB4RtU_90").val(d90);
 }
if (isNaN(c91)) {$("#id_TkrkSB4RtU_91").val(null)}
 else {
 var d91 = Number(c91).toLocaleString('en');
 $("#id_TkrkSB4RtU_91").val(d91);
 }
if (isNaN(c92)) {$("#id_TkrkSB4RtU_92").val(null)}
 else {
 var d92 = Number(c92).toLocaleString('en');
 $("#id_TkrkSB4RtU_92").val(d92);
 }
if (isNaN(c93)) {$("#id_TkrkSB4RtU_93").val(null)}
 else {
 var d93 = Number(c93).toLocaleString('en');
 $("#id_TkrkSB4RtU_93").val(d93);
 }
if (isNaN(c94)) {$("#id_TkrkSB4RtU_94").val(null)}
 else {
 var d94 = Number(c94).toLocaleString('en');
 $("#id_TkrkSB4RtU_94").val(d94);
 }
if (isNaN(c95)) {$("#id_TkrkSB4RtU_95").val(null)}
 else {
 var d95 = Number(c95).toLocaleString('en');
 $("#id_TkrkSB4RtU_95").val(d95);
 }
if (isNaN(c98)) {$("#id_TkrkSB4RtU_98").val(null)}
 else {
 var d98 = Number(c98).toLocaleString('en');
 $("#id_TkrkSB4RtU_98").val(d98);
 }
if (isNaN(c99)) {$("#id_TkrkSB4RtU_99").val(null)}
 else {
 var d99 = Number(c99).toLocaleString('en');
 $("#id_TkrkSB4RtU_99").val(d99);
 }
if (isNaN(c100)) {$("#id_TkrkSB4RtU_100").val(null)}
 else {
 var d100 = Number(c100).toLocaleString('en');
 $("#id_TkrkSB4RtU_100").val(d100);
 }
if (isNaN(c101)) {$("#id_TkrkSB4RtU_101").val(null)}
 else {
 var d101 = Number(c101).toLocaleString('en');
 $("#id_TkrkSB4RtU_101").val(d101);
 }
if (isNaN(c102)) {$("#id_TkrkSB4RtU_102").val(null)}
 else {
 var d102 = Number(c102).toLocaleString('en');
 $("#id_TkrkSB4RtU_102").val(d102);
 }
if (isNaN(c103)) {$("#id_TkrkSB4RtU_103").val(null)}
 else {
 var d103 = Number(c103).toLocaleString('en');
 $("#id_TkrkSB4RtU_103").val(d103);
 }
if (isNaN(cc1)) {$("#id_sV8WZFy66e_1").val(null)}
 else {
 var dd1 = Number(cc1).toLocaleString('en');
 $("#id_sV8WZFy66e_1").val(dd1);
 }
if (isNaN(cc2)) {$("#id_sV8WZFy66e_2").val(null)}
 else {
 var dd2 = Number(cc2).toLocaleString('en');
 $("#id_sV8WZFy66e_2").val(dd2);
 }
if (isNaN(cc3)) {$("#id_sV8WZFy66e_3").val(null)}
 else {
 var dd3 = Number(cc3).toLocaleString('en');
 $("#id_sV8WZFy66e_3").val(dd3);
 }
if (isNaN(cc4)) {$("#id_sV8WZFy66e_4").val(null)}
 else {
 var dd4 = Number(cc4).toLocaleString('en');
 $("#id_sV8WZFy66e_4").val(dd4);
 }
if (isNaN(cc6)) {$("#id_sV8WZFy66e_6").val(null)}
 else {
 var dd6 = Number(cc6).toLocaleString('en');
 $("#id_sV8WZFy66e_6").val(dd6);
 }
if (isNaN(cc7)) {$("#id_sV8WZFy66e_7").val(null)}
 else {
 var dd7 = Number(cc7).toLocaleString('en');
 $("#id_sV8WZFy66e_7").val(dd7);
 }
if (isNaN(cc8)) {$("#id_sV8WZFy66e_8").val(null)}
 else {
 var dd8 = Number(cc8).toLocaleString('en');
 $("#id_sV8WZFy66e_8").val(dd8);
 }
if (isNaN(cc9)) {$("#id_sV8WZFy66e_9").val(null)}
 else {
 var dd9 = Number(cc9).toLocaleString('en');
 $("#id_sV8WZFy66e_9").val(dd9);
 }
if (isNaN(cc11)) {$("#id_sV8WZFy66e_11").val(null)}
 else {
 var dd11 = Number(cc11).toLocaleString('en');
 $("#id_sV8WZFy66e_11").val(dd11);
 }
if (isNaN(cc12)) {$("#id_sV8WZFy66e_12").val(null)}
 else {
 var dd12 = Number(cc12).toLocaleString('en');
 $("#id_sV8WZFy66e_12").val(dd12);
 }
if (isNaN(cc13)) {$("#id_sV8WZFy66e_13").val(null)}
 else {
 var dd13 = Number(cc13).toLocaleString('en');
 $("#id_sV8WZFy66e_13").val(dd13);
 }
if (isNaN(cc14)) {$("#id_sV8WZFy66e_14").val(null)}
 else {
 var dd14 = Number(cc14).toLocaleString('en');
 $("#id_sV8WZFy66e_14").val(dd14);
 }
if (isNaN(cc16)) {$("#id_sV8WZFy66e_16").val(null)}
 else {
 var dd16 = Number(cc16).toLocaleString('en');
 $("#id_sV8WZFy66e_16").val(dd16);
 }
if (isNaN(cc17)) {$("#id_sV8WZFy66e_17").val(null)}
 else {
 var dd17 = Number(cc17).toLocaleString('en');
 $("#id_sV8WZFy66e_17").val(dd17);
 }
if (isNaN(cc18)) {$("#id_sV8WZFy66e_18").val(null)}
 else {
 var dd18 = Number(cc18).toLocaleString('en');
 $("#id_sV8WZFy66e_18").val(dd18);
 }
if (isNaN(cc19)) {$("#id_sV8WZFy66e_19").val(null)}
 else {
 var dd19 = Number(cc19).toLocaleString('en');
 $("#id_sV8WZFy66e_19").val(dd19);
 }
if (isNaN(cc21)) {$("#id_sV8WZFy66e_21").val(null)}
 else {
 var dd21 = Number(cc21).toLocaleString('en');
 $("#id_sV8WZFy66e_21").val(dd21);
 }
if (isNaN(cc22)) {$("#id_sV8WZFy66e_22").val(null)}
 else {
 var dd22 = Number(cc22).toLocaleString('en');
 $("#id_sV8WZFy66e_22").val(dd22);
 }
if (isNaN(cc23)) {$("#id_sV8WZFy66e_23").val(null)}
 else {
 var dd23 = Number(cc23).toLocaleString('en');
 $("#id_sV8WZFy66e_23").val(dd23);
 }
if (isNaN(cc24)) {$("#id_sV8WZFy66e_24").val(null)}
 else {
 var dd24 = Number(cc24).toLocaleString('en');
 $("#id_sV8WZFy66e_24").val(dd24);
 }
if (isNaN(cc26)) {$("#id_sV8WZFy66e_26").val(null)}
 else {
 var dd26 = Number(cc26).toLocaleString('en');
 $("#id_sV8WZFy66e_26").val(dd26);
 }
if (isNaN(cc27)) {$("#id_sV8WZFy66e_27").val(null)}
 else {
 var dd27 = Number(cc27).toLocaleString('en');
 $("#id_sV8WZFy66e_27").val(dd27);
 }
if (isNaN(cc28)) {$("#id_sV8WZFy66e_28").val(null)}
 else {
 var dd28 = Number(cc28).toLocaleString('en');
 $("#id_sV8WZFy66e_28").val(dd28);
 }
if (isNaN(cc29)) {$("#id_sV8WZFy66e_29").val(null)}
 else {
 var dd29 = Number(cc29).toLocaleString('en');
 $("#id_sV8WZFy66e_29").val(dd29);
 }
if (isNaN(cc31)) {$("#id_sV8WZFy66e_31").val(null)}
 else {
 var dd31 = Number(cc31).toLocaleString('en');
 $("#id_sV8WZFy66e_31").val(dd31);
 }
if (isNaN(cc32)) {$("#id_sV8WZFy66e_32").val(null)}
 else {
 var dd32 = Number(cc32).toLocaleString('en');
 $("#id_sV8WZFy66e_32").val(dd32);
 }
if (isNaN(cc33)) {$("#id_sV8WZFy66e_33").val(null)}
 else {
 var dd33 = Number(cc33).toLocaleString('en');
 $("#id_sV8WZFy66e_33").val(dd33);
 }
if (isNaN(cc34)) {$("#id_sV8WZFy66e_34").val(null)}
 else {
 var dd34 = Number(cc34).toLocaleString('en');
 $("#id_sV8WZFy66e_34").val(dd34);
 }
if (isNaN(cc36)) {$("#id_sV8WZFy66e_36").val(null)}
 else {
 var dd36 = Number(cc36).toLocaleString('en');
 $("#id_sV8WZFy66e_36").val(dd36);
 }
if (isNaN(cc37)) {$("#id_sV8WZFy66e_37").val(null)}
 else {
 var dd37 = Number(cc37).toLocaleString('en');
 $("#id_sV8WZFy66e_37").val(dd37);
 }
if (isNaN(cc38)) {$("#id_sV8WZFy66e_38").val(null)}
 else {
 var dd38 = Number(cc38).toLocaleString('en');
 $("#id_sV8WZFy66e_38").val(dd38);
 }
if (isNaN(cc39)) {$("#id_sV8WZFy66e_39").val(null)}
 else {
 var dd39 = Number(cc39).toLocaleString('en');
 $("#id_sV8WZFy66e_39").val(dd39);
 }







});

});

