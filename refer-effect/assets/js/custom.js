
//code
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});

//code tab menu(HTML/CSS/javascript)소스보기도 동일하게 적용시켜보기
const Vtite = document.querySelectorAll(".view-title ul li");
const Vcont = document.querySelectorAll(".view-cont > div");

Vtite.forEach((element, index)=>{
    element.addEventListener("click", function(){
        Vtite.forEach( el => {
            el.classList.remove("active");
        });
        element.classList.add("actve");

        Vcont.forEach( el =>{
            el.style.display="none";
        });
        Vcont[index].style.display = "block";
    });
});


//소스보기 틀&버튼(01)
document.querySelector(".bottom button").addEventListener("click",function(){
    document.querySelector("#example").classList.add("show");
    document.querySelector("#example").classList.remove("hide");
});

document.querySelector(".example-cont button").addEventListener("click",function(){
    document.querySelector("#example").classList.add("hide");
});


