
/* 
 * Theme: Ghex
 * Author: marblehouse.es
 * Version: 0.3
 * 
 */


 (function ($) {
 	"use strict";

 	$(document).ready(function(){

        switch(ThemeOptions.background_type){
            case 'cover':
            $('body').css('background-size','cover');
            break;

        }

        $('body').css('background-color',ThemeOptions.background_color);
        $('.hex_background').css('background-color',ThemeOptions.hex_background);

        if(!ThemeOptions.show_blog_title){
            $('.blog-title').toggle();
        }

        if(!ThemeOptions.show_blog_description){
            $('.blog-description').toggle();
        }


        if(ThemeOptions.staticPages.enabled)
        {

            $.each( ThemeOptions.staticPages.pages, function(k,j){
                $('.head_pages ul').append('<li><a href="'+j.url+'" >'+j.title+'</a></li>');

            });
        }

        if(ThemeOptions.socialAccounts.enabled)
        {

            $.each( ThemeOptions.socialAccounts.accounts, function(k,j){
                $('.head_social ul').append('<li><a href="'+j.url+'" target="_blank"><span class="icon-social" style="display: inline;">'+j.icon+'</span></a></li>');

            });

            switch(ThemeOptions.socialAccounts.position){
                case 'top':
                $('#social_up').toggle();
                break;

                case 'bottom':
                $('#social_down').toggle();
                break;
            } 

        }


        $('.full_post').fitVids()
        $('.hex_post').hover(function() { 
        	$('.cover',this).fadeOut(); 
        }, function() { 
        	$('.cover',this).fadeIn(); 
        });


        $('#posts iframe').each(function() {
         var video = $(this);
         var parent = $(this).parent();
         var vidSrc = "";
         vidSrc = video.attr('src');

         if (vidSrc.indexOf('youtube.com') > -1) {
            $(this).remove();
            var id = vidSrc.split('/')[4];

            if (id){
              parent.html("<img src='http://img.youtube.com/vi/"+id+"/0.jpg' />");
          }
      }
      else if (vidSrc.indexOf('vimeo.com') > -1) {
        $(this).remove();
        var id = vidSrc.split('/')[4];

        $.ajax({
         url: 'http://vimeo.com/api/v2/video/' + id + '.json',
         dataType: 'jsonp',
         success: function(data) {
             parent.html("<img src='"+data[0].thumbnail_large+"' />");
         }
     });

    }  else if (vidSrc.indexOf('soundcloud.com') > -1) {
        $(this).remove();

        var soundCloundReg = /soundcloud.com\/tracks\/(\d+)/;
        var match = vidSrc.match(soundCloundReg);
        var id = match[1];
        if (id) {
            var clientID = '849aa50b8899e097dc78de1486686cc1';
            $.getJSON('http://api.soundcloud.com/tracks/'+ id +'.json?client_id='+clientID, function(data) {
                var thumbnailURL = data['artwork_url'];
                if (thumbnailURL) {
                    var thumbnail_500 = thumbnailURL.replace('-large.jpg', '-t300x300.jpg');
                    parent.html("<img src='"+thumbnail_500+"' />");

                    } else {
                        
                    var avatarURL = data['user']['avatar_url'];
                    
                    if (avatarURL) {
                        var avatar_500 = avatarURL.replace('-large.jpg', '-t500x500.jpg');
                        parent.html("<img src='"+avatar_500+"' />");
                        }
                                
                    }

            });
        }
    }

    else{

       $(this).remove();

   }


});


    });

}(jQuery));