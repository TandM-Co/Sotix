emailjs.init('user_eAKi0pTSfCot9sbZUmCY3');

var emailServiceParams = {
    YOUR_SERVICE_ID: 'service_8xysdkp',
    YOUR_TEMPLATE_ID: 'template_ss66jzl'
}

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

function sendEmail(templateParams) {
    return function() {
        $('body').css('overflow', 'hidden').prepend(spinner);
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

