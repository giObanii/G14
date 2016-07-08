/*
 * A New Like/Dislike system for Forumotion Boards.
 * ©Copyright by AvacWeb. All Rights Reserved.
 * .
 */
function lglike(b,a){var d=a.innerHTML;a.innerHTML="Loading...";a.onclick="#";$.get(b,function(){a.className+=" LGnovote";a.innerHTML=d;var c=a.nextSibling,b=parseInt(/\d+/.exec(c.innerHTML)[0])+1;c.innerHTML=c.innerHTML.replace(/\d+/,b)})};

function init_lg_like_system() {
    var x = $('.vote');
    for (var i = 0, l = x.length; i < l; i++) {
        var vote = x[i],
            count = 0,
            plus = 0;
        var bar = $('.vote-bar', vote)[0];
        var button = $('.vote-button', vote)[0];
        if (bar) {
            var info = bar.title.match(/\d+/g);
            count = info[0];
            var percent = info[1];
            plus = Math.round(parseInt(percent) * parseInt(count)) / 100;
        }
        button = button ? '<span onclick="lglike(\'' + button.firstChild.href + '\',this);" class="LGlike">' + vote_singular + '</span>' : '<span class="LGlike LGnovote">' + vote_singular + '</span>';

        var votes_text = '<span class="LGlikecount">' + plus + ' ' + (plus == 1 ? vote_singular : vote_plural) + '</span>';
        if (like_version === 'phpbb3' || like_version === 'PHPBB3') {
            $('.corners-bottom', vote.parentNode.parentNode).before('<div class="LGvote" style="margin:3px">' + button + votes_text + '</div>');
        } else if (like_version === 'invision' || like_version === 'Invision' || like_version === 'INVISION') {
            $(vote.parentNode.parentNode.parentNode.nextSibling.lastChild).prepend('<li><div class="LGvote">' + button + votes_text + '</div></li>');
        } else if (like_version === 'punbb' || like_version === 'PUNBB') {
            $('.postfoot', vote.parentNode.parentNode.parentNode.parentNode).before('<div class="LGvote" style="margin:3px">' + button + votes_text + '</div>');
        } else if (like_version === 'phpbb2' || like_version === 'PHPBB2') {
            $('table div.signature_div').before('<div class="LGvote" style="margin:3px">' + button + votes_text + '</div>');
        }
    }
    x.remove();
};

if (DOM_IS_READY == true) {
    init_lg_like_system();
} else {
    $(function () {
        init_lg_like_system();
    });
}