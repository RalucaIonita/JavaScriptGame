function createForm()
{

	var form = document.createElement("form");
	form.style.position = "absolute";
	form.style.zIndex = "9";
	form.style.display = "flex";
	form.style.justifyContent = "center";
	form.style.flexDirection = "column";

	document.body.appendChild(form);


	//text
	var pt = document.createElement("p");
	pt.innerHTML = "Text:";
	form.appendChild(pt);

	var text_field = document.createElement("input");
	text_field.type = "text";
	text_field.placeholder = "Enter some text";
	form.appendChild(text_field);


	//email
	var pe = document.createElement("p");
	pe.innerHTML = "Email:";
	form.appendChild(pe);

	var email_field = document.createElement("input");
	email_field.type = "email";
	email_field.placeholder = "Enter email";
	form.appendChild(email_field);


	//password
	var pp = document.createElement("p");
	pp.innerHTML = "Password:";
	form.appendChild(pp);	

	var password_field = document.createElement("input");
	password_field.type = "password";
	password_field.placeholder = "Enter password";
	form.appendChild(password_field);


	//select
	var ps = document.createElement("p");
	ps.innerHTML = "Select the level:";
	form.appendChild(ps);

	var select_field = document.createElement("select");
	select_field.name = "This thing";
	select_field.placeholder = "Choices";
	form.appendChild(select_field);

	var option_1 = document.createElement("option");
	option_1.value = "First option";
	option_1.innerHTML = "First option";
	select_field.appendChild(option_1);

	var option_2 = document.createElement("option");
	option_2.value = "Second option";
	option_2.innerHTML = "Second option";
	select_field.appendChild(option_2);	

	var option_3 = document.createElement("option");
	option_3.value = "Third option";
	option_3.innerHTML = "Third option";
	select_field.appendChild(option_3);


	//checkbox
	var divc = document.createElement("div");
	form.appendChild(divc);

	var pc = document.createElement("p");
	pc.innerHTML = "Are you a bot?";
	divc.appendChild(pc);

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = "checkbox";
	checkbox.value = "checkbox";
	divc.appendChild(checkbox);

	var checkboxLabel = document.createElement("label");
	checkboxLabel.for = "checkbox";
	checkboxLabel.innerHTML = "Maybe."
	divc.appendChild(checkboxLabel);


	//radio button
	var pr = document.createElement("p");
	pr.innerHTML = "Do you like bananas?";
	form.appendChild(pr);

	var divr = document.createElement("div");
	form.appendChild(divr);
	var radio1 = document.createElement("input");
	radio1.type = "radio";
	radio1.name = "radio";
	radio1.id = "radio1";
	radio1.value = "This thingy";
	divr.appendChild(radio1);

	var radioLabel1 = document.createElement("label");
	radioLabel1.for = "radio";
	radioLabel1.innerHTML = "Yes.";
	divr.appendChild(radioLabel1);

	//
	var radio2 = document.createElement("input");
	radio2.type = "radio";
	radio2.name = "radio";
	radio2.id = "radio2";
	radio2.value = "This thingy";
	divr.appendChild(radio2);

	var radioLabel2 = document.createElement("label");
	radioLabel2.for = "radio2";
	radioLabel2.innerHTML = "No.";
	divr.appendChild(radioLabel2);



	//range

	var prg = document.createElement("p");
	prg.innerHTML = "How likely are you to not kill me if the game sucks?";
	form.appendChild(prg);

	var range = document.createElement("input");
	range.type = "range";
	range.name = "range";
	range.min = "0";
	range.max = "100";
	form.appendChild(range);


	//submit button
	var br = document.createElement("br");
	form.appendChild(br);

	var submit = document.createElement("button");
	submit.innerHTML = "Submit";
	form.appendChild(submit);

	var br = document.createElement("br");
	form.appendChild(br);
	



}



