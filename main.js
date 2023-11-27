narizX = 0;
narizY = 0;


function preload(){
    gorro_santa = loadImage('https://i.postimg.cc/RFMKQHPS/Captura-de-pantalla-2023-11-27-161627.png')
    cuernos_rodolfo = loadImage('https://i.postimg.cc/8C4TWg8J/rodolfo.png')

}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet esta inicializado');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        narizX =  + results[0].pose.nose.x;
        narizY =  + results[0].pose.nose.y;
        console.log("ojo izquierdo x = " + results[0].pose.leftEye.x);
        console.log("ojo izquierdo y = " + results[0].pose.leftEye.y);
    }
}


function draw(){
    image(video, 0, 0, 350, 350);
    //image(gorro_santa, narizX-120, narizY-180, 180, 180)
    image(cuernos_rodolfo, narizX-60, narizY-220, 110, 190)
   
}


function take_snapshot(){
    save('miImagen.png');
}