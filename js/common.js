$(document).ready(function(){
//popup
$('.popup_close').click(function(){
   $('.popup').slideUp();
});



$('.depth2,.depth2_bg').hide();

$('.gnb > li').mouseenter(function(){
    $(this).find('.depth2').stop().fadeIn();
    $('.depth2_bg').stop().fadeIn()
})

$('.gnb > li').mouseleave(function(){
    $(this).find('.depth2').stop().fadeOut();
    $('.depth2_bg').stop().fadeOut()
})

//sitemap
//hide 시키고 클릭 했을떄 나오면서 햄버가 나오ㅔ
$('.sitpmap').hide()
// 버튼 사이트맵을 클릭했을때 사이트맵이 보이게
$('.btn_sitemap').click(function(){
$('.sitpmap').fadeIn()
})

$('.sitemap_close').click(function(){
    $('.sitpmap').fadeOut()
    })

    $('.btn_ham').hide()
// 버튼 사이트맵을 클릭했을때 사이트맵이 보이게
$('.btn_ham').click(function(){
$('.sitpmap').fadeIn()
})

$('.sitemap_close').click(function(){
    $('.sitpmap').fadeOut()
    })

    //lang
    $('.lang ul').hide();
    $('.lang').click(function(){
        $('.lang ul').slideToggle();
    });
   //mgnb
   $('.mdepth2').hide();
   $('.mgnb > li').click(function(){
    $(this).find('.mdepth2').stop().slideDown();
    $(this).siblings().find('.mdepth2').stop().slideUp();
    return false;//a태그 링크 안되게 하는법
     });
     //모바일 닫기
     $('.mgnb_wrap').hide();
     $('.mgnb_close').click(function(){

     })



});