//owl
$(document).ready(function() {
  var startItem = $('.owl-item').length - 1;

  $(".gxc-section-tab .owl-carousel").owlCarousel({
    //items: 10,
    loop: false,
    nav: true,
    dots: false,
    autoWidth: true,
    autoplay: false,
    autoplayTimeout: 1000,
    responsive: {
      0: {
          items: 3,
      },768 : {
          items: 6,
      }
    },
    

  });

  $(".re.gxc-section-tab .owl-carousel").trigger('to.owl.carousel', 7);
  
  $("#pageTabArea").owlCarousel({
    //items: 10,
    loop: false,
    nav: true,
    dots: false,
    autoWidth: true,
    autoplay: false,
    autoplayTimeout: 1000,
    responsive: {
      0: {
          items: 3,
      },768 : {
          items: 6,
      }
    },
  });
  $(".page-tab.re #pageTabArea").trigger('to.owl.carousel', 8);

  $("#icon_c").owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    dots: false,
    margin: 35,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
          items: 1,
          slideBy: 1,
      },768 : {
        items: 2,
        slideBy: 2,
      },991.98 : {
        items: 3,
        slideBy: 3,
      },1024 : {
        items: 4,
        slideBy: 4,
      }
    },
  });

  $("#icon_c_2").owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    dots: false,
    margin: 35,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
          items: 1,
          slideBy: 1,
      },768 : {
        items: 2,
        slideBy: 2,
      },991.98 : {
        items: 3,
        slideBy: 3,
      },1024 : {
        items: 4,
        slideBy: 4,
      }
    },
  });

});

//gxc-solution 
$(document).ready(function () {

  $("#gxc-solution").change(function(){
  var solutionSelect = $("#gxc-solution").find(":selected").val();

  console.log(solutionSelect);

  if( solutionSelect == 1 ){
    //title
    $("#gxc-solu-title-1").addClass("gxc-solu-title-display");
    $("#gxc-solu-title-2").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-3").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-4").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-5").removeClass("gxc-solu-title-display");
    //content
    $("#gxc-solution-1").addClass("solution-display");
    $("#gxc-solution-2").removeClass("solution-display");
    $("#gxc-solution-3").removeClass("solution-display");
    $("#gxc-solution-4").removeClass("solution-display");
    $("#gxc-solution-5").removeClass("solution-display");
  }else if(solutionSelect == 2){
    //title
    $("#gxc-solu-title-2").addClass("gxc-solu-title-display");
    $("#gxc-solu-title-1").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-3").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-4").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-5").removeClass("gxc-solu-title-display");
    //content
    $("#gxc-solution-2").addClass("solution-display");
    $("#gxc-solution-1").removeClass("solution-display");
    $("#gxc-solution-3").removeClass("solution-display");
    $("#gxc-solution-4").removeClass("solution-display");
    $("#gxc-solution-5").removeClass("solution-display");
  }else if(solutionSelect == 3){
    //title
    $("#gxc-solu-title-3").addClass("gxc-solu-title-display");
    $("#gxc-solu-title-1").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-2").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-4").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-5").removeClass("gxc-solu-title-display");
    //content
    $("#gxc-solution-3").addClass("solution-display");
    $("#gxc-solution-1").removeClass("solution-display");
    $("#gxc-solution-2").removeClass("solution-display");
    $("#gxc-solution-4").removeClass("solution-display");
    $("#gxc-solution-5").removeClass("solution-display");
  }else if(solutionSelect == 4){
    //title
    $("#gxc-solu-title-4").addClass("gxc-solu-title-display");
    $("#gxc-solu-title-1").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-2").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-3").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-5").removeClass("gxc-solu-title-display");
    //content
    $("#gxc-solution-4").addClass("solution-display");
    $("#gxc-solution-1").removeClass("solution-display");
    $("#gxc-solution-2").removeClass("solution-display");
    $("#gxc-solution-3").removeClass("solution-display");
    $("#gxc-solution-5").removeClass("solution-display");
  }else if(solutionSelect == 5){
    //title
    $("#gxc-solu-title-5").addClass("gxc-solu-title-display");
    $("#gxc-solu-title-1").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-2").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-3").removeClass("gxc-solu-title-display");
    $("#gxc-solu-title-4").removeClass("gxc-solu-title-display");
    //content
    $("#gxc-solution-5").addClass("solution-display");
    $("#gxc-solution-1").removeClass("solution-display");
    $("#gxc-solution-2").removeClass("solution-display");
    $("#gxc-solution-3").removeClass("solution-display");
    $("#gxc-solution-4").removeClass("solution-display");
  }

});

});

