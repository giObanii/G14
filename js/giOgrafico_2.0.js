$(function() {
$(".vote").each(function() {
 $(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");
 $(this).remove()
});
var x = $('.post-message a').get();
for (i = 0; i < x.length; i++) {
var Href = $(x[i]).attr('href');
Href = Href.replace(/http:\/\/adf.ly\/.*?\//, "");
$(x[i]).attr('href', Href)
}; 
$('.topic .post').not('.topic .post:first').each(function() {
$(this).closest('.main.paged').addClass('topic-blog');
});
$(window).bind('load', function() {
$('.post-message img').each(function() {
    if((typeof this.naturalWidth != "undefined" &&
        this.naturalWidth == 0 ) 
        || this.readyState == 'uninitialized' ) {
        $(this).attr('src', 'https://raw.githubusercontent.com/giObanii/G14/master/css/images/noimage.gif');
	$(this).attr('alt', 'Image not avaliable');
    }
$(this).not('a.link-download img, img[src*="pespcedit-image"], img[src*="goo.gl"], a img, img[src*="noimage"]').addClass('lightbox_show');
});
$('div.post-message img.lightbox_show').each(function() {
$(this).wrap('<a href="' + $(this).attr('src') + '" title="' + this.alt + '" data-lightbox="roadtrip" rel="giOgrafico"></a>')
});
});
        $('.post-message a[href*="mega.co.nz"]').addClass('link-download').append('<img title="Descarga desde Mega" src="https://raw.githubusercontent.com/giObanii/G14/master/images/mega.png">');
        $('.post-message a[href*="mediafire.com/download/"]').addClass('link-download').append('<img title="Descarga desde Medifire" src="https://raw.githubusercontent.com/giObanii/G14/master/images/5z34gp.png">');
        $('.post-message a[href*="ul.to"], .post-message a[href*="uploaded."]').addClass('link-download').append('<img title="Descarga desde Uploaded" src="https://raw.githubusercontent.com/giObanii/G14/master/images/pbprk.png">');
        $('.post-message a[href*="rapidgator.net"]').addClass('link-download').append('<img title="Descarga desde Rapidgator" src="https://raw.githubusercontent.com/giObanii/G14/master/images/g4r5rd.png">');
        $('.post-message a[href*="jumbofiles.com"]').addClass('link-download').append('<img title="Descarga desde Jumbofiles" src="https://raw.githubusercontent.com/giObanii/G14/master/images/2i1nx1h.png">');
        $('.post-message a[href*="filepost.com"]').addClass('link-download').append('<img title="Descarga desde Filepost" src="https://raw.githubusercontent.com/giObanii/G14/master/images/2wn22rb.png">');
        $('.post-message a[href*="gamefront.com"]').addClass('link-download').append('<img title="Descarga desde Gamefront" src="https://raw.githubusercontent.com/giObanii/G14/master/images/hry9f4.png">');
        $('.post-message a[href*="rapidshare.com"]').addClass('link-download').append('<img title="Descarga desde Rapidshare" src="https://raw.githubusercontent.com/giObanii/G14/master/images/2134x03.png">');
        $('.post-message a[href*="howfile.com"]').addClass('link-download').append('<img title="Descarga desde Howfile" src="https://raw.githubusercontent.com/giObanii/G14/master/images/p0wfem.png">');
        $('.post-message a[href*="4shared.com"]').addClass('link-download').append('<img title="Descarga desde 4shared" src="https://raw.githubusercontent.com/giObanii/G14/master/images/4j5dzo.png">');
        $('.post-message a[href*="bitshare.com"]').addClass('link-download').append('<img title="Descarga desde Bitshare" src="https://raw.githubusercontent.com/giObanii/G14/master/images/bitshare.png">');
        $('.post-message a[href*="moddingway.com/file/"]').addClass('link-download').append('<img title="Descarga desde Moddingway" src="https://raw.githubusercontent.com/giObanii/G14/master/images/m0gnay.png">');
        $('.post-message a[href*="depositfiles.com"], .post-message a[href*="depositfiles.org"], .post-message a[href*="dfiles.eu"]').addClass('link-download').append('<img title="Descarga desde Depositfiles" src="https://raw.githubusercontent.com/giObanii/G14/master/images/2ce0jgg.png">');
        $('.post-message a[href*="zippyshare.com"]').addClass('link-download').append('<img title="Descarga desde Zippyshare" src="https://raw.githubusercontent.com/giObanii/G14/master/images/zippyshare.png">');
        $('.post-message a[href*="freakshare.com"]').addClass('link-download').append('<img title="Descarga desde Freakshare" src="https://raw.githubusercontent.com/giObanii/G14/master/images/freakshare.png">');
        $('.post-message a[href*="putlocker.com"]').addClass('link-download').append('<img title="Descarga desde Putlocker" src="https://raw.githubusercontent.com/giObanii/G14/master/images/155rdsq.png">');
        $('.post-message a[href*="filecloud.io"]').addClass('link-download').append('<img title="Descarga desde Filecloud" src="https://scripts-giobanii.googlecode.com/svn/trunk/images/Filecloud.png">');
        $('.post-message a[href*="downloads.fifacz.com"]').addClass('link-download').append('<img title="Descarga desde fifacz" src="http://goo.gl/Ic2cM">');
});






$('#main-content').each(function() {
var adsindex = $(this).find('div[style*="display:inline-block !important;"]').html();
$('.bnrtp').append(' ' + adsindex + '');
   $('.google_ads_div_728x90-top, script[src*="cas.criteo.com"], iframe[src*="ad.z5x.net"], iframe[src*="adnxs.com"], iframe[src*="foroactivo.com"], frame[src*="adstune.com"], div[style*="position:relative;height:90px; min-width: 728px px;"]').each(function() {
        $(this).remove();
    });
});
	