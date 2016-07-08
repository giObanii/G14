/*
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('g R(){12 13=\'©14 15 16. ©17.18. 19 1a 1b\';j===\'1c\'||j===\'1d\'?$(".4").t(g(){$(2).3(".4-k:b a").l(\'<u v="\'+w+\'" x="y!" m="z n A!" />\').B(g(){$.C($(2).o("D"))});$(2).5(".6").3(".6-T a:b").s($(2).3(".4-k:b a")).5(".6").3(".f i.1e").s($(2).3(".4-c").d?\'<i e="E"> F G <7 e="p-8"></7> H I J a <7 e="8-q"></7> K n 6.</i>\':\'\');$(2).5(".6").3(".f .p-8").h($(2).3(".4-c").d?$(2).3(".4-c").o("m").L(/^.*\\(([0-9]*) .*?\\)$/,"$1"):"");$(2).5(".6").3(".f .8-q").h($(2).5(".6").3("7.U M").d?$(2).5(".6").3("7.U M").l():"");$(2).N()}):j===\'1f\'||j===\'1g\'?$(".4").t(g(){$(2).3(".4-k:b a").l(\'<u v="\'+w+\'" x="y!" m="z n A!" />\').B(g(){$.C($(2).o("D"))});$(2).5(".f").3("1h.1i-V O:b").s("<O />").h($(2).3(".4-k:b a")).5(".f").3(".W.1j").S($(2).3(".4-c").d?\'<i e="E"> F G <7 e="p-8"></7> H I J a <7 e="8-q"></7> K n 6.</i>\':\'\');$(2).5(".f").3(".p-8").h($(2).3(".4-c").d?$(2).3(".4-c").o("m").L(/^.*\\(([0-9]*) .*?\\)$/,"$1"):"");$(2).5(".f").3(".8-q").h($(2).5(".6").3(".r X P M").d?$(2).5(".6").3(".r X P M").l():"");$(2).N()}):j===\'1k\'||j===\'1l\'?$(".4").t(g(){$(2).3(".4-k:b a").l(\'<u v="\'+w+\'" x="y!" m="z n A!" />\').B(g(){$.C($(2).o("D"))});$(2).5(".6").3(".6-1m .1n-V O:b").s("<O />").h($(2).3(".4-k:b a")).5(".6").3(".6-Q").S($(2).3(".4-c").d?\'<i e="E"> F G <7 e="p-8"></7> H I J a <7 e="8-q"></7> K n 6.</i>\':\'\');$(2).5(".f").3(".p-8").h($(2).3(".4-c").d?$(2).3(".4-c").o("m").L(/^.*\\(([0-9]*) .*?\\)$/,"$1"):"");$(2).5(".f").3(".8-q").h($(2).5(".6").3(".r .r-Y P a:Z").d?$(2).5(".6").3(".r .r-Y P a:Z").l():"");$(2).N()}):j===\'1o\'||j===\'1p\'?$(".4").t(g(){$(2).3(".4-k:b a").l(\'<u v="\'+w+\'" x="y!" m="z n A!" />\').B(g(){$.C($(2).o("D"))});$(2).5(".6").3(".1q .6-T a:b").s($(2).3(".4-k:b a")).5(".6").3(".Q-W").S($(2).3(".4-c").d?\'<i e="E"> F G <7 e="p-8"></7> H I J a <7 e="8-q"></7> K n 6.</i>\':\'\');$(2).5(".6-Q").3(".p-8").h($(2).3(".4-c").d?$(2).3(".4-c").o("m").L(/^.*\\(([0-9]*) .*?\\)$/,"$1"):"");$(2).5(".6-Q").3(".8-q").h($(2).5(".f").3(".10 .11").d?$(2).5(".f").3(".10 .11").l():"");$(2).N()}):1r};1s?R():$(g(){R()});',62,91,'||this|find|vote|closest|post|span|thanks|||first|bar|length|class|postbody|function|append|div|thanks_version|button|html|title|este|attr|cant|author|postprofile|before|each|img|src|thanks_image|alt|Gracias|Agradecer|Post|click|get|href|allthanks|En|total|usuarios|han|agradecido|por|replace|strong|remove|li|dt|entry|tg_thanks_system|after|options|name|icons|content|dl|details|last|user|username|var|Copyrights|Copyright|by|giObanii|toxigeek|com|All|Rights|Reserved|phpbb2|PHPBB2|clear|phpbb3|PHPBB3|ul|profile|clearfix|invision|INVISION|footer|posting|punbb|PUNBB|postfoot|null|DOM_IS_READY'.split('|'),0,{}))
*/


