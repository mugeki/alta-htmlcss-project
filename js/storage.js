function storeData() {
	event.preventDefault();
	const formInputElms = document.getElementsByClassName("form-input");
	for (let elm of formInputElms) {
		const inputValue = elm.getElementsByClassName("form-data")[0].value;
		const dataName = elm.getElementsByClassName("form-data")[0].id;
		console.log(inputValue);
		localStorage.setItem(`${dataName}`, inputValue);
	}
}

function getData() {
	console.log("masuk getdata");
	const formValueElms = document.getElementsByClassName("form-output");
	console.log(formValueElms);
	for (let elm of formValueElms) {
		console.log(elm);
		const dataName = elm.getElementsByClassName("form-data")[0].id;
		const pElm = elm.getElementsByClassName("form-data")[0];

		console.log(dataName);
		console.log(`pElm: ${pElm}`);

		if (dataName == "message") {
			pElm.innerText = localStorage.getItem(`${dataName}`);
		} else {
			pElm.innerText = ": " + localStorage.getItem(`${dataName}`);
		}
	}
}

if (window.location.href.match("review_message.html") != null) {
	getData();
}
