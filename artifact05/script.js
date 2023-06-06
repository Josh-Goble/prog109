var currentPic = kitten;

function previous() {
  if (currentPic == kitten) {
    document.getElementById("kitten").className = "hide";
    document.getElementById("lion").className = "slide";
    currentPic = lion;
    
  }
}

function next() {
  if (currentPic == kitten) {
    document.getElementById("kitten").className = "hide";
    document.getElementById("cat").className = "slide";
    currentPic = cat;
    
  }
  if (currentPic == cat) {
    document.getElementById("cat").className = "hide";
    document.getElementById("lynx").className = "slide";
    currentPic = lynx;
    
  }
  if (currentPic == lynx) {
    document.getElementById("lynx").className = "hide";
    document.getElementById("tiger").className = "slide";
    currentPic = tiger;
    
  }
  if (currentPic == tiger) {
    document.getElementById("tiger").className = "hide";
    document.getElementById("lion").className = "slide";
    currentPic = lion;
    
  }
  
}
