function changeColor(color){
    var element = document.getElementById("topmenu");
    element.style.backgroundColor = color;
}

window.onload=function(){
var element = document.getElementById("topmenu");
firstcolor = window.getComputedStyle(element).backgroundColor;
console.log("Первый цвет:" + firstcolor + element);
}