noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);

poseNet.on("pose",gotPoses);
}


function modelLoaded(){
    console.log("poseNet is initalized");
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,80,80);
}

function take_snapshot(){
    save("myimage.png");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
noseX=noseX-40;
noseY=noseY-10;
}
}