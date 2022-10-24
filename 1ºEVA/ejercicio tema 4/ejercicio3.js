
Array.prototype.sin = function(funcionelemento) {
    let filtro = [];
    for(let x=0; x<this.length; x++) {
     
      if(this[x] == funcionelemento) {
       this.splice(x,1);
      }
    }
    return this;
  }
  let num = [1, 2, 3, 4, 5];
  document.write(num);
  document.write("<br>");
  let filtro = num.sin('4');
  document.write(filtro);