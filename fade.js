$(document).ready(function () {
    window.addEventListener('resize', function() {
    if ($(window).width() < 700) {
        $('#stackednavbar').show();
        $("#navbar").hide()
    } else {
        $('#stackednavbar').hide();
        $("#navbar").show()
    }
    })
    $("#main").fadeIn(500);
    $('#main2').fadeIn(1500);
    $('#card1').fadeIn(1000);
    $('#card2').fadeIn(1500);
    $('#card3').fadeIn(2000);
    $('#card4').fadeIn(2500);
    $('#card5').fadeIn(3000);
    $('#card6').fadeIn(3500);
});