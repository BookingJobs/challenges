$(document).ready(function(){

  $("#contact_form").on("submit", function(event){
  
    var $name_field   = $("#contact_form input[name=name]");
    var $email_field  = $("#contact_form input[name=email]");
    var $phone_field  = $("#contact_form input[name=phone]");
    var errors        = {};
    
    if($name_field.attr("value").length <= 0) {
      errors.name = "Please enter a name";
    }

    if($phone_field.attr("value").length <= 0) {
      errors.phone = "Please enter a phone";
    }
    
    if($email_field.attr("value").length <= 0) {
      errors.email = "Please enter a email";
    }

    var errors_count = Object.keys(errors).length;
    
    if(errors_count > 0) {

      event.preventDefault();
      
      if($("#contact_form span.error_msg").length > 0) {
        
        $("#contact_form span.error_msg").remove();
        
      }
      
      Object.keys(errors).forEach(function(key) {
                
        var the_error_msg = "<span class='error_msg'>" + errors[key] + "</span>";
        
        $("#contact_form input[name=" + key + "]").parent().before(the_error_msg);
        
      });

    }
    
  });
  
});

