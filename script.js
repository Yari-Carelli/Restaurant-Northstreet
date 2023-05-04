/* Navbar scroll */
$(function(){

    var nav = $('.navbar'),
        doc = $(document),
        win = $(window);

    win.scroll(function() {

        if (doc.scrollTop() > 80) {
            nav.addClass('scrolled');
        } else {
            nav.removeClass('scrolled');
        }

    });

    win.scroll();

});