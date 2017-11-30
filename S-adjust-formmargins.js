$(function(){
//adjust margins to tighten form. The first path finds an element. The find function searched for something that exists within that element (for instance, an input question within a gray box). 
// finding an asterisk will select all elements contained within that element. the final piece edits the css of those elements

$('#xDaQEDqVTdH.question.section-separator.questioneven').find('*').css('margin', '0');

//ALTERNATIVE 1
//children() only applies to sub-elements ONE level down. Useful when Yes/No questions appear on the page. Content() is similar. 
$('#xxo7RAXFTdW.question.section-separator.questioneven').children().css('margin', 0);

//ALTERNATIVE 2
// this version [used in the GOS eligibility quiz] still uses Find(), but applies to more elements
$('div.columns').find('*').css('margin', '0');

// ALT for multiple choice questions
  // selects all "li" list items and adjust the margins in that group. use "px" with number to properly edit attribute. 
  $('ul').children().css('margin', '3px');
  
  
});
