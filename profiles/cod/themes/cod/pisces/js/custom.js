jQuery(document).ready(function($){
  
  $(".ticket-field-formatter-view-form--2").submit(function( event ) {
    
    var x = 0;
	var y = 0; 

 $(".ticket-field-formatter-view-form--2 .form-select").each(function()
   {
		   
    if($(this).val() > 0) {
	   x++; 
	} else {
		 y++; 		 
	 }
	 
	
	 
   });
   
    if(x == 1) {
		 
	 } else if(x == 0) {
		 alert("Please select any one of ticket registration and click Register");
		 event.preventDefault();
	 } else {
		 alert("Please select only one registration and submit");
		 event.preventDefault();
	 }
  
  
  
});
  
  
});