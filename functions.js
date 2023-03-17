function addItem() {
    var newItem = document.getElementById("myInput").value;
    var listItem = document.createElement("li");
    var text = document.createTextNode(newItem);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(text);
    listItem.appendChild(checkbox);
    if (newItem === '') {
        alert("You cannot put a empty thing to grocery list.")
    } else {
        listItem.classList.add("list-group-item", "list-group-item-action");
        document.getElementById("list").appendChild(listItem);
    }
    document.getElementById("myInput").value = "";
    checkbox.addEventListener("click", shopped);
}

var checkboxElems = document.querySelectorAll("input[type='checkbox']");

for (var i = 0; i < checkboxElems.length; i++) {
    checkboxElems[i].addEventListener("click", shopped);
}
function shopped() {
    var listItem = this.parentNode;
    if (this.checked) {
        listItem.style.textDecoration = "line-through";
        setTimeout(function () {
            deleteItem(listItem);
        }, 2000);
    } else {
        listItem.style.textDecoration = "none";
    }
}

function deleteItem(item) {
    item.remove();
}