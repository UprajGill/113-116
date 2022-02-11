nosex=0;
nosey=0;
function preload(){
img=loadImage('https://i.postimg.cc/jdzZj59L/mustache.png');
}
function setup(){
canvas=createCanvas(450,450);
canvas.center();
video=createCapture(VIDEO);
video.size(450,450);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,450,450);
image(img,nosex,nosey,80,45);
}
function snapshot(){
save('snapshot.png');
}
function modelLoaded(){
console.log("posseNet has been Initialized!")
}
function gotPoses(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x-40;
nosey=results[0].pose.nose.y;
}
}