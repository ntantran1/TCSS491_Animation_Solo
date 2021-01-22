class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        


        this.load();
    };


    clearEntities() {
        this.game.entities = [];
    };

    load() {

        let skeleton = new Skeleton(this.game);
        this.game.addEntity(skeleton);

      
    };
 
 
};

