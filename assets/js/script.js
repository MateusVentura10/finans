$(document).ready(() => {
    $('.mobile').css('height', $(document).innerHeight() + 'px');
    $('.icon-hamburger').click( e => {
        $('.mobile').css({'right': '0', 'transition': '0.7s'});
    });
    $('.fechar').click( e => {
        $('.mobile').css({'right': '-100%', 'transition': '0.7s'});
    });
});