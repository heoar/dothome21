(function($){

    $(".hem_menu ul > li:first-child").click(function(){
        $(".menu").toggleClass("show")
    });

    const contentWrap = $(".about").height();
    $("body").css("height", contentWrap);
    const scrollHeight = $(window).height();
    let lastScrollTop = 0;

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();


        //셋 타임아웃 반대
        clearTimeout($.data(this, "scrollCheck"));

        //움직이지 않았을때
        $.data(this, "scrollCheck",setTimeout(function(){
            $(".glasses_bg").addClass("stop");
        }, 100))

        if( scrollTop > lastScrollTop ){
            $(".glasses_bg").removeClass("top");
            $(".glasses_bg").removeClass("stop");
            $(".glasses_bg").addClass("recoil");
        } else {
            $(".glasses_bg").removeClass("stop");
            $(".glasses_bg").addClass("top");
            $(".glasses_bg").addClass("recoil");
        }
        lastScrollTop = scrollTop;
    });

    window.addEventListener("scroll", ()=>{
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;

        document.querySelector(".scroll").innerHTML = parseInt(scrollTop);
    });

    $(function () {
        $( ".work_drag" ).draggable({
            containment : 'parent',
            axis: 'x',
            drag : function(){
                $(".career_img img:nth-child(2)").hide();
            }
        });
    });



})(jQuery);
