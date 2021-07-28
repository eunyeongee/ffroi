$(document).ready(function () {

    
    $('#s1').find('.act').addClass('active');
    
    //윈도우 화면의 높이값을 winh변수에 저장
    var winh = $(window).height();
    
    //section의 높이값을 윈도우 화면과 같게 설정
    $('section').css('height', winh);
    
    /*$('footer').css('height',winh);*/
    
    $('#s1').css('height', winh);

    // window.onbeforeunload = function () {

    //section의 자식 객체div를 찾아서 active에 추가하기
    //$("#s1").find('div').addClass('active');

    //}







    //window에 스크롤 이벤트 설정
    $(window).scroll(function () {

        //윈도우 화면 맨 윗 부분 위치값
        var scrollTop = $(window).scrollTop();

        //header 영역이 화면 영역보다 위로 이동할때 active 설정
        if (scrollTop > 0) {
            $('header').addClass('active');

        }
        //그렇지 않으면 header의 active 제거
        else {
            $('header').removeClass('active');

        }
        //컨텐츠 애니메이션
        var section = $('section');

        //section영역을 section변수에 저장
        section.each(function () {
            //현재 section의 id속성값을 변수에 저장
            var secId = $(this).attr('id');

            //section의 처음 시작 부분의 위치값을 divTop변수에 저장
            var divTop = $(this).offset().top;
            //만약 윈도우의 top위치값 보다 section의 top-100값이 작아지면 
            if (scrollTop > divTop - 100) {

                //section의 자식 객체div를 찾아서 active에 추가하기
                $(this).find('div').addClass('active');

                $('nav ul li a').removeClass('active');
                $('nav ul li').find('a[href="#' + secId + '"]').addClass('active');


            }
        });


    });



    //슬라이드(section#s2 .area .t_box)
    $(".slider .slide").hide();
    $(".slider .slide.slide1").show();


    //prev, next btn append
    $(".slider").prepend("<button class='btn prev' href='javascript:;'></button>"); //prev 버튼 추가

    $(".slider").append("<button class='btn next' href='javascript:;'></button>"); //next 버튼 추가

    //slide action
    var sn = 0; //슬라이드 넘버
    var slide_len = $(".slide").length; //슬라이드의 갯수

    $(".slider .slide").eq(0).fadeIn(); //첫번째 슬라이드 표시
    $(".slider .next").click(function () { //next버튼 눌렀을 때
        sn++;
        slide_move();
    });
    $(".slider .prev").click(function () { //prev버튼 눌렀을 때
        sn--;
        slide_move();
    });

    function slide_move() {
        if (sn >= slide_len) { //슬라이드 최대 수를 제어
            sn = 0;
        } else if (sn < 0) { //슬라이드 최저 수를 제어
            sn = slide_len - 1;
        }
        $(".slider .slide").fadeOut('5000'); //모든 슬라이드 fade out
        $(".slider .slide").eq(sn).fadeIn('5000'); //번호에 맞는 슬라이드 fade in
    }

    // auto play
    var autoplay = null;
    autoplay = setInterval(slide_auto, 5000); //슬라이드에 오토 걸기
    function slide_auto() {
        sn++;
        slide_move();
        //setTimeout(slide_auto, 3000);
    }


    //click 이벤트
    $('header nav ul li a').click(function (e) {
        e.preventDefault();
        $('header nav ul li a').removeClass('active');
        $(this).addClass('active');

        var navAttr = $(this).attr('href');
        $('html,body').animate({
            'scrollTop': $(navAttr).offset().top
        });

    });



});
