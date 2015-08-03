function Tile(contexto, color) {
    this.contexto = contexto;
    this.color = color;
}

Tile.prototype.dibujarHormiga = function() {
    this.contexto.fillStyle = '#ff00ff';
    this.contexto.fillRect(movHormiga.x, movHormiga.y, hormiga.ancho, hormiga.alto);
}

Tile.prototype.dibujar = function(x, y) {
    this.contexto.fillStyle= "black";
    this.contexto.fillRect(x*baldosa.ancho, y*baldosa.alto, baldosa.ancho, baldosa.alto);

    this.contexto.fillStyle = this.color;
    this.contexto.fillRect(x*baldosa.ancho+0.2, y*baldosa.alto+0.2, baldosa.ancho-0.2, baldosa.alto-0.2);
}
