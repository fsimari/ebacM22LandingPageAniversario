AOS.init();

const dataDoEvento = new Date("Jul 24, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60 ;
    const minutoEmMS = 1000 * 60;


    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMS) / horaEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento %  horaEmMS) / minutoEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) /1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML =`${diasAteOEvento}d ${horasAteOEvento}h  ${minutosAteOEvento}m  ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

},1000);