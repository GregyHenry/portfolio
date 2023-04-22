document.addEventListener('DOMContentLoaded', function () {
  function validateMail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const mailInput = document.getElementById('mail');
  const errorText = document.createElement('small');

  mailInput.addEventListener('input', function () {
    const mailValue = mailInput.value;
    if (validateMail(mailValue)) {
      errorText.textContent = '';
      mailInput.classList.remove('is-invalid');
      mailInput.classList.add('is-valid');
    } else {
      errorText.textContent = 'Email inválido';
      mailInput.classList.remove('is-valid');
      mailInput.classList.add('is-invalid');
    }
  });

  mailInput.addEventListener('blur', function () {
    const mailValue = mailInput.value;
    if (mailValue !== '' && !validateMail(mailValue)) {
      mailInput.parentElement.appendChild(errorText);
      mailInput.focus();
    }
  });
});
