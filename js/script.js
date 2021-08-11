function showAus() {
    document.getElementsByClassName("aus-players")[0].style.display = "flex";
    document.getElementsByClassName("bd-players")[0].style.display = "none";
    document.getElementsByClassName("aus-btn")[0].style.backgroundColor = "rgba(128, 128, 128, 0.15)";
    document.getElementsByClassName("bd-btn")[0].style.backgroundColor = "white";
    document.getElementsByClassName("aus-btn")[0].style.fontWeight = "bold";
    document.getElementsByClassName("bd-btn")[0].style.fontWeight = "normal";
}
function showBd() {
    document.getElementsByClassName("bd-players")[0].style.display = "flex";
    document.getElementsByClassName("aus-players")[0].style.display = "none";
    document.getElementsByClassName("bd-btn")[0].style.backgroundColor = "rgba(128, 128, 128, 0.15)";
    document.getElementsByClassName("aus-btn")[0].style.backgroundColor = "white";
    document.getElementsByClassName("bd-btn")[0].style.fontWeight = "bold";
    document.getElementsByClassName("aus-btn")[0].style.fontWeight = "normal";
}

function setMarginTOp() {
    document.getElementById("photos").style.paddingTop="20px";
    document.getElementById("squads").style.paddingTop="20px";
    document.getElementById("schedule").style.paddingTop="20px";
}