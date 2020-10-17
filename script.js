var phoneRegExp = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im;
var leaveRequestBtn = document.getElementById('leaveRequest');

$('.owl-carousel').owlCarousel({
  items:1,
  margin:10,
  autoHeight:true
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
