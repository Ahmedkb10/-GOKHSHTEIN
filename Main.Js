const config = {

    type: Phaser.AUTO,

    width: 800,

    height: 500,

    parent: "game",

    backgroundColor: "#111111",

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    scene: {
        create: create
    }

};


const game = new Phaser.Game(config);


function create() {

    this.add.text(
        250,
        200,
        "⚪🐂 WHITE BULL AWAKENS",
        {
            fontSize: "32px",
            fill: "#ffffff"
        }
    );

}
