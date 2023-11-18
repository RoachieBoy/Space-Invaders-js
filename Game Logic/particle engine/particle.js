class Particle extends GameObject{
    constructor(x, y, w, h, color){
        super(x, y, w, h, color);
        this.active = false; 
        this.host = null;
    }
}