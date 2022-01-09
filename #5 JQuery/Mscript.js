$("#button").click(function()
	{
		var errmessage="", check=true, em=/^([a-zA-Z0-9_.])+\@[a-zA-Z0-9]+\.com$/;
		var mail=$("#email").val();
		var nam=$("#name").val();
		var p=$("#pass").val();
		var cp=$("#cpass").val();
		var ph=$("#phone").val();
		
		if(mail=="" || nam=="" || p=="" || cp=="" || ph=="") 
			{
				errmessage+="All fields must be entered.<br>"
				check=false;
			}
			
		if(!em.test(mail))	
			{
				errmessage+="E-mail ID is invalid.<br>"
				check=false;
			}
			
		if(p!=cp)
			{
				errmessage+="The passwords don't match.<br>"
				check=false;
			}

		if(!($.isNumeric(ph)))
			{
				errmessage+="The phone number must be numeric.<br>"
				check=false;
			}
			
		if(check)
			{
				$("#error").hide();
				$("#sucbar").show();
			}
			
		else
			{
				
				$("#error").html(errmessage);
			}
			
	})