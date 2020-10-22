emailjs.init("user_eAKi0pTSfCot9sbZUmCY3");

var emailServiceParams = {
  YOUR_SERVICE_ID: 'service_8xysdkp',
  YOUR_TEMPLATE_ID: 'template_ss66jzl'
}
var RESIZE_WIDTH = 576;
var phoneRegExp = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im;
var leaveRequestBtn = document.getElementById('leaveRequest');
var owlCarousel = $('.owl-carousel').owlCarousel({
  items:1,
  margin:10,
  autoHeight:true,
  dots: false
});

var emailSuccessfullySend = `
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Письмо усмешно отправленно!</h4>
    <p>Пожалуйста ожидайте, скоро мы свяжемся с вами</p>
  </div>
`

var spinner = `
  <div class="loader-wrapper" id="loader">
    <div class="loader">Loading...</div>
  </div>
`

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
    leaveRequestBtn.onclick = sendEmail({
      phoneNumber: value
    });
    leaveRequestBtn.removeAttribute('disabled');
    leaveRequestBtn.classList.remove('btn-secondary');
    leaveRequestBtn.classList.add('btn-success');
  } else {
    leaveRequestBtn.onclick = undefined;
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

function sendEmail(templateParams) {
  return function() {
    $('body').css('overflow', 'hidden');
    $('body').prepend(spinner);
    emailjs.send(
      emailServiceParams.YOUR_SERVICE_ID,
      emailServiceParams.YOUR_TEMPLATE_ID,
      templateParams
    ).then(() => {
      $('#modal_body').empty().append(emailSuccessfullySend);
      $('#loader').remove();
      $('body').css('overflow', 'unset');
    })
  }
}
