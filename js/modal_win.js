document.addEventListener("DOMContentLoaded", function() {
    var modalWinElements = document.querySelectorAll('.modal_win');

    modalWinElements.forEach(function(element) {
        element.addEventListener('click', function() {
            alert('Элемент с классом modal_win был нажат!');
        });
    });
});