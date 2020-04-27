var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
if (isMobile) 
{
    $(document).ready(function(){
        'use strict';
        $('.text').css({
            'font-size':'60px',
            'width':'100%'
        });
        $('.clock').css({
            'width': '60vw',
            'height': '60vw',
            'margin-left': '20vw',
            'margin-right': '20vw'
        });
    });
}
/*
else 
{
	$(document).ready(function(){
        'use strict';
        $('.text').css({
            'font-size':'60px',
            'width':'100%'
        });
        $('.clock').css({
            'width': '60vmin',
            'height': '60vmin',
            'margin-left': '20vmin',
            'margin-right': '20vmin'
        });
    });
}*/
