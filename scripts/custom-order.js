document.body.insertBefore(nav, document.body.children[0]);

const main = document.querySelector('main');
const form = document.querySelector('form');
const sections = document.querySelectorAll('section');
const hammers = document.querySelectorAll('.fa-hammer');
const buttons = document.querySelectorAll('button');
const progressContainer = document.querySelector('#progressContainer');
const progressBoxes = document.querySelectorAll('.progressBox');

//INPUT VARIABLES FOR FIRST FORM PAGE--------------------------------------------------
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const locationInput = document.querySelector('#location');

//INPUT VARIABLES FOR SECOND PAGE-----------------------------------------------------
const productType = document.querySelector('#productType');
const materielType = document.querySelector('#materielType');
const woodType = document.querySelector('#woodType');
const finishType = document.querySelector('#finishType');
const infoIcon = document.querySelector('#infoIcon');

//INPUT VARIABLES FOR THIRD PAGE---------------------------------------------------------
const messageBox = document.querySelector('#messageBox');
const spans = document.querySelectorAll('span');
//const radioInputs = document.querySelectorAll('input[type=radio]');
const radioInputOne = document.querySelector('#budgetOne');
const radioInputTwo = document.querySelector('#budgetTwo');
const radioInputThree = document.querySelector('#budgetThree');
const radioInputFour = document.querySelector('#budgetFour');
const radioArray = [ radioInputOne, radioInputTwo, radioInputThree, radioInputFour ];

//BELOW ARE MY EVENT LISTENERS---------------------------------------------------------

buttons.forEach((button) => {
	button.addEventListener('keyup', function(event) {
		if (event.keyCode === 9) {
			this.style.border = '3px solid black';
		}
	});
});

buttons[0].addEventListener('click', function() {
	dropHammer(enterForm);
	buttons[0].style.animationName = 'animateBtn0';
});

buttons[1].addEventListener('click', function(event) {
	event.preventDefault();
	dropHammer(secondPage);
	buttons[1].style.animationName = 'animateBtn1';
});

buttons[2].addEventListener('click', function(event) {
	event.preventDefault();
	dropHammer(thirdPage);
	buttons[2].style.animationName = 'animateBtn2';
});

buttons[3].addEventListener('click', function(event) {
	event.preventDefault();
	dropHammer(finalPage);
	buttons[3].style.animationName = 'animateBtn3';
});

spans.forEach((span) => {
	span.addEventListener('keyup', function(event) {
		if (event.keyCode === 13) {
			let budgetID = this.dataset.name;
			let radioID = radioArray.find((radio) => radio.id === budgetID);
			radioID.checked = 'true';
		}
	});
});

//BELOW ARE EVENT LISTENERS FOR THE PROGRESS BAR-----------------------------------------------------------------
progressBoxes[0].addEventListener('click', returnPageOne);
progressBoxes[1].addEventListener('click', returnPageTwo);
//BELOW ARE ALL MY FUNCTIONS-------------------------------------------------------------------

//This function removes the initial elements, colors in the first progress box, then initiates form sections for the first page.
function enterForm() {
	main.style.display = 'none';
	progressContainer.style.display = 'flex';
	progressBoxes[0].style.background = 'radial-gradient(circle, rgba(201, 149, 67, 1) 48%, rgba(148, 89, 55, 1) 90%)';

	liftHammer();

	form.style.right = '0';
	form.style.top = '0';

	sections[0].style.visibility = 'visible';
	sections[0].style.animationName = 'slideFormPage';
	buttons[1].style.transform = 'rotate(-5deg)';
}

//This is the function to bring in the second page.
function secondPage() {
	sections[0].style.visibility = 'hidden';
	progressBoxes[1].style.background = 'radial-gradient(circle, rgba(201, 149, 67, 1) 48%, rgba(148, 89, 55, 1) 90%)';

	liftHammer();

	sections[1].style.visibility = 'visible';
	sections[1].style.animationName = 'slideFormPage';

	if (document.body.clientWidth < 1423) {
		buttons[2].style.transform = 'translateY(5px)rotate(5deg)';
	} else {
		buttons[2].style.transform = 'translateY(15px)rotate(5deg)';
	}

	console.log(infoIcon);
	infoIcon.addEventListener('click', toggleInfo);
}

//function for the third form page
function thirdPage() {
	sections[1].style.visibility = 'hidden';
	progressBoxes[2].style.background = 'radial-gradient(circle, rgba(201, 149, 67, 1) 48%, rgba(148, 89, 55, 1) 90%)';

	liftHammer();
	if (document.body.clientWidth < 1423) {
		buttons[3].style.transform = 'translateY(15px)';
	} else {
		buttons[3].style.transform = 'translateY(25px)';
	}

	sections[2].style.visibility = 'visible';
	sections[2].style.animationName = 'slideFormPage';
}

//Below is the function that prints the order review page/final page
function finalPage() {
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

//THIS IS THE DROP HAMMER FUNCTION
function dropHammer(cb) {
	for (hammer of hammers) {
		hammer.style.animationName = 'hammerDown';
	}
	return setTimeout(cb, 800);
}

//THIS IS THE LIFT HAMMER FUNCTION
function liftHammer() {
	for (hammer of hammers) {
		hammer.style.animationName = 'hammerUp';
	}
}

function returnPageOne() {
	if (sections[0].style.visibility === 'hidden') {
		sections[1].style.visibility = 'hidden';
		sections[2].style.visibility = 'hidden';
		// sections[0].style.animationName = 'animateReturn';
		sections[0].style.visibility = 'visible';
		progressBoxes[1].style.background = '#eee';
		progressBoxes[2].style.background = '#eee';
		buttons[1].style.animationName = '';
	}
}

function returnPageTwo() {
	console.log('button2');
	if (sections[1].style.visibility === 'hidden') {
		sections[2].style.visibility = 'hidden';
		sections[1].style.visibility = 'visible';
		progressBoxes[2].style.background = '#eee';
		buttons[2].style.animationName = '';
	}
}

function toggleInfo() {
	console.log('hello');
	let infoSheet = document.querySelector('#infoSheet');
	if (infoSheet.style.visibility == 'visible') {
		infoSheet.style.visibility = 'hidden';
	} else {
		infoSheet.style.visibility = 'visible';
	}
}
