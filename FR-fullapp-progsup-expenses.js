// EXPENSES page - Program Support


$(function(){
//place script here

$('div#xFmNptmQhat').children().css('margin', '3px');

$('.button').eq(0).attr('id', 'backtohome');
$('#backtohome').text('Back to Application Home');

// restrict input in fields
    $("input:not(input#id_aiyzcHuNf0_0,input#id_aiyzcHuNf0_5,input#id_aiyzcHuNf0_10,input#id_aiyzcHuNf0_15,input#id_aiyzcHuNf0_25,input#id_aiyzcHuNf0_30,input#id_aiyzcHuNf0_35)").keypress(function(e) {
            var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9,]/);
            if (verified) {e.preventDefault();}
            
    });



$('input[type="text"]').attr({ maxLength : 12 });

// edit the dollar signs
$("div.d-inline").css({"color":"dimgray","font-style":"normal","font-weight":"lighter"});

// read only blocks
$("input#id_VeqTZDcxwz_16").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_17").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_18").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_19").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_VeqTZDcxwz_36").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_37").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_38").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_39").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_VeqTZDcxwz_68").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_69").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_70").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_71").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_VeqTZDcxwz_84").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_85").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_86").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_87").attr('readonly', true).css({'background-color' : 'lightgray'});

$("input#id_VeqTZDcxwz_108").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_109").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_110").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_111").attr('readonly', true).css({'background-color' : 'lightgray'});


$("input#id_VeqTZDcxwz_112").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_113").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_114").attr('readonly', true).css({'background-color' : 'lightgray'});
$("input#id_VeqTZDcxwz_115").attr('readonly', true).css({'background-color' : 'lightgray'});

// HIDE INPUTS for header rows

	$("#id_VeqTZDcxwz_0").hide();
    $("div.d-inline:eq(0)").hide();
    $("#id_VeqTZDcxwz_1").hide();
    $("div.d-inline:eq(1)").hide();
    $("#id_VeqTZDcxwz_2").hide();
    $("div.d-inline:eq(2)").hide();
    $("#id_VeqTZDcxwz_3").hide();
    $("div.d-inline:eq(3)").hide();

    $("#id_VeqTZDcxwz_20").hide();
    $("div.d-inline:eq(20)").hide();
    $("#id_VeqTZDcxwz_21").hide();
    $("div.d-inline:eq(21)").hide();
    $("#id_VeqTZDcxwz_22").hide();
    $("div.d-inline:eq(22)").hide();
    $("#id_VeqTZDcxwz_23").hide();
    $("div.d-inline:eq(23)").hide();

    $("#id_VeqTZDcxwz_56").hide();
    $("div.d-inline:eq(56)").hide();
    $("#id_VeqTZDcxwz_57").hide();
    $("div.d-inline:eq(57)").hide();
    $("#id_VeqTZDcxwz_58").hide();
    $("div.d-inline:eq(58)").hide();
    $("#id_VeqTZDcxwz_59").hide();
    $("div.d-inline:eq(59)").hide();
    
    $("#id_VeqTZDcxwz_72").hide();
    $("div.d-inline:eq(72)").hide();
    $("#id_VeqTZDcxwz_73").hide();
    $("div.d-inline:eq(73)").hide();
    $("#id_VeqTZDcxwz_74").hide();
    $("div.d-inline:eq(74)").hide();
    $("#id_VeqTZDcxwz_75").hide();
    $("div.d-inline:eq(75)").hide();


// function starts. whenever any input is blurred

