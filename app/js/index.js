/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/app/js/index.js ***!
  \*****************************/
var inputTitulo = document.querySelector('[data-input="titulo"]');
var inputData = document.querySelector('[data-input="data"]');
var btn = document.querySelector('[data-input="btn"]');
var tituloPrincipal = document.querySelector('[data-contador="titulo"]');
var diasDiv = document.querySelector('[data-contador="dias"]');
var hrsDiv = document.querySelector('[data-contador="horas"]');
var minDiv = document.querySelector('[data-contador="minutos"]');
var segDiv = document.querySelector('[data-contador="segundos"]'); // formato da data no input 2022/03/16

function formatarHorario(hora) {
  return hora < 10 ? "0".concat(hora) : hora;
}

function initCronometro(e) {
  e.preventDefault();

  function cronometro() {
    var tempoAtual = new Date();
    var dataInput;

    if (!inputTitulo.value == '' && !inputData.value == '') {
      tituloPrincipal.innerText = inputTitulo.value;
      dataInput = new Date(inputData.value);
      var totalSeg = (dataInput - tempoAtual) / 1000;
      var dias = Math.floor(totalSeg / 3600 / 24);
      var hrs = Math.floor(totalSeg / 3600 % 24) + 3;
      var min = Math.floor(totalSeg / 60) % 60;
      var seg = Math.floor(totalSeg) % 60;
      diasDiv.innerText = dias;
      hrsDiv.innerText = formatarHorario(hrs);
      minDiv.innerText = formatarHorario(min);
      segDiv.innerText = formatarHorario(seg);
    }
  }

  cronometro();
  setInterval(cronometro, 1000);
}

btn.addEventListener('click', initCronometro);
/******/ })()
;
//# sourceMappingURL=index.js.map