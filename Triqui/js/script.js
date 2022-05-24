let jugador1 = true;
let contador = 0;
let btnReinicio = document.querySelector('#btn-reinicio');
let imagen1 = document.querySelector('#imagen1');
let imagen2 = document.querySelector('#imagen2');
let ganador1 = document.querySelector('#puntos1');
let ganador2 = document.querySelector('#puntos2');


let ListaBotones = () => {

    const texto = '#btn_active';
    let btnArray = new Array();


    for (let i = 1; i <= 9; i++) {

        btnArray[i] = document.querySelector(`${texto}${i}`);
    }

    return btnArray;
}


let Marcar = (i) => {
    let simbolo;
    let color;

    if (jugador1) {
        simbolo = 'X';
        color = 'Red';
        jugador1 = false;
        imagen1.src = 'https://cdn.pixabay.com/photo/2016/08/21/19/27/emoticon-1610573_960_720.png'
        imagen2.src = 'https://cdn.pixabay.com/photo/2016/08/11/10/52/emoji-1585401_960_720.png';
    }
    else {
        simbolo = 'O';
        jugador1 = true;
        color = 'Blue';
        imagen1.src = 'https://cdn.pixabay.com/photo/2016/08/11/10/52/emoji-1585401_960_720.png';
        imagen2.src = 'https://cdn.pixabay.com/photo/2016/08/21/19/27/emoticon-1610573_960_720.png'
    }

    array[i].innerHTML = simbolo;
    array[i].style.color = color;
    array[i].disabled = true;
    array[i].style.cursor = 'no-drop';
    contador++;

    if (contador > 4) {
        Ganador();
    }

}

btnReinicio.onclick = () => {

    if (btnReinicio.textContent === 'Nueva partida') {

        ganador1.innerHTML = 0;
        ganador2.innerHTML = 0;
    }
    else if (btnReinicio.textContent === 'Continuar') {
        btnReinicio.innerHTML = 'Nueva partida';
    }

    array.forEach(element => {
        element.innerHTML = '';
        element.disabled = false;
        element.style.cursor = 'pointer';
    });

    imagen1.src = 'https://cdn.pixabay.com/photo/2016/08/11/10/52/emoji-1585401_960_720.png';
    imagen2.src = 'https://cdn.pixabay.com/photo/2016/08/21/19/27/emoticon-1610573_960_720.png'
    jugador1 = true;
    contador = 0;
}

let array = ListaBotones();

array[1].onclick = () => {
    Marcar(1);
}
array[2].onclick = () => {
    Marcar(2);
}
array[3].onclick = () => {
    Marcar(3);
}
array[4].onclick = () => {
    Marcar(4);
}
array[5].onclick = () => {
    Marcar(5);
}
array[6].onclick = () => {
    Marcar(6);
}
array[7].onclick = () => {
    Marcar(7);
}
array[8].onclick = () => {
    Marcar(8);
}
array[9].onclick = () => {
    Marcar(9);
}


let Ganador = () => {

    let signo = ['X', 'O'];
    let simboloGandor = '';

    signo.forEach(element => {
        j = 0;
        for (let i = 0; i < 3; i++) {
            if (array[1 + j].textContent === element && array[2 + j].textContent === element && array[3 + j].textContent === element
                ||
                array[1 + i].textContent === element && array[4 + i].textContent === element && array[7 + i].textContent === element) {
                simboloGandor = element;
            }
            j += 3;
        }

        if (array[1].textContent === element && array[5].textContent === element && array[9].textContent === element
            || array[3].textContent === element && array[5].textContent === element && array[7].textContent === element) {

            simboloGandor = element;
        }
    });

    if(simboloGandor === '' && contador === 9)
    {
        btnReinicio.innerHTML = 'Continuar';
        imagen1.src = 'https://cdn.pixabay.com/photo/2016/08/31/20/04/emoticon-1634515_960_720.png';
        imagen2.src = 'https://cdn.pixabay.com/photo/2016/08/31/20/04/emoticon-1634515_960_720.png';
    }
    else{

        Score(simboloGandor);
    }

}

let Score = simboloGandor => {

    if (simboloGandor === 'X') {
        puntos1 = parseInt(ganador1.textContent) + 1;
        ganador1.innerHTML = puntos1;
        imagen1.src = 'https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_960_720.png';
        imagen2.src = 'https://cdn.pixabay.com/photo/2016/08/11/09/50/emoji-1585197_960_720.png';
        Bloquear();
    }
    else if (simboloGandor === 'O') {

        puntos2 = parseInt(ganador2.textContent) + 1;
        ganador2.innerHTML = puntos2;
        imagen1.src = 'https://cdn.pixabay.com/photo/2016/08/11/09/50/emoji-1585197_960_720.png';
        imagen2.src = 'https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_960_720.png';
        Bloquear();
    }
}

let Bloquear = () => {
    array.forEach(element => {
        element.disabled = true;
        element.style.cursor = 'no-drop';
    });

    btnReinicio.innerHTML = 'Continuar';
}