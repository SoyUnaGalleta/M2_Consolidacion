var color = 0;
var colores = ['#c8e197','#d597e1','#97a3e1','#e1d597','#e1b097','#eb968d'];

function cambiarColor () {
    var titulo = document.getElementsByTagName('h2');
    var borde = document.getElementsByClassName('borde');
    var tituloCard = document.getElementsByClassName('card-title');
    var bottonColores = document.getElementById('color');
    var fondoDato = document.getElementsByClassName('dato');
    

    for (var i = 0; i < titulo.length; i++) {
        titulo[i].style.color = colores[color];
        bottonColores.innerText = '¡Vuelve a cambiar el color!';
    };

    for (var i = 0; i < tituloCard.length; i++) {
        tituloCard[i].style.color = colores[color];
    };

    for (var i = 0; i < borde.length; i++) {
        var bordeColor = `6px solid ${colores[color]}`;
        borde[i].style.borderLeft = bordeColor;
    };

    for (var i = 0; i < fondoDato.length; i++) {
        fondoDato[i].style.backgroundColor= colores[color];
    };


    if (color < colores.length-1) {
        color = color + 1;
    } else {
        color = 0;
    }
    
}

function agregarColor () {
   var colorNuevo = document.getElementById('colorNuevo').value;
   colores.push(colorNuevo)
   console.log(colorNuevo)
}