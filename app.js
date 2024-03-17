document.addEventListener("DOMContentLoaded", function() {
    var paragraph = document.getElementById("clickable-paragraph");
    paragraph.addEventListener("click", function() {
        this.classList.toggle("clicked");
    });
});
