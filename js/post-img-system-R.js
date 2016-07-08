//llamada del script en foro
var READY_POSTIMG = false;
$(function () {
    READY_POSTIMG = true
});
$.getScript('http://scripts-giobanii.googlecode.com/svn/trunk/js/post-img-system.js');

//script alojado
function tg_postimage() {
if (window.localStorage) {
var a = function (a) {
$('.post_image.t'+a).html('<img src="'+c(a)+'" />')
}, c = function (c) {
('©Copyright by giObanii. ©toxigeek.com. All Rights Reserved');
if (localStorage.getItem("timg_tg" + c) < +new Date - 864E5 || "http://goo.gl/jXUV3" == localStorage.getItem("dtimg_tg" + c) && localStorage.getItem("timg_tg" + c) < +new Date - 6E4) localStorage.setItem("dtimg_tg" + c, "http://goo.gl/jXUV3"), $.get("/t" + c, function (b) {
localStorage.setItem("timg_tg" + c, +new Date);
localStorage.setItem("dtimg_tg" + c, $(".row1 table .postbody img,.postbody .content img,.post-entry .entry-content img,.postbody .post-entry img", b).first().attr("src") || "http://goo.gl/jXUV3");
a(c)
});
return localStorage.getItem("dtimg_tg" + c)
}, b = {};
	
$('.topic-title .topictitle, .ipbtable .topictitle').each(function () {
 b[$(this).attr('href').substr(2)] = 1;
  $(this).closest('td,dd').prepend('<div class="post_image t' + $(this).attr('href').substr(2) + '"></div>')
    }); 
				
for (i in b) a(i);
}
};
READY_POSTIMG ? tg_postimage() : $(function () {
    tg_postimage()
});



/////// PRIEMRA VERSION
function tg_postimage() {
    if (!window.localStorage) return;
    var default_img = '';
    var caching_time = 24 * 60 * 60 * 1000;
    var caching_error = 60 * 1000;
    var set_postimg = function (id) {
        $('.post_image.t' + id).html('<img src="' + get_postimg(id) + '" />')
    };
    var get_postimg = function (id) {
        if (localStorage.getItem('timg_tg' + id) < +new Date - caching_time || (localStorage.getItem('dtimg_tg' + id) == default_img && localStorage.getItem('timg_tg' + id) < +new Date - caching_error)) {
            localStorage.setItem('dtimg_tg' + id, default_img);
            ('©Copyright by giObanii. ©toxigeek.com. All Rights Reserved');
            $.get('/t' + id, function (d) {
                localStorage.setItem('timg_tg' + id, +new Date);
                localStorage.setItem('dtimg_tg' + id, $('.row1 table .postbody img,.postbody .content img,.post-entry .entry-content img,.postbody .post-entry img', d).first().attr('src') || default_img);
                set_postimg(id)
            })
        }
        return localStorage.getItem('dtimg_tg' + id)
    };
    var to_replace = {};
    $('.topic-title .topictitle, .ipbtable .topictitle').each(function () {
        to_replace[$(this).attr('href').substr(2)] = 1;
        $(this).closest('td,dd').prepend('<div class="post_image t' + $(this).attr('href').substr(2) + '"></div>')
    });
    for (i in to_replace) {
        set_postimg(i)
    }
};
READY_POSTIMG ? tg_postimage() : $(function () {
    tg_postimage()
});


