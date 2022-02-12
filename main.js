function classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/G8Rm0doKz/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error, results){
    console.log('Go Result');
    }