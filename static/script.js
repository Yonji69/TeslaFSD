document.addEventListener("DOMContentLoaded", function() {
    function showInfo(infoId, footerId) {
        setTimeout(function() {
            document.getElementById(infoId).style.opacity = 1;
            document.getElementById(infoId).style.transform = "translateY(0)";
        }, 0);

        setTimeout(function() {
            document.getElementById(footerId).style.opacity = 1;
            document.getElementById(footerId).style.transform = "translateY(0)";
        }, 1000);
    }

    showInfo("model-s-info", "model-s-footer");
    showInfo("model-3-info", "model-3-footer");
    showInfo("model-x-info", "model-x-footer");
    showInfo("model-y-info", "model-y-footer");
    showInfo("cyber-info", "cyber-footer");
    showInfo("experience-tesla-info", "experience-tesla-footer");
});
