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


/* ***** Btn More-Less ***** */
$("#more").click(function(){
    var $this = $(this);
    $this.toggleClass('more');
    if($this.hasClass('more')){
        $this.text('More');         
    } else {
        $this.text('Less');
    }
});