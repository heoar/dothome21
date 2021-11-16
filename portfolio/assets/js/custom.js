(function($){

    //메뉴버튼
    $(".hem_menu ul > li:first-child").click(function(){
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

    //스터디 슬라이드
    let slider = document.querySelector(".study");
    let innerSlider = document.querySelector(".slider-inner");
    let pressed = false;
    let startx;
    let x;

    slider.addEventListener("mousedown", e => {
    pressed = true
    startx = e.offsetX - innerSlider.offsetLeft
    slider.style.cursor = "grabbing"
    })

    slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab"
    })

    slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab"
    })

    //마우스를 놓으면 슬라이드 정지
    window.addEventListener("mouseup", () => {
    pressed = false
    })

    slider.addEventListener("mousemove", e => {
    if (!pressed) return
    e.preventDefault()
    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`
    checkboundary()
    })

    //오른쪽으로 슬라이드 방지
    function checkboundary() {
    let outer = slider.getBoundingClientRect()
    let inner = innerSlider.getBoundingClientRect()

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px"
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
        }
    }

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

    //성격 이미지 3d
    $(window).mousemove(function(e){
        let pageX = e.pageX;
        let pageY = e.pageY;

        //전체 가로값 => 기준점 중앙으로 변경
        let standardX = $(window).width()/2 - pageX;
        let standardY = $(window).height()/2 - pageY;

        //최솟값 -50 최댓값은 50 설정
        let maxX = Math.max(-100, Math.min(100, standardX));
        let maxY = Math.max(-100, Math.min(100, standardY));

        //각도를 줄이는 설정
        let angleX = maxX * 0.12;
        let angleY = maxY * 0.12;

        //부드럽게 설정
        let softX = 0;
        let softY = 0;

        softX += (angleX - softX) * 0.7;
        softY += (angleY - softY) * 0.7;

        //이미지
        $(".img_box img:nth-child(1)").css({"transform": "translate(0%, 0%) perspective(500px) rotateX("+ softY +"deg) rotateY("+ -softX * 1 +"deg)"});
        $(".img_box img:nth-child(2)").css({"transform": "translate(0%, 0%) perspective(500px) rotateX("+ softY +"deg) rotateY("+ -softX * 2 +"deg)"});
        $(".img_box img:nth-child(3)").css({"transform": "translate(0%, -1%) perspective(500px) rotateX("+ softY +"deg) rotateY("+ -softX * 1 +"deg)"});
        $(".img_box img:nth-child(4)").css({"transform": "translate(0%, 3%) perspective(500px) rotateX("+ softY +"deg) rotateY("+ -softX * 1 +"deg)"});

    });

    /* 코드 뷰 */
    $(".project_frame .code_bt").click(function(){
       var $this = $(".site_view");
       if($this.hide()){

       } else {
        $(".site_view").show();
       }
    });


    /* 애니메이션 뷰 */
   
    
})(jQuery);
