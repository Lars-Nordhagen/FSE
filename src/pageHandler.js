var currentPage = document.createElement('script');

document.addEventListener("keypress", function(event) {
  if (event.key == 'e') {
    changePage("buttonScreen")
  }
  if (event.key == 'r') {
    changePage("screen1")
  }
});

function changePage(name) {
  currentPage.remove();

  if (typeof remove === "function") { 
    clear();
    removeElements();
  }

  currentPage = document.createElement('script');
  currentPage.src = "./src/pages/" + name + ".js";
  currentPage.id = "p5";
  document.body.appendChild(currentPage);
}

/*
var p5LibSection = document.createElement('section');
var p5minLib = document.createElement('script');
var p5soundLib;

function resetP5() {
  p5LibSection.remove();
  p5minLib.remove();

  p5LibSection = document.createElement('section');

  p5minLib = document.createElement('script');
  p5minLib.src = "libraries/p5.min.js";
  p5minLib.id = "p5";
  
  p5soundLib = document.createElement('script');
  p5soundLib.src = "libraries/p5.sound.min.js";
  p5soundLib.id = "p5";

  p5LibSection.appendChild(p5minLib);
  p5LibSection.appendChild(p5soundLib);

  document.head.appendChild(p5minLib);
}*/