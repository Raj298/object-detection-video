img="";
status="";
object=[];
function preload(){
img=loadImage('dog_cat.jpg')
}

function setup(){
canvas=createCanvas(640,420)
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Status:Detecting Objects";

}

function draw(){
image(img,0,0,640,420)
if(status!=""){
    for(i=0;i<object.length;i++){
        fill('#ff0000')
        percentage=floor(object[i].confidence*100)
text(object[i].label +" "+percentage+"%",object[i].x+20,object[i].y+20)

noFill()
stroke('#ff0000')
rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }

}

}
function modelLoaded(){
    console.log("modelLoaded")
    status="true"
    objectDetector.detect(img,gotResults)
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