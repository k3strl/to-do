function newElement() {
    var li = document.createTask("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Type your task dummy!");
} else {
    document.getElement
}