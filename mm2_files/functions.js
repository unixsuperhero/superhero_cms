/*
jQuery.noConflict();
jQuery('#mainbannerholder_sec')
.after('<div id="mainbanner_itemlist">')
.cycle({
fx: 'scrollLeft',
timeout: 5000,
delay: -1000,
pause: 1,
fit: 1,
width: '960px',
height: '300px',
pager: '#mainbanner_itemlist'
});
*/

$(function() {
    
    $('#mainbannerholder_sec').after('<div id="mainbanner_itemlist">').cycle({
    	fx: 'scrollLeft',
    	timeout: 5000,
    	delay: -1000,
    	pause: 1,
    	fit: 1,
    	width: '960px',
    	height: '300px',
        pager:  '#mainbanner_itemlist'
    });
});