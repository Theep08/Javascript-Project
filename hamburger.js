function popUp() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  id = null
function rotateRocket() {
    var degrees = 0;
    id = setInterval(rotate, 25)

    function rotate () {
        degrees += -3
        radius = 6
        
        $('#rocket').css({
            'transform': 'rotate(' + degrees + 'deg)' + 'translate(' + radius + 'px, ' + radius + 'px)',
            '-ms-transform': 'rotate(' + degrees + 'deg)' + 'translate(' + radius + 'px, ' + radius + 'px)',
            '-moz-transform': 'rotate(' + degrees + 'deg)' + 'translate(' + radius + 'px, ' + radius + 'px)',
            '-webkit-transform': 'rotate(' + degrees + 'deg)' + 'translate(' + radius + 'px, ' + radius + 'px)',
            '-o-transform': 'rotate(' + degrees + 'deg)' + 'translate(' + radius + 'px, ' + radius + 'px)',
        }); 
        if (degrees < -360) {
          clearTimeout(id)
          
        }
        
        
}
}

rotateRocket()