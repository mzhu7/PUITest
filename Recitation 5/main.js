function addNewList() {
    alert('hello world!');
    console.log('hello world console');

}

function addListItem() {
    console.log("adding new list item")

        
    let list = document.getElementById("grocery-list");
	let itemInput = document.getElementById("new-list-item");
    console.log(itemInput.value);

	let newItem = document.createElement("li");
    let itemId = "check-" + itemInput.value;

    // add the checkbox to the new item element
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.class = "complete-item";
    newCheckbox.id = itemId;
    newItem.appendChild(newCheckbox);
    newCheckbox.onclick = completeListItem(newCheckbox);

    // add the text to the new item element
    let newLabel = document.createElement("label");
    newLabel.for = itemId;
    newLabel.textContent = itemInput.value;
	newItem.appendChild(newLabel);
    
    // add the delete item button to the new item element
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    newItem.appendChild(deleteButton);
    deleteButton.onclick = deleteListItem(deleteButton.parentNode);

    list.appendChild(newItem);



}

function deleteListItem(item) {
    // remove li element (item) from ol element (item.parentNode)
     item.parentNode.removeChild(item);
}

function completeListItem(item) {
    console.log(typeof(item));
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}