//New Basic Thanks System by toxigeek.com!
var thanks_version = 'Version_Foro';
var thanks_image = 'url_imagen_thanks';

var DOM_IS_READY = false;
$(function () {
    DOM_IS_READY = true
});

function tg_thanks_system() {
	
var Copyrights = '©Copyright by giObanii. ©toxigeek.com. All Rights Reserved';
var $thanks = '<span class="cant-thanks"></span>';
var $author = '<span class="thanks-author"></span>';
var $image = '<img src="'+thanks_image+'" alt="Muchas Gracias!" title="Muchas Gracias" class="tg_thanks" />';

if (thanks_version === 'phpbb2' || thanks_version === 'PHPBB2') {
	$('.vote').each(function () {
    $(this).find('.vote-button:first a').html(''+$image+'').click(function () {
    $.get($(this).attr('href'));
    });
    $(this).closest('.post').find('.post-options a:first').before($(this).find('.vote-button:first a')).closest('.post').find('.postbody div.clear').before($(this).find('.vote-bar').length ? '<div class="allthanks">En total '+$thanks+' usuarios han agradecido a '+$author+' por este post.</div>' : '');
    $(this).closest('.post').find('.postbody .cant-thanks').append($(this).find('.vote-bar').length ? $(this).find('.vote-bar').attr('title').replace(/^.*\(([0-9]*) .*?\)$/, '$1') : '');
    $(this).closest('.post').find('.postbody .thanks-author').append($(this).closest('.post').find('span.name strong').length ? $(this).closest('.post').find('span.name strong').html() : '');
    $(this).remove();
    });
} else if (thanks_version === 'phpbb3' || thanks_version === 'PHPBB3') { 
	$('.vote').each(function () {
    $(this).find('.vote-button:first a').html(''+$image+'').click(function () {
    $.get($(this).attr('href'));
    });
    $(this).closest('.postbody').find('ul.profile-icons li:first').before('<li />').append($(this).find('.vote-button:first a')).closest('.postbody').find('.content.clearfix').after($(this).find('.vote-bar').length ? '<div class="allthanks">En total '+$thanks+' usuarios han agradecido a '+$author+' por este post.</div>' : '');
    $(this).closest('.postbody').find('.cant-thanks').append($(this).find('.vote-bar').length ? $(this).find('.vote-bar').attr('title').replace(/^.*\(([0-9]*) .*?\)$/, '$1') : '');
    $(this).closest('.postbody').find('.thanks-author').append($(this).closest('.post').find('.postprofile dl dt strong').length ? $(this).closest('.post').find('.postprofile dl dt strong').html() : '');
    $(this).remove();
    });
} else if (thanks_version === 'invision' || thanks_version === 'INVISION') { 
	$('.vote').each(function () {
    $(this).find('.vote-button:first a').html(''+$image+'').click(function () {
    $.get($(this).attr('href'));
    });
    $(this).closest('.post').find('.post-footer .posting-icons li:first').before('<li />').append($(this).find('.vote-button:first a')).closest('.post').find('.post-entry').after($(this).find('.vote-bar').length ? '<div class="allthanks">En total '+$thanks+' usuarios han agradecido a '+$author+' por este post.</div>' : '');
    $(this).closest('.postbody').find('.cant-thanks').append($(this).find('.vote-bar').length ? $(this).find('.vote-bar').attr('title').replace(/^.*\(([0-9]*) .*?\)$/, '$1') : '');
    $(this).closest('.postbody').find('.thanks-author').append($(this).closest('.post').find('.postprofile .postprofile-details dt a:last').length ? $(this).closest('.post').find('.postprofile .postprofile-details dt a:last').html() : '');
     $(this).remove();
    });
} else if (thanks_version === 'punbb' || thanks_version === 'PUNBB') { 
	$('.vote').each(function () {
    $(this).find('.vote-button:first a').html(''+$image+'').click(function () {
    $.get($(this).attr('href'));
    });
    $(this).closest('.post').find('.postfoot .post-options a:first').before($(this).find('.vote-button:first a')).closest('.post').find('.entry-content').after($(this).find('.vote-bar').length ? '<div class="allthanks">En total '+$thanks+' usuarios han agradecido a '+$author+' por este post.</div>' : '');
    $(this).closest('.post-entry').find('.cant-thanks').append($(this).find('.vote-bar').length ? $(this).find('.vote-bar').attr('title').replace(/^.*\(([0-9]*) .*?\)$/, '$1') : '');
    $(this).closest('.post-entry').find('.thanks-author').append($(this).closest('.postbody').find('.user .username').length ? $(this).closest('.postbody').find('.user .username').html() : '');
    $(this).remove();
	});
  };
};

