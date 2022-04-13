function bigImg(x) {
    x.style.height = "425px";
    x.style.width = "425px";
  }
  
  function normalImg(x) {
    x.style.height = "400px";
    x.style.width = "400px";
  }          
          

function check1() {
  if (document.getElementById('option1').checked) {
      document.getElementById('op1').style.visibility = 'visible';
  }

  else document.getElementById('op1').style.visibility = 'hidden';

}