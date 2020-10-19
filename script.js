var RESIZE_WIDTH = 576;
var phoneRegExp = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im;
var leaveRequestBtn = document.getElementById('leaveRequest');
var owlCarousel = $('.owl-carousel').owlCarousel({
  items:1,
  margin:10,
  autoHeight:true,
  dots: false
});

$('.owl-dot').click(function (event) {
  var activeDot = $('.owl-dot').toArray().find(function (dot) {
    return dot.classList.contains('owl-dot--active');
  });
  activeDot.classList.remove('owl-dot--active');
  event.target.classList.add('owl-dot--active');
  owlCarousel.trigger('to.owl.carousel', [$(this).index(), 300]);
});

function phoneValidation(event) {
  var value = event.target.value;
  var isCorrect = value.match(phoneRegExp) !== null;
  if (isCorrect) {
    leaveRequestBtn.removeAttribute('disabled');
    leaveRequestBtn.classList.remove('btn-secondary');
    leaveRequestBtn.classList.add('btn-success');
  } else {
    leaveRequestBtn.setAttribute('disabled', 'disabled');
    leaveRequestBtn.classList.remove('btn-success');
    leaveRequestBtn.classList.add('btn-secondary');
  }
}

window.addEventListener('resize', function(event){
  if (document.documentElement.clientWidth <= RESIZE_WIDTH) {
    console.log(document.documentElement.clientWidth)
  }
});