DOM_IS_READY ? tg_thanks_system() : $(function () {
    tg_thanks_system()
});


$(function () {
	var $thanks = '<span class="cant-thanks"></span>';
	var $author = '<span class="thanks-author"></span>';
	var $image = '<img src="'+thanks_image+'" alt="Muchas Gracias!" title="Muchas Gracias" class="b_thanks" />';
	$('.vote').each(function () {
    $(this).find('.vote-button:first a').html(''+$image+'').click(function () {
    $.get($(this).attr('href'));
    });
    $(this).closest('.post').find('.postfoot .post-options a:first').before($(this).find('.vote-button:first a')).closest('.post').find('.entry-content').after($(this).find('.vote-bar').length ? '<div class="allthanks">'+message+'</div>' : '');
    $(this).closest('.post-entry').find('.cant-thanks').append($(this).find('.vote-bar').length ? $(this).find('.vote-bar').attr('title').replace(/^.*\(([0-9]*) .*?\)$/, '$1') : '');
    $(this).closest('.post-entry').find('.thanks-author').append($(this).closest('.postbody').find('.user .username').length ? $(this).closest('.postbody').find('.user .username').html() : '');
    $(this).remove();
	$('.post-options .b_thanks').each(function () {
    $(this).closest('.post').find('.codebox').replaceWith('<div class="allthanks">PRESIONA EL BOTON '+$image+' PARA VER EL CONTENIDO</div>');
    });
	});
});










//PHPBB2
$(document).ready(function () {
    $('.forumline tr .row3.over').prepend('<div class="avatar-index"><div>');
    $('.forumline tr .row3.over .avatar-index').each(function () {
        var profileUser = $(this).parent().children('span').children('span').children('strong').children('a').attr('href');
        $(this).html('<a href="' + profileUser + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
        $(this).children('a').load(profileUser + ' .forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)');
    });
    $('.forumline tr .row3').not('.over').addClass('author');
    $('.forumline tr .row1[width="100%"], .forumline tr .row2[width="100%"]').not('.row1[height="50"], .row2[height="50"]').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.forumline tr .row1[width="100%"] .avatar-index, .forumline tr .row2[width="100%"] .avatar-index').each(function () {
        var profileUserSub = $('.forumline tr .row3').parent().children('.author').children('span').children('strong').children('a').attr('href');
        $(this).html('<a href="' + profileUserSub + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
        $(this).children('a').load(profileUserSub + ' .forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)');
    });
});

