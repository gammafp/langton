var direccion = 1;
var contador = true;

function Init(aux) {
    var self = this;
    this.canv = document.getElementById(aux);

    this.ctx = this.canv.getContext('2d');

    this.celdas = [new Tile(this.ctx, 'green'), new Tile(this.ctx, 'orange') ];
    this.canv.width = baldosa.ancho*baldosa.mapa[0].length;
    this.canv.height = baldosa.alto*baldosa.mapa.length;

        self.dibujandoTile();
        var person = new Tile(self.ctx, hormiga.color);
        person.dibujarHormiga(hormiga.ancho, hormiga.alto);

        setInterval(function(){
            self.dibujandoTile()
            moverHormiga(self.ctx);
        }, 100);
}

Init.prototype.dibujandoTile = function() {
    var bX = baldosa.mapa[0].length;
    var bY = baldosa.mapa.length;
    for(var y = 0; y < bY; y++) {
        for( var x = 0; x < bX; x++) {
            this.celdas[baldosa.mapa[y][x]].dibujar(x, y);
        }
    }
}
var con = 1;
function moverHormiga(ctx) {
    console.log(direccion);
    if(contador) {
        contador = false;
    }
    else {
        var posX = Math.round( ( (movHormiga.x - (baldosa.ancho * 16) / 100) / baldosa.ancho) );
        var posY = Math.round( ( (movHormiga.y - (baldosa.alto * 16) / 100) / baldosa.alto) );


        if(baldosa.mapa[posY][posX] === 1){
            baldosa.mapa[posY][posX]=0;
            switch(direccion) {
                case 0:
                    direccion = 1;
                    break;
                case 1:
                    movHormiga.x = movHormiga.x - baldosa.ancho;
                    direccion = 2;
                    break;
                case 2:
                    movHormiga.y = movHormiga.y + baldosa.ancho;
                    direccion = 4;
                    break;
                case 3:
                    movHormiga.y = movHormiga.y - baldosa.ancho;
                    direccion = 1;
                    break;
                case 4:
                    movHormiga.x = movHormiga.x + baldosa.ancho;
                    direccion = 3;
                    break;

            }
        }
        else {
            baldosa.mapa[posY][posX]=1;
            switch(direccion) {
                case 0:
                    direccion = 1;
                    break;
                case 1:
                    movHormiga.x = movHormiga.x + baldosa.ancho;
                    direccion = 3;
                    break;
                case 2:
                    movHormiga.y = movHormiga.y - baldosa.ancho;
                    direccion = 1;
                    break;
                case 3:
                    movHormiga.y = movHormiga.y + baldosa.ancho;
                    direccion = 4;
                    break;
                case 4:
                    movHormiga.x = movHormiga.x - baldosa.ancho;
                    direccion = 2;
                    break;
            }
        }
    }


    var person = new Tile(ctx, hormiga.color);
    person.dibujarHormiga();
}
