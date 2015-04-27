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