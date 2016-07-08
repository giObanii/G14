function skinselector() {
var a = "";
document.getElementById("skinselector").value = "";
document.getElementById("skinselector").value += "/**\n";
document.getElementById("skinselector").value += "* Code generated with \"Skin Generator Selector 2.0\"\n";
document.getElementById("skinselector").value += "* Under an Attribution, Share Alike License\n";
document.getElementById("skinselector").value += "* By giObanii [3mOtrOnik] ( http://toxigeek.com/generator-skin-selector-2/ )\n";
document.getElementById("skinselector").value += "**/\n";
//INICIO STYLE
document.getElementById("skinselector").value += "document.write('\<style> .skinselector {height: auto;position: absolute;width: auto;z-index: 1;} #skinselector select {background: none repeat scroll 0 0 #FFFFFF;border-radius: 5px 5px 5px 5px;color: #000000;cursor: pointer;margin: 0 auto;line-height: 15px;outline: medium none;padding: 6px 10px;width: 148px !important;border: 0px solid #000;font-size: 14px;} ";
//COLOR DEFAULT
if (document.getElementById("urlforum").value != "") {
a = "";
a += ".icon-skin.Default {"; 
document.getElementById("skinselector").value += a
if (document.getElementById("colorpickerField1").value != "") {
a = "";
a += "background: ";
a += "#" + document.getElementById("colorpickerField1").value;
a += ";} ";
document.getElementById("skinselector").value += a
}
a = "";
document.getElementById("skinselector").value += a
}
//COLOR SKIN1
if (document.getElementById("urlskin1").value != "") {
a = "";
a += ".icon-skin"; 
a += "." + document.getElementById("nameskin1").value + " {";
document.getElementById("skinselector").value += a
if (document.getElementById("colorpickerField4").value != "") {
a = "";
a += "background: ";
a += "#" + document.getElementById("colorpickerField4").value;
a += ";} ";
document.getElementById("skinselector").value += a
}
a = "";
document.getElementById("skinselector").value += a
}
//COLOR SKIN2
if (document.getElementById("urlskin2").value != "") {
a = "";
a += ".icon-skin"; 
a += "." + document.getElementById("nameskin2").value + " {";
document.getElementById("skinselector").value += a
if (document.getElementById("colorpickerField6").value != "") {
a = "";
a += "background: ";
a += "#" + document.getElementById("colorpickerField6").value;
a += ";} ";
document.getElementById("skinselector").value += a
}
a = "";
document.getElementById("skinselector").value += a
}
//COLOR SKIN3
if (document.getElementById("urlskin3").value != "") {
a = "";
a += ".icon-skin"; 
a += "." + document.getElementById("nameskin3").value + " {";
document.getElementById("skinselector").value += a
if (document.getElementById("colorpickerField8").value != "") {
a = "";
a += "background: ";
a += "#" + document.getElementById("colorpickerField8").value;
a += ";} ";
document.getElementById("skinselector").value += a
}
a = "";
document.getElementById("skinselector").value += a
}
//COLOR SKIN4
if (document.getElementById("urlskin4").value != "") {
a = "";
a += ".icon-skin"; 
a += "." + document.getElementById("nameskin4").value + " {";
document.getElementById("skinselector").value += a
if (document.getElementById("colorpickerField10").value != "") {
a = "";
a += "background: ";
a += "#" + document.getElementById("colorpickerField10").value;
a += ";} ";
document.getElementById("skinselector").value += a
}
a = "";
document.getElementById("skinselector").value += a
}
//COLOR SKIN5
if (document.getElementById("urlskin5").value != "") {
a = "";
a += ".icon-skin"; 
a += "." + document.getElementById("nameskin5").value + " {";
document.getElementById("skinselector").value += a
if (document.getElementById("colorpickerField12").value != "") {
a = "";
a += "background: ";
a += "#" + document.getElementById("colorpickerField12").value;
a += ";} ";
document.getElementById("skinselector").value += a
}
a = "";
document.getElementById("skinselector").value += a
}
// FIN STYLE
document.getElementById("skinselector").value += "</style>');\n";

//INICIO SELECTOR
document.getElementById("skinselector").value += "document.write('<div class=\"skinselector\" style=\"";
if (document.getElementById("position").value != "") {
a = "";
a += document.getElementById("position").value;
document.getElementById("skinselector").value += a
}
document.getElementById("skinselector").value += "\"><form  id=\"skinselector\" ><select onchange=\"changeskin(this.options[this.selectedIndex].value); window.location.reload();\"><option> Cambiar de Skin </option>";

// SELECT DEFAULT
if (document.getElementById("urlforum").value != "") {
a = "";
a += "<option class=\"skin\" value=\"Default\"> Default </option>"; 
document.getElementById("skinselector").value += a
}
// SELECT SKIN1
if (document.getElementById("urlskin1").value != "") {
a = "";
a += "<option class=\"skin\"";
a += "value=\"" + document.getElementById("nameskin1").value + "\""; 
a += "> " + document.getElementById("nameskin1").value; 
a += " </option>";
document.getElementById("skinselector").value += a
}
// SELECT SKIN2
if (document.getElementById("urlskin2").value != "") {
a = "";
a += "<option class=\"skin\"";
a += "value=\"" + document.getElementById("nameskin2").value + "\""; 
a += "> " + document.getElementById("nameskin2").value; 
a += " </option>";
document.getElementById("skinselector").value += a
}
// SELECT SKIN3
if (document.getElementById("urlskin3").value != "") {
a = "";
a += "<option class=\"skin\"";
a += "value=\"" + document.getElementById("nameskin3").value + "\""; 
a += "> " + document.getElementById("nameskin3").value; 
a += " </option>";
document.getElementById("skinselector").value += a
}
// SELECT SKIN4
if (document.getElementById("urlskin4").value != "") {
a = "";
a += "<option class=\"skin\"";
a += "value=\"" + document.getElementById("nameskin4").value + "\""; 
a += "> " + document.getElementById("nameskin4").value; 
a += " </option>";
document.getElementById("skinselector").value += a
}
// SELECT SKIN5
if (document.getElementById("urlskin5").value != "") {
a = "";
a += "<option class=\"skin\"";
a += "value=\"" + document.getElementById("nameskin5").value + "\""; 
a += "> " + document.getElementById("nameskin5").value; 
a += " </option>";
document.getElementById("skinselector").value += a
}
// FIN SELECTOR
document.getElementById("skinselector").value += "</select></form></div>');\n";
document.getElementById("skinselector").value += "var scheme = getCookie('skinforum');\n";


/////////////////////////////////

//CSS SKIN DEFAULT
if (document.getElementById("urlforum").value != "") {
a = "";
a += "if (scheme == 'Default') {\n";
a += "document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"";
a += document.getElementById("urlforum").value + "77-ltr.css";
a += "\">');\n";
a += "} "
document.getElementById("skinselector").value += a
}
//CSS SKIN 1
if (document.getElementById("urlskin1").value != "") {
a = "";
a += "else if (scheme == '";
a += document.getElementById("nameskin1").value;
a += "') {\n";
a += "document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"";
a += document.getElementById("urlskin1").value;
a += "\">');\n";
a += "} "
document.getElementById("skinselector").value += a
}
//CSS SKIN 2
if (document.getElementById("urlskin2").value != "") {
a = "";
a += "else if (scheme == '";
a += document.getElementById("nameskin2").value;
a += "') {\n";
a += "document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"";
a += document.getElementById("urlskin2").value;
a += "\">');\n";
a += "} "
document.getElementById("skinselector").value += a
}
//CSS SKIN 3
if (document.getElementById("urlskin3").value != "") {
a = "";
a += "else if (scheme == '";
a += document.getElementById("nameskin3").value;
a += "') {\n";
a += "document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"";
a += document.getElementById("urlskin3").value;
a += "\">');\n";
a += "} "
document.getElementById("skinselector").value += a
}
//CSS SKIN 4
if (document.getElementById("urlskin4").value != "") {
a = "";
a += "else if (scheme == '";
a += document.getElementById("nameskin4").value;
a += "') {\n";
a += "document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"";
a += document.getElementById("urlskin4").value;
a += "\">');\n";
a += "} "
document.getElementById("skinselector").value += a
}
//CSS SKIN 5
if (document.getElementById("urlskin5").value != "") {
a = "";
a += "else if (scheme == '";
a += document.getElementById("nameskin5").value;
a += "') {\n";
a += "document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"";
a += document.getElementById("urlskin5").value;
a += "\">');\n";
a += "} "
document.getElementById("skinselector").value += a
}
///funtions
document.getElementById("skinselector").value += "\n//Script functions not modific\n";
document.getElementById("skinselector").value += "function changeskin(a){var b=a;var c='skinforum';var d=location.pathname;var e=d.substring(0,d.lastIndexOf('/'))+'/';var f=new Date();f.setTime(f.getTime()+(180*24*3600*1000));setCookie(c,b,f,e)}function getCookie(a){var b=a+\"=\";var c=document.cookie;if(c.length>0){begin=c.indexOf(b);if(begin!=-1){begin+=b.length;end=c.indexOf(\";\",begin);if(end==-1)end=c.length;return unescape(c.substring(begin,end))}}return null}function setCookie(a,b,c,d,e,f){document.cookie=a+\"=\"+escape(b)+((c==null)?\"\":\"; expires=\"+c.toGMTString())+((d==null)?\"\":\"; path=\"+d)+((e==null)?\"\":\"; domain=\"+e)+((f==null)?\"\":\"; secure\")}\n";
document.getElementById("skinselector").value += "eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('1.c(\\'<d e=\"f\" g=\"h/0\" i=\"2://3-4.5.6/7/8/0/j.0\" />\\\\n\\');$(1).k(9(){$.l(\\'2://3-4.5.6/7/8/a/b.a\\',9(){$(\"m#b\").o()})});',25,25,'css|document|http|scripts|giobanii|googlecode|com|svn|trunk|function|js|skinselector|write|link|rel|stylesheet|type|text|href|style|ready|getScript|form||jqTransform'.split('|'),0,{}))";
document.getElementById("skinselector").value += "\n//Gracias por utilizar este generador Recomienda: Toxigeek.com\n\n";
};
var worker = '' + location.hostname + '';
if ((worker.indexOf('tox' + 'ige' + 'ek.c' + 'om') == -1) && (location.hostname != '') && (location.hostname != 'localhost')) {
document.write('C' + 'o' + 'd' + 'e' + ' by' + ' <a href="ht' + 'tp://tox' + 'ig' + 'e' + 'e' + 'k.c' + 'om/">gi' + 'Ob' + 'an' + 'ii</a>')
};

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i=0;s=0;q=0;J="",M="";5=7.m?1:0;r=7.B?1:0;9=7.K?1:0;L="";8 g(){4=7.h.j;6(4.k.l>0){6(5){f=4.n();f.o("p");2.3="t u v w!";x("2.3=\'\'",y)}4.z();4.A()}c C(\'D E F G H!\')}8 I(a,b){6(5||9){2.3=b;a.d.e=\'#N\';a.d.O=\'P\'}c 2.3=b}8 Q(a){6(5||9){a.d.e=\'R\';2.3=\'\'}c 2.3=\'\'}',54,54,'||window|status|padText|ie|if|document|function|ns6|||else|style|backgroundColor|therange|selectCode|pad||text|value|length|all|createTextRange|execCommand|Copy|num|ns||Code|copied|into|Clipboard|setTimeout|1800|focus|select|layers|alert|No|existe|codigo|que|seleccionar|LightOn|seq1|getElementById|svet|seq2|EAEAEA|cursor|hand|LightOut|white'.split('|'),0,{}))