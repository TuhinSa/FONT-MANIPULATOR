right_wristx = 0;
left_wristx = 0;
diffence = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(700, 600);
    canvas = createCanvas(700,700);
    canvas.position(700,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses); 

}
function modelLoaded(){

    console.log("Posenet is initialized");
    
    }
    function draw(){
        background("red");
       
    
    
    
    }
    function gotPoses(results)
{
if(results.length > 0){
    console.log(results);
    left_wristx = results[0].pose.leftWrist.x;
    right_wristx = results[0].pose.rightWrist.x;
    difference = floor(left_wristx - right_wristx);
    console.log("left WristX ="+ left_wristx + "Right WristX"  + right_wristx);
     textSize(difference);
     text("hello",150,200 )
     document.getElementById("result").innerHTML = difference;
}


}
