class StarManager{
    constructor(poolSize){
        this.poolSize = poolSize;
        this.stars = [];
    }

    spawnStars(){
        for(let i = 0; i < this.poolSize; i++){
            this.stars.push(new Star(Math.random() * canvas_size.width, Math.random() * canvas_size.height, 2, 1, 'white'));
        }
    }

    updateStars(){
        this.stars.forEach(star => star.update());

        this.resetStarPosition();
    }

    resetStarPosition(){
        this.stars.forEach(star => {
            // use collision helper  
            if(CollisionHelper.checkCanvasCollision(star, screen)){
                star.x = Math.random() * canvas_size.width;
                star.y = Math.random() * canvas_size.height;
            }
        });
    }
}