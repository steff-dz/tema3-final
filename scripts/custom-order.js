document.body.insertBefore(nav, document.body.children[0]);

const main = document.querySelector('main');
const form = document.querySelector('form');
const sections = document.querySelectorAll('section');
const hammers = document.querySelectorAll('.fa-hammer');
const buttons = document.querySelectorAll('button');
const progressContainer = document.querySelector('#progressContainer');

//INPUT VARIABLES FOR FIRST FORM PAGE-----------
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const locationInput = document.querySelector('#location');

//INPUT VARIABLES FOR SECOND PAGE--------------
const productType = document.querySelector('#productType');
const materielType = document.querySelector('#materielType');
const woodType = document.querySelector('#woodType');
const finishType = document.querySelector('#finishType');

//INPUT VARIABLES FOR THIRD PAGE------------------
const messageBox = document.querySelector('#messageBox');

//BELOW ARE MY EVENT LISTENERS FOR THE BUTTONS------
buttons[0].addEventListener('click', function() {
	dropHammer(enterForm);
});

buttons[1].addEventListener('click', function(event) {
	event.preventDefault();
	dropHammer(secondPage);
});

buttons[2].addEventListener('click', function(event) {
	event.preventDefault();
	dropHammer(thirdPage);
});

buttons[3].addEventListener('click', function(event) {
	event.preventDefault();
	dropHammer(finalPage);
});

//BELOW ARE ALL MY FUNCTIONS

//This function removes the initial elements, calls the progressbar function, pulls in the first section/first form page.
function enterForm() {
	main.style.display = 'none';
	progressContainer.style.display = 'flex';

	for (hammer of hammers) {
		hammer.style.animationName = 'hammerUp';
	}

	// progressContainer.children[0].style.backgroundColor = 'lightgreen';
	form.style.right = '0';
	sections[0].style.visibility = 'visible';
	sections[0].style.position = 'absolute';
	sections[0].style.top = '5rem';
	sections[0].style.right = '-5rem';
	sections[0].style.animationName = 'slideFormPage';
}

//This is the drop hammer animation
function dropHammer(cb) {
	for (hammer of hammers) {
		hammer.style.animationName = 'hammerDown';
	}
	return setTimeout(cb, 800);
}

//This is the function to bring in the second page.
function secondPage() {
	sections[0].style.visibility = 'hidden';
	// progressContainer.children[1].style.backgroundColor = 'lightgreen';
	for (hammer of hammers) {
		hammer.style.animationName = 'hammerUp';
	}
	sections[1].style.visibility = 'visible';
	sections[1].style.position = 'absolute';
	sections[1].style.top = '5rem';
	sections[1].style.right = '-5rem';

	sections[1].style.animationName = 'slideFormPage';
}

//function for the third form page
function thirdPage() {
	sections[1].style.visibility = 'hidden';
	// progressContainer.children[2].style.backgroundColor = 'lightgreen';
	for (hammer of hammers) {
		hammer.style.animationName = 'hammerUp';
	}
	sections[2].style.visibility = 'visible';
	sections[2].style.position = 'absolute';
	sections[2].style.top = '5rem';
	sections[2].style.right = '-5rem';

	sections[2].style.animationName = 'slideFormPage';
}

//Below is the function that prints the order review page/final page
function finalPage() {
	// progressContainer.style.display = 'none';
	//form.style.overflowX = '';
	form.style.display = 'none';
	progressContainer.style.display = 'none';
	const radioValue = document.querySelector('input[name=radio]:checked').value;

	document.body.innerHTML += `
	<h2 class="confirmationMessage">Thank you for your interest!</h2>
	<div id="orderReview"><ul>
	<li><b>Name:</b> ${firstName.value} ${lastName.value}</li>
	<li><b>Email:</b> ${email.value}</li>
	<li><b>Location:</b> ${locationInput.value}</li>
	<li><b>Desired Product:</b> ${productType.value}</li>
	<li><b>Materiel Type:</b> ${materielType.value}</li>
	<li><b>Wood Type:</b> ${woodType.value}</li>
	<li><b>Finish:</b> ${finishType.value}</li>
	<li><b>Budget:</b> ${radioValue}</li>
	<li><b>Message:</b> ${messageBox.value}</li>
	</ul></div>
	<h2 class="confirmationMessage">I'll get in touch with you soon! </h2>
	`;
}
