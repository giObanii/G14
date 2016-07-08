/*! Es es la mierda del tooltip */
(function ($) {
    function fixTitle($ele) {
        if ($ele.attr('title') || typeof ($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title')
        }
    }
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element)
    }
    Tipsy.prototype = {
        show: function () {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy';
                $tip.remove().css({
                    top: 0,
                    left: 0,
                    visibility: 'hidden',
                    display: 'block'
                }).appendTo(document.body);
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight;
                var gravity = (typeof this.options.gravity == 'function') ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                var tp;
                switch (gravity.charAt(0)) {
                case 'n':
                    tp = {
                        top: pos.top + pos.height + this.options.offset,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
                    break;
                case 's':
                    tp = {
                        top: pos.top - actualHeight - this.options.offset,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
                    break;
                case 'e':
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left - actualWidth - this.options.offset
                    };
                    break;
                case 'w':
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left + pos.width + this.options.offset
                    };
                    break
                }
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15
                    }
                }
                $tip.css(tp).addClass('tipsy-' + gravity);
                if (this.options.fade) {
                    $tip.stop().css({
                        opacity: 0,
                        display: 'block',
                        visibility: 'visible'
                    }).animate({
                        opacity: this.options.opacity
                    })
                } else {
                    $tip.css({
                        visibility: 'visible',
                        opacity: this.options.opacity
                    })
                }
            }
        },
        hide: function () {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function () {
                    $(this).remove()
                })
            } else {
                this.tip().remove()
            }
        },
        getTitle: function () {
            var title, $e = this.$element,
                o = this.options;
            fixTitle($e);
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title)
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0])
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback
        },
        tip: function () {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')
            }
            return this.$tip
        },
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null
            }
        },
        enable: function () {
            this.enabled = true
        },
        disable: function () {
            this.enabled = false
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    };
    $.fn.tipsy = function (options) {
        if (options === true) {
            return this.data('tipsy')
        } else if (typeof options == 'string') {
            return this.data('tipsy')[options]()
        }
        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy)
            }
            return tipsy
        }
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show()
            } else {
                setTimeout(function () {
                    if (tipsy.hoverState == 'in') tipsy.show()
                }, options.delayIn)
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide()
            } else {
                setTimeout(function () {
                    if (tipsy.hoverState == 'out') tipsy.hide()
                }, options.delayOut)
            }
        };
        if (!options.live) this.each(function () {
            get(this)
        });
        if (options.trigger != 'manual') {
            var binder = options.live ? 'live' : 'bind',
                eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave)
        }
        return this
    };
    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    $.fn.tipsy.elementOptions = function (ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options
    };
    $.fn.tipsy.autoNS = function () {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n'
    };
    $.fn.tipsy.autoWE = function () {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w'
    }
})(jQuery);

/*! El mendigo script que hace funcionar al post generador hecho por mi claro */
function postgen() {
    var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
    var txt = '';
    document.getElementById('text_editor_textarea').value = ""; {
        txt += '<div class="notice"><div class="img-new"><div class="img">[img]';
        txt += document.getElementById('imagenew').value;
        txt += '[/img]</div><div class="imgleer"><a rel="nofollow" target="_blank" href="http://{FORUMURL}/';
        txt += document.getElementById('urlnew').value;
        txt += '">[img]http://scripts-giobanii.googlecode.com/svn/trunk/images/notice-pespcedit-image.png[/img]</a></div>\n';
        txt += '</div><div class="des">[b]Descripcion de la noticia:[/b]\n\n';
        txt += document.getElementById('descripcionnew').value;
        txt += '\n</div></div>';
        document.getElementById('text_editor_textarea').value += txt
    }
};
function postgenpost() {
    var txt = "";
    document.getElementById("text_editor_textarea").value = "";
    if (document.getElementById("imagenpost").value != "") {
        txt = "";
        txt += "[center][img]";
        txt += document.getElementById("imagenpost").value;
        txt += "[/img][/center]\n\n";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("informacionpost").value != "") {
        txt = "";
        txt += "[center][img]http://goo.gl/MSJLm[/img][/center]\n\n";
        txt += document.getElementById("informacionpost").value;
        txt += "";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("capturaspost").value != "") {
        txt = "";
        txt += "\n\n";
        txt += "[center][img]http://goo.gl/bdzs9[/img][/center]\n\n";
        txt += "[center][img]";
        txt += document.getElementById("capturaspost").value;
        txt += "[/img][/center]";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("capturaspost1").value != "") {
        txt = "";
        txt += "\n[center][img]";
        txt += document.getElementById("capturaspost1").value;
        txt += "[/img][/center]";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("capturaspost2").value != "") {
        txt = "";
        txt += "\n[center][img]";
        txt += document.getElementById("capturaspost2").value;
        txt += "[/img][/center]";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("videopost").value != "") {
        txt = "";
        txt += "\n\n";
        txt += "[center][img]http://goo.gl/TWR3V[/img][/center]\n";
        txt += "[center][youtube]";
        txt += document.getElementById("videopost").value;
        txt += "[/youtube][/center]";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("descargapost").value != "") {
        txt = "";
        txt += "\n\n";
        txt += "[center][img]http://goo.gl/U3GDw[/img][/center]\n\n";
        txt += "[center]";
        txt += document.getElementById("descargapost").value;
        txt += "[/center]\n";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("passpost").value != "") {
        txt = "";
        txt += "[center]Pass: [b]";
        txt += document.getElementById("passpost").value;
        txt += "[/b][/center]\n";
        document.getElementById("text_editor_textarea").value += txt
    }
    if (document.getElementById("autorpost").value != "") {
        txt = "";
        txt += "[center]By [b]";
        txt += document.getElementById("autorpost").value;
        txt += "[/b][/center]\n";
        document.getElementById('text_editor_textarea').value += txt
    }
};

