let valueRNA
let errorDNA

function createRNA() {
  event.preventDefault();

  if (!valueRNA) {
    valueRNA = document.createElement('p')
    let submitDNA = document.querySelector('.DNA_to_RNA__button')
    valueRNA.classList.add('DNA_to_RNA__value_RNA')
    submitDNA.insertAdjacentElement('afterend', valueRNA)
  }

  if (!errorDNA) {
    errorDNA = document.createElement('p')
    let inputDNA = document.querySelector('.DNA_to_RNA__input_DNA')
    errorDNA.classList.add('DNA_to_RNA__error_DNA')
    inputDNA.insertAdjacentElement('afterend', errorDNA)
  }

  let valueDNA = document.querySelector('.DNA_to_RNA__input_DNA').value.toUpperCase();
  let isValid = /^[ACGT ]+$/.test(valueDNA);
  let createValueRNA = '';

  if (isValid) {
    createValueRNA = valueDNA
      .replace(/A/g, "U")
      .replace(/C/g, "x")
      .replace(/G/g, "C")
      .replace(/T/g, "A")
      .replace(/x/g, "G")

    valueRNA.innerHTML = `RNA: <b>${createValueRNA}</b>`
    document.querySelector('.DNA_to_RNA__error_DNA').remove()
    errorDNA = ''
  } else {
    errorDNA.innerHTML = "Your message is incorrect"
    document.querySelector('.DNA_to_RNA__value_RNA').remove()
    valueRNA = ''
  }
}