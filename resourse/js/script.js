$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
    $('.right__menu').toggleClass('a');
    $('.wrap').toggleClass('b');
  });

  $('.r-close').on('click', function(e) {
    $('.right__menu').toggleClass('a');
    $('.wrap').toggleClass('b');
  });


  $('.m-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('m-btn_ac');
    $('.m').toggleClass('m_ac');
  });


  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 230){
      document.getElementById('section').style.display = "flex";
    }
    else {
      document.getElementById('section').style.display = "none";
    }


    var scrolledUp = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 230){
      document.getElementById('up-btn').style.display = "flex";
    }
    else {
      document.getElementById('up-btn').style.display = "none";
    }
  }


  function ScrollUp(){
    var t,s;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=15);else clearInterval(t)},5);
}

  function view() {
    document.getElementById('r-close').style.display = "block";
  }


  function phT1(){
    var elm = document.getElementById("ph");
    elm.classList.remove("ph");

    var elm_i = document.getElementById("ph-i1");
    elm_i.classList.add("ph__ac");

    document.getElementById("ph__text1").style.display = "inline";
  }
  function phT2(){
    var elm = document.getElementById("ph");
    elm.classList.remove("ph");

    var elm_i = document.getElementById("ph-i2");
    elm_i.classList.add("ph__ac");

     document.getElementById("ph__text2").style.display = "inline";
  }
  function phT3(){
    var elm = document.getElementById("ph");
    elm.classList.remove("ph");

    var elm_i = document.getElementById("ph-i3");
    elm_i.classList.add("ph__ac");

     document.getElementById("ph__text3").style.display = "inline";
  }
  function phT4(){
    var elm = document.getElementById("ph");
    elm.classList.remove("ph");

    var elm_i = document.getElementById("ph-i4");
    elm_i.classList.add("ph__ac");

     document.getElementById("ph__text4").style.display = "inline";
  }
  function phT5(){
    var elm = document.getElementById("ph");
    elm.classList.remove("ph");

    var elm_i = document.getElementById("ph-i5");
    elm_i.classList.add("ph__ac");

     document.getElementById("ph__text5").style.display = "inline";
  }
  function phT6(){
    var elm = document.getElementById("ph");
    elm.classList.remove("ph");

    var elm_i = document.getElementById("ph-i6");
    elm_i.classList.add("ph__ac");

     document.getElementById("ph__text6").style.display = "inline";
  }
  function phT7(){
    var elm = document.getElementById("ph");
    elm.classList.remove("ph");

    var elm_i = document.getElementById("ph-i7");
    elm_i.classList.add("ph__ac");

     document.getElementById("ph__text7").style.display = "inline";
  }