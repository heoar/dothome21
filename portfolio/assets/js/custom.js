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

    //code
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    });

    // const Vtite = document.querySelectorAll(".view-title ul li");
    // const Vcont = document.querySelectorAll(".view-cont > div");

    // Vtite.forEach((element, index)=>{
    //     element.addEventListener("click", function(){
    //         Vtite.forEach( el => {
    //             el.classList.remove("active");
    //         });
    //         element.classList.add("active");

    //         Vcont.forEach( el =>{
    //             el.style.display="none";
    //         });
    //         Vcont[index].style.display = "block";
    //     });
    // });

    const Vtite1 = $(".code_view1 .view-title ul li");
    const Vcont1 = $(".code_view1 .view-cont > div");

    Vtite1.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            Vcont1.css("display","none");
            Vcont1.eq(index).css("display","block");
        })
    })

    const Vtite2 = $(".code_view2 .view-title ul li");
    const Vcont2 = $(".code_view2 .view-cont > div");

    Vtite2.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            Vcont2.css("display","none");
            Vcont2.eq(index).css("display","block");
        })
    })

    const Vtite3 = $(".code_view3 .view-title ul li");
    const Vcont3 = $(".code_view3 .view-cont > div");

    Vtite3.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            Vcont3.css("display","none");
            Vcont3.eq(index).css("display","block");
        })
    })


    /* 애니메이션 뷰 */
    // for(let i=1; i<=8; i++){
    //     $(".animabt" + i ).click(function(){
    //         $(".animabt" + i ).addClass("active").siblings().removeClass("active");
    //     })
    // }

    const animabt = $(".show_bt > div");
    const animaVi = $(".anima_img > div");

    animabt.each(function(index,item){
        $(this).click(function(){
            // Vtite.removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");

            animaVi.css("display","none");
            animaVi.eq(index).css("display","block");
        })
    })
    
})(jQuery);
