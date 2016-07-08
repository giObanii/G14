function tg_likes_system() {
var Copyrights = '©Copyright by giObanii. ©toxigeek.com. All Rights Reserved';
if (like_version === 'phpbb2' || like_version === 'PHPBB2') {
//PHPBB2
$(".vote").each(function () {
$(this).find(".vote-button:first a").each(function () {
$(this).replaceWith('<div id="tgLike"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><a href="'+$(this).attr("href")+'"><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</a></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLike">0</span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>').click(function () {
$.get($(this).attr("href"))
});
}); 	
$(this).closest(".post").find(".postbody div.clear").after($(this).find(".vote-button:first #tgLike")).closest(".post").find(".postbody div.clear").after($(this).find(".vote-bar").length ? '<div id="tgLikes"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><button><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</button></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLikes"></span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>' : '');
$(this).find(".vote-bar").each(function () {$(this).closest(".post").find(".LikeButtonLike").replaceWith('<span class="LikeButtonLikes"></span>');});
$(this).closest(".post").find(".LikeButtonLikes").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");                  
$(this).closest(".post").find("#tgLike").each(function () { $(this).closest("..postbody").find('#tgLikes').remove(); });	
$(this).remove();
});
} else if (like_version === 'phpbb3' || like_version === 'PHPBB3') {
$(".vote").each(function () {
$(this).find(".vote-button:first a").each(function () {
$(this).replaceWith('<div id="tgLike"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><a href="'+$(this).attr("href")+'"><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</a></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLike">0</span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>').click(function () {
$.get($(this).attr("href"))
});
}); 	
$(this).closest(".post").find(".content").after($(this).find(".vote-button:first #tgLike")).closest(".post").find(".content").after($(this).find(".vote-bar").length ? '<div id="tgLikes"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><button><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</button></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLikes"></span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>' : '');
$(this).find(".vote-bar").each(function () {$(this).closest(".post").find(".LikeButtonLike").replaceWith('<span class="LikeButtonLikes"></span>');});
$(this).closest(".post").find(".LikeButtonLikes").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");                  
$(this).closest(".post").find("#tgLike").each(function () { $(this).closest(".content").find('#tgLikes').remove(); });	
$(this).remove();
});
} else if (like_version === 'punbb' || like_version === 'PUNBB') {
$(".vote").each(function () {
$(this).find(".vote-button:first a").each(function () {
$(this).replaceWith('<div id="tgLike"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><a href="'+$(this).attr("href")+'"><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</a></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLike">0</span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>').click(function () {
$.get($(this).attr("href"))
});
}); 	
$(this).closest(".post").find(".postbody").after($(this).find(".vote-button:first #tgLike")).closest(".post").find(".postbody").after($(this).find(".vote-bar").length ? '<div id="tgLikes"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><button><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</button></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLikes"></span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>' : '');
$(this).find(".vote-bar").each(function () {$(this).closest(".post").find(".LikeButtonLike").replaceWith('<span class="LikeButtonLikes"></span>');});
$(this).closest(".post").find(".LikeButtonLikes").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");                  
$(this).closest(".post").find("#tgLike").each(function () { $(this).closest(".postmain").find('#tgLikes').remove(); });	
$(this).remove();
});
} else if (like_version === 'invision' || like_version === 'INVISION') {
$(".vote").each(function () {
$(this).find(".vote-button:first a").each(function () {
$(this).replaceWith('<div id="tgLike"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><a href="'+$(this).attr("href")+'"><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</a></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLike">0</span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>').click(function () {
$.get($(this).attr("href"))
});
}); 	
$(this).closest(".post").find(".post-entry").after($(this).find(".vote-button:first #tgLike")).closest(".post").find(".post-entry").after($(this).find(".vote-bar").length ? '<div id="tgLikes"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div title="" class="ButtonLike"><button><i class="ButtonLikeIcon img icon_like"></i>'+like_text+'</button></div></td><td><div class="LikeCountButton LikeCountNum"><span><span class="LikeButtonLikes"></span></span></div><div class="LikeCountButtonNub"><s></s><i></i></div></td></tr></tbody></table></div>' : '');
$(this).find(".vote-bar").each(function () {$(this).closest(".post").find(".LikeButtonLike").replaceWith('<span class="LikeButtonLikes"></span>');});
$(this).closest(".post").find(".LikeButtonLikes").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");                  
$(this).closest(".post").find("#tgLike").each(function () { $(this).closest(".post-entry").find('#tgLikes').remove(); });	
$(this).remove();
});
}
};
READY_LIKES ? tg_likes_system() : $(function () {
    tg_likes_system()
});