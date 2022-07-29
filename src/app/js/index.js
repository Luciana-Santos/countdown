const inputTitulo = document.querySelector('[data-input="titulo"]');
const inputData = document.querySelector('[data-input="data"]');
const btn = document.querySelector('[data-input="btn"]');
const tituloPrincipal = document.querySelector('[data-contador="titulo"]');

const diasDiv = document.querySelector('[data-contador="dias"]');
const hrsDiv = document.querySelector('[data-contador="horas"]');
const minDiv = document.querySelector('[data-contador="minutos"]');
const segDiv = document.querySelector('[data-contador="segundos"]');

// formato da data no input 2022/03/16

function formatarHorario(hora) {
  return hora < 10 ? `0${hora}` : hora;
}

function initCronometro(e) {
  e.preventDefault();

  function cronometro() {
    const tempoAtual = new Date();
    let dataInput;
    if (!inputTitulo.value == '' && !inputData.value == '') {
      tituloPrincipal.innerText = inputTitulo.value;
      dataInput = new Date(inputData.value);

      const totalSeg = (dataInput - tempoAtual) / 1000;

      const dias = Math.floor(totalSeg / 3600 / 24);
      const hrs = Math.floor((totalSeg / 3600) % 24) + 3;
      const min = Math.floor(totalSeg / 60) % 60;
      const seg = Math.floor(totalSeg) % 60;

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
