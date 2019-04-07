window.onload = function () {
    document.getElementById("btnBigger").onclick = function () {
        //alert("Hello, world!");
        document.getElementById("txtArea").style.fontSize = "12pt";

        setInterval(function () {
            let curFont = parseInt(document.getElementById("txtArea").style.fontSize);
            console.log(curFont);
            document.getElementById("txtArea").style.fontSize = curFont + 2 + "pt";
        },500);
    }

    let chk = document.getElementById("chkBling");
    chk.onchange = function () {
        let txt = document.getElementById("txtArea");
        if(chk.checked){
            txt.style.fontWeight = "bold";
            txt.style.color = "green";
            txt.style.textDecoration = "underline";

            //document.getElementById("body").style.backgroundImage = 'url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)';
        }
        else{
            txt.style.fontWeight = "normal";
            txt.style.color = "black";
            txt.style.textDecoration = "";
        }
    }
}