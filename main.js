Webcam.set(
{
    width:350 ,
    height:350,
    img_format: 'png' ,
    png_quality: 90
} 
) ;

Webcam.attach('#camera') ;

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="resultImage" src='+data_uri+'>'
    } ) ;
}
console.log("ml5 version is:" + ml5.version) ;

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SrXkEDKTF/model.json' , modelLoaded) ;

function modelLoaded()
{
    console.log("Model is loaded now.")
}

function identify_img()
{
    image = document.getElementById("resultImage") ;
    classifier.classify(image, identify) ;
}
function identify(error, results)
{
    if(error) {
        console.error(error) ;
    }
    else{console.log(results) ;
    document.getElementById("object_name").innerHTML = results[0].label ;
    //document.getElementById("accuracy_value").innerHTML = results[0].confidence ;
    var percentage_val = results[0].confidence.toFixed(2) * 100 ;
    document.getElementById("accuracy_value").innerHTML = percentage_val + " %" ;
    }
}
