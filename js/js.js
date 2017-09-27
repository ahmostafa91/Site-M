/*global $*/

$(function () {
    
    'use strict';
    
    // scroll top
    
    var scroll = $('#scroll');
    
    $(window).scroll(function () {
        
        
        if ($(this).scrollTop() >= 500) {
            
            scroll.fadeIn(800);
            
        } else {
            
            scroll.fadeOut(800);
        }
        
    });
    
    $('#scroll').click(function () {
        
        $('html, body').animate({scrollTop: 0}, 1000);
        
    });
});