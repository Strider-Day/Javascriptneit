/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div

    
---------*/

var options = document.querySelector(`#options h2`)
options.addEventListener(`click`, hideshow)

function hideshow()
{
    
    var sides = document.querySelector(".sides")
    sides.classList.toggle("hidden")
}

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

var fill = document.getElementsByClassName(`fill`)

for (let i=0; i < fill.length; i++) 
{
    fill[i] = player[i].fill
    fill[i].nextElementSibling.innerHTML = player[i].fill

    fill[i].addEventListener(`input`, colorfill)
    
    function colorfill(e)
    {
        player[i].fill = e.target.value
        e.target.nextElementSibling.innerHTML = player[i].fill
        player[i].pad.fill = e.target.nextElementSibling.innerHTML
    }
    
}

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

var stroke = document.getElementsByClassName(`stroke`)

for (let i=0; i < fill.length; i++) 
{
    stroke[i] = player[i].stroke
    stroke[i].nextElementSibling.innerHTML = player[i].stroke

    stroke[i].addEventListener(`input`, strokecolor)
    
    function strokecolor(e)
    {
        player[i].stroke = e.target.value
        e.target.nextElementSibling.innerHTML = player[i].stroke
        player[i].pad.stroke = e.target.nextElementSibling.innerHTML
    }
    
}

var up = document.getElementsByClassName(`u`)

for (let i=0; i < fill.length; i++)
{
    up[i] = player[i].keys.u
    up[i].nextElementSibling.innerHTML = player[i].keys.u

    up[i].addEventListener(`keydown`, upkey)

    function upkey(e)
    {
        if(e.key != "Escape"){
            up[i].value = e.key
            up[i].nextElementSibling.innerHTML = e.key
            player[i].keys.u = e.key
        }
        
        e.target.blur()
    }
    up[i].addEventListener(`focus`, (e)=>{

        
        currentState = "pause"
    })
}

var dwn = document.getElementsByClassName(`d`)

for (let i=0; i < fill.length; i++)
{
    dwn[i] = player[i].keys.d
    dwn[i].nextElementSibling.innerHTML = player[i].keys.d

    dwn[i].addEventListener(`keydown`, dwnkey)

    function dwnkey(e)
    {
        if(e.key != "Escape"){
            dwn[i].value = e.key
            dwn[i].nextElementSibling.innerHTML = e.key
            player[i].keys.d = e.key
        }
        
        e.target.blur()
    }
    dwn[i].addEventListener(`focus`, (e)=>{

        
        currentState = "pause"
    })
}

var strt = document.getElementsByClassName(`s`)

for (let i=0; i < fill.length; i++)
{
    strt[i] = player[i].keys.s
    strt[i].nextElementSibling.innerHTML = player[i].keys.s

    strt[i].addEventListener(`keydown`, strtkey)

    function strtkey(e)
    {
        if(e.key != "Escape"){
            strt[i].value = e.key
            strt[i].nextElementSibling.innerHTML = e.key
            player[i].keys.s = e.key
        }
        
        e.target.blur()
    }
    strt[i].addEventListener(`focus`, (e)=>{

        
        currentState = "pause"
    })
}

var pwr = document.getElementsByClassName(`power`)

for (let i=0; i < fill.length; i++) 
{
    pwr[i] = player[i].power
    pwr[i].nextElementSibling.innerHTML = player[i].power

    pwr[i].addEventListener(`input`, powershot)
    
    function powershot(e)
    {
        player[i].power = e.target.value
        e.target.nextElementSibling.innerHTML = player[i].power
    }
    
}
