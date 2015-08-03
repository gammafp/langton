var baldosa = {
    ancho : 10,
    alto : 10,
    baldosas : 40,
    mapa : []
};
var movHormiga = {
    x : (baldosa.ancho * 16) / 100 + (Math.round(baldosa.baldosas / 2) * baldosa.ancho) - baldosa.ancho,
    y : (baldosa.ancho * 16) / 100 + (Math.round(baldosa.baldosas / 2) * baldosa.alto) -baldosa.alto
}
var hormiga = {
    ancho : (baldosa.ancho * 70) / 100,
    alto : (baldosa.alto * 70) / 100,
    color : 'blue'
};


function iniciador() {
    var baldosas = baldosa.baldosas;
    for(var mY = 0; mY < baldosas; mY++) {
        baldosa.mapa[mY]=[];
        for(var mX = 0; mX < baldosas; mX++) {
                baldosa.mapa[mY][mX] = 0;
        }
    }
    console.log(hormiga.alto);


    // Iniciador de todo
    var juego = new Init('gamma');
}

// Movimient
window.addEventListener('load', iniciador, false);
