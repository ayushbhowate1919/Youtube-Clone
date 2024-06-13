// script.js

document.addEventListener('DOMContentLoaded', function() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
      document.getElementById('mobile-message').style.display = 'flex';
      document.getElementById('desktop-site').style.display = 'none';
  } else {
      document.getElementById('mobile-message').style.display = 'none';
      document.getElementById('desktop-site').style.display = 'block';
  }
});
