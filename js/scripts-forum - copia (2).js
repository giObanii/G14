/* Que haces de miron Estos son los scripts de mi foro*/
/* Si quieres uno pidemelo pues no creo que le entiendas o bien visita mi website */
//zX2Aw8vj4Rd3

var poll = '127' ;

$(document).ready(function() {
    if (!document.location.href.match('giografico.forum.st') && !document.location.href.match('giografico.net')) return;
    var Copyrights = "©Copyright by giObanii. All Rights Reserved.";
    $('.link-download').bind("contextmenu", function(e) {
        return false
    });
    var u = location.href;
    $('body').append('<div style="display:none"><div id="login_form" class="login-box-lightbox"><div class="login-box-lightbox-content"><div class="login-form-lightbox"><form  id="loginform" method="post" method="post" action="/login?redirect=' + u + '"><label><em>Username : </em><input id="username" type="text" name="username"></label><label><em>Password : </em><input id="password" type="password" name="password"></label><label style="float: left; margin-top: 5px; text-align: left;"><em style="margin-right: 10px; margin-top: 3px; width: 85px; margin-left: 7px;">Recordarme : </em><input type="checkbox" name="autologin" checked="true" style="width: 20px;"></label><input id="submit" type="submit" name="login" value="Conectarse" class="submit"></form></div></div></div></div>');
    $('a[href="/login?connexion"], a[href="/login"]').attr('href', '#login_form').addClass('lightbox');
    $("#loginform").submit(function(ev) {
        if ($("#username").val() == "" | $("#password").val() == "") {
            $.lightbox().shake();
            ev.preventDefault()
        }
    });
    $('.lightbox').lightbox();
    $('.google_ads_div_728x90-top, script[src*="cas.criteo.com"], iframe[src*="ad.z5x.net"]').each(function() {
        $(this).closest('div').remove()
    });
    if (!window.localStorage) return;
    var default_avatar = '';
    var caching_time = 24 * 60 * 60 * 1000;
    var caching_error = 60 * 1000;
    var set_avatar = function(id) {
        $('.avatar-index.member' + id).html('<img src="' + get_avatar(id) + '" />')
    };
    var get_avatar = function(id) {
        if (localStorage.getItem('m_ava' + id) < +new Date - caching_time || (localStorage.getItem('d_ava' + id) == default_avatar && localStorage.getItem('m_ava' + id) < +new Date - caching_error)) {
            localStorage.setItem('d_ava' + id, default_avatar);
            $.get('/u' + id, function(d) {
                localStorage.setItem('m_ava' + id, +new Date);
                localStorage.setItem('d_ava' + id, $('.frm-set.profile-view.left dd img', d).first().attr('src') || default_avatar);
                set_avatar(id)
            })
        }
        return localStorage.getItem('d_ava' + id)
    };
    var to_replace = {};
    $('.table .statused .tcr strong a.gensmall').not('.table .statused.subforos .tcr strong a.gensmall').each(function() {
        to_replace[$(this).attr('href').substr(2)] = 1;
        $(this).closest('td,dd').prepend('<div class="avatar-index member' + $(this).attr('href').substr(2) + '"></div>')
    });
    for (i in to_replace) {
        set_avatar(i)
    };
    $.getScript('http://goo.gl/AxV1g');
    var forumlocation = window.location + "";
    if (forumlocation.match(/t.*$/)) {
        $('.poll.t' + poll + ' .frm-set dd').remove();
        $('.post-message').attr('unselectable', 'on');
        $('.post-message').css('MozUserSelect', 'none');
        $('.post-message').css('KhtmlUserSelect', 'none');
        $('embed[src *="youtube"]').each(function() {
            $(this).attr('width', 600).attr('height', 340).wrap('<div class="youtube-head"><div class="youtube-body"></div></div>')
        });
        $('.post-message img').error(function() {
            $(this).attr('src', 'http://goo.gl/2m0MD').attr('alt', 'Image not avaliable')
        });
        $('.post-message img').not('a.link-download img, img[src*="pespcedit-image"], img[src*="goo.gl"], a img').addClass('lightbox_show');
        $('div.post-message img.lightbox_show').each(function() {
        $(this).wrap('<a href="' + $(this).attr('src') + '" title="' + this.alt + '" class="lightbox" rel="pespcedit"></a>');
        });
        $(".vote").each(function() {
        $(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");
        $(this).remove()
        });
        $('.post-message a[href*="mega.co.nz"]').addClass('link-download').append('<img title="Descarga desde Mega" src="http://goo.gl/YVdLk">');
        $('.post-message a[href*="mediafire.com"]').addClass('link-download').append('<img title="Descarga desde Medifire" src="http://goo.gl/axWgg">');
        $('.post-message a[href*="ul.to"], .post-message a[href*="uploaded."]').addClass('link-download').append('<img title="Descarga desde Uploaded" src="http://goo.gl/Fmfwr">');
        $('.post-message a[href*="rapidgator.net"]').addClass('link-download').append('<img title="Descarga desde Rapidgator" src="http://goo.gl/ObABb">');
        $('.post-message a[href*="jumbofiles.com"]').addClass('link-download').append('<img title="Descarga desde Jumbofiles" src="http://goo.gl/Mjs0Y">');
        $('.post-message a[href*="filepost.com"]').addClass('link-download').append('<img title="Descarga desde Filepost" src="http://goo.gl/SZ7bL">');
        $('.post-message a[href*="gamefront.com"]').addClass('link-download').append('<img title="Descarga desde Gamefront" src="http://goo.gl/8pxxe">');
        $('.post-message a[href*="rapidshare.com"]').addClass('link-download').append('<img title="Descarga desde Rapidshare" src="http://goo.gl/pxn8D">');
        $('.post-message a[href*="howfile.com"]').addClass('link-download').append('<img title="Descarga desde Howfile" src="http://goo.gl/K84c5">');
        $('.post-message a[href*="4shared.com"]').addClass('link-download').append('<img title="Descarga desde 4shared" src="http://goo.gl/TXvsr">');
        $('.post-message a[href*="bitshare.com"]').addClass('link-download').append('<img title="Descarga desde Bitshare" src="http://goo.gl/oKyxI">');
        $('.post-message a[href*="moddingway.com/file/"]').addClass('link-download').append('<img title="Descarga desde Moddingway" src="http://goo.gl/1HGYf">');
        $('.post-message a[href*="depositfiles.com"], .post-message a[href*="depositfiles.org"], .post-message a[href*="dfiles.eu"]').addClass('link-download').append('<img title="Descarga desde Depositfiles" src="http://goo.gl/bpMdP">');
        $('.post-message a[href*="zippyshare.com"]').addClass('link-download').append('<img title="Descarga desde Zippyshare" src="http://goo.gl/AOfj8">');
        $('.post-message a[href*="freakshare.com"]').addClass('link-download').append('<img title="Descarga desde Freakshare" src="http://goo.gl/A9OXn">');
        $('.post-message a[href*="putlocker.com"]').addClass('link-download').append('<img title="Descarga desde Putlocker" src="http://goo.gl/xUNZt">');
        $('.post-message a[href*="filecloud.io"]').addClass('link-download').append('<img title="Descarga desde Filecloud" src="http://goo.gl/ZAUv9">');
        $('.post-message a[href*="downloads.fifacz.com"]').addClass('link-download').append('<img title="Descarga desde fifacz" src="http://goo.gl/Ic2cM">');
        $('.post-cargado-invited a.link-download').before('<div class="invited_Link"><div id="DownloadClic"></div><div class="kontextuaDisplayREGULARSS468x60"></div></div>');
		 
        $('#DownloadClic').click(function() {
            $('a.link-download').css('display', 'block');
            $('.invited_Link').css('display', 'none')
        });
        var closeads = ['margin-left: 312px;', 'margin-left: 156px;', 'margin-left: 0px;'];
        var rand = Math.floor(Math.random() * closeads.length);
        $('#DownloadClic').attr('style', closeads[rand]);
        $('.post #user-ads').each(function() {
            $(this).show();
            $(this).not('#user-ads:first').remove()
        });
        $('.topic .post').not('.topic .post:first').each(function() {
            $(this).closest('.main.paged').addClass('topic-blog');
            ('©Copyright by giObanii. ©toxigeek.com. All Rights Reserved');
            $(this).find('.posthead').find('a').after('<br>');
            var ava = $(this).find('.user-basic-info a[href*="/u"]').html();
            var autor = $(this).find('.nick').html();
            $(this).find('.posthead').find('h2').append(' por ' + autor + '').before('<div class="blog_comment-avatar">' + ava + '<br></div>')
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
        $('.i_icon_quote', document.getElementById('main-content')).click(function(e) {
            e.preventDefault();
            var selection = (function() {
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
            x.load(this.parentNode.href + ' textarea', function() {
                bbfontstyle(x[0].getElementsByTagName('textarea')[0].value, '');
                x.add(loading).remove()
            })
        })
    };
    if (window.location.href.match(/register\?agreed=true&step=2/) && $('#username_reg').length) {
        function verifyRU() {
            $('#username_reg').attr('value', $('#username_reg').attr('value').trim().replace(/(\s)\s+/g, '$1'));
            if ($('#username_reg').attr('value') == '') $('#username_reg').addClass('left').removeClass('available').removeClass('not-available'), $('.available-username, .not-available-username').remove();
            else $.get('/search?mode=searchuser&fieldname=username&search_username=' + encodeURIComponent($('#username_reg').attr('value')) + '&time=' + Math.floor((new Date()).getTime() / 1000), function(data) {
                ($(data).find('#username_list').length == 1 && $(data).find('#username_list option').length == 1 && $(data).find('#username_list option').attr('value') != '') ? $('#username_reg').removeClass('available').addClass('not-available').after('<div id="cont_pwd" class="not-available-username"><div id="username_bad" class="pwd_img">No Disponible</div></div>'): $('#username_reg').removeClass('not-available').addClass('available').after('<div id="cont_pwd" class="available-username"><div id="username_good" class="pwd_img">Disponible</div></div>');
                var Copyrights = 'Modifications made by giObanii - toxigeek.com';
                $("#username_reg.not-available").each(function() {
                    $('.available-username, .not-available-username:nth-child(3)').remove();
                    $('.not-available-username, #username_bad').css('display', 'block')
                });
                $("#username_reg.available").each(function() {
                    $('.not-available-username, .available-username:nth-child(3)').remove();
                    $('.available-username, #username_good').css('display', 'block')
                })
            })
        };
        $('#username_reg').change(function() {
            verifyRU()
        });
        if (typeof facebook_register_login == 'function') {
            var old_frl = facebook_register_login;
            facebook_register_login = function() {
                old_frl();
                verifyRU()
            }
        }
        verifyRU()
    }
});