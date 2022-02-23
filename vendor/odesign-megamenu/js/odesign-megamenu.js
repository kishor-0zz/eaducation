jQuery(function($){
"use strict"
$(document).ready(function(){

$(".toogle-btn").on("click", function(){
	$("#odesign-megamenu .main-menu").slideToggle();
});
var hasChildToggler = $("#odesign-megamenu > nav > ul.navbar > li > .menu-togglearrow");
var hasChildTogglerIcon = $("#odesign-megamenu > nav > ul.navbar > li > .menu-togglearrow > i");
var hasChildToggler = $("#odesign-megamenu > nav > ul.navbar > li > .menu-togglearrow");
var expandIcon = $("#odesign-megamenu").data('expand-icon');
var collapseIcon = $("#odesign-megamenu").data('collapse-icon');
hasChildTogglerIcon.addClass(expandIcon+" "+collapseIcon);
hasChildToggler.on("click", function(){
	$(this).find("i").toggleClass(expandIcon);
	$("#odesign-megamenu .main-menu ul li:hover .dropdown-inner").slideToggle();
	$("#odesign-megamenu .main-menu ul li:hover").toggleClass("active");
});

});
});