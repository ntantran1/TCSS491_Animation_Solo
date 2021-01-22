class Skeleton {
    constructor(game) {
        Object.assign(this, {game});
       
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/skeleton.png");
        

        this.animation = new Animator(this.spritesheet, 85, 135, 20, 60, 6, 0.35, 44, false, true);
        this.animation2 = new Animator(this.spritesheet, 15, 197, 30, 60, 9, 0.35, 34, false, true);
        this.animation3 = new Animator(this.spritesheet, 463, 143, 50, 50, 2, 1.0, 10, false, true);
    };


    update() {

    };

 
    draw(ctx) {
        //ctx.strokeStyle = "Green";
        //ctx.strokeRect(50 ,50, 40, 120);
        //ctx.save();
        //ctx.scale(2.25, 1);

        //ctx.drawImage(this.spritesheet, 21, 130, 20, 60, 0, 0, 40, 120);
        //ctx.restore();
        this.animation.drawFrame(this.game.clockTick, ctx, 50, 50, 2);
        this.animation2.drawFrame(this.game.clockTick, ctx, 50, 200, 2);
        this.animation3.drawFrame(this.game.clockTick, ctx, 50, 350, 2);
        // ctx.fillStyle = "White"
        // ctx.strokeStyle = "Red"
        // ctx.strokeRect(100, 110, 100, 100);

        // ctx.beginPath()
        // ctx.arc(50,50,25,1.56);
        // ctx.stroke();

        // ctx.beginPath();

        // ctx.moveTo(100, 100);
        // ctx.lineTo(200,100);
        // ctx.stroke();

    };
};