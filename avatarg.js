(() => {
  'use strict'

  function main() {

    function generateRandomNumber(i) {
      var randomNumber = Math.floor(Math.random() * i); // Generate random number between 0 and 12
      return randomNumber.toString().padStart(2, '0'); // Add leading zero if necessary
    }



    function stackImages(container) {
      container.style.position = 'relative';
      console.log("wep")
      let size = container.getAttribute("size") || "220px";
      
      // Array of image URLs
      var scriptElements = document.getElementsByTagName('script');
      var currentScript = scriptElements[scriptElements.length - 1];
      var baseUrl = currentScript.src.replace(/\/[^/]*$/, '/');
      
      var imageUrls = [
        baseUrl + 'head/head-' + generateRandomNumber(16) + '.png',
        baseUrl + 'eyes/eyes-' + generateRandomNumber(12) + '.png',
        baseUrl + 'mouth/mouth-' + generateRandomNumber(10) + '.png',
        baseUrl + 'nose/nose-' + generateRandomNumber(2) + '.png',
        baseUrl + 'hh/hh-' + generateRandomNumber(27) + '.png',
        baseUrl + 'acc/acc-' + generateRandomNumber(18) + '.png'
      ];
      
      // Loop through the image URLs and create image elements
      for (var i = 0; i < imageUrls.length; i++) {
        var image = document.createElement('img');
        image.src = imageUrls[i];
        image.style.position = 'absolute';
        image.style.top = '0';
        image.style.left = '0';
        image.style.width = size;
        image.style.height = size;
        container.appendChild(image);
      }

      container.style.width = size;
      container.style.height = size;
      if (container.getAttribute("blacked") !== null) {
        container.style.filter = "grayscale(100%)";
      }
    }

    // Call the function and pass the ID of the target div

    var containers = document.getElementsByTagName("rm");
var containerArray = Array.from(containers);

containerArray.forEach(function(container) {
  stackImages(container);
});
    

  }
  window.addEventListener('DOMContentLoaded', () => {
    main()
  })

})()