function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
var white = "#FFFFFF";
var rLine ="";
for (i=0;i<pHeight + 2;i++){
  rLine +="<p>";
  if (i < pHeight) {
    for(k= pHeight - i;k>=0;k--){
      rLine +="<span style='color:" + white + ";'>" + pSymbol +"</span>";
    }

    //Create each line on the Rhombus
    for(j=0;j<=i * 2;j++){
      //Is the position even or odd so we change the color
      if (j%2){
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } else {
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }

  } else {
    for(n= i - pHeight;n>=0;n--){
      rLine +="<span style='color:" + white + ";'>" + pSymbol +"</span>";
    }

    //Create each line on the Rhombus
    for(t=0;t<= (pHeight * 2 - i) * 2;t++){
      //Is the position even or odd so we change the color
      if (t%2){
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } else {
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("Rhombus").innerHTML = rLine;
}
}
