var Social_One = true;
var Social_Two = true;
var Social_Three = true;
var Social_Four = true;
var Social_Five = true;
var Social_Six = true;

$(document).ready(function() {
$('body').append('<div id="redessociales"></div>');

if (Social_One === true) { 
$('body').find('#redessociales').append('<a class="smedia facebook" href="https://www.facebook.com/josernitos">Uno</a>');
} 
if (Social_Two === true) { 
$('body').find('#redessociales').append('<a class="smedia twitter" href="http://www.twitter.com/josernitos">Dos</a>');
} 
if (Social_Three === true) {
$('body').find('#redessociales').append('<a class="smedia instagram" href="#">Tres</a>');
} 
if (Social_Four === true) {
$('body').find('#redessociales').append('<a class="smedia youtube" href="#">Cuatro</a>');
} 
if (Social_Five === true) {
$('body').find('#redessociales').append('<a class="smedia vimeo" href="#">Cinco</a>');
} 
if (Social_Six === true) {
$('body').find('#redessociales').append('<a class="smedia email" href="#">Seis</a>');
} 
});