/*! Estos son mis putos scripts si piensas copiarlos piensalo dos veces. */
$(document).ready(function () {
var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
$(document).bind("contextmenu",function(e){ return false; });
/*! Cargando post */
$('.post-cargado, .post-cargado-invited').fadeIn(1000);
/*! Extras - tooltips */
$('a, .i_icon_quote, .i_icon_edit, .i_icon_delete, .i_icon_ip, .i_icon_profile, .i_icon_pm, .topic-title, .i_post, .i_reply, .post-message a.link-download img').tipsy({fade: true, gravity: 's',});
$('a[href^="/abuse"]').attr('href', '/');
/*! Avtar en index & Subforos */
$('.statused .tcr').not('.statused.subforos .tcr').each(function (i) { $(this).prepend('<div id="avatar-index'+i+'" class="avatar-index"><div>'); var a = this.getElementsByTagName('strong')[0].firstChild.href; $('#avatar-index'+i).load(a+' .avatar-profile-view:eq(0) img:eq(0)'); });
$('.statused.subforos .tcr').each(function (s) {$(this).prepend('<div id="avatar-subforo'+s+'" class="avatar-subforo"><div>'); var b = this.getElementsByTagName('strong')[0].firstChild.href; $('#avatar-subforo'+s).load(b+' .avatar-profile-view:eq(0) img:eq(0)'); });
/*! Lightbox imagenes & login */
var u = location.href;
$('body').append('<div style="display:none"><div id="login_form" class="login-box-lightbox"><div class="login-box-lightbox-content"><div class="login-form-lightbox"><form  id="loginform" method="post" method="post" action="/login?redirect='+u+'"><label><em>Username : </em><input id="username" type="text" name="username"></label><label><em>Password : </em><input id="password" type="password" name="password"></label><label style="float: left; margin-top: 5px; text-align: left;"><em style="margin-right: 10px; margin-top: 3px; width: 85px; margin-left: 7px;">Recordarme : </em><input type="checkbox" name="autologin" checked="true" style="width: 20px;"></label><input id="submit" type="submit" name="login" value="Conectarse" class="submit"></form></div></div></div></div>');
$('.mntp a[href="/login?connexion"]').attr('href', '#login_form').addClass('lightbox');
$("#loginform").submit(function (ev) { if ($("#username").val() == "" | $("#password").val() == "") { $.lightbox().shake(); ev.preventDefault()}});
$('.post-message img').not('a.link-download img, img[src*="pespcedit-image"], a img').addClass('lightbox_show');
$('div.post-message img.lightbox_show').each(function () {$(this).wrap('<a href="' + $(this).attr('src') + '" title="' + this.alt + '" class="lightbox" rel="pespcedit"></a>');});
$(".lightbox").lightbox();
/*! Vote System creado por mua */
$(".vote").each(function () { $(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : ""); $(this).remove(); });
/*! Ocultando enlaces a invitados mi alternativa not forumotion */
$('.post-cargado-invited .post-message a.link-download').replaceWith('<div class="hide"><span>Tienes que estar <a href="/register">registrado</a> y <a href="#login_form" class="lightbox">conectado</a> para ver este enlace.</span></div>');
/*! Decorando video de youtube */
$('embed[src *="youtube"]').attr('width', 600);
$('embed[src *="youtube"]').attr('height', 340);
$('embed[src *="youtube"]').wrap('<div class="youtube-head"><div class="youtube-body"></div></div>');
/*! Mostrar ocultar Post-Generator */
$("#arrow-down").css("display", "none");
$("#arrow-up,#arrow-down").click(function () { $("#postgen").slideToggle("slow"); if ($("#arrow-up").css("display") == "block") { $("#arrow-up").css("display", "none");
$("#arrow-down").css("display", "block") } else { $("#arrow-up").css("display", "block"); $("#arrow-down").css("display", "none") } });
/*! Adios a esa mierda de canal Canalmail */
$('#main-content script[src*="canalmail"], form#form_confirm .frm-set dl:eq(2), form#form_confirm .frm-set dl:eq(3), form#form_confirm .frm-set dl:eq(4), form#form_confirm .frm-set dl:eq(5), form#form_confirm .frm-set dl:eq(6), form#form_confirm .frm-set dl:eq(7), form#form_confirm .frm-set dl:eq(8), form#form_confirm .frm-set dl:eq(9), form#form_confirm .frm-set dl:eq(10)').remove()
});



