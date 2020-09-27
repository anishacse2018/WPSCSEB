$(function(){//Dollar sign is same as document.addEventLsitener("Document Loaded...")
	//Same as document.querySelector("#navbarToggle").addEventLsitener("blur")
	$("#navbarToggle").blur(function(event){
var screenWidth=window.innerWidth;
if(screenWidth<768){
	$("#collapsable-nav").collapse('hide');
}
	});
});