/* page-tab inpage href control */
$(document).ready(function () {
  var hash = location.hash;
  var href = location.href;
  var tab = $('#page-tab a');
	var con = $('.tab-content .tab-pane');
  var firstTab = $('#page-tab #p0 a');
  var count = 0;

  $( window ).on( 'hashchange', function( e ) {
    window.location.reload();
    for(var i=0;i<con.length;i++){
      var mm = con[i];
      var selectCon = "#"+ $(mm).attr('id');
        if(location.hash == selectCon){
          console.log (selectCon);
          count = count + 1;
          console.log (count);
          tab.siblings().removeClass('active');
          con.siblings().removeClass('active');
          firstTab.removeClass('active');
          $(tab[i]).addClass('active');
          $(con[i]).addClass('active');
          $('html,body').animate({scrollTop:0}, 333);
        }
    }
    

  } );

  $("#page-tab a").click(function(){
    location.path = location.path;
    
    //window.history.go(count);
    //window.history.pushState(null, null, "index.html")
  });



});


/* page-tab href control */
$(document).ready(function () {
  var hash = location.hash;
	var tab = $('#page-tab a');
	var con = $('.tab-content .tab-pane');
  var firstTab = $('#page-tab #p0 a');
	for(var i=0;i<con.length;i++){
		var mm = con[i];
    var selectCon = "#"+ $(mm).attr('id');
      if(hash == selectCon){
        tab.siblings().removeClass('active');
        con.siblings().removeClass('active');
        firstTab.removeClass('active');
        $(tab[i]).addClass('active');
        $(con[i]).addClass('active');
      }
  }
});


/* sd-wan href control */
$(document).ready(function () {
  var hash = location.hash;
	var tab = $('.solution a');
	var con = $('.tab-content .tab-pane');
  var firstTab = $('#sd-tab #M1 a');
	for(var i=0;i<con.length;i++){
		var mm = con[i];
		var selectCon = "#"+ $(mm).attr('id');
		if(hash == selectCon){
			tab.siblings().removeClass('active');
			con.siblings().removeClass('active');
      firstTab.removeClass('active');
			$(tab[i]).addClass('active');
      $(con[i]).addClass('active');
      $('html,body').animate({scrollTop: 0}, 0);
      
		}
	}
});


/* price owl-carousel Control */
$(document).ready(function () {

    $(".card_e .owl-carousel").owlCarousel({
      items: 3,
      loop: false,
      nav: false,
      dots: true,
      responsive: {
        0: {
            items: 1
        },768 : {
          items: 3
        }
      },
      autoplay: false,
      autoplayTimeout: 1000,
      navContainer: '.custom-nav-1',
      navText: [
            '',
            ''
          ],

    });


    $("#no-nav .owl-carousel").owlCarousel({
      items: 5,
      margin: 25,
      autoWidth: true,
    });

    $("#price .owl-carousel").owlCarousel({
      items: 5,
      margin: 25,
      autoWidth: true,
      navContainer: '.custom-nav',
      navText: [
        '',
        ''
      ],
  });
});

