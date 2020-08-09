$(function() {
$(".vote").each(function() {
 $(this).closest(".entry-content").find(".votaciones .cant-voto").append($(this).find(".vote-bar").length ? $(this).find(".vote-bar").attr("title").replace(/^.*\(([0-9]*) .*?\)$/, "$1") : "");
 $(this).remove()
});
});
		
		