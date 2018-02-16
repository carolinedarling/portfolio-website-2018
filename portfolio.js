// Merry Caroline Purser
// Portfolio Site


//THE CAROUSEL

  var carouselIndex = 1;
  showCarousel(carouselIndex);

  
  // to display
  function showCarousel(n) {
    var carousels = document.getElementsByClassName("myCarousels");
    var indicators = document.getElementsByClassName("indicator");
  
    
    if(n <= 3){
      carouselIndex = n;
    } else if(n == 4) {
      carouselIndex += -1;
    } else if(n == 5) {
      carouselIndex += 1;
    }
    
    
    // wrap the index, so user can click one direction forever and images will rotate:
    if (carouselIndex > 3) {
      carouselIndex = 1; // user can click right forever
    } 
    
    if (carouselIndex < 1) {
      carouselIndex = 3; // user can click left forever
    }
    
    //Set images to be hidden (i.e. don't want to display all 3 images at once!)
    for (var i = 0; i < carousels.length; i++) {
        carousels[i].style.display = "none"; 
    }
    
    // Make sure none of the indicators are set to current
    // (i.e. don't want all indicators to be darkgrey at the same time. )
    
    // The JS className gets and sets the value of the class attribute of 
    // the specified element. The JS function replace, replaces the first string
    // parameters with the 2nd string parameter.
    for (var j = 0; j < indicators.length; j++) {
        indicators[j].className = indicators[j].className.replace(" current", "");
    }
    
    //Display the image (i.e. make it "block" instead of "none") and
    // make the correct indicator have the class of current to be darkgrey.
    carousels[carouselIndex-1].style.display = "block"; 
    indicators[carouselIndex-1].className += " current";
  }

