// ==UserScript==
// @name		KissCartoon Search for Bookmarks
// @version		1.0
// @downloadURL	https://github.com/svArtist/blargh.user.js
// @namespace	KissCartoon
// @author		Benjamin Philipp <benjamin_philipp [at - please don't spam] gmx.de>
// @description	For Bookmarkable Searches on KissCartoon
// @include		http://kisscartoon.se/?s=*
// @require 	http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @run-at		document-head
// ==/UserScript==

var strid = "?s=";
var ix = window.location.href.indexOf(strid);
if(ix<=0)
	return;

function doSearch(){
	var searchterm = decodeURIComponent(window.location.href.substr(window.location.href.indexOf(strid) + strid.length));
	// console.log("Found search box, entering " + searchterm);
	$("input#keyword").val(searchterm);
	$("form#formSearch").attr("action", "/Search/Cartoon");
	$("form#formSearch").submit();
}

function whenReady(){
	if($("input#keyword").length<=0){
		setTimeout(whenReady, 1000);
		return;
	}
	doSearch();
}

whenReady();