/////V2
$(document).ready(function () {
    $('.forumline tr .row3.over').prepend('<div class="avatar-index"><div>');
    $('.forumline tr .row3.over .avatar-index').each(function () {
        var a = $(this).parent().children('span').children('span').children('strong').children('a').attr('href');
        $(this).load(a + ' .forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)')
    });
    $('.forumline tr .row3').not('.over').addClass('author');
    $('.forumline tr .row1[width="100%"], .forumline tr .row2[width="100%"]').not('.row1[height="50"], .row2[height="50"]').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.forumline tr .row1[width="100%"] .avatar-index, .forumline tr .row2[width="100%"] .avatar-index').each(function () {
        var b = $('.forumline tr .row3').parent().children('.author').children('span').children('strong').children('a').attr('href');
        $(this).load(b + ' .forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)');
    });
});

///V3
$(document).ready(function () {
    var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
    $('.forumline tr .row3').not('.over').addClass('author');
    $('.forumline tr .row1[width="100%"], .forumline tr .row2[width="100%"]').each(function (s) {
        $(this).not('.row1[height="50"], .row2[height="50"]').prepend('<div id="avatar-subforo' + s + '" class="avatar-index avatar-subforo"><div>');
        var b = $('.forumline tr .row3').parent().children('.author').children('span').children('strong').children('a').attr('href');
        $('#avatar-subforo' + s).load(b + ' .forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)');
    });
    $('.forumline tr .row3.over').each(function (i) {
        $(this).prepend('<div id="avatar-index' + i + '" class="avatar-index"><div>');
        var a = this.getElementsByTagName('span')[0].getElementsByTagName('span')[0].getElementsByTagName('strong')[0].firstChild.href;
        $('#avatar-index' + i).load(a + '.forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)');
    });
});





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//PHPBB3
$(document).ready(function () {
    $('.topiclist.forums .row .lastpost').prepend('<div class="avatar-index"><div>');
    $('.topiclist.forums .row .lastpost .avatar-index').each(function () {
        var profileUser = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).html('<a href="' + profileUser + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
        $(this).children('a').load(profileUser + ' .module:eq(0) img:eq(0)')
    });
    $('.topiclist.topics .row .dterm').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.topiclist.topics .row .dterm .avatar-index').each(function () {
        var profileUserSub = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).html('<a href="' + profileUserSub + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
        $(this).children('a').load(profileUserSub + ' .module:eq(0) img:eq(0)');
    });
});

/////V2
$(document).ready(function () {
    $('.topiclist.forums .row .lastpost').prepend('<div class="avatar-index"><div>');
    $('.topiclist.forums .row .lastpost .avatar-index').each(function () {
        var a = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).load(a + ' .module:eq(0) img:eq(0)')
    });
    $('.topiclist.topics .row .dterm').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.topiclist.topics .row .dterm .avatar-index').each(function () {
        var b = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).load(b + ' .module:eq(0) img:eq(0)');
    });
});


//V3
$(document).ready(function () {
    var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
    $('.topiclist.topics .row .dterm').each(function (s) {
        $(this).prepend('<div id="avatar-subforo' + s + '" class="avatar-index avatar-subforo"><div>');
        var b = this.getElementsByClassName('span-tab')[0].getElementsByTagName('strong')[0].firstChild.href;
        $('#avatar-subforo' + s).load(b + '  .module:eq(0) img:eq(0)')
    });
    $('.topiclist.forums .row .lastpost').each(function (i) {
        $(this).prepend('<div id="avatar-index' + i + '" class="avatar-index"><div>');
        var a = this.getElementsByTagName('strong')[0].firstChild.href;
        $('#avatar-index' + i).load(a + '  .module:eq(0) img:eq(0)');
    });
});






///////////////////////////////////////////////////////////////////////////////////////////////////////////////






//PUNBB
$(document).ready(function () {
    $('.statused .tcr').prepend('<div class="avatar-index "><div>');
    $('.statused .tcr .avatar-index').each(function () {
        var profileUser = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).html('<a href="' + profileUser + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
     $(this).children('a').load(profileUser + ' .module .main-content.clearfix.center:eq(0) img:eq(0)');
    });
    $('.statused .tcl.tdtopics').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.statused .tcl.tdtopics .avatar-index').each(function () {
        var profileUserSub = $(this).parent().children('a').attr('href');
    $(this).html('<a href="' + profileUserSub + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
        $(this).children('a').load(profileUserSub + ' .module .main-content.clearfix.center:eq(0) img:eq(0)');
    });
});


