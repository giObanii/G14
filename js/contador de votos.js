$(function(){$(".vote").each(function(){$(this).find(".vote-button:first a").html('<img src="http://illiweb.com/fa/optimisation_fdf/common/buttonok.png" alt="Votar" title="Votar este mensaje" />').click(function(){$.get($(this).attr("href"));$(this).parent().html('<img src="http://illiweb.com/fa/optimisation_fdf/common/buttonok_off.png"  alt="Vote enregistré" title="Voto registrado" />');return!1});$(this).closest(".postbody").find("ul.profile-icons").append("<li />").find("li:last").append($(this).find(".vote-button:first a")).append($(this).find(".vote-bar").length?' <div class="vote-count" title="Número de votos positivos">'+$(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/,"$1"):"")+'</div>';$(this).remove()})});



$(function(){$(".vote").each(function(){$(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length?$(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/,"$1"):"");$(this).remove()})});



$(document).ready(function () {
    $('.post-cargado, .post-cargado-invited').fadeIn(1000);
    $('.post-cargado-invited .post-message a.link-download').replaceWith('<div class="hide"><span>Por favor <a href="/login">Conectate</a> o <a href="/register">Registrate</a> para ver el contenido.</span></div>');
    $('embed[src *="youtube"]').attr('width', 600);
    $('embed[src *="youtube"]').attr('height', 340);
    $('embed[src *="youtube"]').wrap('<div class="youtube-head"><div class="youtube-body"></div></div>');
    $('.post-message img').not('a[href*="mediafire.com"] img, a[href*="ul.to"] img, a[href*="gamefront.com"] img, a[href*="filepost.com"] img, a[href*="rapidshare.com"] img, a[href*="jumbofiles.com"] img, a[href*="depositfiles.com"] img, a[href*="downloads.fifacz.com"] img, a[href*="4shared.com"] img, img[src*="pespcedit-image"], img[src*="smiles"]').addClass('lightbox_show');
    $('div.post-message img.lightbox_show').each(function () {
        $(this).wrap('<a href="' + $(this).attr('src') + '" title="' + this.alt + '" class="lightbox" rel="group1"></a>');
        $('.lightbox').lightbox()
    });
    $('div:eq(0)').before('<div id="alert-enlace-fon"><div class="alert-enlace">Usted está saliendo de PESPCEdit.com <br /> No revele sus contraseñas.<br /><div id="alert-url" style="display: none;"></div><br /><div id="alert-url-boton" class="can">Cancelar</div> <div id="alert-url-boton" class="go">Continuar</div></div></div>');
    if ($('table.bodylinewidth').length) {
        o = '.postbody div:first-child a,.signature_div a'
    } else {
        o = '.post-entry div a,.signature_div a,.sig-content a,.post .content div a'
    };
    $(o).not('a.lightbox').mousedown(function () {
        if ($(this).attr('href').indexOf('http://') != -1) {
            $('#alert-enlace-fon').show();
            $('#alert-url').html($(this).attr('href'));
            return false
        }
    });
    $('#alert-url-boton.can').click(function () {
        $(this).closest('#alert-enlace-fon').hide()
    });
    $('#alert-url-boton.go').click(function () {
        window.open($('#alert-url').html());
        $(this).closest('#alert-enlace-fon').hide()
    });
    $(".vote").each(function () {
    $(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");
    $(this).remove()});
});