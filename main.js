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
        preload: preload,
        create: create,
        update: update
    }

};


const game = new Phaser.Game(config);


let bull;


function preload() {

}


function create() {

    // Create White Bull body
    bull = this.add.circle(
        200,
        250,
        40,
        0xffffff
    );


    // Add the G on the forehead
    this.add.text(
        185,
        220,
        "G",
        {
            fontSize: "35px",
            color: "#FFD700",
            fontStyle: "bold"
        }
    );


    this.add.text(
        260,
        80,
        "⚪🐂 GOKHSHTEIN THE WHITE BULL",
        {
            fontSize: "28px",
            color: "#ffffff"
        }
    );

}


function update() {


}
console.log("White Bull deployed successfully");
