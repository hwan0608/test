$(document).ready(function () {
    const mb = new Swiper('.mb', {
        speed: 1000, // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        
        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },

    });


     //prd list
     const prd_list = new Swiper('.prd_list', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        slidesPerView : '2',  // 한 슬라이드에 보여줄 갯수
         spaceBetween : 50,  // 슬라이드 사이 여백
         scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
          },

        breakpoints: {
            768: {  // 가로해상도가 640px 이상일 경우
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {  // 가로해상도가 768px 이상일 경우
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1400: {  // 가로해상도가 1024px 이상일 경우
              slidesPerView: 6,
              spaceBetween: 50,
            },
          },
         
     });
      //new list slide
    const news_list = new Swiper('.news_list', {
        speed: 1000, // 슬라이드 동작 속도
        direction: 'vertical',  // 수직 슬라이드
        loop: true,  // 슬라이드 반복 여부
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        });
    $('.btn_play').hide();

    $('.btn_pause').click(function () {
        mb.autoplay.stop();
        $('.btn_pause').hide();
        $('.btn_play').show();
    });


    $('.btn_play').click(function () {
        mb.autoplay.start();
        $('.btn_play').hide();
        $('.btn_pause').show();
    });

    //teaware
    //$('.tab li:nth-child(1)').addClass('active');
    $('.tab li').eq(0).addClass('active');
    $('.tab_img img:nth-child(n+2)').hide();

    //tab li를 클릭했을떄 
    //클릭한 번호는 찾아서 
    //.tab_img img중 클릭한 번호와 일치하는 것을 보여라
    $('.tab li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
        var indexNum = $(this).index();
        $('.tab_img img').eq(indexNum).fadeIn().siblings().fadeOut();
    });
   
    // $('.tab li:nth-child(1)').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //   $('.tab_img img:nth-child(1)').animate({
    //     opacity: '1'
    //   });
    //   $('.tab_img img:nth-child(1)').siblings().animate({
    //     opacity: '0'
    //   });
    // });

    // $('.tab li:nth-child(2)').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.tab_img img:nth-child(2)').animate({
    //       opacity: '1'
    //     });
    //     $('.tab_img img:nth-child(2)').siblings().animate({
    //         opacity: '0'
    //       });
    //   });

    //   $('.tab li:nth-child(3)').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.tab_img img:nth-child(3)').animate({
    //       opacity: '1'
    //     });
    //     $('.tab_img img:nth-child(3)').siblings().animate({
    //         opacity: '0'
    //       });
    //   });

    //   $('.tab li:nth-child(4)').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.tab_img img:nth-child(4)').animate({
    //       opacity: '1'
    //     });
    //     $('.tab_img img:nth-child(4)').siblings().animate({
    //         opacity: '0'
    //       });//nth 는 하이픈 - 사용 그리고 태그 점 확인
    //   });
      //musum
      //뮤지엄에 엔쓰차일드 1번을 애드 클래스 온을 하고
      //리스트 li 를 호버 했을때 이것을 온하고 
      $('.museum_list li:nth-child(1)').addClass('on');
      $('.museum_list li').mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on');
      });

      $('')



});//문서준비 이벤트