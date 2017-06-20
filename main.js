 document.querySelector(".myInput").addEventListener("keypress", function newLi(e) {
    var li = document.createElement("li");

    var button = document.createElement("span");
    button.classList.add("glyphicon");
    button.classList.add("glyphicon-remove-circle");

    var inputValue = document.querySelector(".myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.appendChild(button)

    if (e.keyCode == 13 && inputValue !== '') {
        li.className = "newEl"
        li.classList.add("list-group-item")
        document.querySelector(".myUl").appendChild(li);
        document.querySelector(".myInput").value = '';
    }

    var remove = document.querySelectorAll(".list-group-item");
    var i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            var div = this.parentElement;
            this.remove(div);
        }
    }


});



