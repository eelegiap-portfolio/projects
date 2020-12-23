$(document).ready(function () {
    $('#footer').text('designed by paige lee, updated 12-23-20');

    $('head').append('<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff"></meta>');
    
    window.addEventListener('resize', function() {
    if ($(window).width() < 700) {
        $('#stackednavbar').show();
        $("#navbar").hide()
    } else {
        $('#stackednavbar').hide();
        $("#navbar").show()
    }
    })
    cardhover(1);
    cardhover(2);
    cardhover(3);
    cardhover(4);
    cardhover(5);
    cardhover(6);

    function cardhover(i) {
        $("#card" + i).mouseover(function() {
            $('#card'+ i + ' .card-box').show();
        });
        $("#card" + i).mouseout(function() {
            $('#card'+ i + ' .card-box').hide();
        });
    };

    $("#main").fadeIn(500);
    $('#main2').fadeIn(1500);
    $('#card1').fadeIn(1000);
    $('#card2').fadeIn(1500);
    $('#card3').fadeIn(2000);
    $('#card4').fadeIn(2500);
    $('#card5').fadeIn(3000);
    $('#card6').fadeIn(3500);
});