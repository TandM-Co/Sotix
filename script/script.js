var RESIZE_WIDTH = 576;

var leaveRequestBtn = document.getElementById('leaveRequest');

window.addEventListener('resize', function(event) {
  if (document.documentElement.clientWidth <= RESIZE_WIDTH) {
    console.log(document.documentElement.clientWidth)
  }
});

