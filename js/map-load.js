for (let i = 1; i < 3; i++) {
    let mapScript = document.getElementById('map-script-' + i);
    let mapOverlay = document.querySelector('.loading-overlay.load' + i);

    mapScript.onload = function() {
        setTimeout(function() {
            mapOverlay.remove();
        }, 5000);
    };
}
