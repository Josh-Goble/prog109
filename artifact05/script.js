var caption = document.getElementById("caption");
var currentPic = kitten;

function previous() {
  if (currentPic == kitten) {
    document.getElementById("kitten").className = "hide";
    document.getElementById("lion").className = "slide";
    currentPic = lion;
    caption.innerHTML = "Lion";
    
  }
  else if (currentPic == lion) {
    document.getElementById("lion").className = "hide";
    document.getElementById("tiger").className = "slide";
    currentPic = tiger;
    caption.innerHTML = "Tiger";
    
  }
  else if (currentPic == tiger) {
    document.getElementById("tiger").className = "hide";
    document.getElementById("lynx").className = "slide";
    currentPic = lynx;
    caption.innerHTML = "Lynx";
    
  }
  else if (currentPic == lynx) {
    document.getElementById("lynx").className = "hide";
    document.getElementById("cat").className = "slide";
    currentPic = cat;
    caption.innerHTML = "Cat";
    
  }
  else if (currentPic == cat) {
    document.getElementById("cat").className = "hide";
    document.getElementById("kitten").className = "slide";
    currentPic = kitten;
    caption.innerHTML = "Kitten";
    
  }
}

function next() {

  if (currentPic == kitten) {
    document.getElementById("kitten").className = "hide";
    document.getElementById("cat").className = "slide";
    currentPic = cat;
    caption.innerHTML = "Cat";
    
  }
   else if (currentPic == cat) {
    document.getElementById("cat").className = "hide";
    document.getElementById("lynx").className = "slide";
    currentPic = lynx;
    caption.innerHTML = "Lynx";
    
  }
   else if (currentPic == lynx) {
    document.getElementById("lynx").className = "hide";
    document.getElementById("tiger").className = "slide";
    currentPic = tiger;
    caption.innerHTML = "Tiger";
    
  }
  else if (currentPic == tiger) {
    document.getElementById("tiger").className = "hide";
    document.getElementById("lion").className = "slide";
    currentPic = lion;
    caption.innerHTML = "lion";
    
  }
   else if (currentPic == lion) {
    document.getElementById("lion").className = "hide";
    document.getElementById("kitten").className = "slide";
    currentPic = kitten;
    caption.innerHTML = "Kitten";
    
  }
  
 
  
    
   
  

  
}
