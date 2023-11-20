var currentPage = document.createElement('script');

// For testing purposes
document.addEventListener("keypress", function(event) {
  if (event.key == "z") {
    console.log(getItem("UserData"));
  }
});


// Function to switch between page files
// Inputs:
//    name- type: string    info: name of page file to switch to (sans .js)

function changePage(name) {
  vPlay(buttonSnd);
  currentPage.remove();

  if (typeof remove === "function") { 
    clear();
    removeElements();
  }

  currentPage = document.createElement('script');
  currentPage.src = "./src/pages/" + name + ".js";
  currentPage.id = "p5";
  document.body.appendChild(currentPage);

  frameRate(30);
}