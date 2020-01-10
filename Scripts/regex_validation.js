function validatePassword()
{
	var password = document.getElementById("password");
	//console.log(password.value);
	var numberRegEx = new RegExp("[0-9]"); //check for numbers
	var lowerCaseRegEx = new RegExp("[A-Z]");
	var upperCaseRexEx = new RegExp("[a-z]");

	return (numberRegEx.test(password.value) && lowerCaseRegEx.test(password.value) && upperCaseRexEx.test(password.value));
}