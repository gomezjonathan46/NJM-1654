var image = document.getElementsByClassName('images')[0];

setTimeout(function() {
  image.classList.toggle('current');
  var myInterval;
  var x = 0;
  myInterval = setInterval(function() {
    image.classList.toggle('current');
    x++;
    if(x >= 2) {
      clearInterval(myInterval);
    }
  }, 3000);
}, 1000);