/* navbar mobile */
$(document).ready(function(){
  
    var menu = $(".navbar-nav");
    var hamburger = $(".navbar-toggler");
    var navbg = $(".nav-bg");
    var close = $(".nav-close");
    var overscrolly = $("body");
    var login = $("#nav-login");
    var menuOpen;
    
    function openMenu(){
      menu.css("left", "0px");
      navbg.css("display", "block");
      overscrolly.css("overflow","hidden")
      login.removeClass("button");
      menuOpen = true;
    }
    
    function closeMenu(){
      menu.css("left", "-320px");
      navbg.css("display", "none");
      overscrolly.css("overflow","scroll")
      menuOpen = false;
    }
    
    function toggleMenu(){
      if (menuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }
        close.on({
            click: function(){
            toggleMenu();
            }
        });

        hamburger.on({
            click: function(){
            toggleMenu();
            }
        })
  
  });

/* dropdown nav mobile */
$(document).ready(function(){

  var active = false;
  var navbardrop = $("#sd-navbardrop")
  var icon = $(".dropdown-icon")
  var icon_active = $(".active .dropdown-icon")

      function openDrop(){
      
        navbardrop.addClass("active");
        active = true;
      }
    
      function closeDrop(){
        navbardrop.removeClass("active");
        active = false;
      }
    
    function toggleDrop(){
      if (active) {
        closeDrop();
      } else {
        openDrop();
      }
    }
        icon.on({
            click: function(){
            toggleDrop();
            }
        });
  });


/* card_a mobile */
$(document).ready(function(){
  
    $(".card_e .img-card").mouseenter(function(){
        // $(".img-card:hover .card-text_a_e p").removeClass("ellipsis");
        $(".img-card:hover .card-text_a_e p").css("-webkit-line-clamp","2");
      });

    $(".card_e .img-card").mouseleave(function(){
        // $(".img-card .card-text_a_e p").addClass("ellipsis");
        $(".img-card .card-text_a_e p").css("-webkit-line-clamp","1");
      });

    
});

/* card_a mobile */
$(document).ready(function(){
  
    $(".card_a .img-card").mouseenter(function(){
        $(".img-card:hover p").css("-webkit-line-clamp","10");
      });

    $(".card_a .img-card").mouseleave(function(){
        $("p").css("-webkit-line-clamp","2");
      });

    
});

/* solution tab fixed */
$(document).ready(function(){
    var tab=$(".section-tab"); 
    var win=$(window); 
    var sc=$(document);
    var header=$(".header-bg"); 
    var img=$(".change");

    win.scroll(function(){  

      if (win.width()>600 && win.scrollTop()>=100) {
        header.addClass("navbar-scrolled");
        img.attr("src","../img/header/GXC_colors.svg");

      } else {
        header.removeClass("navbar-scrolled");
        img.attr("src","../img/header/GXC_white.svg");

      }
    })

})

$(document).ready(function(){
    var tab=$(".section-tab"); 
    var win=$(window); 
    var sc=$(document);

     win.scroll(function(){  
      if(win.width()<=500 && sc.scrollTop()>=401){  
        tab.addClass("fixednav");   
      }else{  
       tab.removeClass("fixednav" );  
      }

  });

   var link_demo = $('.link_demo a');
   var imgOrSvg = link_demo.find('img, svg');

    if (imgOrSvg.length > 0) {
      imgOrSvg.remove();

      link_demo.append('<img src="./img/in_icon.png">');
    }


})

$(document).ready(function(){

  $('.aws-section a').click(function() {

      var target = $(this.hash);

      $('html,body').animate({

          scrollTop: target.offset().top

      }, 1000);

      return false;

  });


  
});

/* 1028 Modally */
$(document).ready(function() {
  if($('#modal-contact-us').length) {
    $('#modal-contact-us').modally();
  }
});

// 0818 

let linkHref
function getHref(obh) {
  linkHref = obh.getAttribute("href");
  console.log(linkHref)
  console.log(window.location.hash)
  if(window.location.hash == linkHref){
    window.location.reload(true);
    linkHref=''
    console.log('reload')
  }
}
 

