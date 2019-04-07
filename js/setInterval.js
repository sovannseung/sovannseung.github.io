var timer = null;

window.onload = function () {
    var btn = document.getElementById("clickbtn");

    btn.onclick = function () {
        if(timer == null){
            timer = setInterval(function () {
                document.getElementById("output").innerText += "Ruby! ";
            }, 200)
        }
        else{
            clearInterval(timer);
            timer = null;
        }
    }
}