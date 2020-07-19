/* Que haces de miron Estos son los scripts de mi foro*/
/* Si quieres uno pidemelo pues no creo que le entiendas o bien visita mi website */
//zX2Aw8vj4Rd3

$(document).ready(function() {
    $('.google_ads_div_728x90-top, script[src*="cas.criteo.com"], iframe[src*="ad.z5x.net"], iframe[src*="adnxs.com"], iframe[src*="foroactivo.com"], div[style*="position:relative;height:90px; min-width: 728px px;"]').each(function() {
        $(this).closest('div').remove()
    });
});