///V2
$(document).ready(function () {
    $('.statused .tcr').prepend('<div id="avatar-index" class="avatar-index"><div>');
    $('.statused .tcr .avatar-index').each(function () {
        var a = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).load(a + ' .module .main-content.clearfix.center:eq(0) img:eq(0)')
    });
    $('.statused .tcl.tdtopics').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.statused .tcl.tdtopics .avatar-index').each(function () {
        var b = $(this).parent().children('a').attr('href');
        $(this).load(b + ' .module .main-content.clearfix.center:eq(0) img:eq(0)');
    });
});


///V3
$(document).ready(function () {
    var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
    $('.statused .tdtopics').each(function (s) {
        $(this).prepend('<div id="avatar-subforo'+s+'" class="avatar-index avatar-subforo"><div>');
        var b = this.getElementsByTagName('a')[1].href;
        $('#avatar-subforo'+s).load(b+' .module .main-content.clearfix.center:eq(0) img:eq(0)');
    });
    $('.statused .tcr').each(function (i) {
        $(this).prepend('<div id="avatar-index'+i+'" class="avatar-index"><div>');
        var a = this.getElementsByTagName('a')[1].href;
        $('#avatar-index'+i).load(a+' .module .main-content.clearfix.center:eq(0) img:eq(0)');
    });
});






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//INVISION
$(document).ready(function () {
    $('.ipbtable.index-box .row1').not('.centered').prepend('<div class="avatar-index"><div>');
    $('.ipbtable.index-box .row1 .avatar-index').each(function () {
        var profileUser = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).html('<a href="' + profileUser + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
    $(this).children('a').load(profileUser + ' .module:eq(1) img:eq(0)');
    });
    $('.ipbtable').not('.index-box').addClass('subforum');
    $('.ipbtable.subforum .row1').not('.centered, .lastaction').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.ipbtable.subforum .row1 .avatar-index').each(function () {
        var profileUserSub = $('.ipbtable.subforum .row1').parent().children('.author').children('a').attr('href');
        $(this).html('<a href="' + profileUserSub + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="Sin Avatar" /></a>');
        $(this).children('a').load(profileUserSub + ' .module:eq(1) img:eq(0)');
    });
});

////////V2
$(document).ready(function () {
    $('.ipbtable.index-box .row1').not('.centered').prepend('<div class="avatar-index"><div>');
    $('.ipbtable.index-box .row1 .avatar-index').each(function () {
        var a = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).load(a + ' .module:eq(1) img:eq(0)')
    });
    $('.ipbtable').not('.index-box').addClass('subforum');
    $('.ipbtable.subforum .row1').not('.centered, .lastaction').prepend('<div class="avatar-index avatar-subforo"><div>');
    $('.ipbtable.subforum .row1 .avatar-index').each(function () {
        var b = $('.ipbtable.subforum .row1').parent().children('.author').children('a').attr('href');
        $(this).load(b + ' .module:eq(1) img:eq(0)');
    });
});

