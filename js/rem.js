function fn(){
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontsize=winW/7.5 + "px";
}
fn();
window.onresize=fn;