/*! Utilizado */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(g($){g 1t($t){j($t.S(\'h\')||Y($t.S(\'1u-h\'))!=\'1v\'){$t.S(\'1u-h\',$t.S(\'h\')||\'\').2s(\'h\')}}g 1w(y,d){c.$y=$(y);c.d=d;c.T=Z;1t(c.$y)}1w.2t={1x:g(){p h=c.1L();j(h&&c.T){p $q=c.q();$q.2u(\'.f-1M\')[c.d.17?\'17\':\'1y\'](h);$q[0].2v=\'f\';$q.18().z({v:0,m:0,1z:\'2w\',C:\'11\'}).2x(12.1N);p k=$.1A({},c.$y.K(),{D:c.$y[0].1O,13:c.$y[0].1P});p 14=$q[0].1O,19=$q[0].1P;p A=(Y c.d.A==\'g\')?c.d.A.1Q(c.$y[0]):c.d.A;p L;2y(A.1R(0)){1a\'n\':L={v:k.v+k.13+c.d.K,m:k.m+k.D/2-14/2};1b;1a\'s\':L={v:k.v-19-c.d.K,m:k.m+k.D/2-14/2};1b;1a\'e\':L={v:k.v+k.13/2-19/2,m:k.m-14-c.d.K};1b;1a\'w\':L={v:k.v+k.13/2-19/2,m:k.m+k.D+c.d.K};1b}j(A.2z==2){j(A.1R(1)==\'w\'){L.m=k.m+k.D/2-15}M{L.m=k.m+k.D/2-14+15}}$q.z(L).1S(\'f-\'+A);j(c.d.1c){$q.1T().z({U:0,C:\'11\',1z:\'1U\'}).2A({U:c.d.U})}M{$q.z({1z:\'1U\',U:c.d.U})}}},1d:g(){j(c.d.1c){c.q().1T().2B(g(){$(c).18()})}M{c.q().18()}},1L:g(){p h,$e=c.$y,o=c.d;1t($e);p h,o=c.d;j(Y o.h==\'1v\'){h=$e.S(o.h==\'h\'?\'1u-h\':o.h)}M j(Y o.h==\'g\'){h=o.h.1Q($e[0])}h=(\'\'+h).2C(/(^\\s*|\\s*$)/,"");B h||o.1V},q:g(){j(!c.$q){c.$q=$(\'<l E="f"></l>\').17(\'<l E="f-F"></l><l E="f-1M"/></l>\')}B c.$q},2D:g(){j(!c.$y[0].2E){c.1d();c.$y=1W;c.d=1W}},2F:g(){c.T=Z},2G:g(){c.T=16},2H:g(){c.T=!c.T}};$.O.f=g(d){j(d===Z){B c.1e(\'f\')}M j(Y d==\'1v\'){B c.1e(\'f\')[d]()}d=$.1A({},$.O.f.1X,d);g 1f(t){p f=$.1e(t,\'f\');j(!f){f=2I 1w(t,$.O.f.1Y(t,d));$.1e(t,\'f\',f)}B f}g 1Z(){p f=1f(c);f.1g=\'20\';j(d.1B==0){f.1x()}M{21(g(){j(f.1g==\'20\')f.1x()},d.1B)}};g 22(){p f=1f(c);f.1g=\'23\';j(d.1C==0){f.1d()}M{21(g(){j(f.1g==\'23\')f.1d()},d.1C)}};j(!d.1h)c.1D(g(){1f(c)});j(d.1i!=\'2J\'){p 1E=d.1h?\'1h\':\'24\',25=d.1i==\'1F\'?\'2K\':\'2L\',26=d.1i==\'1F\'?\'2M\':\'2N\';c[1E](25,1Z)[1E](26,22)}B c};$.O.f.1X={1B:0,1C:0,1c:16,1V:\'\',A:\'n\',17:16,1h:16,K:0,U:0.8,h:\'h\',1i:\'1F\'};$.O.f.1Y=g(t,d){B $.27?$.1A({},d,$(t).27()):d};$.O.f.2O=g(){B $(c).K().v>($(12).2P()+$(28).13()/2)?\'s\':\'n\'};$.O.f.2Q=g(){B $(c).K().m>($(12).2R()+$(28).D()/2)?\'e\':\'w\'}})(2S);$(12).2T(g(){p 2U="©29 2a 2V. ©29 2a 2W.2X. 2Y 2Z 30.";$(12).24("31",g(e){B 16});$(\'a, .32, .33, .34, .35, .36, .37, .38-h, .39, .3a\').f({1c:Z,A:\'s\',});p u=3b.V;$(\'1N\').3c(\'<l 1j="C:1k"><l P="2b" E="Q-2c-R"><l E="Q-2c-R-2d"><l E="Q-x-R"><x  P="2e" 2f="2g" 2f="2g" 3d="/Q?3e=\'+u+\'"><W><X>3f : </X><1l P="1G" 1m="1y" 1n="1G"></W><W><X>3g : </X><1l P="1o" 1m="1o" 1n="1o"></W><W 1j="3h: m; 1p-v: 3i; 1y-3j: m;"><X 1j="1p-3k: 3l; 1p-v: 3m; D: 3n; 1p-m: 3o;">3p : </X><1l 1m="3q" 1n="3r" 3s="Z" 1j="D: 3t;"></W><1l P="1q" 1m="1q" 1n="Q" 3u="3v" E="1q"></x></l></l></l></l>\');$(\'a[V="/Q?3w"], a[V="/Q"]\').S(\'V\',\'#2b\').1S(\'R\');$("#2e").1q(g(2h){j($("#1G").2i()==""|$("#1o").2i()==""){$.R().3x();2h.3y()}});$(".R").R();$("#F-1r").z("C","1k");$("#F-1s,#F-1r").3z(g(){$("#3A").3B("3C");j($("#F-1s").z("C")=="11"){$("#F-1s").z("C","1k");$("#F-1r").z("C","11")}M{$("#F-1s").z("C","11");$("#F-1r").z("C","1k")}});$(\'.1H .1I\').3D(\'.1H.2j .1I\').1D(g(i){$(c).2k(\'<l P="N-1J\'+i+\'" E="N-1J"><l>\');p a=c.2l(\'2m\')[0].2n.V;$(\'#N-1J\'+i).2o(a+\' .N-2p-2q:r(0) 2r:r(0)\')});$(\'.1H.2j .1I\').1D(g(s){$(c).2k(\'<l P="N-1K\'+s+\'" E="N-1K"><l>\');p b=c.2l(\'2m\')[0].2n.V;$(\'#N-1K\'+s).2o(b+\' .N-2p-2q:r(0) 2r:r(0)\')});$(\'#3E-2d 3F[3G*="3H"], x#G .H-I J:r(2), x#G .H-I J:r(3), x#G .H-I J:r(4), x#G .H-I J:r(5), x#G .H-I J:r(6), x#G .H-I J:r(7), x#G .H-I J:r(8), x#G .H-I J:r(9), x#G .H-I J:r(10)\').18()});',62,230,'||||||||||||this|options||tipsy|function|title||if|pos|div|left|||var|tip|eq||ele||top||form|element|css|gravity|return|display|width|class|arrow|form_confirm|frm|set|dl|offset|tp|else|avatar|fn|id|login|lightbox|attr|enabled|opacity|href|label|em|typeof|true||block|document|height|actualWidth||false|html|remove|actualHeight|case|break|fade|hide|data|get|hoverState|live|trigger|style|none|input|type|name|password|margin|submit|down|up|fixTitle|original|string|Tipsy|show|text|visibility|extend|delayIn|delayOut|each|binder|hover|username|statused|tcr|index|subforo|getTitle|inner|body|offsetWidth|offsetHeight|call|charAt|addClass|stop|visible|fallback|null|defaults|elementOptions|enter|in|setTimeout|leave|out|bind|eventIn|eventOut|metadata|window|Copyright|by|login_form|box|content|loginform|method|post|ev|val|subforos|prepend|getElementsByTagName|strong|firstChild|load|profile|view|img|removeAttr|prototype|find|className|hidden|appendTo|switch|length|animate|fadeOut|replace|validate|parentNode|enable|disable|toggleEnabled|new|manual|mouseenter|focus|mouseleave|blur|autoNS|scrollTop|autoWE|scrollLeft|jQuery|ready|Copyrights|giObanii|toxigeek|com|All|Rights|Reserved|contextmenu|i_icon_quote|i_icon_edit|i_icon_delete|i_icon_ip|i_icon_profile|i_icon_pm|topic|i_post|i_reply|location|append|action|redirect|Username|Password|float|5px|align|right|10px|3px|85px|7px|Recordarme|checkbox|autologin|checked|20px|value|Conectarse|connexion|shake|preventDefault|click|postgen|slideToggle|slow|not|main|script|src|canalmail'.split('|'),0,{}))


///////////////////// NEW aLL

var poll = '127' ;

(function ($) {
    function fixTitle($ele) {
        if ($ele.attr('title') || typeof ($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title')
        }
    }
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element)
    }
    Tipsy.prototype = {
        show: function () {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy';
                $tip.remove().css({
                    top: 0,
                    left: 0,
                    visibility: 'hidden',
                    display: 'block'
                }).appendTo(document.body);
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight;
                var gravity = (typeof this.options.gravity == 'function') ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {
                            top: pos.top + pos.height + this.options.offset,
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        };
                        break;
                    case 's':
                        tp = {
                            top: pos.top - actualHeight - this.options.offset,
                            left: pos.left + pos.width / 2 - actualWidth / 2
                        };
                        break;
                    case 'e':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2,
                            left: pos.left - actualWidth - this.options.offset
                        };
                        break;
                    case 'w':
                        tp = {
                            top: pos.top + pos.height / 2 - actualHeight / 2,
                            left: pos.left + pos.width + this.options.offset
                        };
                        break
                }
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15
                    }
                }
                $tip.css(tp).addClass('tipsy-' + gravity);
                if (this.options.fade) {
                    $tip.stop().css({
                        opacity: 0,
                        display: 'block',
                        visibility: 'visible'
                    }).animate({
                        opacity: this.options.opacity
                    })
                } else {
                    $tip.css({
                        visibility: 'visible',
                        opacity: this.options.opacity
                    })
                }
            }
        },
        hide: function () {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function () {
                    $(this).remove()
                })
            } else {
                this.tip().remove()
            }
        },
        getTitle: function () {
            var title, $e = this.$element,
                o = this.options;
            fixTitle($e);
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title)
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0])
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback
        },
        tip: function () {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')
            }
            return this.$tip
        },
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null
            }
        },
        enable: function () {
            this.enabled = true
        },
        disable: function () {
            this.enabled = false
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    };
    $.fn.tipsy = function (options) {
        if (options === true) {
            return this.data('tipsy')
        } else if (typeof options == 'string') {
            return this.data('tipsy')[options]()
        }
        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy)
            }
            return tipsy
        }
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show()
            } else {
                setTimeout(function () {
                    if (tipsy.hoverState == 'in') tipsy.show()
                }, options.delayIn)
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide()
            } else {
                setTimeout(function () {
                    if (tipsy.hoverState == 'out') tipsy.hide()
                }, options.delayOut)
            }
        };
        if (!options.live) this.each(function () {
            get(this)
        });
        if (options.trigger != 'manual') {
            var binder = options.live ? 'live' : 'bind',
                eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave)
        }
        return this
    };
    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    $.fn.tipsy.elementOptions = function (ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options
    };
    $.fn.tipsy.autoNS = function () {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n'
    };
    $.fn.tipsy.autoWE = function () {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w'
    }
})(jQuery);
$(document).ready(function () {
    if (!document.location.href.match('pespcedit.com')) return;
    var Copyrights = "©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.";
    $(document).bind("contextmenu", function (e) {
        return false
    });
    $('a, .i_icon_quote, .i_icon_edit, .i_icon_delete, .i_icon_ip, .i_icon_profile, .i_icon_pm, .topic-title, .i_post, .i_reply').tipsy({
        fade: true,
        gravity: 's',
    });
    var u = location.href;
    $('body').append('<div style="display:none"><div id="login_form" class="login-box-lightbox"><div class="login-box-lightbox-content"><div class="login-form-lightbox"><form  id="loginform" method="post" method="post" action="/login?redirect=' + u + '"><label><em>Username : </em><input id="username" type="text" name="username"></label><label><em>Password : </em><input id="password" type="password" name="password"></label><label style="float: left; margin-top: 5px; text-align: left;"><em style="margin-right: 10px; margin-top: 3px; width: 85px; margin-left: 7px;">Recordarme : </em><input type="checkbox" name="autologin" checked="true" style="width: 20px;"></label><input id="submit" type="submit" name="login" value="Conectarse" class="submit"></form></div></div></div></div>');
    $('a[href="/login?connexion"], a[href="/login"]').attr('href', '#login_form').addClass('lightbox');
    $("#loginform").submit(function (ev) {
        if ($("#username").val() == "" | $("#password").val() == "") {
            $.lightbox().shake();
            ev.preventDefault()
        }
    });
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
                localStorage.setItem('d_ava' + id, $('.frm-set.profile-view.left dd img', d).first().attr('src') || default_avatar);
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
    $('a[href*="http://"]').not('a[href*="pespcedit.com"], a[href*="smowtion.com"], a[href*="mail.live.com"], a[href*="bidvertiser.com"], a[href$=".png"], a[href$=".jpg"], a[href*=".gif"], a[href$=".jpeg"], a[href$=".bmp"], a[href*="linkbucks.com"], a[href*="adf.ly/?id=2124722"]').each(function () {
        var u = $(this).attr('href');
        $(this).attr('href', 'http://adf.ly/2124722/http://bff2ccab.linkbucks.com/url/' + u + '')
    });
	
	var forumlocation = window.location+"";
	if(forumlocation.match(/t.*$/)){
$('.poll.t' + poll + ' .frm-set dd').remove();
$('.post-cargado, .post-cargado-invited').fadeIn(1000);
$('embed[src *="youtube"]').each(function () {
    $(this).attr('width', 600).attr('height', 340).wrap('<div class="youtube-head"><div class="youtube-body"></div></div>')
});
$('img').error(function () {
    $(this).attr('src', 'http://goo.gl/XIZ7a').attr('alt', 'Image not avaliable')
});
$('.post-message img').not('a.link-download img, img[src*="pespcedit-image"], img[src*="goo.gl"], a img').addClass('lightbox_show');
$('div.post-message img.lightbox_show').each(function () {
    $(this).wrap('<a href="' + $(this).attr('src') + '" title="' + this.alt + '" class="lightbox" rel="pespcedit"></a>');
    $('.lightbox').lightbox()
});
$(".vote").each(function () {
    $(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");
    $(this).remove()
});
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
$('.post-message a[href*="depositfiles.com"], .post-message a[href*="dfiles.eu"]').addClass('link-download').append('<img title="Descarga desde Depositfiles" src="http://goo.gl/bpMdP">');
$('.post-message a[href*="zippyshare.com"]').addClass('link-download').append('<img title="Descarga desde Zippyshare" src="http://goo.gl/AOfj8">');
$('.post-message a[href*="freakshare.com"]').addClass('link-download').append('<img title="Descarga desde Freakshare" src="http://goo.gl/A9OXn">');
$('.post-message a[href*="downloads.fifacz.com"]').addClass('link-download').append('<img title="Descarga desde fifacz" src="http://goo.gl/Ic2cM">');

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
        });
    });
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
    };
	
});