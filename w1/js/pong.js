var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

var timer = setInterval(main, 1000/60)

var fy = .85

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
pad[1].dir = -1

ball = new Box()
ball.w = 20
ball.h = 20
ball.vx = -5
ball.vy = -5

var scr = document.querySelectorAll(`#score div`);
scr[0].innerHTML=player[0].score
scr[1].innerHTML=player[1].score




function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    if(keys[`w`])
    {
        pad[0].vy += -pad[0].force
    }

    
    
    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }
    
    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }

    for (let i=0; i < player.length; i++)
    {
        if(pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }
        if(pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        }
        pad[i].vy *= fy
        pad[i].move();

        if(ball.collide(pad[i]))
        {
            ball.x = pad[i].x + (pad[i].w/2 + ball.w/2) * pad[i].dir
            ball.vx = -ball.vx
        }
        pad[i].draw()
        scr[i].innerHTML = player[i].score
    }

    ball.move();


    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2

        player[1].score +=1
        console.log(player[1].score)
    }
    
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        player[0].score +=1
        console.log(player[0].score)
    }

    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }

    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
    }

 
    ball.draw()
}