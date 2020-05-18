$(document).ready(function() {

    $('.hamburger').click(() => {
        $('.hamburger').toggleClass("is-active");

        let container = $('.menu-container');
        if (container.hasClass('is-active')) {
            container.toggleClass("hide");
            container.bind('animationend', () => {
                if (container.hasClass('hide')) {
                    container.toggleClass("hide");
                    container.toggleClass("is-active");
                }
            });
        } else {
            container.toggleClass("is-active");
        }
    });

    $('.btn-shop').click(() => {
        $('.details-container').toggleClass("is-active");
    });

    $('.btn-exit').click(() => {
        $('.btn-exit').toggleClass("is-active");
        let container = $('.details-container');
        container.toggleClass("hide");
        container.bind('animationend', () => {

            if (container.hasClass('hide')) {
                $('.btn-exit').toggleClass("is-active");
                container.toggleClass("hide");
                container.toggleClass("is-active");
            }
        });
    });




});