class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        


        this.load();
    };




    load() {

        let skeleton = new Skeleton(this.game);
        this.game.addEntity(skeleton);

        let sant = new Sant(this.game);
        this.game.addEntity(sant);
      
    };
 
 
};

