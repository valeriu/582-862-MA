/*
Travail pratique 1 : Un site web avec une grille fluide et adaptative
Author: Valeriu Tihai
Author URI: http://valeriu.tihai.md/
Version: 0.1

Professor : Jonathan Martel 
*/
/* Google maps API v3*/
function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(45.6007189, -73.5310528),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-stereoclub"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
/* One page scroll options*/
$(document).ready(function(){
	$(".stereoclub").onepage_scroll({
		sectionContainer: "section",
		easing: 		  "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	});
/* jQuery firefox detection */
if(navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
		$("body").addClass("ff");
	}
});