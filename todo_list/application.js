function createTodo() {
	    var list = document.querySelector("#list"),
			    item = document.createElement("li"),
			    newItem = document.querySelector("#todo-text");

			item.textContent = newItem.value;

			list.appendChild(item);
			// item.appendChild(input);

			
}

var form = document.querySelector("form");

form.addEventListener("submit", function(event) {
				console.log("listener");
				event.preventDefault();
				createTodo();
			});
