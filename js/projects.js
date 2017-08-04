$(document).ready(function () {
    $('.button').click(function() {
        window.open($(this).val());
    });
    
    $('.flip').click(function () {
        $(this).next().slideToggle('fast');
    });
});
