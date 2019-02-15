(function(){

  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('js-image');

    image.onload = function() {
      const p = document.getElementById('js-src');

      p.innerHTML = image.currentSrc || image.src;
    };
  }, false);

}());
