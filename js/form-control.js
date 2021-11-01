function phoneValidation(elm, errMsg) {
	const inputElm = elm.getElementsByTagName("input")[0];
	let isNumber = typeof inputElm.value != "number";
	let lengthValid = inputElm.value.length > 10 && inputElm.value.length < 15;

	if (!isNumber || !lengthValid) {
		errMsg.innerText = `Invalid phone number`;
		inputElm.setAttribute("class", "form-data form-control mb-0");
		inputElm.style.borderColor = "red";
		elm.appendChild(errMsg);
	}
}

function validateForm() {
	const formInputElms = document.getElementsByClassName("validation");

	for (let elm of formInputElms) {
		const labelElm = elm.getElementsByTagName("label")[0];
		const inputElm = elm.getElementsByTagName("input")[0];
		let labelName = labelElm.innerText.replace("*", "");
		let errElm = elm.getElementsByClassName("error-msg")[0];

		let errMsg = document.createElement("div");
		errMsg.setAttribute("class", "error-msg mt-0 mb-3");
		errMsg.style.color = "red";

		if (inputElm.value != "") {
			inputElm.setAttribute("class", "form-data form-control mb-3");
			inputElm.style.borderColor = "green";
			if (inputElm.id == "phone") {
				phoneValidation(elm, errMsg);
			}
			if (errElm != undefined) {
				errElm.remove();
			}
		}
		if (errElm == undefined && inputElm.value == "") {
			errMsg.innerText = `${labelName} cannot be empty`;
			inputElm.setAttribute("class", "form-data form-control mb-0");
			inputElm.style.borderColor = "red";
			elm.appendChild(errMsg);
		}
	}
}

const submitBtn = document.getElementById("submit-btn");
const contactForm = document.getElementById("contact-form");
submitBtn.addEventListener("click", validateForm);
contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	storeData();
	window.location.href = "review_message.html";
});
