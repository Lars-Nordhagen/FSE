var currentPage = document.createElement('script');

function setup() {
  createCanvas(400, 400);
}

changePage("screen1");

document.addEventListener("keypress", function(event) {
  if (event.key == 'r') {
    changePage("screen2")
  }
});


function changePage(name) {
  //alert("HI");
  currentPage.remove();
  currentPage = document.createElement('script');
  currentPage.src = "./src/" + name + ".js";
  currentPage.id = "p5";
  document.body.appendChild(currentPage);
}