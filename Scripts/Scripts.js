// Respuesta automatica sin refrescar: PUNBB

$(document).ready(function(){
 $('#quick_reply input[name="post"]').click(function(d){
   d.preventDefault();
   $.post("/post",$('#quick_reply').serialize()+"&post=1&prevent_post=1",function(b){
   b=b.substring(b.indexOf('<meta http-equiv="refresh" content="1;url=')+42,b.indexOf('<meta name="title"')-2);
   $(".post:last").after('<div style="display: none;" class="ajax_post"></div>'),$(".ajax_post:last").load(b+" .post:last",function(){
   $('.ajax_post').slideDown(350);
   });
   });
   });
});