emailjs.init('user_me9hPZEhm6qD28nqahUnO');

const emailServiceParams = {
    YOUR_SERVICE_ID: 'service_g4z3boh',
    YOUR_TEMPLATE_ID: 'template_u997fp9'
}

const emailSuccessfullySend = `
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Письмо усмешно отправленно!</h4>
    <p>Пожалуйста ожидайте, скоро мы свяжемся с вами</p>
  </div>
`

const spinner = `
  <div class="loader-wrapper" id="loader">
    <div class="loader">Loading...</div>
  </div>
`

function sendEmail(templateParams) {
    return function() {
        ym(57422500, 'reachGoal', 'klickpoknopke');
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

