Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
prediction_1="";
prediction_2="";
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CXbU1CaSW/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_hand_name").innerHTML=results[0].label;
        document.getElementById("result_hand_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        
        if(prediction_1=="victory"){
            document.getElementById("update_hand").innerHTML="&#9996;";
        }
        if(prediction_1=="best"){
            document.getElementById("update_hand").innerHTML="&#128077;";
        }
        if(prediction_1=="amazing"){
            document.getElementById("update_hand").innerHTML="&#128076;";
        }
        
        
        if(prediction_2=="victory"){
            document.getElementById("update_hand2").innerHTML="&#9996;";
        }
        if(prediction_2=="best"){
            document.getElementById("update_hand2").innerHTML="&#128077;";
        }
        if(prediction_2=="amazing"){
            document.getElementById("update_hand2").innerHTML="&#128076;";
        }
        
        
    }
}