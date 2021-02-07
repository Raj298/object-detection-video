img="";
status="";
object=[];
function preload(){
img=loadImage('dog_cat.jpg')

}

function setup(){
canvas=createCanvas(380,380)
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Status:Detecting Objects";
video=createCapture(VIDEO)
video.hide()
video.size(380,380)
}

function draw(){
image(video,0,0,380,380)
if(status!=""){
    r=random(255)
    g=random(255)
    b=random(255)
    objectDetector.detect(video,gotResults)
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="Status: Object Detected"
        document.getElementById("number_of_objects").innerHTML="Number of objects detected:" +object.length
        fill(r,g,b)
        percentage=floor(object[i].confidence*100)
text(object[i].label +" "+percentage+"%",object[i].x+20,object[i].y+20)

noFill()
stroke(r,g,b)
rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }

}

}
function modelLoaded(){
    console.log("modelLoaded")
    status="true"
   
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
      object=results;

    }
}