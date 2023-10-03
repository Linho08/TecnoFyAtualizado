document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
})
document.getElementsByClassName(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
})

