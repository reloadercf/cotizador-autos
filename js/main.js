/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const resul = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
  getCar();
});

function getCar() {
  autos.forEach((element) => {
    const { marca, modelo } = element;
    const autoHMTL = document.createElement('p');
    autoHMTL.textContent = `
        ${marca} ${modelo}
    `;
    resul.appendChild(autoHMTL);
  });

  console.log('algo');
}
