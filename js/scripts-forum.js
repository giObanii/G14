/* Que haces de miron Estos son los scripts de mi foro*/
/* Si quieres uno pidemelo pues no creo que le entiendas o bien visita mi website */
//zX2Aw8vj4Rd3

$(document).ready(function() {
	    $.getScript('https://raw.githubusercontent.com/giObanii/G14/master/js/jquery.lightbox.min.js');
    $('.google_ads_div_728x90-top, script[src*="cas.criteo.com"], iframe[src*="ad.z5x.net"], iframe[src*="adnxs.com"], iframe[src*="foroactivo.com"], iframe[src*="adstune.com"], div[style*="position:relative;height:90px; min-width: 728px px;"]').each(function() {
        $(this).closest('div').remove()
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
	
});