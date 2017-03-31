/*
Finished by: Form validated by Chao Feng
             Cookies created by Zun Dai
*/
"use strict";
var nameRegex = /^[A-Z][a-zA-Z]{1,15}$/;
var phoneRegex = /^[0-9]{10}$/;
var postalRegex = /^[A-Za-z]\d[A-Za-z]\s\d[-a-zA-Z]\d$/;
var emailRegex = /^[a-zA-Z0-9]+(\.[_a-zA-Z0-9\-]+)*\@[a-zA-Z]*(\.[a-zA-Z\-]+)*(\.[a-z]{2,4})$/;



function ValidateFName(){
	var firstName = document.getElementById("fnameinput");
	var fNameErr = document.getElementById("fnameErr");
		
	if(!nameRegex.test(firstName.value)){
		//alert("inside name validation");		
		fNameErr.innerHTML = "*First name should begin with UPPER case";
		fNameErr.style.display = "block";
		firstName.value="";
		firstName.style.background="rgb(255,233,233)";		
		return false;
	}else{
		fNameErr.innerHTML = "";
		fNameErr.style.display = "none";	
	}
}

function ValidateLName(){
	var lastName = document.getElementById("lnameinput");
	var lNameErr = document.getElementById("lnameErr");
	
	if(!nameRegex.test(lastName.value)){
		lNameErr.innerHTML = "*Last name should begin with UPPER case";
		lNameErr.style.display = "block";
		lastName.value = "";
		lastName.style.background="rgb(255,233,233)";
		return false;
	}else {
		lNameErr.innerHTML = "";
		lNameErr.style.display = "none";
		
	}
}

function ValidatePhone(){
	//alert("Inside phone validate");
	
	var telePhone = document.getElementById("phoneinput");
	var PhoneErr = document.getElementById("tele");
	
	if(!phoneRegex.test(telePhone.value)){
		PhoneErr.innerHTML = "*Phone number should be only 10 NUMBERS with no spaces";
		PhoneErr.style.display = "block";
		telePhone.value="";
		telePhone.style.background="rgb(255,233,233)";
		return false;
	}else{
		PhoneErr.innerHTML="";
		PhoneErr.style.display="none";
	}
}

function ValidatePostal(){
	var postal = document.getElementById("postalinput");
	var PostalErr = document.getElementById("postalErr");
	
	if(!postalRegex.test(postal.value)){
			PostalErr.innerHTML = "*Postal code must be formatted as follows A#A #A#";
			PostalErr.style.display = "block";
			postal.value="";
			postal.style.background="rgb(255,233,233)";
			return false;
		}

	else {
		PostalErr.innerHTML="";
		PostalErr.style.display="none";
	}
}

function ValidateEmail(){
	
	var email = document.getElementById("emailinput");
	var EmailErr = document.getElementById("emailErr");
	
	if(!emailRegex.test(email.value)){
		//alert("inside email");
		
		EmailErr.innerHTML = "*Please enter valid email address";
		EmailErr.style.display = "block";
		email.value="";
		email.style.background="rgb(255,233,233)";
		return false;
	}else{
		EmailErr.innerHTML="";
		EmailErr.style.display="none";
	}
}

//cookies
function processStorage() {
   if (document.getElementById("rememberinput").checked) {
      sessionStorage.username = document.getElementById("fnameinput").value;
   }
}

function populateInfo() {
   if (sessionStorage.username) {
      document.getElementById("fnameinput").value = sessionStorage.username;
   }
}

function handleSubmit(evt) {
   if (evt.preventDefault) {
      evt.preventDefault(); // prevent form from submitting
   } else {
      evt.returnValue = false; // prevent form from submitting in IE8
   }
   processStorage();
   document.getElementsByTagName("form")[0].submit();
}

function createEventListener() {
   var loginForm = document.getElementsByTagName("form")[0];
   if (loginForm.addEventListener) {
     loginForm.addEventListener("submit", handleSubmit, false); 
   } else if (loginForm.attachEvent)  {
     loginForm.attachEvent("onsubmit", handleSubmit);
   }
}

function setUpPage() {
   populateInfo();
   createEventListener();
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}