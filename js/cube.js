;(function($){

    var $face = $('.face');
    var $radioBtn = $('input[type="radio"]');
    var colorAdd = '.' + $radioBtn.eq().val();
    var $label = $('label');
    var n = 0;

    function colorAddFn(){
        
        $face.stop().animate({opacity:.2},0);
        $face.eq(n).stop().animate({opacity:.2},0).animate({opacity:1},2000);
    }
    colorAddFn;
    setTimeout(colorAddFn,100);

    $radioBtn.each(function(idx){
        $(this).on({
            click:function(){
                
                n= idx;
                
                $radioBtn.removeClass('addBtn');
                $(this).addClass('addBtn');

                $label.removeClass('addBtn');
                $label.eq(idx).addClass('addBtn');

                colorAddFn();
            }
        })
    });

})(jQuery);