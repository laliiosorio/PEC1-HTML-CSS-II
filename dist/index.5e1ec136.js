console.log("Hello, UOC!"),window.onscroll=function(){window.scrollY>window.innerHeight?document.getElementById("navbar").style.backgroundColor="#8d301f":document.getElementById("navbar").style.backgroundColor="transparent"};const e=document.querySelector(".progress"),n=new Swiper(".swiper",{loop:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});e.addEventListener("animationend",(function(){n.slideNext(),e.style.animation="none",e.offsetWidth,e.style.animation=null})),n.on("slideChange",(function(){e.style.animation="none",e.offsetWidth,e.style.animation=null,e.style.animationPlayState="paused"})),document.querySelectorAll(".swiper, .carousel-progress").forEach((n=>{n.addEventListener("mouseenter",(function(){e.style.animationPlayState="paused"}))})),document.querySelectorAll(".swiper, .carousel-progress").forEach((n=>{n.addEventListener("mouseleave",(function(){e.style.animationPlayState="running"}))}));