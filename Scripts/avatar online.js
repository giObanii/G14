var AVATAR_ONLINE = false;

var READY_AVATAR = false;
$(function () {
READY_AVATAR = true
});

function tg_avatar() {
if (window.localStorage) {
var a = function (a) {
	
$('.avatar-online.user-'+a).html('<img src="'+c(a)+'" />');
}, c = function (c) {
if (localStorage.getItem("t_ava" + c) < +new Date - 864E5 || "http://goo.gl/Egevj" == localStorage.getItem("d_ava" + c) && localStorage.getItem("t_ava" + c) < +new Date - 6E4) localStorage.setItem("d_ava" + c, "http://goo.gl/Egevj"), $.get("/u" + c, function (b) {
localStorage.setItem("t_ava" + c, +new Date);
localStorage.setItem("d_ava" + c, $("#profile-advanced-right .module:first div img:first,.forumline td.row1.gensmall:first > img, .frm-set.profile-view.left dd img,dl.left-box.details:first dd img, .row1 b .gen:first img, .real_avatar img", b).first().attr("src") || "http://goo.gl/Egevj");
a(c)
});
return localStorage.getItem("d_ava" + c)
}, b = {};

if (AVATAR_ONLINE === true) {
	//AVATAR DEL USER EN OLNINE
    $('#onlinelist p').eq(1).find('a').each(function () {
        b[$(this).attr('href').substr(2)]=1;
        $(this).before('<a class="avatar-online user-'+$(this).attr('href').substr(2)+'" href="/u'+$(this).attr('href').substr(2)+'"></a>');
    }); 
};
				
for (i in b) a(i);
}
};
READY_AVATAR ? tg_avatar() : $(function () {
    tg_avatar()
});



//////////////////////////////////////////


$(function () {
if (window.localStorage) {
var a = function (a) {
$('.avatar-online.user-'+a).html('<img src="'+c(a)+'" />');
}, c = function (c) {
if (localStorage.getItem("t_ava" + c) < +new Date - 864E5 || "http://goo.gl/Egevj" == localStorage.getItem("d_ava" + c) && localStorage.getItem("t_ava" + c) < +new Date - 6E4) localStorage.setItem("d_ava" + c, "http://goo.gl/Egevj"), $.get("/u" + c, function (b) {
localStorage.setItem("t_ava" + c, +new Date);
localStorage.setItem("d_ava" + c, $("#profile-advanced-right .module:first div img:first,.forumline td.row1.gensmall:first > img, .frm-set.profile-view.left dd img,dl.left-box.details:first dd img, .row1 b .gen:first img, .real_avatar img", b).first().attr("src") || "http://goo.gl/Egevj");
a(c)
});
return localStorage.getItem("d_ava" + c)
}, b = {};

	//AVATAR DEL USER EN OLNINE
    $('.module .content a[href*="/u"]').each(function () {
        b[$(this).attr('href').substr(2)]=1;
        $(this).closest('.content').find('a[href*="/t"]').before('<a class="avatar-online user-'+$(this).attr('href').substr(2)+'" href="/u'+$(this).attr('href').substr(2)+'"></a>');
    }); 
				
for (i in b) a(i);
}
});

     