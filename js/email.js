//Email Integration
function SendMail(){
	var params = {
		from_name : document.querySelector("fullname").value,
		email_id : document.querySelector("email").value,
		message : document.querySelector("message").value
	};
	emailjs.send("service_6st6u22","template_lgd15wg",params).then(res=>{
		alert("Email sent Successfully!");
	})
}