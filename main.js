function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200,150)
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResults)
}

function modelLoaded(){
  console.log("ModelLoaded!");
}

function gotResults(error,results){
  if(error){
  console.error(error)
  }else{
    console.log(results)
    document.getElementById("result_object").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(4);
  }
}





