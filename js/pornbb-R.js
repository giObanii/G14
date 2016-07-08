$(document).ready(function () {
    if (!document.location.href.match('pornbb.foroes.biz')) return;
    var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
    $(document).bind("contextmenu", function (e) {
    return false
    });
    $('.post .entry-content').fadeIn(1000);
	$('.entry-content').attr('unselectable', 'on');
    $('.entry-content').css('MozUserSelect', 'none');//mozilla y derivados
    $('.entry-content').css('KhtmlUserSelect', 'none');//el safari por ejemplo
    $(".lightbox").lightbox();
    $("#arrow-down").css("display", "none");
    $("#arrow-up,#arrow-down").click(function () {
        $("#postgen").slideToggle("slow");
        if ($("#arrow-up").css("display") == "block") {
            $("#arrow-up").css("display", "none");
            $("#arrow-down").css("display", "block")
        } else {
            $("#arrow-up").css("display", "block");
            $("#arrow-down").css("display", "none")
        }
    });
    $('.google_ads_div_728x90-top, script[src*="cas.criteo.com"], iframe[src*="ad.z5x.net"]').each(function () {
        $(this).closest('div').remove()
    });
	$('#pun-about, #pun-info, link[href*="directorio-foros.com"]').remove();
    if (!window.localStorage) return;
    var default_avatar = '';
    var caching_time = 24 * 60 * 60 * 1000;
    var caching_error = 60 * 1000;
    var set_avatar = function (id) {
        $('.avatar-index.member' + id).html('<img src="' + get_avatar(id) + '" />')
    };
    var get_avatar = function (id) {
        if (localStorage.getItem('m_ava' + id) < +new Date - caching_time || (localStorage.getItem('d_ava' + id) == default_avatar && localStorage.getItem('m_ava' + id) < +new Date - caching_error)) {
            localStorage.setItem('d_ava' + id, default_avatar);
            $.get('/u' + id, function (d) {
                localStorage.setItem('m_ava' + id, +new Date);
                localStorage.setItem('d_ava' + id, $('#profile-advanced-right .module:first div img:first,.forumline td.row1.gensmall:first > img, .frm-set.profile-view.left dd img,dl.left-box.details:first dd img, .row1 b .gen:first img, .real_avatar img', d).first().attr('src') || default_avatar);
                set_avatar(id)
            })
        }
        return localStorage.getItem('d_ava' + id)
    };
    var to_replace = {};
    $('.table .statused .tcr strong a.gensmall').not('.table .statused.subforos .tcr strong a.gensmall').each(function () {
        to_replace[$(this).attr('href').substr(2)] = 1;
        $(this).closest('td,dd').prepend('<div class="avatar-index member' + $(this).attr('href').substr(2) + '"></div>')
    });
    for (i in to_replace) {
        set_avatar(i)
    };
    $('a[href*="http://"], a[href*="https://"]').not('a[href*="pornbb.foroes.biz"], a[href*="smowtion.com"], a[href*="mail.live.com"], a[href*="bidvertiser.com"], a[href$=".png"], a[href$=".jpg"], a[href*=".gif"], a[href$=".jpeg"], a[href$=".bmp"], a[href*="linkbucks.com"], a[href*="adf.ly/?id=2124722"]').each(function () {
        var u = $(this).attr('href');
        $(this).attr('href', 'http://adf.ly/2124722/http://bff2ccab.linkbucks.com/url/' + u + '');
    });
    var forumlocation = window.location + "";
    if (forumlocation.match(/t.*$/)) {
        $('img').error(function () {
            $(this).attr('src', 'http://goo.gl/2m0MD').attr('alt', 'Image not avaliable')
        });
        $('.entry-content img').not('a.link-download img, img[src*="pespcedit-image"], img[src*="goo.gl"], a img').addClass('lightbox_show');
        $('div.entry-content img.lightbox_show').each(function () {
            $(this).wrap('<a href="' + $(this).attr('src') + '" title="' + this.alt + '" class="lightbox" rel="pespcedit"></a>');
            $('.lightbox').lightbox()
        });
        var links = $('.post a'),
            local = document.URL.replace(location.hash, '').replace(location.pathname, ''),
            reg = /\.(png|jpg|jpeg|gif)$/i;
        for (var i = 0, l;
        (l = links[i++]);) {
            if (l.innerHTML !== l.href) continue;
            if (reg.test(l.href)) l.innerHTML = '<img class="auto-img" alt="' + l.href + '" src="' + l.href + '">';
            if (l.href.indexOf(local) === 0) l.innerHTML = l.href.substring(l.href.lastIndexOf('/'))
        };
        $('.i_icon_quote', document.getElementById('main-content')).click(function (e) {
            e.preventDefault();
            var selection = (function () {
                if (window.getSelection) {
                    var e = document.activeElement;
                    return (e && e.tagName.toLowerCase() in {
                        textarea: 1,
                        input: 1
                    }) ? e.value.substring(e.selectionStart, e.selectionEnd) : window.getSelection().toString()
                } else if (document.selection.createRange) {
                    return (document.selection.createRange()).text || ''
                }
                return null
            })();
            if (selection) return bbfontstyle('[quote]' + selection + '[/quote]', '');
            var x = $('body').append('<div id="quote_loading" style="display:none"><img src="http://scripts-giobanii.googlecode.com/svn/trunk/images/loading.gif"></div><div id="quoteL" style="display:none"></div>').find('#quoteL');
            var loading = document.getElementById('quote_loading'),
                textbox = document.post.message;
            textbox.focus();
            for (var i in {
                Width: 1,
                Height: 1,
                Left: 1,
                Top: 1
            }) loading.style[i.toLowerCase()] = textbox['offset' + i] + 'px';
            loading.style.display = '';
            x.load(this.parentNode.href + ' textarea', function () {
                bbfontstyle(x[0].getElementsByTagName('textarea')[0].value, '');
                x.add(loading).remove()
            })
        })
    };
    if (window.location.href.match(/register\?agreed=true&step=2/) && $('#username_reg').length) {
        function verifyRU() {
            $('#username_reg').attr('value', $('#username_reg').attr('value').trim().replace(/(\s)\s+/g, '$1'));
            if ($('#username_reg').attr('value') == '') $('#username_reg').addClass('left').removeClass('available').removeClass('not-available'), $('.available-username, .not-available-username').remove();
            else $.get('/search?mode=searchuser&fieldname=username&search_username=' + encodeURIComponent($('#username_reg').attr('value')) + '&time=' + Math.floor((new Date()).getTime() / 1000), function (data) {
                    ($(data).find('#username_list').length == 1 && $(data).find('#username_list option').length == 1 && $(data).find('#username_list option').attr('value') != '') ? $('#username_reg').removeClass('available').addClass('not-available').after('<div id="cont_pwd" class="not-available-username"><div id="username_bad" class="pwd_img">No Disponible</div></div>') : $('#username_reg').removeClass('not-available').addClass('available').after('<div id="cont_pwd" class="available-username"><div id="username_good" class="pwd_img">Disponible</div></div>');
                    var Copyrights = 'Modifications made by giObanii - toxigeek.com';
                    $("#username_reg.not-available").each(function () {
                        $('.available-username, .not-available-username:nth-child(3)').remove();
                        $('.not-available-username, #username_bad').css('display', 'block')
                    });
                    $("#username_reg.available").each(function () {
                        $('.not-available-username, .available-username:nth-child(3)').remove();
                        $('.available-username, #username_good').css('display', 'block')
                    })
                })
        };
        $('#username_reg').change(function () {
            verifyRU()
        });
        if (typeof facebook_register_login == 'function') {
            var old_frl = facebook_register_login;
            facebook_register_login = function () {
                old_frl();
                verifyRU()
            }
        }
        verifyRU()
    }
});