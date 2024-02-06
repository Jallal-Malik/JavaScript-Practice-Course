const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi}</span>`
    // Show the results
    if (bmi < 18.6) {
      result.innerHTML = `${bmi} is Under Weight`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `${bmi} is Normal Range`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `${bmi} is Over Weight`;
    }
  }
});
