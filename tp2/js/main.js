//Carousel options
$(".carousel").carousel({
	interval: 4000
})

// JavaScript validation

$("#inputJS").change(function(el){
	$( ".jsvalue" ).text(el.target.value);
})
$("#inputHTMLCSS").change(function(el){
	$( ".htmlcssvalue" ).text(el.target.value);
})
$("#inputPHP").change(function(el){
	$( ".phpvalue" ).text(el.target.value);
})
$("#inputDesign").change(function(el){
	$( ".designvalue" ).text(el.target.value);
})
