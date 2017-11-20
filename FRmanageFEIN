$(function()  {

//can use this in combination with default text is gray, not included here
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
 
});
