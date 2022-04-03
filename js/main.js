$(document).ready(function(){
 
    $('.navbar .btn-1').click(function(e){
        e.preventDefault();
        $('main.section-1').addClass('active');
        $('main.section-2').removeClass('active');
        $('.navbar .btn-1').addClass('active');
        $('.navbar .btn-2').removeClass('active');
    });

    $('.navbar .btn-2').click(function(e){
        e.preventDefault();
        $('main.section-2').addClass('active');
        $('main.section-1').removeClass('active');
        $('.navbar .btn-2').addClass('active');
        $('.navbar .btn-1').removeClass('active');
    });
  
});
