(function($){

    //메뉴버튼
    $(".hem_menu .hem").click(function(){
        $(".menu").toggleClass("show")
    });

    $(".tep_menu li").click(function(){
        $(".menu").toggleClass("show")
    });

    //안경 애니메이션
    const contentWrap = $(".about").height();
    $("body").css("height", contentWrap);
    const scrollHeight = $(window).height();
    let lastScrollTop = 0;

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        clearTimeout($.data(this, "scrollCheck"));

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

    //스크롤
    window.addEventListener("scroll", ()=>{
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;

        document.querySelector(".scroll").innerHTML = parseInt(scrollTop);
    });


    //커리어 바 이동
    $(function () {
        $(".work_drag").draggable({
            containment : 'parent',
            axis: 'x',
            
            drag: function(){
                let career = 23 + 2;
                career++;
                
                console.log(career)

                $(".work_drag span").text(career);
            }
            
            
        });
    });


    /* 코드 뷰 */
    for(let i=1; i<=3; i++){
        $(".project_frame .code_bt" + i).click(function(){
            $(".site_view" + i).toggleClass("show");
        })
    }


    /* 애니메이션 뷰 */
   for(let i=1; i<=6; i++){
        $(".animabt" + i ).click(function(){
            $(".anima" + i).css("display","block");
        })
    }
    
})(jQuery);
