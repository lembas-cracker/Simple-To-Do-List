 document.querySelector(".myInput").addEventListener("keypress", function newLi(e) {
  var li = document.createElement("li");
  var inputValue = document.querySelector(".myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if(e.keyCode == 13 && inputValue !=='') {
   li.className = "newEl"
   li.classList.add("list-group-item")
   document.querySelector(".myUl").appendChild(li);
   document.querySelector(".myInput").value = '';
  }

});



