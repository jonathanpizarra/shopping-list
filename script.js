var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	span.classList.add("item-value");
	li.appendChild(span);
	bindToggleEvent(span);
	addDeleteButton(li);
	ul.insertBefore(li, ul.firstChild);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// exercise solution without doing any changes on existing html codes coz why not XD

// toggle .done classs
function bindToggleEvent(el){
	el.addEventListener("click", function(){
		el.classList.toggle("done");
	})
}

// bind class toggle event on existing items
function bindListItems(){
	let lis = document.querySelectorAll("li");
	let items = document.querySelectorAll(".item-value");
	for(let i=0; i<items.length; i++){
		bindToggleEvent( items[i] );
		addDeleteButton( lis[i] );
	}
}

bindListItems();

// add delete button
function addDeleteButton(el){
	let delBtn = document.createElement("button");
	delBtn.classList.add("del-btn");
	delBtn.appendChild(document.createTextNode("\u2716") );
	delBtn.addEventListener("click", function(){
		el.remove();
	});
	el.appendChild(delBtn);
}
