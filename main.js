function setup(){
yo=createCanvas(500,500);
yo.position(500,500);
camera=createCapture(VIDEO);
camera.hide();
andh="";
}
function draw(){
image( camera,0,0,500,500);
circle(100,50,80);fill(0,128,0);stroke(0,128,0)
}
function take_snapshot(){
    save("AG.png");
    }
