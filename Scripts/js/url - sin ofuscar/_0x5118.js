$(function () {
    var forumdomain = window.location.hostname;
    $('.footer-links a, #pun-foot #pun-about a, #page-footer a, a[href*="mega.co.nz"], a[href*="uploadtemple.com"], a[href*="ultrashare.net"], a[href*="zalil.ru"], a[href*="send-file.com"], a[href*="yourfilelink.com"], a[href*="load.to"], a[href*="filehost.ro"], a[href*="fastshare.org"], a[href*="streamupload.com"], a[href*="speedyshare.com"], a[href*="axifile.com"], a[href*="supload.com"], a[href*="upload2.com"], a[href*="bonpoo.com"], a[href*="bigupload.com"], a[href*="webfilehost.com"], a[href*="uploading.com"], a[href*="yousendit.com"], a[href*="transferbigfiles.com"], a[href*="mailbigfile.com"], a[href*="megashares.com"], a[href*="shareflare.net"], a[href*="oron.com"], a[href*="filesend.ca"], a[href*="savefile.com"], a[href*="toofiles.com"],a[href*="filehosting.org"], a[href*="badongo.com"], a[href*="myfreefilehosting.com"], a[href*="zedupload.com"], a[href*="fileqube.com"], a[href*="putlocker.com"], a[href*="filerio.com"], a[href*="dropsend.com"], a[href*="filefactory.com"], a[href*="gigasize.com"], a[href*="hotfile.com"], a[href*="filesave.me"], a[href*="filesend.net"], a[href*="wikiupload.com"], a[href*="filehosting.org"], a[href*="crocko.com"], a[href*="senduit.com"], a[href*="filedropper.com"], a[href*="adrive.com"], a[href*="mediafire.com"], a[href*="ul.to"], a[href*="rapidgator.net"], a[href*="jumbofiles.com"], a[href*="filepost.com"], a[href*="gamefront.com"], a[href*="rapidshare.com"], a[href*="howfile.com"], a[href*="4shared.com"], a[href*="bitshare.com"], a[href*="moddingway.com/file/"], a[href*="depositfiles.com"], a[href*="zippyshare.com"], a[href*="freakshare.com"], a[href*="rapidshare.com"], a[href*="linkbucks.com"], a[href*="adf.ly"], a[href*="downloads."], a[href*="download."], a[href*="attachment."], a[href*="downloads/"], a[href*="download/"], a[href*="attachment/"], a[href*="datafilehost.com"], a[href*="skydrive."], a[href*="multiupload.com"], a[href*="dropbox.com"], a[href$=".html"], a[href*="fileparadox.in"]').addClass('link_0x18').not('a[href*="' + forumdomain + '"], a[href*="/statistics"], a[href*="/donate"], a[href*="/contact"], a[href*="/abuse"], a[href*="/admin"], a.link_0x16, a.link_0x17, a.link_0x19, a.link_0x20, a.link_0x21, a.link_0x22, a.link_0x23, a.link_0x24, a.link_0x25, a.link_0x26, a.link_0x27, a.link_0x28, a.link_0x29, a.link_0x30, a.link_0x31, a.link_0x32, a.link_0x33, a.link_0x34, a.link_0x35').click(function () {
        url = $(this).attr("href");
        url1 = encodeURIComponent(url);
        url2 = ('http://77aafbe6.linkbucks.com/url/' + url1 + '');
        window.open(url2, '_blank');
        return false
    });
    $('.google_ads_div_728x90-top, script[src*="cas.criteo.com"], iframe[src*="an.z5x.net/tt?id="], script[src*="an.z5x.net"]').not('#google_ads_div_728x90').each(function () {
        $(this).closest('div').html('<iframe width="728" scrolling="no" id="google_ads_div_728x90" height="90" frameborder="0" src="http://goo.gl/x0q1T" allowtransparency="true" hspace="0" vspace="0" marginheight="0" marginwidth="0"></iframe>')
    })
});