//V3
$(document).ready(function () {
    var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
    $('.ipbtable.index-box .row1').not('.centered').addClass('laspost');
    $('.ipbtable').not('.index-box').addClass('subforum');
    $('.ipbtable.index-box .row1.laspost').each(function (i) {
        $(this).prepend('<div id="avatar-index' + i + '" class="avatar-index"><div>');
        var a = this.getElementsByTagName('strong')[0].firstChild.href;
        $('#avatar-index' + i).load(a + ' .module:eq(1) img:eq(0)');
    });
    $('.ipbtable.subforum .row1').each(function (s) {
        $(this).not('.centered, .lastaction').prepend('<div id="avatar-subforo' + s + '" class="avatar-index avatar-subforo"><div>');
        var b = $(this).parent().children('.author').children('a').attr('href');
        $('#avatar-subforo' + s).load(b + ' .module:eq(1) img:eq(0)');
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Eliminar publicidad Canalmail
//punbb
$(function() {$('#main-content script[src*="canalmail"], form#form_confirm .frm-set dl:eq(2), form#form_confirm .frm-set dl:eq(3), form#form_confirm .frm-set dl:eq(4), form#form_confirm .frm-set dl:eq(5), form#form_confirm .frm-set dl:eq(6), form#form_confirm .frm-set dl:eq(7), form#form_confirm .frm-set dl:eq(8), form#form_confirm .frm-set dl:eq(9), form#form_confirm .frm-set dl:eq(10)').remove();});

//CSS
//  form#form_confirm .frm-set dl:nth-child(4), form#form_confirm .frm-set dl:nth-child(5), form#form_confirm .frm-set dl:nth-child(6), form#form_confirm .frm-set dl:nth-child(7), form#form_confirm .frm-set dl:nth-child(8), form#form_confirm .frm-set dl:nth-child(9), form#form_confirm .frm-set dl:nth-child(10), form#form_confirm .frm-set dl:nth-child(11), form#form_confirm .frm-set dl:nth-child(13), .frm-set #resultados {display: none !important;}
//  form#form_confirm .frm-set dl.frm-buttons {display: block !important;} 



//phpbb2
$(function() {$('script[src*="canalmail"], .three-col .forumline tr:eq(3), .three-col .forumline tr:eq(4), .three-col .forumline tr:eq(5), .three-col .forumline tr:eq(6), .three-col .forumline tr:eq(7), .three-col .forumline tr:eq(8), .three-col .forumline tr:eq(9), .three-col .forumline tr:eq(10), .three-col .forumline tr:eq(11), .three-col .forumline tr:eq(12), .three-col .forumline tr:eq(13), .three-col .forumline tr:eq(14)').remove();});


//CSS
// .three-col .forumline tr:nth-child(4), .three-col .forumline tr:nth-child(5), .three-col .forumline tr:nth-child(6), .three-col .forumline tr:nth-child(7), .three-col .forumline tr:nth-child(8), .three-col .forumline tr:nth-child(9), .three-col .forumline tr:nth-child(10), .three-col .forumline tr:nth-child(11), .three-col .forumline tr:nth-child(12), .three-col .forumline tr:nth-child(13), .frm-set #resultados {display: none !important;}



//phpbb3
$(function() {$('script[src*="canalmail"], form#form_confirm .fields2 dl:eq(2), form#form_confirm .fields2 dl:eq(3), form#form_confirm .fields2 dl:eq(4), form#form_confirm .fields2 dl:eq(5), form#form_confirm .fields2 dl:eq(6), form#form_confirm .fields2 dl:eq(7), form#form_confirm .fields2 dl:eq(8), form#form_confirm .fields2 dl:eq(9), form#form_confirm .fields2 dl:eq(10)').remove();});


//CSS
//  form#form_confirm .fields2 dl:nth-child(3), form#form_confirm .fields2 dl:nth-child(4), form#form_confirm .fields2 dl:nth-child(5), form#form_confirm .fields2 dl:nth-child(6), form#form_confirm .fields2 dl:nth-child(7), form#form_confirm .fields2 dl:nth-child(8), form#form_confirm .fields2 dl:nth-child(9), form#form_confirm .fields2 dl:nth-child(10), form#form_confirm .fields2 dl:nth-child(12), .fields2 #resultados{display: none !important;}


//invision
$(function() {$('script[src*="canalmail"], form#form_confirm .ipbform fieldset:eq(2), form#form_confirm .ipbform fieldset:eq(3)').remove();});


//CSS
//  form#form_confirm .fields2 dl:nth-child(3), form#form_confirm .fields2 dl:nth-child(4), form#form_confirm .fields2 dl:nth-child(5), form#form_confirm .fields2 dl:nth-child(6), form#form_confirm .fields2 dl:nth-child(7), form#form_confirm .fields2 dl:nth-child(8), form#form_confirm .fields2 dl:nth-child(9), form#form_confirm .fields2 dl:nth-child(10), form#form_confirm .fields2 dl:nth-child(12), .fields2 #resultados{display: none !important;}

////////////////////////////////////////////////////////////////////////////////////////////



//phpbb2
$(function() { 
var Copyrights = "GoodBye Canalmail PHPBB2 - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved."; $('script[src*="canalmail"], .three-col .forumline tr:eq(4), .three-col .forumline tr:eq(5), .three-col .forumline tr:eq(6), .three-col .forumline tr:eq(7), .three-col .forumline tr:eq(8), .three-col .forumline tr:eq(9), .three-col .forumline tr:eq(10), .three-col .forumline tr:eq(11), .three-col .forumline tr:eq(12), .three-col .forumline tr:eq(16)').remove();
});
//phpbb3
$(function() { 
var Copyrights = "GoodBye Canalmail PHPBB3 - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved."; $('script[src*="canalmail"], form#form_confirm .fields2 dl:eq(2), form#form_confirm .fields2 dl:eq(3), form#form_confirm .fields2 dl:eq(4), form#form_confirm .fields2 dl:eq(5), form#form_confirm .fields2 dl:eq(6), form#form_confirm .fields2 dl:eq(7), form#form_confirm .fields2 dl:eq(8), form#form_confirm .fields2 dl:eq(9), form#form_confirm .fields2 dl:eq(10)').remove();
});
//punbb
$(function() { 
var Copyrights = "GoodBye Canalmail PUNBB - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved."; $('script[src*="canalmail"], form#form_confirm .frm-set dl:eq(2), form#form_confirm .frm-set dl:eq(3), form#form_confirm .frm-set dl:eq(4), form#form_confirm .frm-set dl:eq(5), form#form_confirm .frm-set dl:eq(6), form#form_confirm .frm-set dl:eq(7), form#form_confirm .frm-set dl:eq(8), form#form_confirm .frm-set dl:eq(9), form#form_confirm .frm-set dl:eq(10)').remove();
});
//invision
$(function() { 
var Copyrights = "GoodBye Canalmail INVISION - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved."; $('script[src*="canalmail"], form#form_confirm .ipbform fieldset:eq(2), form#form_confirm .ipbform fieldset:eq(3)').remove();
});


// #resultados{display: none !important;}



////////////////////////////////////////////////////////////////////////////////////////////

//// FORUM PESPCEDIT
$(document).ready(function () {
    $('.statused .tcr').prepend('<div class="avatar-index"><div>');
    $('.statused .tcr .avatar-index').each(function () {
        var numUsuario = $(this).parent().children('span').children('strong').children('a').attr('href');
        $(this).html('<a href="' + numUsuario + '" class="avatar-index-enlace"><img src="" style="padding: 0px !important; border: 0px solid #000 !important; margin: 0 0px !important; width: 0 !important; height: 0 !important;"  /></a>');
        $(this).children('a').load(numUsuario + ' .avatar-profile-view:eq(0) img:eq(0)');
    });
});


///////Script post

$(document).ready(function () {
$('.post-cargado, .post-cargado-invited').fadeIn(1000);
var url = location.href;
$('.post-cargado-invited .post-message a.link-download').replaceWith('<div class="hide"><span>Tienes que estar <a href="/register?redirect='+url+'">registrado</a> y <a href="/login?redirect='+url+'">conectado</a> para ver este enlace.</span></div>');
$('embed[src *="youtube"]').attr('width', 600);
$('embed[src *="youtube"]').attr('height', 340);
$('embed[src *="youtube"]').wrap('<div class="youtube-head"><div class="youtube-body"></div></div>');
$('.post-message img').not('a.link-download img, img[src*="pespcedit-image"], img[src*="goo.gl"], a img').addClass('lightbox_show');
$('div.post-message img.lightbox_show').each(function () {
$(this).wrap('<a href="'+$(this).attr('src')+'" title="'+this.alt+'" class="lightbox" rel="pespcedit"></a>');
$('.lightbox').lightbox();
});
$(".vote").each(function () {
$(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");
$(this).remove();
});
});

