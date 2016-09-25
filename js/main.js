/* $(function() {
    window.setTimeout(unhide,500);
});
function unhide() {
    $('.shell-inv').removeClass('shell-inv')
}
*/
$(document).ready(function(){
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                var targetOffset = $target.offset().top - 100;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
    $(".participants b").click(function(e) {
        e.preventDefault();
        var p = $(this).closest(".participants")
        p.toggleClass("shown");
        p.find("table").toggle();
    });
});
