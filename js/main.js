$(window).on('scroll',function(){
    if($(window).scrollTop()){  
        $('header').addClass('white')
    }else{
        $('header').removeClass('active')
    }
})