function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "teamas458@gmail.com"
	Password : "themoonandthestar",
	To : 'atisharamruttun28@gmail.com',
	From : "teamas458@gmail.com>",
	Subject : "Comfirmation mail",
	Body : "<email bo hello >",
	}).then(
		message => alert("mail sent successfully")
	);
}