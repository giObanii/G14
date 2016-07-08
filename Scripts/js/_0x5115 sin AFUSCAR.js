$(function () {
    var forumdomain = window.location.hostname;
    $('.post, .footer-links, #pun-foot, #page-footer').find('a[href^="http://"], a[href^="https://"]').not('a[href*="' + forumdomain + '"], a.link_0x16, a.link_0x17, a.link_0x18, a.link_0x19, a.link_0x20, a.link_0x21, a.link_0x22, a.link_0x23, a.link_0x24, a.link_0x25, a.link_0x26, a.link_0x27, a.link_0x28, a.link_0x29, a.link_0x30, a[href$=".png"], a[href$=".PNG"], a[href$=".jpg"], a[href$=".JPG"], a[href$=".gif"], a[href$=".GIF"], a[href$=".jpeg"], a[href$=".JPEG"], a[href$=".bmp"], a[href$=".BMP"], a[href*="adf.ly/?id=4175515"], a[href*="adf.ly/4175515/"], a[href*="ee7ce5ae.linkbucks.com"], a[href*="facebook.com"], a[href*="twitter.com"], a[href*="plus.google.com"]').click(function () {
        url = $(this).attr("href");
        url1 = encodeURIComponent(url);
        url2 = ('http://2f5fca09.linkbucks.com/url/http://adf.ly/4175515/' + url1 + '');
        window.open(url2, '_blank');
        return false
    });
});

http://uploadboy.com