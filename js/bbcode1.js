function instag(tag){
var input = document.post.contenido;
if(typeof document.selection != 'undefined' && document.selection) {
var str = document.selection.createRange().text;
input.focus();
var sel = document.selection.createRange();
sel.text = "[" + tag + "]" + str + "[/" +tag+ "]";
sel.select();
return;
}
else if(typeof input.selectionStart != 'undefined'){
var start = input.selectionStart;
var end = input.selectionEnd;
var insText = input.value.substring(start, end);
input.value = input.value.substr(0, start) + '['+tag+']' + insText + '[/'+tag+']'+ input.value.substr(end);
input.focus();
input.setSelectionRange(start+2+tag.length+insText.length+3+tag.length,start+2+tag.length+insText.length+3+tag.length);
return;
}
else{
input.value+=' ['+tag+']Reemplace este texto[/'+tag+']';
return;
}
}
function inslink(){
var input = document.post.contenido;
if(typeof document.selection != 'undefined' && document.selection) {
var str = document.selection.createRange().text;
input.focus();
var my_link = prompt("Enter URL:","http://");
if (my_link != null) {
if(str.length==0){
str=my_link;
}
var sel = document.selection.createRange();
sel.text = "[url=\'+ my_link + ']" + str + "[/url]";
sel.select();
}
return;
}else if(typeof input.selectionStart != 'undefined'){
var start = input.selectionStart;
var end = input.selectionEnd;
var insText = input.value.substring(start, end);
var my_link = prompt("Enter URL:","http://");
if (my_link != null) {
if(insText.length==0){
insText=my_link;
}
input.value = input.value.substr(0, start) +"[url=\' + my_link +']" + insText + "[/url]"+ input.value.substr(end);
input.focus();
input.setSelectionRange(start+11+my_link.length+insText.length+4,start+11+my_link.length+insText.length+4);
}
return;
}else{
var my_link = prompt("Ingresar URL:","http://");
var my_text = prompt("Ingresar el texto del link:","");
input.value+="[url=\'+ my_link +']" + my_text + "[/url]";
return;
}
}