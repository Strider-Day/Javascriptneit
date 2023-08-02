var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

class Player
{
    constructor()
    {
        this.name = "yes"
        this.score = 0
        this.highscore = 0
        this.pad = ""
    }
}

var player = []

var pad = []

player[0] = new Player();
player[0].pad = new Box();

pad[0] = player[0].pad
pad[0].w = 20
pad[0].x = 0 + pad[0].w/2
pad[0].h = 150
pad[0].color = `red`

player[1] = new Player();
player[1].pad = new Box();

pad[1] = player[1].pad
pad[1].w = 20
pad[1].x = c.width - pad[1].w/2
pad[1].h = 150
pad[1].color = `red`






