














///////// PUNBB
$(function() {
$('.topic .post').not('.topic .post:first').each(function() {
$(this).closest('.main.paged').addClass('topic-blog');
$(this).addClass('post-comments');
$(this).find('.user, .user-contact, .sig-content').hide();
$(this).find('.postmain').css('margin-left', '0');
$(this).find('.posthead').css('padding', '2px 4px').find('a').after('<br>');
$(this).find('.posthead').find('h2 a[href*="/t"]').css('margin-left', '-5px');
var ava = $(this).find('.user-basic-info a[href*="/u"]').html();
var autor = $(this).find('.username').html();
$(this).find('.posthead').find('h2').addClass('topic-comments').append(' por '+autor+'').before('<div class="blog_comment-avatar">'+ava+'<br></div>');
});
});


$(function() {
$('.topic .post').not('.topic .post:first').each(function() {
$(this).closest('.main.paged').addClass('topic-blog');
('©Copyright by giObanii. ©toxigeek.com. All Rights Reserved');
$(this).find('.posthead').find('a').after('<br>');
var ava = $(this).find('.user-basic-info a[href*="/u"]').html();
var autor = $(this).find('h4.username').html();
$(this).find('.posthead').find('h2').append(' por '+autor+'').before('<div class="blog_comment-avatar">'+ava+'<br></div>');
});
});

$(function (){$(".topic .post")["not"](".topic .post:first")["each"](function (){$(this)["closest"](".main.paged")["addClass"]("topic-blog");("©Copyright by giObanii. ©toxigeek.com. All Rights Reserved");$(this)["find"](".posthead")["find"]("a")["after"]("\x3Cbr\x3E");var J=$(this)["find"](".user-basic-info a[href*=\x22/u\x22]")["html"]();var V=$(this)["find"](".username")["html"]();$(this)["find"](".posthead")["find"]("h2")["append"](" por "+V+"")["before"]("\x3Cdiv class=\x22blog_comment-avatar\x22\x3E"+J+"\x3Cbr\x3E\x3C/div\x3E");} );} );

$(function(){$('.topic .post').not('.topic .post:first').each(function(){$(this).closest('.main.paged').addClass('topic-blog');$(this).find('.posthead').find('a').after('<br>');var t=$(this).find('.user-basic-info a[href*="/u"]').html();var K=$(this).find('.username').html();$(this).find('.posthead').find('h2').append(' por '+K+'').before('<div class="blog_comment-avatar">'+t+'<br></div>');});});


///////////////////////////////////


//////////PHPBB3
$(function() {
$('.post').not('.post:first').each(function() {
$(this).find('h2.topic-title').wrap('<div class="h3"></div>');
});
});


