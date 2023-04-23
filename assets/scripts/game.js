$(document).ready(function () {
    $('#rules').hide();
    $('#game').hide();
    $('#rules-button').click(function() {
        $('#first-paint').hide();
        $('#rules').show();
    });
    $('#start-button').click(function() {
        $('#rules').hide();
        $('#game').show();
    });
});

$(document).ready(function () {
    $('#start-button').click(function() {
        $('#rules').hide();
    });
});