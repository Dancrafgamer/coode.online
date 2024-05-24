document.addEventListener('DOMContentLoaded', function() {
    var alertBox = document.getElementById('alert');
    alertBox.classList.add('show');

    setTimeout(function() {
        alertBox.classList.remove('show');
    }, 1800);
});