$("input").blur(function(){

// get all user input values
// "a" variables are the value entered by a user
// "b" variables are the value entered by the user stripped of commas
// "c" variables convert the value from the input from a string to a number
 var a4 = $("#id_VeqTZDcxwz_4").val();   var b4 = a4.replaceAll(",","");   var c4 = parseInt(b4,10);
 var a5 = $("#id_VeqTZDcxwz_5").val();   var b5 = a5.replaceAll(",","");   var c5 = parseInt(b5,10);
 var a6 = $("#id_VeqTZDcxwz_6").val();   var b6 = a6.replaceAll(",","");   var c6 = parseInt(b6,10);
 var a7 = $("#id_VeqTZDcxwz_7").val();   var b7 = a7.replaceAll(",","");   var c7 = parseInt(b7,10);
 var a8 = $("#id_VeqTZDcxwz_8").val();   var b8 = a8.replaceAll(",","");   var c8 = parseInt(b8,10);
 var a9 = $("#id_VeqTZDcxwz_9").val();   var b9 = a9.replaceAll(",","");   var c9 = parseInt(b9,10);
 var a10 = $("#id_VeqTZDcxwz_10").val();   var b10 = a10.replaceAll(",","");   var c10 = parseInt(b10,10);
 var a11 = $("#id_VeqTZDcxwz_11").val();   var b11 = a11.replaceAll(",","");   var c11 = parseInt(b11,10);
 var a12 = $("#id_VeqTZDcxwz_12").val();   var b12 = a12.replaceAll(",","");   var c12 = parseInt(b12,10);
 var a13 = $("#id_VeqTZDcxwz_13").val();   var b13 = a13.replaceAll(",","");   var c13 = parseInt(b13,10);
 var a14 = $("#id_VeqTZDcxwz_14").val();   var b14 = a14.replaceAll(",","");   var c14 = parseInt(b14,10);
 var a15 = $("#id_VeqTZDcxwz_15").val();   var b15 = a15.replaceAll(",","");   var c15 = parseInt(b15,10);
 var a24 = $("#id_VeqTZDcxwz_24").val();   var b24 = a24.replaceAll(",","");   var c24 = parseInt(b24,10);
 var a25 = $("#id_VeqTZDcxwz_25").val();   var b25 = a25.replaceAll(",","");   var c25 = parseInt(b25,10);
 var a26 = $("#id_VeqTZDcxwz_26").val();   var b26 = a26.replaceAll(",","");   var c26 = parseInt(b26,10);
 var a27 = $("#id_VeqTZDcxwz_27").val();   var b27 = a27.replaceAll(",","");   var c27 = parseInt(b27,10);
 var a28 = $("#id_VeqTZDcxwz_28").val();   var b28 = a28.replaceAll(",","");   var c28 = parseInt(b28,10);
 var a29 = $("#id_VeqTZDcxwz_29").val();   var b29 = a29.replaceAll(",","");   var c29 = parseInt(b29,10);
 var a30 = $("#id_VeqTZDcxwz_30").val();   var b30 = a30.replaceAll(",","");   var c30 = parseInt(b30,10);
 var a31 = $("#id_VeqTZDcxwz_31").val();   var b31 = a31.replaceAll(",","");   var c31 = parseInt(b31,10);
 var a32 = $("#id_VeqTZDcxwz_32").val();   var b32 = a32.replaceAll(",","");   var c32 = parseInt(b32,10);
 var a33 = $("#id_VeqTZDcxwz_33").val();   var b33 = a33.replaceAll(",","");   var c33 = parseInt(b33,10);
 var a34 = $("#id_VeqTZDcxwz_34").val();   var b34 = a34.replaceAll(",","");   var c34 = parseInt(b34,10);
 var a35 = $("#id_VeqTZDcxwz_35").val();   var b35 = a35.replaceAll(",","");   var c35 = parseInt(b35,10);
 var a40 = $("#id_VeqTZDcxwz_40").val();   var b40 = a40.replaceAll(",","");   var c40 = parseInt(b40,10);
 var a41 = $("#id_VeqTZDcxwz_41").val();   var b41 = a41.replaceAll(",","");   var c41 = parseInt(b41,10);
 var a42 = $("#id_VeqTZDcxwz_42").val();   var b42 = a42.replaceAll(",","");   var c42 = parseInt(b42,10);
 var a43 = $("#id_VeqTZDcxwz_43").val();   var b43 = a43.replaceAll(",","");   var c43 = parseInt(b43,10);
 var a44 = $("#id_VeqTZDcxwz_44").val();   var b44 = a44.replaceAll(",","");   var c44 = parseInt(b44,10);
 var a45 = $("#id_VeqTZDcxwz_45").val();   var b45 = a45.replaceAll(",","");   var c45 = parseInt(b45,10);
 var a46 = $("#id_VeqTZDcxwz_46").val();   var b46 = a46.replaceAll(",","");   var c46 = parseInt(b46,10);
 var a47 = $("#id_VeqTZDcxwz_47").val();   var b47 = a47.replaceAll(",","");   var c47 = parseInt(b47,10);
 var a48 = $("#id_VeqTZDcxwz_48").val();   var b48 = a48.replaceAll(",","");   var c48 = parseInt(b48,10);
 var a49 = $("#id_VeqTZDcxwz_49").val();   var b49 = a49.replaceAll(",","");   var c49 = parseInt(b49,10);
 var a50 = $("#id_VeqTZDcxwz_50").val();   var b50 = a50.replaceAll(",","");   var c50 = parseInt(b50,10);
 var a51 = $("#id_VeqTZDcxwz_51").val();   var b51 = a51.replaceAll(",","");   var c51 = parseInt(b51,10);
 var a52 = $("#id_VeqTZDcxwz_52").val();   var b52 = a52.replaceAll(",","");   var c52 = parseInt(b52,10);
 var a53 = $("#id_VeqTZDcxwz_53").val();   var b53 = a53.replaceAll(",","");   var c53 = parseInt(b53,10);
 var a54 = $("#id_VeqTZDcxwz_54").val();   var b54 = a54.replaceAll(",","");   var c54 = parseInt(b54,10);
 var a55 = $("#id_VeqTZDcxwz_55").val();   var b55 = a55.replaceAll(",","");   var c55 = parseInt(b55,10);
 var a60 = $("#id_VeqTZDcxwz_60").val();   var b60 = a60.replaceAll(",","");   var c60 = parseInt(b60,10);
 var a61 = $("#id_VeqTZDcxwz_61").val();   var b61 = a61.replaceAll(",","");   var c61 = parseInt(b61,10);
 var a62 = $("#id_VeqTZDcxwz_62").val();   var b62 = a62.replaceAll(",","");   var c62 = parseInt(b62,10);
 var a63 = $("#id_VeqTZDcxwz_63").val();   var b63 = a63.replaceAll(",","");   var c63 = parseInt(b63,10);
 var a64 = $("#id_VeqTZDcxwz_64").val();   var b64 = a64.replaceAll(",","");   var c64 = parseInt(b64,10);
 var a65 = $("#id_VeqTZDcxwz_65").val();   var b65 = a65.replaceAll(",","");   var c65 = parseInt(b65,10);
 var a66 = $("#id_VeqTZDcxwz_66").val();   var b66 = a66.replaceAll(",","");   var c66 = parseInt(b66,10);
 var a67 = $("#id_VeqTZDcxwz_67").val();   var b67 = a67.replaceAll(",","");   var c67 = parseInt(b67,10);
 var a76 = $("#id_VeqTZDcxwz_76").val();   var b76 = a76.replaceAll(",","");   var c76 = parseInt(b76,10);
 var a77 = $("#id_VeqTZDcxwz_77").val();   var b77 = a77.replaceAll(",","");   var c77 = parseInt(b77,10);
 var a78 = $("#id_VeqTZDcxwz_78").val();   var b78 = a78.replaceAll(",","");   var c78 = parseInt(b78,10);
 var a79 = $("#id_VeqTZDcxwz_79").val();   var b79 = a79.replaceAll(",","");   var c79 = parseInt(b79,10);
 var a80 = $("#id_VeqTZDcxwz_80").val();   var b80 = a80.replaceAll(",","");   var c80 = parseInt(b80,10);
 var a81 = $("#id_VeqTZDcxwz_81").val();   var b81 = a81.replaceAll(",","");   var c81 = parseInt(b81,10);
 var a82 = $("#id_VeqTZDcxwz_82").val();   var b82 = a82.replaceAll(",","");   var c82 = parseInt(b82,10);
 var a83 = $("#id_VeqTZDcxwz_83").val();   var b83 = a83.replaceAll(",","");   var c83 = parseInt(b83,10);
 var a88 = $("#id_VeqTZDcxwz_88").val();   var b88 = a88.replaceAll(",","");   var c88 = parseInt(b88,10);
 var a89 = $("#id_VeqTZDcxwz_89").val();   var b89 = a89.replaceAll(",","");   var c89 = parseInt(b89,10);
 var a90 = $("#id_VeqTZDcxwz_90").val();   var b90 = a90.replaceAll(",","");   var c90 = parseInt(b90,10);
 var a91 = $("#id_VeqTZDcxwz_91").val();   var b91 = a91.replaceAll(",","");   var c91 = parseInt(b91,10);
 var a92 = $("#id_VeqTZDcxwz_92").val();   var b92 = a92.replaceAll(",","");   var c92 = parseInt(b92,10);
 var a93 = $("#id_VeqTZDcxwz_93").val();   var b93 = a93.replaceAll(",","");   var c93 = parseInt(b93,10);
 var a94 = $("#id_VeqTZDcxwz_94").val();   var b94 = a94.replaceAll(",","");   var c94 = parseInt(b94,10);
 var a95 = $("#id_VeqTZDcxwz_95").val();   var b95 = a95.replaceAll(",","");   var c95 = parseInt(b95,10);
 var a96 = $("#id_VeqTZDcxwz_96").val();   var b96 = a96.replaceAll(",","");   var c96 = parseInt(b96,10);
 var a97 = $("#id_VeqTZDcxwz_97").val();   var b97 = a97.replaceAll(",","");   var c97 = parseInt(b97,10);
 var a98 = $("#id_VeqTZDcxwz_98").val();   var b98 = a98.replaceAll(",","");   var c98 = parseInt(b98,10);
 var a99 = $("#id_VeqTZDcxwz_99").val();   var b99 = a99.replaceAll(",","");   var c99 = parseInt(b99,10);
 var a100 = $("#id_VeqTZDcxwz_100").val();   var b100 = a100.replaceAll(",","");   var c100 = parseInt(b100,10);
 var a101 = $("#id_VeqTZDcxwz_101").val();   var b101 = a101.replaceAll(",","");   var c101 = parseInt(b101,10);
 var a102 = $("#id_VeqTZDcxwz_102").val();   var b102 = a102.replaceAll(",","");   var c102 = parseInt(b102,10);
 var a103 = $("#id_VeqTZDcxwz_103").val();   var b103 = a103.replaceAll(",","");   var c103 = parseInt(b103,10);
 var a104 = $("#id_VeqTZDcxwz_104").val();   var b104 = a104.replaceAll(",","");   var c104 = parseInt(b104,10);
 var a105 = $("#id_VeqTZDcxwz_105").val();   var b105 = a105.replaceAll(",","");   var c105 = parseInt(b105,10);
 var a106 = $("#id_VeqTZDcxwz_106").val();   var b106 = a106.replaceAll(",","");   var c106 = parseInt(b106,10);
 var a107 = $("#id_VeqTZDcxwz_107").val();   var b107 = a107.replaceAll(",","");   var c107 = parseInt(b107,10);

 var aa1 = $("#id_aiyzcHuNf0_1").val();   var bb1 = aa1.replaceAll(",","");   var cc1 = parseInt(bb1,10);
 var aa2 = $("#id_aiyzcHuNf0_2").val();   var bb2 = aa2.replaceAll(",","");   var cc2 = parseInt(bb2,10);
 var aa3 = $("#id_aiyzcHuNf0_3").val();   var bb3 = aa3.replaceAll(",","");   var cc3 = parseInt(bb3,10);
 var aa4 = $("#id_aiyzcHuNf0_4").val();   var bb4 = aa4.replaceAll(",","");   var cc4 = parseInt(bb4,10);

 var aa6 = $("#id_aiyzcHuNf0_6").val();   var bb6 = aa6.replaceAll(",","");   var cc6 = parseInt(bb6,10);
 var aa7 = $("#id_aiyzcHuNf0_7").val();   var bb7 = aa7.replaceAll(",","");   var cc7 = parseInt(bb7,10);
 var aa8 = $("#id_aiyzcHuNf0_8").val();   var bb8 = aa8.replaceAll(",","");   var cc8 = parseInt(bb8,10);
 var aa9 = $("#id_aiyzcHuNf0_9").val();   var bb9 = aa9.replaceAll(",","");   var cc9 = parseInt(bb9,10);

 var aa11 = $("#id_aiyzcHuNf0_11").val();   var bb11 = aa11.replaceAll(",","");   var cc11 = parseInt(bb11,10);
 var aa12 = $("#id_aiyzcHuNf0_12").val();   var bb12 = aa12.replaceAll(",","");   var cc12 = parseInt(bb12,10);
 var aa13 = $("#id_aiyzcHuNf0_13").val();   var bb13 = aa13.replaceAll(",","");   var cc13 = parseInt(bb13,10);
 var aa14 = $("#id_aiyzcHuNf0_14").val();   var bb14 = aa14.replaceAll(",","");   var cc14 = parseInt(bb14,10);

 var aa16 = $("#id_aiyzcHuNf0_16").val();   var bb16 = aa16.replaceAll(",","");   var cc16 = parseInt(bb16,10);
 var aa17 = $("#id_aiyzcHuNf0_17").val();   var bb17 = aa17.replaceAll(",","");   var cc17 = parseInt(bb17,10);
 var aa18 = $("#id_aiyzcHuNf0_18").val();   var bb18 = aa18.replaceAll(",","");   var cc18 = parseInt(bb18,10);
 var aa19 = $("#id_aiyzcHuNf0_19").val();   var bb19 = aa19.replaceAll(",","");   var cc19 = parseInt(bb19,10);

 var aa21 = $("#id_aiyzcHuNf0_21").val();   var bb21 = aa21.replaceAll(",","");   var cc21 = parseInt(bb21,10);
 var aa22 = $("#id_aiyzcHuNf0_22").val();   var bb22 = aa22.replaceAll(",","");   var cc22 = parseInt(bb22,10);
 var aa23 = $("#id_aiyzcHuNf0_23").val();   var bb23 = aa23.replaceAll(",","");   var cc23 = parseInt(bb23,10);
 var aa24 = $("#id_aiyzcHuNf0_24").val();   var bb24 = aa24.replaceAll(",","");   var cc24 = parseInt(bb24,10);

 var aa26 = $("#id_aiyzcHuNf0_26").val();   var bb26 = aa26.replaceAll(",","");   var cc26 = parseInt(bb26,10);
 var aa27 = $("#id_aiyzcHuNf0_27").val();   var bb27 = aa27.replaceAll(",","");   var cc27 = parseInt(bb27,10);
 var aa28 = $("#id_aiyzcHuNf0_28").val();   var bb28 = aa28.replaceAll(",","");   var cc28 = parseInt(bb28,10);
 var aa29 = $("#id_aiyzcHuNf0_29").val();   var bb29 = aa29.replaceAll(",","");   var cc29 = parseInt(bb29,10);

 var aa31 = $("#id_aiyzcHuNf0_31").val();   var bb31 = aa31.replaceAll(",","");   var cc31 = parseInt(bb31,10);
 var aa32 = $("#id_aiyzcHuNf0_32").val();   var bb32 = aa32.replaceAll(",","");   var cc32 = parseInt(bb32,10);
 var aa33 = $("#id_aiyzcHuNf0_33").val();   var bb33 = aa33.replaceAll(",","");   var cc33 = parseInt(bb33,10);
 var aa34 = $("#id_aiyzcHuNf0_34").val();   var bb34 = aa34.replaceAll(",","");   var cc34 = parseInt(bb34,10);

 var aa36 = $("#id_aiyzcHuNf0_36").val();   var bb36 = aa36.replaceAll(",","");   var cc36 = parseInt(bb36,10);
 var aa37 = $("#id_aiyzcHuNf0_37").val();   var bb37 = aa37.replaceAll(",","");   var cc37 = parseInt(bb37,10);
 var aa38 = $("#id_aiyzcHuNf0_38").val();   var bb38 = aa38.replaceAll(",","");   var cc38 = parseInt(bb38,10);
 var aa39 = $("#id_aiyzcHuNf0_39").val();   var bb39 = aa39.replaceAll(",","");   var cc39 = parseInt(bb39,10);



// create all variables to be used in calculation formulas. use Z for all user input variables. then set all null equal to zero for formulas only
// "z" variables are a numeric value to be used in calcuations. While we already had "c" above, "z" is the same as "c" unless "c" was a 'null' value, so we convert 'null's to numeric zeros.
 var z4;
 var z5;
 var z6;
 var z7;
 var z8;
 var z9;
 var z10;
 var z11;
 var z12;
 var z13;
 var z14;
 var z15;
 var z24;
 var z25;
 var z26;
 var z27;
 var z28;
 var z29;
 var z30;
 var z31;
 var z32;
 var z33;
 var z34;
 var z35;
 var z40;
 var z41;
 var z42;
 var z43;
 var z44;
 var z45;
 var z46;
 var z47;
 var z48;
 var z49;
 var z50;
 var z51;
 var z52;
 var z53;
 var z54;
 var z55;
 var z60;
 var z61;
 var z62;
 var z63;
 var z64;
 var z65;
 var z66;
 var z67;
 var z76;
 var z77;
 var z78;
 var z79;
 var z80;
 var z81;
 var z82;
 var z83;
 var z88;
 var z89;
 var z90;
 var z91;
 var z92;
 var z93;
 var z94;
 var z95;
 var z96;
 var z97;
 var z98;
 var z99;
 var z100;
 var z101;
 var z102;
 var z103;
 var z104;
 var z105;
 var z106;
 var z107;
 
 var zz1;
 var zz2;
 var zz3;
 var zz4;

 var zz6;
 var zz7;
 var zz8;
 var zz9;

 var zz11;
 var zz12;
 var zz13;
 var zz14;

 var zz16;
 var zz17;
 var zz18;
 var zz19;

 var zz21;
 var zz22;
 var zz23;
 var zz24;

 var zz26;
 var zz27;
 var zz28;
 var zz29;

 var zz31;
 var zz32;
 var zz33;
 var zz34;

 var zz36;
 var zz37;
 var zz38;
 var zz39;

 


if (isNaN(c4)) {z4 = 0;}
 else {z4 = c4;}
if (isNaN(c5)) {z5 = 0;}
 else {z5 = c5;}
if (isNaN(c6)) {z6 = 0;}
 else {z6 = c6;}
if (isNaN(c7)) {z7 = 0;}
 else {z7 = c7;}
if (isNaN(c8)) {z8 = 0;}
 else {z8 = c8;}
if (isNaN(c9)) {z9 = 0;}
 else {z9 = c9;}
if (isNaN(c10)) {z10 = 0;}
 else {z10 = c10;}
if (isNaN(c11)) {z11 = 0;}
 else {z11 = c11;}
if (isNaN(c12)) {z12 = 0;}
 else {z12 = c12;}
if (isNaN(c13)) {z13 = 0;}
 else {z13 = c13;}
if (isNaN(c14)) {z14 = 0;}
 else {z14 = c14;}
if (isNaN(c15)) {z15 = 0;}
 else {z15 = c15;}
if (isNaN(c24)) {z24 = 0;}
 else {z24 = c24;}
if (isNaN(c25)) {z25 = 0;}
 else {z25 = c25;}
if (isNaN(c26)) {z26 = 0;}
 else {z26 = c26;}
if (isNaN(c27)) {z27 = 0;}
 else {z27 = c27;}
if (isNaN(c28)) {z28 = 0;}
 else {z28 = c28;}
if (isNaN(c29)) {z29 = 0;}
 else {z29 = c29;}
if (isNaN(c30)) {z30 = 0;}
 else {z30 = c30;}
if (isNaN(c31)) {z31 = 0;}
 else {z31 = c31;}
if (isNaN(c32)) {z32 = 0;}
 else {z32 = c32;}
if (isNaN(c33)) {z33 = 0;}
 else {z33 = c33;}
if (isNaN(c34)) {z34 = 0;}
 else {z34 = c34;}
if (isNaN(c35)) {z35 = 0;}
 else {z35 = c35;}
if (isNaN(c40)) {z40 = 0;}
 else {z40 = c40;}
if (isNaN(c41)) {z41 = 0;}
 else {z41 = c41;}
if (isNaN(c42)) {z42 = 0;}
 else {z42 = c42;}
if (isNaN(c43)) {z43 = 0;}
 else {z43 = c43;}
if (isNaN(c44)) {z44 = 0;}
 else {z44 = c44;}
if (isNaN(c45)) {z45 = 0;}
 else {z45 = c45;}
if (isNaN(c46)) {z46 = 0;}
 else {z46 = c46;}
if (isNaN(c47)) {z47 = 0;}
 else {z47 = c47;}
if (isNaN(c48)) {z48 = 0;}
 else {z48 = c48;}
if (isNaN(c49)) {z49 = 0;}
 else {z49 = c49;}
if (isNaN(c50)) {z50 = 0;}
 else {z50 = c50;}
if (isNaN(c51)) {z51 = 0;}
 else {z51 = c51;}
if (isNaN(c52)) {z52 = 0;}
 else {z52 = c52;}
if (isNaN(c53)) {z53 = 0;}
 else {z53 = c53;}
if (isNaN(c54)) {z54 = 0;}
 else {z54 = c54;}
if (isNaN(c55)) {z55 = 0;}
 else {z55 = c55;}
if (isNaN(c60)) {z60 = 0;}
 else {z60 = c60;}
if (isNaN(c61)) {z61 = 0;}
 else {z61 = c61;}
if (isNaN(c62)) {z62 = 0;}
 else {z62 = c62;}
if (isNaN(c63)) {z63 = 0;}
 else {z63 = c63;}
if (isNaN(c64)) {z64 = 0;}
 else {z64 = c64;}
if (isNaN(c65)) {z65 = 0;}
 else {z65 = c65;}
if (isNaN(c66)) {z66 = 0;}
 else {z66 = c66;}
if (isNaN(c67)) {z67 = 0;}
 else {z67 = c67;}
if (isNaN(c76)) {z76 = 0;}
 else {z76 = c76;}
if (isNaN(c77)) {z77 = 0;}
 else {z77 = c77;}
if (isNaN(c78)) {z78 = 0;}
 else {z78 = c78;}
if (isNaN(c79)) {z79 = 0;}
 else {z79 = c79;}
if (isNaN(c80)) {z80 = 0;}
 else {z80 = c80;}
if (isNaN(c81)) {z81 = 0;}
 else {z81 = c81;}
if (isNaN(c82)) {z82 = 0;}
 else {z82 = c82;}
if (isNaN(c83)) {z83 = 0;}
 else {z83 = c83;}
if (isNaN(c88)) {z88 = 0;}
 else {z88 = c88;}
if (isNaN(c89)) {z89 = 0;}
 else {z89 = c89;}
if (isNaN(c90)) {z90 = 0;}
 else {z90 = c90;}
if (isNaN(c91)) {z91 = 0;}
 else {z91 = c91;}
if (isNaN(c92)) {z92 = 0;}
 else {z92 = c92;}
if (isNaN(c93)) {z93 = 0;}
 else {z93 = c93;}
if (isNaN(c94)) {z94 = 0;}
 else {z94 = c94;}
if (isNaN(c95)) {z95 = 0;}
 else {z95 = c95;}
if (isNaN(c96)) {z96 = 0;}
 else {z96 = c96;}
if (isNaN(c97)) {z97 = 0;}
 else {z97 = c97;}
if (isNaN(c98)) {z98 = 0;}
 else {z98 = c98;}
if (isNaN(c99)) {z99 = 0;}
 else {z99 = c99;}
if (isNaN(c100)) {z100 = 0;}
 else {z100 = c100;}
if (isNaN(c101)) {z101 = 0;}
 else {z101 = c101;}
if (isNaN(c102)) {z102 = 0;}
 else {z102 = c102;}
if (isNaN(c103)) {z103 = 0;}
 else {z103 = c103;}
if (isNaN(c104)) {z104 = 0;}
 else {z104 = c104;}
if (isNaN(c105)) {z105 = 0;}
 else {z105 = c105;}
if (isNaN(c106)) {z106 = 0;}
 else {z106 = c106;}
if (isNaN(c107)) {z107 = 0;}
 else {z107 = c107;}
 
 if (isNaN(cc1)) {zz1 = 0;}
 else {zz1 = cc1;}
if (isNaN(cc2)) {zz2 = 0;}
 else {zz2 = cc2;}
if (isNaN(cc3)) {zz3 = 0;}
 else {zz3 = cc3;}
if (isNaN(cc4)) {zz4 = 0;}
 else {zz4 = cc4;}

if (isNaN(cc6)) {zz6 = 0;}
 else {zz6 = cc6;}
if (isNaN(cc7)) {zz7 = 0;}
 else {zz7 = cc7;}
if (isNaN(cc8)) {zz8 = 0;}
 else {zz8 = cc8;}
if (isNaN(cc9)) {zz9 = 0;}
 else {zz9 = cc9;}

if (isNaN(cc11)) {zz11 = 0;}
 else {zz11 = cc11;}
if (isNaN(cc12)) {zz12 = 0;}
 else {zz12 = cc12;}
if (isNaN(cc13)) {zz13 = 0;}
 else {zz13 = cc13;}
if (isNaN(cc14)) {zz14 = 0;}
 else {zz14 = cc14;}

if (isNaN(cc16)) {zz16 = 0;}
 else {zz16 = cc16;}
if (isNaN(cc17)) {zz17 = 0;}
 else {zz17 = cc17;}
if (isNaN(cc18)) {zz18 = 0;}
 else {zz18 = cc18;}
if (isNaN(cc19)) {zz19 = 0;}
 else {zz19 = cc19;}

if (isNaN(cc21)) {zz21 = 0;}
 else {zz21 = cc21;}
if (isNaN(cc22)) {zz22 = 0;}
 else {zz22 = cc22;}
if (isNaN(cc23)) {zz23 = 0;}
 else {zz23 = cc23;}
if (isNaN(cc24)) {zz24 = 0;}
 else {zz24 = cc24;}

if (isNaN(cc26)) {zz26 = 0;}
 else {zz26 = cc26;}
if (isNaN(cc27)) {zz27 = 0;}
 else {zz27 = cc27;}
if (isNaN(cc28)) {zz28 = 0;}
 else {zz28 = cc28;}
if (isNaN(cc29)) {zz29 = 0;}
 else {zz29 = cc29;}

if (isNaN(cc31)) {zz31 = 0;}
 else {zz31 = cc31;}
if (isNaN(cc32)) {zz32 = 0;}
 else {zz32 = cc32;}
if (isNaN(cc33)) {zz33 = 0;}
 else {zz33 = cc33;}
if (isNaN(cc34)) {zz34 = 0;}
 else {zz34 = cc34;}

if (isNaN(cc36)) {zz36 = 0;}
 else {zz36 = cc36;}
if (isNaN(cc37)) {zz37 = 0;}
 else {zz37 = cc37;}
if (isNaN(cc38)) {zz38 = 0;}
 else {zz38 = cc38;}
if (isNaN(cc39)) {zz39 = 0;}
 else {zz39 = cc39;}


    
    
    
// calculations. this set of "c" variables is different. these are the values to be entered into grayed out calculation fields in the form. they outputs only in order to avoid cyclical or self-referential formulas.
	var c16 = Math.round(z4+z8+z12);
    var c17 = Math.round(z5+z9+z13);
    var c18 = Math.round(z6+z10+z14);
    var c19 = Math.round(z7+z11+z15);
    
	var c36 = Math.round(z24+z28+z32);
    var c37 = Math.round(z25+z29+z33);
    var c38 = Math.round(z26+z30+z34);
    var c39 = Math.round(z27+z31+z35);
    
	var c68 = Math.round(z60+z64);
    var c69 = Math.round(z61+z65);
    var c70 = Math.round(z62+z66);
    var c71 = Math.round(z63+z67);

	var c84 = Math.round(z76+z80);
    var c85 = Math.round(z77+z81);
    var c86 = Math.round(z78+z82);
    var c87 = Math.round(z79+z83);
    
	var cc108 = Math.round(zz1+zz6+zz11+zz16+zz21+zz26+zz31+zz36);
    var cc109 = Math.round(zz2+zz7+zz12+zz17+zz22+zz27+zz32+zz37);
    var cc110 = Math.round(zz3+zz8+zz13+zz18+zz23+zz28+zz33+zz38);
    var cc111 = Math.round(zz4+zz9+zz14+zz19+zz24+zz29+zz34+zz39);
    
    var c112 = Math.round(z4+z8+z12+z24+z28+z32+z40+z44+z48+z52+z60+z64+z76+z80+z88+z92+z96+z100+z104+zz1+zz6+zz11+zz16+zz21+zz26+zz31+zz36);
	var c113 = Math.round(z5+z9+z13+z25+z29+z33+z41+z45+z49+z53+z61+z65+z77+z81+z89+z93+z97+z101+z105+zz2+zz7+zz12+zz17+zz22+zz27+zz32+zz37);
    var c114 = Math.round(z6+z10+z14+z26+z30+z34+z42+z46+z50+z54+z62+z66+z78+z82+z90+z94+z98+z102+z106+zz3+zz8+zz13+zz18+zz23+zz28+zz33+zz38);
	var c115 = Math.round(z7+z11+z15+z27+z31+z35+z43+z47+z51+z55+z63+z67+z79+z83+z91+z95+z99+z103+z107+zz4+zz9+zz14+zz19+zz24+zz29+zz34+zz39);

// put calculation outputs into form. The "c" values created above are converted to a number (probably not necessary), then converted to a string that has commas according to local (english language) conventions. 
// if the calcuation field was already blank, it will stay blank. this is a necessary step since we are updated all calculation outputs all at once. without this check, the formula would try to convert 'null' to a number, which results in "NaN" (not a number) appearing the calculation output field. 
 
if (isNaN(c16)) {$("#id_VeqTZDcxwz_16").val(null)}
 else {
 var d16 = Number(c16).toLocaleString('en');
 $("#id_VeqTZDcxwz_16").val(d16);
 }
if (isNaN(c17)) {$("#id_VeqTZDcxwz_17").val(null)}
 else {
 var d17 = Number(c17).toLocaleString('en');
 $("#id_VeqTZDcxwz_17").val(d17);
 }
if (isNaN(c18)) {$("#id_VeqTZDcxwz_18").val(null)}
 else {
 var d18 = Number(c18).toLocaleString('en');
 $("#id_VeqTZDcxwz_18").val(d18);
 }
if (isNaN(c19)) {$("#id_VeqTZDcxwz_19").val(null)}
 else {
 var d19 = Number(c19).toLocaleString('en');
 $("#id_VeqTZDcxwz_19").val(d19);
 }
if (isNaN(c36)) {$("#id_VeqTZDcxwz_36").val(null)}
 else {
 var d36 = Number(c36).toLocaleString('en');
 $("#id_VeqTZDcxwz_36").val(d36);
 }
if (isNaN(c37)) {$("#id_VeqTZDcxwz_37").val(null)}
 else {
 var d37 = Number(c37).toLocaleString('en');
 $("#id_VeqTZDcxwz_37").val(d37);
 }
if (isNaN(c38)) {$("#id_VeqTZDcxwz_38").val(null)}
 else {
 var d38 = Number(c38).toLocaleString('en');
 $("#id_VeqTZDcxwz_38").val(d38);
 }
if (isNaN(c39)) {$("#id_VeqTZDcxwz_39").val(null)}
 else {
 var d39 = Number(c39).toLocaleString('en');
 $("#id_VeqTZDcxwz_39").val(d39);
 }
if (isNaN(c68)) {$("#id_VeqTZDcxwz_68").val(null)}
 else {
 var d68 = Number(c68).toLocaleString('en');
 $("#id_VeqTZDcxwz_68").val(d68);
 }
if (isNaN(c69)) {$("#id_VeqTZDcxwz_69").val(null)}
 else {
 var d69 = Number(c69).toLocaleString('en');
 $("#id_VeqTZDcxwz_69").val(d69);
 }
if (isNaN(c70)) {$("#id_VeqTZDcxwz_70").val(null)}
 else {
 var d70 = Number(c70).toLocaleString('en');
 $("#id_VeqTZDcxwz_70").val(d70);
 }
if (isNaN(c71)) {$("#id_VeqTZDcxwz_71").val(null)}
 else {
 var d71 = Number(c71).toLocaleString('en');
 $("#id_VeqTZDcxwz_71").val(d71);
 }
if (isNaN(c84)) {$("#id_VeqTZDcxwz_84").val(null)}
 else {
 var d84 = Number(c84).toLocaleString('en');
 $("#id_VeqTZDcxwz_84").val(d84);
 }
if (isNaN(c85)) {$("#id_VeqTZDcxwz_85").val(null)}
 else {
 var d85 = Number(c85).toLocaleString('en');
 $("#id_VeqTZDcxwz_85").val(d85);
 }
if (isNaN(c86)) {$("#id_VeqTZDcxwz_86").val(null)}
 else {
 var d86 = Number(c86).toLocaleString('en');
 $("#id_VeqTZDcxwz_86").val(d86);
 }
if (isNaN(c87)) {$("#id_VeqTZDcxwz_87").val(null)}
 else {
 var d87 = Number(c87).toLocaleString('en');
 $("#id_VeqTZDcxwz_87").val(d87);
 }

if (isNaN(cc108)) {$("#id_VeqTZDcxwz_108").val(null)}
 else {
 var dd108 = Number(cc108).toLocaleString('en');
 $("#id_VeqTZDcxwz_108").val(dd108);
 }
if (isNaN(cc109)) {$("#id_VeqTZDcxwz_109").val(null)}
 else {
 var dd109 = Number(cc109).toLocaleString('en');
 $("#id_VeqTZDcxwz_109").val(dd109);
 }
if (isNaN(cc110)) {$("#id_VeqTZDcxwz_110").val(null)}
 else {
 var dd110 = Number(cc110).toLocaleString('en');
 $("#id_VeqTZDcxwz_110").val(dd110);
 }
if (isNaN(cc111)) {$("#id_VeqTZDcxwz_111").val(null)}
 else {
 var dd111 = Number(cc111).toLocaleString('en');
 $("#id_VeqTZDcxwz_111").val(dd111);
 }


if (isNaN(c112)) {$("#id_VeqTZDcxwz_112").val(null)}
 else {
 var d112 = Number(c112).toLocaleString('en');
 $("#id_VeqTZDcxwz_112").val(d112);
 }
if (isNaN(c113)) {$("#id_VeqTZDcxwz_113").val(null)}
 else {
 var d113 = Number(c113).toLocaleString('en');
 $("#id_VeqTZDcxwz_113").val(d113);
 }
if (isNaN(c114)) {$("#id_VeqTZDcxwz_114").val(null)}
 else {
 var d114 = Number(c114).toLocaleString('en');
 $("#id_VeqTZDcxwz_114").val(d114);
 }
if (isNaN(c115)) {$("#id_VeqTZDcxwz_115").val(null)}
 else {
 var d115 = Number(c115).toLocaleString('en');
 $("#id_VeqTZDcxwz_115").val(d115);
 }

    
// return values to homes

if (isNaN(c4)) {$("#id_VeqTZDcxwz_4").val(null)}
 else {
 var d4 = Number(c4).toLocaleString('en');
 $("#id_VeqTZDcxwz_4").val(d4);
 }
if (isNaN(c5)) {$("#id_VeqTZDcxwz_5").val(null)}
 else {
 var d5 = Number(c5).toLocaleString('en');
 $("#id_VeqTZDcxwz_5").val(d5);
 }
if (isNaN(c6)) {$("#id_VeqTZDcxwz_6").val(null)}
 else {
 var d6 = Number(c6).toLocaleString('en');
 $("#id_VeqTZDcxwz_6").val(d6);
 }
if (isNaN(c7)) {$("#id_VeqTZDcxwz_7").val(null)}
 else {
 var d7 = Number(c7).toLocaleString('en');
 $("#id_VeqTZDcxwz_7").val(d7);
 }
if (isNaN(c8)) {$("#id_VeqTZDcxwz_8").val(null)}
 else {
 var d8 = Number(c8).toLocaleString('en');
 $("#id_VeqTZDcxwz_8").val(d8);
 }
if (isNaN(c9)) {$("#id_VeqTZDcxwz_9").val(null)}
 else {
 var d9 = Number(c9).toLocaleString('en');
 $("#id_VeqTZDcxwz_9").val(d9);
 }
if (isNaN(c10)) {$("#id_VeqTZDcxwz_10").val(null)}
 else {
 var d10 = Number(c10).toLocaleString('en');
 $("#id_VeqTZDcxwz_10").val(d10);
 }
if (isNaN(c11)) {$("#id_VeqTZDcxwz_11").val(null)}
 else {
 var d11 = Number(c11).toLocaleString('en');
 $("#id_VeqTZDcxwz_11").val(d11);
 }
if (isNaN(c12)) {$("#id_VeqTZDcxwz_12").val(null)}
 else {
 var d12 = Number(c12).toLocaleString('en');
 $("#id_VeqTZDcxwz_12").val(d12);
 }
if (isNaN(c13)) {$("#id_VeqTZDcxwz_13").val(null)}
 else {
 var d13 = Number(c13).toLocaleString('en');
 $("#id_VeqTZDcxwz_13").val(d13);
 }
if (isNaN(c14)) {$("#id_VeqTZDcxwz_14").val(null)}
 else {
 var d14 = Number(c14).toLocaleString('en');
 $("#id_VeqTZDcxwz_14").val(d14);
 }
if (isNaN(c15)) {$("#id_VeqTZDcxwz_15").val(null)}
 else {
 var d15 = Number(c15).toLocaleString('en');
 $("#id_VeqTZDcxwz_15").val(d15);
 }
if (isNaN(c24)) {$("#id_VeqTZDcxwz_24").val(null)}
 else {
 var d24 = Number(c24).toLocaleString('en');
 $("#id_VeqTZDcxwz_24").val(d24);
 }
if (isNaN(c25)) {$("#id_VeqTZDcxwz_25").val(null)}
 else {
 var d25 = Number(c25).toLocaleString('en');
 $("#id_VeqTZDcxwz_25").val(d25);
 }
if (isNaN(c26)) {$("#id_VeqTZDcxwz_26").val(null)}
 else {
 var d26 = Number(c26).toLocaleString('en');
 $("#id_VeqTZDcxwz_26").val(d26);
 }
if (isNaN(c27)) {$("#id_VeqTZDcxwz_27").val(null)}
 else {
 var d27 = Number(c27).toLocaleString('en');
 $("#id_VeqTZDcxwz_27").val(d27);
 }
if (isNaN(c28)) {$("#id_VeqTZDcxwz_28").val(null)}
 else {
 var d28 = Number(c28).toLocaleString('en');
 $("#id_VeqTZDcxwz_28").val(d28);
 }
if (isNaN(c29)) {$("#id_VeqTZDcxwz_29").val(null)}
 else {
 var d29 = Number(c29).toLocaleString('en');
 $("#id_VeqTZDcxwz_29").val(d29);
 }
if (isNaN(c30)) {$("#id_VeqTZDcxwz_30").val(null)}
 else {
 var d30 = Number(c30).toLocaleString('en');
 $("#id_VeqTZDcxwz_30").val(d30);
 }
if (isNaN(c31)) {$("#id_VeqTZDcxwz_31").val(null)}
 else {
 var d31 = Number(c31).toLocaleString('en');
 $("#id_VeqTZDcxwz_31").val(d31);
 }
if (isNaN(c32)) {$("#id_VeqTZDcxwz_32").val(null)}
 else {
 var d32 = Number(c32).toLocaleString('en');
 $("#id_VeqTZDcxwz_32").val(d32);
 }
if (isNaN(c33)) {$("#id_VeqTZDcxwz_33").val(null)}
 else {
 var d33 = Number(c33).toLocaleString('en');
 $("#id_VeqTZDcxwz_33").val(d33);
 }
if (isNaN(c34)) {$("#id_VeqTZDcxwz_34").val(null)}
 else {
 var d34 = Number(c34).toLocaleString('en');
 $("#id_VeqTZDcxwz_34").val(d34);
 }
if (isNaN(c35)) {$("#id_VeqTZDcxwz_35").val(null)}
 else {
 var d35 = Number(c35).toLocaleString('en');
 $("#id_VeqTZDcxwz_35").val(d35);
 }
if (isNaN(c40)) {$("#id_VeqTZDcxwz_40").val(null)}
 else {
 var d40 = Number(c40).toLocaleString('en');
 $("#id_VeqTZDcxwz_40").val(d40);
 }
if (isNaN(c41)) {$("#id_VeqTZDcxwz_41").val(null)}
 else {
 var d41 = Number(c41).toLocaleString('en');
 $("#id_VeqTZDcxwz_41").val(d41);
 }
if (isNaN(c42)) {$("#id_VeqTZDcxwz_42").val(null)}
 else {
 var d42 = Number(c42).toLocaleString('en');
 $("#id_VeqTZDcxwz_42").val(d42);
 }
if (isNaN(c43)) {$("#id_VeqTZDcxwz_43").val(null)}
 else {
 var d43 = Number(c43).toLocaleString('en');
 $("#id_VeqTZDcxwz_43").val(d43);
 }
if (isNaN(c44)) {$("#id_VeqTZDcxwz_44").val(null)}
 else {
 var d44 = Number(c44).toLocaleString('en');
 $("#id_VeqTZDcxwz_44").val(d44);
 }
if (isNaN(c45)) {$("#id_VeqTZDcxwz_45").val(null)}
 else {
 var d45 = Number(c45).toLocaleString('en');
 $("#id_VeqTZDcxwz_45").val(d45);
 }
if (isNaN(c46)) {$("#id_VeqTZDcxwz_46").val(null)}
 else {
 var d46 = Number(c46).toLocaleString('en');
 $("#id_VeqTZDcxwz_46").val(d46);
 }
if (isNaN(c47)) {$("#id_VeqTZDcxwz_47").val(null)}
 else {
 var d47 = Number(c47).toLocaleString('en');
 $("#id_VeqTZDcxwz_47").val(d47);
 }
if (isNaN(c48)) {$("#id_VeqTZDcxwz_48").val(null)}
 else {
 var d48 = Number(c48).toLocaleString('en');
 $("#id_VeqTZDcxwz_48").val(d48);
 }
if (isNaN(c49)) {$("#id_VeqTZDcxwz_49").val(null)}
 else {
 var d49 = Number(c49).toLocaleString('en');
 $("#id_VeqTZDcxwz_49").val(d49);
 }
if (isNaN(c50)) {$("#id_VeqTZDcxwz_50").val(null)}
 else {
 var d50 = Number(c50).toLocaleString('en');
 $("#id_VeqTZDcxwz_50").val(d50);
 }
if (isNaN(c51)) {$("#id_VeqTZDcxwz_51").val(null)}
 else {
 var d51 = Number(c51).toLocaleString('en');
 $("#id_VeqTZDcxwz_51").val(d51);
 }
if (isNaN(c52)) {$("#id_VeqTZDcxwz_52").val(null)}
 else {
 var d52 = Number(c52).toLocaleString('en');
 $("#id_VeqTZDcxwz_52").val(d52);
 }
if (isNaN(c53)) {$("#id_VeqTZDcxwz_53").val(null)}
 else {
 var d53 = Number(c53).toLocaleString('en');
 $("#id_VeqTZDcxwz_53").val(d53);
 }
if (isNaN(c54)) {$("#id_VeqTZDcxwz_54").val(null)}
 else {
 var d54 = Number(c54).toLocaleString('en');
 $("#id_VeqTZDcxwz_54").val(d54);
 }
if (isNaN(c55)) {$("#id_VeqTZDcxwz_55").val(null)}
 else {
 var d55 = Number(c55).toLocaleString('en');
 $("#id_VeqTZDcxwz_55").val(d55);
 }
if (isNaN(c60)) {$("#id_VeqTZDcxwz_60").val(null)}
 else {
 var d60 = Number(c60).toLocaleString('en');
 $("#id_VeqTZDcxwz_60").val(d60);
 }
if (isNaN(c61)) {$("#id_VeqTZDcxwz_61").val(null)}
 else {
 var d61 = Number(c61).toLocaleString('en');
 $("#id_VeqTZDcxwz_61").val(d61);
 }
if (isNaN(c62)) {$("#id_VeqTZDcxwz_62").val(null)}
 else {
 var d62 = Number(c62).toLocaleString('en');
 $("#id_VeqTZDcxwz_62").val(d62);
 }
if (isNaN(c63)) {$("#id_VeqTZDcxwz_63").val(null)}
 else {
 var d63 = Number(c63).toLocaleString('en');
 $("#id_VeqTZDcxwz_63").val(d63);
 }
if (isNaN(c64)) {$("#id_VeqTZDcxwz_64").val(null)}
 else {
 var d64 = Number(c64).toLocaleString('en');
 $("#id_VeqTZDcxwz_64").val(d64);
 }
if (isNaN(c65)) {$("#id_VeqTZDcxwz_65").val(null)}
 else {
 var d65 = Number(c65).toLocaleString('en');
 $("#id_VeqTZDcxwz_65").val(d65);
 }
if (isNaN(c66)) {$("#id_VeqTZDcxwz_66").val(null)}
 else {
 var d66 = Number(c66).toLocaleString('en');
 $("#id_VeqTZDcxwz_66").val(d66);
 }
if (isNaN(c67)) {$("#id_VeqTZDcxwz_67").val(null)}
 else {
 var d67 = Number(c67).toLocaleString('en');
 $("#id_VeqTZDcxwz_67").val(d67);
 }
if (isNaN(c76)) {$("#id_VeqTZDcxwz_76").val(null)}
 else {
 var d76 = Number(c76).toLocaleString('en');
 $("#id_VeqTZDcxwz_76").val(d76);
 }
if (isNaN(c77)) {$("#id_VeqTZDcxwz_77").val(null)}
 else {
 var d77 = Number(c77).toLocaleString('en');
 $("#id_VeqTZDcxwz_77").val(d77);
 }
if (isNaN(c78)) {$("#id_VeqTZDcxwz_78").val(null)}
 else {
 var d78 = Number(c78).toLocaleString('en');
 $("#id_VeqTZDcxwz_78").val(d78);
 }
if (isNaN(c79)) {$("#id_VeqTZDcxwz_79").val(null)}
 else {
 var d79 = Number(c79).toLocaleString('en');
 $("#id_VeqTZDcxwz_79").val(d79);
 }
if (isNaN(c80)) {$("#id_VeqTZDcxwz_80").val(null)}
 else {
 var d80 = Number(c80).toLocaleString('en');
 $("#id_VeqTZDcxwz_80").val(d80);
 }
if (isNaN(c81)) {$("#id_VeqTZDcxwz_81").val(null)}
 else {
 var d81 = Number(c81).toLocaleString('en');
 $("#id_VeqTZDcxwz_81").val(d81);
 }
if (isNaN(c82)) {$("#id_VeqTZDcxwz_82").val(null)}
 else {
 var d82 = Number(c82).toLocaleString('en');
 $("#id_VeqTZDcxwz_82").val(d82);
 }
if (isNaN(c83)) {$("#id_VeqTZDcxwz_83").val(null)}
 else {
 var d83 = Number(c83).toLocaleString('en');
 $("#id_VeqTZDcxwz_83").val(d83);
 }
if (isNaN(c88)) {$("#id_VeqTZDcxwz_88").val(null)}
 else {
 var d88 = Number(c88).toLocaleString('en');
 $("#id_VeqTZDcxwz_88").val(d88);
 }
if (isNaN(c89)) {$("#id_VeqTZDcxwz_89").val(null)}
 else {
 var d89 = Number(c89).toLocaleString('en');
 $("#id_VeqTZDcxwz_89").val(d89);
 }
if (isNaN(c90)) {$("#id_VeqTZDcxwz_90").val(null)}
 else {
 var d90 = Number(c90).toLocaleString('en');
 $("#id_VeqTZDcxwz_90").val(d90);
 }
if (isNaN(c91)) {$("#id_VeqTZDcxwz_91").val(null)}
 else {
 var d91 = Number(c91).toLocaleString('en');
 $("#id_VeqTZDcxwz_91").val(d91);
 }
if (isNaN(c92)) {$("#id_VeqTZDcxwz_92").val(null)}
 else {
 var d92 = Number(c92).toLocaleString('en');
 $("#id_VeqTZDcxwz_92").val(d92);
 }
if (isNaN(c93)) {$("#id_VeqTZDcxwz_93").val(null)}
 else {
 var d93 = Number(c93).toLocaleString('en');
 $("#id_VeqTZDcxwz_93").val(d93);
 }
if (isNaN(c94)) {$("#id_VeqTZDcxwz_94").val(null)}
 else {
 var d94 = Number(c94).toLocaleString('en');
 $("#id_VeqTZDcxwz_94").val(d94);
 }
if (isNaN(c95)) {$("#id_VeqTZDcxwz_95").val(null)}
 else {
 var d95 = Number(c95).toLocaleString('en');
 $("#id_VeqTZDcxwz_95").val(d95);
 }
if (isNaN(c96)) {$("#id_VeqTZDcxwz_96").val(null)}
 else {
 var d96 = Number(c96).toLocaleString('en');
 $("#id_VeqTZDcxwz_96").val(d96);
 }
if (isNaN(c97)) {$("#id_VeqTZDcxwz_97").val(null)}
 else {
 var d97 = Number(c97).toLocaleString('en');
 $("#id_VeqTZDcxwz_97").val(d97);
 }
if (isNaN(c98)) {$("#id_VeqTZDcxwz_98").val(null)}
 else {
 var d98 = Number(c98).toLocaleString('en');
 $("#id_VeqTZDcxwz_98").val(d98);
 }
if (isNaN(c99)) {$("#id_VeqTZDcxwz_99").val(null)}
 else {
 var d99 = Number(c99).toLocaleString('en');
 $("#id_VeqTZDcxwz_99").val(d99);
 }
if (isNaN(c100)) {$("#id_VeqTZDcxwz_100").val(null)}
 else {
 var d100 = Number(c100).toLocaleString('en');
 $("#id_VeqTZDcxwz_100").val(d100);
 }
if (isNaN(c101)) {$("#id_VeqTZDcxwz_101").val(null)}
 else {
 var d101 = Number(c101).toLocaleString('en');
 $("#id_VeqTZDcxwz_101").val(d101);
 }
if (isNaN(c102)) {$("#id_VeqTZDcxwz_102").val(null)}
 else {
 var d102 = Number(c102).toLocaleString('en');
 $("#id_VeqTZDcxwz_102").val(d102);
 }
if (isNaN(c103)) {$("#id_VeqTZDcxwz_103").val(null)}
 else {
 var d103 = Number(c103).toLocaleString('en');
 $("#id_VeqTZDcxwz_103").val(d103);
 }
if (isNaN(c104)) {$("#id_VeqTZDcxwz_104").val(null)}
 else {
 var d104 = Number(c104).toLocaleString('en');
 $("#id_VeqTZDcxwz_104").val(d104);
 }
if (isNaN(c105)) {$("#id_VeqTZDcxwz_105").val(null)}
 else {
 var d105 = Number(c105).toLocaleString('en');
 $("#id_VeqTZDcxwz_105").val(d105);
 }
if (isNaN(c106)) {$("#id_VeqTZDcxwz_106").val(null)}
 else {
 var d106 = Number(c106).toLocaleString('en');
 $("#id_VeqTZDcxwz_106").val(d106);
 }
if (isNaN(c107)) {$("#id_VeqTZDcxwz_107").val(null)}
 else {
 var d107 = Number(c107).toLocaleString('en');
 $("#id_VeqTZDcxwz_107").val(d107);
 }


if (isNaN(cc1)) {$("#id_aiyzcHuNf0_1").val(null)}
 else {
 var dd1 = Number(cc1).toLocaleString('en');
 $("#id_aiyzcHuNf0_1").val(dd1);
 }
if (isNaN(cc2)) {$("#id_aiyzcHuNf0_2").val(null)}
 else {
 var dd2 = Number(cc2).toLocaleString('en');
 $("#id_aiyzcHuNf0_2").val(dd2);
 }
if (isNaN(cc3)) {$("#id_aiyzcHuNf0_3").val(null)}
 else {
 var dd3 = Number(cc3).toLocaleString('en');
 $("#id_aiyzcHuNf0_3").val(dd3);
 }
if (isNaN(cc4)) {$("#id_aiyzcHuNf0_4").val(null)}
 else {
 var dd4 = Number(cc4).toLocaleString('en');
 $("#id_aiyzcHuNf0_4").val(dd4);
 }

if (isNaN(cc6)) {$("#id_aiyzcHuNf0_6").val(null)}
 else {
 var dd6 = Number(cc6).toLocaleString('en');
 $("#id_aiyzcHuNf0_6").val(dd6);
 }
if (isNaN(cc7)) {$("#id_aiyzcHuNf0_7").val(null)}
 else {
 var dd7 = Number(cc7).toLocaleString('en');
 $("#id_aiyzcHuNf0_7").val(dd7);
 }
if (isNaN(cc8)) {$("#id_aiyzcHuNf0_8").val(null)}
 else {
 var dd8 = Number(cc8).toLocaleString('en');
 $("#id_aiyzcHuNf0_8").val(dd8);
 }
if (isNaN(cc9)) {$("#id_aiyzcHuNf0_9").val(null)}
 else {
 var dd9 = Number(cc9).toLocaleString('en');
 $("#id_aiyzcHuNf0_9").val(dd9);
 }

if (isNaN(cc11)) {$("#id_aiyzcHuNf0_11").val(null)}
 else {
 var dd11 = Number(cc11).toLocaleString('en');
 $("#id_aiyzcHuNf0_11").val(dd11);
 }
if (isNaN(cc12)) {$("#id_aiyzcHuNf0_12").val(null)}
 else {
 var dd12 = Number(cc12).toLocaleString('en');
 $("#id_aiyzcHuNf0_12").val(dd12);
 }
if (isNaN(cc13)) {$("#id_aiyzcHuNf0_13").val(null)}
 else {
 var dd13 = Number(cc13).toLocaleString('en');
 $("#id_aiyzcHuNf0_13").val(dd13);
 }
if (isNaN(cc14)) {$("#id_aiyzcHuNf0_14").val(null)}
 else {
 var dd14 = Number(cc14).toLocaleString('en');
 $("#id_aiyzcHuNf0_14").val(dd14);
 }

if (isNaN(cc16)) {$("#id_aiyzcHuNf0_16").val(null)}
 else {
 var dd16 = Number(cc16).toLocaleString('en');
 $("#id_aiyzcHuNf0_16").val(dd16);
 }
if (isNaN(cc17)) {$("#id_aiyzcHuNf0_17").val(null)}
 else {
 var dd17 = Number(cc17).toLocaleString('en');
 $("#id_aiyzcHuNf0_17").val(dd17);
 }
if (isNaN(cc18)) {$("#id_aiyzcHuNf0_18").val(null)}
 else {
 var dd18 = Number(cc18).toLocaleString('en');
 $("#id_aiyzcHuNf0_18").val(dd18);
 }
if (isNaN(cc19)) {$("#id_aiyzcHuNf0_19").val(null)}
 else {
 var dd19 = Number(cc19).toLocaleString('en');
 $("#id_aiyzcHuNf0_19").val(dd19);
 }

if (isNaN(cc21)) {$("#id_aiyzcHuNf0_21").val(null)}
 else {
 var dd21 = Number(cc21).toLocaleString('en');
 $("#id_aiyzcHuNf0_21").val(dd21);
 }
if (isNaN(cc22)) {$("#id_aiyzcHuNf0_22").val(null)}
 else {
 var dd22 = Number(cc22).toLocaleString('en');
 $("#id_aiyzcHuNf0_22").val(dd22);
 }
if (isNaN(cc23)) {$("#id_aiyzcHuNf0_23").val(null)}
 else {
 var dd23 = Number(cc23).toLocaleString('en');
 $("#id_aiyzcHuNf0_23").val(dd23);
 }
if (isNaN(cc24)) {$("#id_aiyzcHuNf0_24").val(null)}
 else {
 var dd24 = Number(cc24).toLocaleString('en');
 $("#id_aiyzcHuNf0_24").val(dd24);
 }

if (isNaN(cc26)) {$("#id_aiyzcHuNf0_26").val(null)}
 else {
 var dd26 = Number(cc26).toLocaleString('en');
 $("#id_aiyzcHuNf0_26").val(dd26);
 }
if (isNaN(cc27)) {$("#id_aiyzcHuNf0_27").val(null)}
 else {
 var dd27 = Number(cc27).toLocaleString('en');
 $("#id_aiyzcHuNf0_27").val(dd27);
 }
if (isNaN(cc28)) {$("#id_aiyzcHuNf0_28").val(null)}
 else {
 var dd28 = Number(cc28).toLocaleString('en');
 $("#id_aiyzcHuNf0_28").val(dd28);
 }
if (isNaN(cc29)) {$("#id_aiyzcHuNf0_29").val(null)}
 else {
 var dd29 = Number(cc29).toLocaleString('en');
 $("#id_aiyzcHuNf0_29").val(dd29);
 }

if (isNaN(cc31)) {$("#id_aiyzcHuNf0_31").val(null)}
 else {
 var dd31 = Number(cc31).toLocaleString('en');
 $("#id_aiyzcHuNf0_31").val(dd31);
 }
if (isNaN(cc32)) {$("#id_aiyzcHuNf0_32").val(null)}
 else {
 var dd32 = Number(cc32).toLocaleString('en');
 $("#id_aiyzcHuNf0_32").val(dd32);
 }
if (isNaN(cc33)) {$("#id_aiyzcHuNf0_33").val(null)}
 else {
 var dd33 = Number(cc33).toLocaleString('en');
 $("#id_aiyzcHuNf0_33").val(dd33);
 }
if (isNaN(cc34)) {$("#id_aiyzcHuNf0_34").val(null)}
 else {
 var dd34 = Number(cc34).toLocaleString('en');
 $("#id_aiyzcHuNf0_34").val(dd34);
 }

if (isNaN(cc36)) {$("#id_aiyzcHuNf0_36").val(null)}
 else {
 var dd36 = Number(cc36).toLocaleString('en');
 $("#id_aiyzcHuNf0_36").val(dd36);
 }
if (isNaN(cc37)) {$("#id_aiyzcHuNf0_37").val(null)}
 else {
 var dd37 = Number(cc37).toLocaleString('en');
 $("#id_aiyzcHuNf0_37").val(dd37);
 }
if (isNaN(cc38)) {$("#id_aiyzcHuNf0_38").val(null)}
 else {
 var dd38 = Number(cc38).toLocaleString('en');
 $("#id_aiyzcHuNf0_38").val(dd38);
 }
if (isNaN(cc39)) {$("#id_aiyzcHuNf0_39").val(null)}
 else {
 var dd39 = Number(cc39).toLocaleString('en');
 $("#id_aiyzcHuNf0_39").val(dd39);
 }



    
});

// blur function has ended








});


// document ready function has ended
