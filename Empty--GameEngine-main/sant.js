class Sant {
    constructor(game, x) {
        Object.assign(this, {game});
       
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/sant.png");
        

        this.animation = new Animator(this.spritesheet, 30, 150, 41, 45, 6, 0.2, 0, false, true);
        this.animation2 = new Animator(this.spritesheet, 32, 45, 48, 45, 4, 0.2, 0, false, true);
        this.animation3 = new Animator(this.spritesheet, 32, 250, 43, 52, 5, 0.3, 2, false, true);

    };


    update() {

    };

 
    draw(ctx) {
 
        this.animation.drawFrame(this.game.clockTick, ctx, 400, 50, 2);
        this.animation2.drawFrame(this.game.clockTick, ctx, 400, 175, 2);
        this.animation3.drawFrame(this.game.clockTick, ctx, 400, 300, 2);


    };
};