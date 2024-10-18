function preload() {
    
}

function setup() {
    canvas= createCanvas(600,400)
    canvas.position(400,200)
    video=createCapture(VIDEO)
    video.hide()
    color=""
}

function draw() {
    image(video,0,0,600,400)
    fill ("pink" )
    stroke ("pink")
    circle (50,50,90)
    circle (550,50,90)
    circle (50,350,90)
    circle (550,350,90)
    fill ("white")
    stroke ("white")
    rect (50,350,500,20)
    rect (50,50,500,20)
    rect (50,50,20,300)
    rect (550,50,20,300)
    
}

function take_snapshot() {
    save ("pic.png")
}