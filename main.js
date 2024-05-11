function check()
{
    img = document.getElementById('captured_image');
    classify.classifier(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "happy")
            {
                document.getElementById("update_emoji").innerHTML = "&#128522;";
            }
        if(results[0].label == "sad")
            {
                document.getElementById("update_emoji").innerHTML = "&#128532;";
            }  
        if(results[0].label == "angry")
            {
                document.getElementById("update_emoji").innerHTML = "&#128548;";
            }
            if(results[1].label == "happy")
                {
                    document.getElementById("update_emoji").innerHTML = "&#128522;";
                }
            if(results[1].label == "sad")
                {
                    document.getElementById("update_emoji").innerHTML = "&#128532;";
                }  
                if(results[1].label == "angry")
                    {
                        document.getElementById("update_emoji").innerHTML = "&#128548;";
                    }
    }
    }
