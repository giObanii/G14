
//Canales de los partdios del Toluca & Mexico
CANAL1='http://futbolxinternet.aztecadeportes.com/frame-t.html?';
CANAL2='http://www.zenexplayer.com/embedplayer/rivo401/1/620/425';
CANAL3='http://redzer.com.mx/canal1.html?width=620&height=425&domain=http://www.televisionenvivo.tv/';
CANAL4='http://www.fraseschingonas.net/2014/06/azteca-7.html';
CANAL5='';
CANAL6='';
CANAL7='';
CANAL8='';

//http://www.giografico.net/h12-sin-canal
//http://www.giografico.net/h13-canal-extra
//http://www.giografico.net/h14-canal-extra-2
//http://www.pirlotv.tv/reproductor/canal4.php?width=620&height=425
//Univision Deportes http://www.pirlotv.tv/reproductor/univisiondep.php?width=575&height=380
//http://futbolxinternet.aztecadeportes.com/frame-t.html?
//http://tv.televisadeportes.esmas.com/embed/embed.php?id=255624&w=575&h=380&swf=2&site=es.esmas.videodep&canal=es.esmas.videodep|futbol|tv.deportes.futbol
//http://tv-internet-tv.com/tv-mexico/canal5.html

//CANALEXTRA='';

CANALEXTRA='<object width="100%" height="100%" type="application/x-shockwave-flash" data="http://p.jwpcdn.com/6/10/jwplayer.flash.swf" bgcolor="#000000" id="mediaplayer" name="mediaplayer" class="jwswf swfPrev-beforeswfanchor0 swfNext-afterswfanchor0" tabindex="0"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="seamlesstabbing" value="true"><param name="wmode" value="opaque" /><script src="http://jwpsrv.com/library/KMbCvBGMEeON+SIACusDuQ.js"><\/script><script>jwplayer.key="6RfMdMqZkkH88h026pcTaaEtxNCWrhiF6ACoxKXjjiI="<\/script><script type="text/javascript">jwplayer("mediaplayer").setup({file: "http://smartcastlivuni-lh.akamaihd.net/i/0vb1663io_1@183625/master.m3u8", title: "Canal 5", width: 620, autostart: true, height: 425 }); <\/script>';

CANALEXTRA2='';

//<ifr'+'ame src="http://www.giografico.net/h12-sin-canal" width="575" height="380" frameborder="0" scrolling="no" allowtransparency="true" id="ElTolucaEsMiPasion"></ifr'+'ame>

$(document).ready(function() {
 setTimeout(function() {
$("#cargando").fadeOut(1500);
},30000);
$('li a[href*="h3-fut-online"]').attr('title', 'Futbol En vivo.').attr('id', 'Offline');
$('.txtvideo.textogame').html('EN VIVO 09/01/2015 21:30 Hrs.');
//$('#Canal1 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 36px; position: absolute; top: 2px; width: 40px;'); 
//$('#Canal2 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 106px; position: absolute; top: 2px; width: 40px;');  
//$('#Canal3 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 176px; position: absolute; top: 2px; width: 40px;');  
//$('#Canal4 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 246px; position: absolute; top: 2px; width: 40px;');  
//$('#Canal5 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 316px; position: absolute; top: 2px; width: 40px;'); 
//$('#Canal6 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 386px; position: absolute; top: 2px; width: 40px;'); 
//$('#Canal7 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 456px; position: absolute; top: 2px; width: 40px;'); 
//$('#Canal8 > span').attr('style', 'background: url("http://dwj7fa0133ng0.cloudfront.net/images/en/livechat/img-navi-icon-support-online.png") repeat scroll 0 0 rgba(0, 0, 0, 0); height: 18px; left: 523px; position: absolute; top: 2px; width: 40px;'); 
});

(function() {
setInterval(function(){
  var el = document.getElementById('Online');
  if(el.className == 'Online'){
      el.className = 'Online on';
  }else{
      el.className = 'Online';
  }
},500);
})();