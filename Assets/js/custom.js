$("ul").on("click", "li", function(){
	/*$(this).css("color","gray");
	$(this).css("text-decoration","line-through");*/
	$(this).toggleClass("tamamlanmis");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
	$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress (function(event){
	if(event.which ===13){
		var yeniItem = $(this).val();
		console.log(yeniItem);
		$(this).val("");
		/*$("ul").append("<li>Cansel</li>");*/
		/*$("ul").append("<li>"+ yeniItem +"</li>");*/
		$("ul").append("<li><span><i class='fa fa-window-close' aria hidden='true'> </i></span>"+" "+ yeniItem +"</li>");
		
}
});
$(".fa-solid").click(function(){
	$("input[type='text']").fadeToggle();
});
