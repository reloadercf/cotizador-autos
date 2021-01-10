/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const brand = document.querySelector('#marca');
const yearDom = document.querySelector('#year');
const minDom = document.querySelector('#minimo');
const maxDom = document.querySelector('#maximo');
const doors = document.querySelector('#puertas');
const transmission = document.querySelector('#transmision');
const colorDom = document.querySelector('#color');

// Content Result
const resul = document.querySelector('#resultado');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// create object with search

const dataSearch = {
  marca: '',
  year: '',
  min: '',
  max: '',
  puertas: '',
  transmision: '',
  color: '',
};

document.addEventListener('DOMContentLoaded', () => {
  getCar();
  pushSelect();
});

// Event listeners for selects
brand.addEventListener('change', (e) => {
  dataSearch.marca = e.target.value;
  filterAuto();
});

yearDom.addEventListener('change', (e) => {
  dataSearch.year = e.target.value;
  filterAuto();
});

minDom.addEventListener('change', (e) => {
  dataSearch.min = e.target.value;
});

maxDom.addEventListener('change', (e) => {
  dataSearch.max = e.target.value;
});

doors.addEventListener('change', (e) => {
  dataSearch.puertas = e.target.value;
});

transmission.addEventListener('change', (e) => {
  dataSearch.transmision = e.target.value;
});

colorDom.addEventListener('change', (e) => {
  dataSearch.color = e.target.value;
});

function getCar() {
  autos.forEach((element) => {
    const {
      marca, modelo, year, puertas, transmision, precio, color,
    } = element;
    const autoHMTL = document.createElement('p');
    autoHMTL.textContent = `
        ${marca} ${modelo} ${year} ${puertas} ${transmision} ${precio} ${color}
    `;
    resul.appendChild(autoHMTL);
  });
}

function pushSelect() {
  // eslint-disable-next-line no-plusplus
  for (let i = maxYear; i >= minYear; i--) {
    const optionSelect = document.createElement('option');
    optionSelect.value = i;
    optionSelect.textContent = i;
    yearDom.appendChild(optionSelect);
  }
}

function filterAuto() {
  const result = autos.filter(filterBrand).filter(filterYear);
  console.log(result);
}

function filterBrand(auto) {
  if (dataSearch.marca) {
    return auto.marca === dataSearch.marca;
  }
  return auto;
}

function filterYear(auto) {
  const { year } = dataSearch;
  if (dataSearch.year) {
    // eslint-disable-next-line radix
    return auto.year === parseInt(year);
  }
  return auto;
}
