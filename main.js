
function start_classification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelready);
}
function modelready(){
classifier.classify(gotresult);
}
dog = 0;
cat = 0;
function gotresult(error,results){
console.log('gotresult');
if(error){
console.error(error);
}
else{
console.log(results);
random_number_r = Math.floor(Math.random()* 255) + 1;
random_number_g = Math.floor(Math.random()* 255) + 1;
random_number_b = Math.floor(Math.random()* 255)+ 1;
document.getElementById("result_label").innerHTML = "Detected voices of - " + results[0].label;
document.getElementById("result_count").innerHTML = "Detected Dog - " + dog + "Detected Cat -" + cat;
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
update = document.getElementById("dog");
if(results[0].label == "barking"){
update.src = "doggie.jpg";
dog = dog+1;
}
else if (results[0].label == "Meowing")
 { update.src = 'cat.jpg';
 cat = cat + 1; 
}
}
}
