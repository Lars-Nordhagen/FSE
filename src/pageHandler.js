var currentPage = document.createElement('script');

/*document.addEventListener("keypress", function(event) {
  if (event.key == 'r') {
    changePage("ray")
  }
  if (event.key == 'e') {
    changePage("screen1")
  }
});*/


function changePage(name) {
  currentPage.remove();
  currentPage = document.createElement('script');
  currentPage.src = "./src/pages/" + name + ".js";
  currentPage.id = "p5";
  document.body.appendChild(currentPage);
  createCanvas(400, 500);
  clear();
}