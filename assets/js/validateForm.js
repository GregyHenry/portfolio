const form = document.getElementById('form');
const nameMail = document.getElementById('name');
const mailInput = document.getElementById('mail');
const textMailInput = document.getElementById('textMail');
const subjectMailInput = document.getElementById('subject');
const errorNameMail = document.createElement('small');
const errorMail = document.createElement('small');
const errorSubjectMail = document.createElement('small');
const errorTextMail = document.createElement('small');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameValue = nameMail.value;
  const mailValue = mailInput.value;
  const subjectMailValue = subjectMailInput.value;
  const textMailValue = textMailInput.value;

  if (nameValue.trim() === '') {
    errorNameMail.classList.add('alertRequiredFields');
    errorNameMail.textContent = 'Este campo é obrigatório';
    nameMail.classList.remove('is-valid');
    nameMail.classList.add('is-invalid');
    nameMail.parentElement.appendChild(errorNameMail);
  } else {
    nameMail.classList.remove('is-invalid');
    nameMail.classList.add('is-valid');
  }

  if (mailValue.trim() === '') {
    errorMail.classList.add('alertRequiredFields');
    errorMail.textContent = 'Este campo é obrigatório';
    mailInput.classList.remove('is-valid');
    mailInput.classList.add('is-invalid');
    mailInput.parentElement.appendChild(errorMail);
  } else {
    mailInput.classList.remove('is-invalid');
    mailInput.classList.add('is-valid');
  }

  if (subjectMailValue.trim() === '') {
    errorSubjectMail.classList.add('alertRequiredFields');
    errorSubjectMail.textContent = 'Este campo é obrigatório';
    subjectMailInput.classList.remove('is-valid');
    subjectMailInput.classList.add('is-invalid');
    subjectMailInput.parentElement.appendChild(errorSubjectMail);
  } else {
    subjectMailInput.classList.remove('is-invalid');
    subjectMailInput.classList.add('is-valid');
  }

  if (textMailValue.trim() === '') {
    errorTextMail.classList.add('alertRequiredFields');
    errorTextMail.textContent = 'Este campo é obrigatório';
    textMailInput.classList.remove('is-valid');
    textMailInput.classList.add('is-invalid');
    textMailInput.parentElement.appendChild(errorTextMail);
  } else {
    textMailInput.classList.remove('is-invalid');
    textMailInput.classList.add('is-valid');
  }

  if (
    !mailInput.classList.contains('is-invalid') &&
    !textMailInput.classList.contains('is-invalid')
  ) {
    emailjs
      .send('service_54mkr8g', 'template_0j4nb36', {
        name: nameMail.value,
        mail: mailInput.value,
        to_email: 'ryguimaraes@gmail.com',
        subject: 'Portfolio Gregy - ' + subjectMailInput.value,
        textMail: textMailInput.value,
      })
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          const successMessage = document.getElementById('sucessMessage');
          successMessage.classList.remove('d-none');
          form.reset();
          const delFailedMessage = document.getElementById('failedMessage');
          delFailedMessage.classList.add('d-none');
        },
        function (error) {
          console.log('FAILED...', error);
          const successMessage = document.getElementById('failedMessage');
          successMessage.classList.remove('d-none');
          const retryMessage = document.getElementById('sucessMessage');
          retryMessage.classList.add('d-none');
        }
      );
  }
});

nameMail.addEventListener('input', function () {
  errorNameMail.textContent = '';
  nameMail.classList.remove('is-invalid');
  nameMail.classList.remove('is-valid');
});

mailInput.addEventListener('input', function () {
  errorMail.textContent = '';
  mailInput.classList.remove('is-invalid');
  mailInput.classList.remove('is-valid');
});

subjectMailInput.addEventListener('input', function () {
  errorSubjectMail.textContent = '';
  subjectMailInput.classList.remove('is-invalid');
  subjectMailInput.classList.remove('is-valid');
});

textMailInput.addEventListener('input', function () {
  errorTextMail.textContent = '';
  textMailInput.classList.remove('is-invalid');
  textMailInput.classList.remove('is-valid');
});
