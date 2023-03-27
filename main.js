noseX=0;
noseY=0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        
    }
}

function modelLoaded(){
    console.log('PoseNet is Intialized')
}

function draw(){
    image(video,0,0,300,300);
    //fill(0,240,84);
    //stroke(255,0,0)
    //circle(noseX,noseY,20);
    image(mustache,noseX-15,noseY+5,30,30);
    image(lipstick,noseX-15,noseY+20,30,30)
}

function take_snapshot(){
    save('myFilterImage.png');
}