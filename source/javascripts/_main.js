// Message From Author

console.log("Message from the author: Thanks for visiting! If you have any tips on how I can improve this site, please email them to hello@thesamwillis.com.");

$.jribbble.getShotsByPlayerId('thesamwillis', function (playerShots) {
    var html = [];

    $.each(playerShots.shots, function (i, shot) {
        html.push('<a href="' + shot.url + '" class="item col-sm-3"><div class="tag"><h3>' + shot.title + '</h3></div>');
        html.push('<img src="' + shot.image_url + '" ');
        html.push('alt="' + shot.title + '"></a>');
    });

    $('#shotsByPlayerId').html(html.join(''));
}, {page: 1, per_page: 12});


if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var lastScrollTop = 0;

    $(window).scroll(function() {

        var st = $(this).scrollTop();

        if (st > lastScrollTop){
            $('.header-fade').css({
                marginTop: '+=' + ((st - lastScrollTop)/2.5).toFixed(),
                opacity: (1-((lastScrollTop/100)/6)).toFixed(2)
            });
        } else {
            $('.header-fade').css({
                marginTop: '-=' + ((lastScrollTop - st)/2.5).toFixed(),
                opacity: (1-((lastScrollTop/100)/6)).toFixed(2)
            });
        }

        lastScrollTop = st;
    });
}
