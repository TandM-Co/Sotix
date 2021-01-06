var phoneRegExp = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im;

function phoneValidation(event) {
    console.log(event);
    const value = event.target.value;
    const isCorrect = value.match(phoneRegExp) !== null;
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

