/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

var collapse = document.getElementsByClassName("collapsible");
var i = 0;

while (i < collapse.length) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  i++;
}

