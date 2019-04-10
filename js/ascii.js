
const NORMAL_SPEED = 230;
const TURBO_SPEED = 40;
let duration = NORMAL_SPEED;
let objInterval;
let currentFrame = 0;
let presetAnimation;

window.onload = function () {
    document.getElementById("start").onclick = onStart;
    document.getElementById("stop").onclick = onStop;
    document.getElementById("animation").onchange = onChangeAnimation;

    document.getElementById("fontsize").onchange = onChangeSize;
    document.getElementById("turbo").onchange = onCheckSpeed;
}

function onStart(){
    if(presetAnimation !== "changeanimation"){
        presetAnimation = document.getElementById('text-area').value;
    }
    //generateAnimation();
    objInterval = setInterval(generateAnimation, duration);
}

function generateAnimation(){
    let animationoption = document.getElementById('animation');
    let whichOne = animationoption.options[animationoption.selectedIndex].value;
    if(ANIMATIONS[whichOne] !== null && ANIMATIONS[whichOne] !==""){
        let arrAnimation = ANIMATIONS[whichOne].split("=====\n");
        if(presetAnimation !== null && presetAnimation !== "changeanimation"){
            arrAnimation.unshift(presetAnimation);
        }
        if(currentFrame >= arrAnimation.length){
            currentFrame = 0;
        }
        document.getElementById('text-area').value = arrAnimation[currentFrame++];
        disableAnimation(true);
    } else if(ANIMATIONS[whichOne] === null){

    } else{
        clearInterval(objInterval);
    }
}

function disableAnimation(isStart){
    document.getElementById("start").disabled = isStart;
    document.getElementById("stop").disabled = !isStart;
    document.getElementById("animation").disabled = isStart;
}

function onChangeAnimation() {
    document.getElementById("text-area").value = "";
    presetAnimation = "";
}

function onStop(){
    disableAnimation(false);
    clearInterval(objInterval);
    if(presetAnimation !== null && presetAnimation !=="" && presetAnimation !== "changeanimation"){
        document.getElementById('text-area').value = presetAnimation;
    }
}

function onChangeSize(){
    let size;
    size = document.getElementById("fontsize").value;
    if(size === "Tiny") size = "x-small";
    if(size === "Extra Large") size ="x-large";
    if(size === "XXL") size = "xx-large";

    document.getElementById("text-area").style.fontSize = size;
}

function onCheckSpeed(){
    let valueChecked = document.getElementById("turbo").checked;
    duration = valueChecked ? TURBO_SPEED : NORMAL_SPEED;
    let textarea = document.getElementById("text-area").value;
    //if(textarea !== null && textarea === ""){
        clearInterval(objInterval);
        objInterval = setInterval(generateAnimation, duration);
    //}
}